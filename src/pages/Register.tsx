import React, { useState } from 'react';
import Section from '../components/common/Section';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { textCategories } from '../data/categories';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const Register: React.FC = () => {
    const [searchParams] = useSearchParams();
    const initialCategory = searchParams.get('category') || '';

    const [formData, setFormData] = useState({
        fullName: '',
        age: '',
        gender: 'male',
        category: initialCategory,
        parentName: '',
        phone: '',
        email: '',
        address: '',
        transactionId: '', // New field for Payment Reference
        notes: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [showExample, setShowExample] = useState(false);

    // File Upload State
    const [paymentFile, setPaymentFile] = useState<{ base64: string, name: string, type: string } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];

            // Limit to 4MB to prevent timeouts
            if (file.size > 4 * 1024 * 1024) {
                alert("File is too large. Please upload an image smaller than 4MB.");
                e.target.value = '';
                return;
            }

            // Convert to Base64
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setPaymentFile({
                    base64: reader.result as string,
                    name: file.name,
                    type: file.type
                });
            };
            reader.onerror = () => {
                console.error("Error reading file");
                alert("Could not read file. Please try another image.");
            };
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        // Basic validation
        if (!formData.fullName || !formData.phone || !formData.category || !formData.transactionId) {
            setError('Please fill in all required fields including Payment Reference.');
            setIsSubmitting(false);
            return;
        }

        // Conditional validation for Parent Name (Required for under 18)
        const ageNum = parseInt(formData.age);
        const isMinor = isNaN(ageNum) || ageNum < 18;

        if (isMinor && !formData.parentName) {
            setError('Parent / Guardian Name is required for participants under 18.');
            setIsSubmitting(false);
            return;
        }

        // Validate Transaction ID format
        // User confirmed PayPal Transaction IDs are exactly 17 alphanumeric characters.
        const txnIdRegex = /^[A-Za-z0-9]{17}$/;
        if (!txnIdRegex.test(formData.transactionId.trim())) {
            setError('PayPal Transaction ID must be exactly 17 alphanumeric characters (e.g., 0FT064904K8018433).');
            setIsSubmitting(false);
            return;
        }

        try {
            // Send data to Google Sheet via Google Apps Script Web App
            // Updated with User's new deployment URL (Fixes getFolderById error)
            const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwySRsWz08jvKXah0L2RSltHN1ALhQ1Y3GNiIFhwnYHncyKBnWrQY1OPZTQB4Oeoj2u/exec";

            // Using fetch with 'no-cors' mode because Google Script doesn't support CORS easily for simple POSTs
            // This means we won't get a readable response, but the data will be sent.
            // For a robust implementation, we assume if no network error, it succeeded.
            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    // Send file if exists (remove 'data:image/png;base64,' prefix for pure base64 if needed by script, 
                    // but usually standard google script method can handle parsing or we send full string)
                    // We will send full string and parse in script.
                    paymentFile: paymentFile
                })
            });

            console.log('Form Submitted:', formData);
            setSubmitted(true);
            window.scrollTo(0, 0);
        } catch (err) {
            console.error("Error submitting form", err);
            setError('Something went wrong. Please try again or contact us directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <Section className="min-h-[80vh] flex items-center justify-center bg-cream relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 pointer-events-none"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230f5132' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}
                ></div>

                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="max-w-lg w-full relative z-10 mx-4"
                >
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 relative">
                        {/* Top Decorative Line */}
                        <div className="h-2 bg-[#0f5132] w-full"></div>

                        <div className="p-8 md:p-12 text-center">
                            {/* Animated Check Icon */}
                            <motion.div
                                initial={{ scale: 0, rotate: -45 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                                className="w-20 h-20 bg-[#0f5132]/10 rounded-full flex items-center justify-center mx-auto mb-6"
                            >
                                <svg className="w-10 h-10 text-[#0f5132]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </motion.div>

                            <h2 className="text-3xl font-serif font-bold text-[#0f5132] mb-2">Registration Successful</h2>
                            <p className="text-[#DAA520] font-medium tracking-wide uppercase text-xs mb-6">Alhamdulillah</p>

                            <p className="text-gray-600 mb-6 leading-relaxed">
                                JazakAllah Khair <strong className="text-gray-900">{formData.fullName}</strong>.
                                We have gratefully received your registration for the
                                <span className="block mt-1 font-semibold text-[#0f5132]">
                                    {textCategories.find(c => c.id === formData.category)?.title || 'Competition'}
                                </span>
                            </p>

                            <div className="bg-gray-50 rounded-lg p-4 mb-8 border border-gray-100">
                                <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-1">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    Confirmation sent to:
                                </div>
                                <p className="font-medium text-gray-900">{formData.email}</p>
                            </div>

                            <p className="text-sm text-gray-400 italic mb-8">
                                "May Allah bless you with success in this world and the Hereafter."
                            </p>

                            <div className="space-y-4">
                                <Button
                                    onClick={() => window.location.reload()}
                                    variant="outline"
                                    className="border-[#0f5132] text-[#0f5132] hover:bg-[#0f5132] hover:text-white w-full"
                                >
                                    Register Another Participant
                                </Button>

                                <div className="text-xs text-gray-400 mt-4">
                                    Questions? <a href="mailto:londonquranfest@gmail.com" className="text-[#0f5132] hover:underline">londonquranfest@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Section>
        );
    }

    return (
        <Section className="bg-cream min-h-screen py-12">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-3">Competition Registration</h1>
                    <p className="text-gray-600">Please fill out the form faithfully. All fields marked with * are required.</p>
                </div>

                <Card className="p-8 md:p-10 shadow-lg relative">
                    {/* Overlay for submission loading state */}
                    {isSubmitting && (
                        <div className="absolute inset-0 bg-white/70 z-10 flex items-center justify-center rounded-lg">
                            <div className="text-primary font-bold text-lg animate-pulse">Submitting...</div>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {error && <div className="bg-red-50 text-red-600 p-3 rounded text-center text-sm">{error}</div>}

                        {/* Personal Details */}
                        <div>
                            <h3 className="text-lg font-bold text-primary border-b border-gray-100 pb-2 mb-4">Participant Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        required
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                                        placeholder="Participant Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth / Age *</label>
                                    <input
                                        type="text"
                                        name="age"
                                        required
                                        value={formData.age}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                                        placeholder="e.g. 10 years old"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Gender *</label>
                                    <select
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                                    >
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Select Level *</label>
                                    <select
                                        name="category"
                                        required
                                        value={formData.category}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                                    >
                                        <option value="" disabled>-- Select Level --</option>
                                        {textCategories.map(cat => (
                                            <option key={cat.id} value={cat.id}>{cat.title} ({cat.ageLimit})</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Guardian & Contact */}
                        <div>
                            <h3 className="text-lg font-bold text-primary border-b border-gray-100 pb-2 mb-4 mt-2">Guardian & Contact</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Parent / Guardian Name {(!isNaN(parseInt(formData.age)) && parseInt(formData.age) >= 18) ? <span className="text-gray-400 font-normal">(Optional for 18+)</span> : '*'}
                                    </label>
                                    <input
                                        type="text"
                                        name="parentName"
                                        required={isNaN(parseInt(formData.age)) || parseInt(formData.age) < 18}
                                        value={formData.parentName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                                        placeholder={(!isNaN(parseInt(formData.age)) && parseInt(formData.age) >= 18) ? "Optional" : "Required for under 18"}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                                        placeholder="+44 7..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                                        placeholder="For confirmation"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Home Address / City *</label>
                                    <input
                                        type="text"
                                        name="address"
                                        required
                                        value={formData.address}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                                        placeholder="e.g. East London"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Payment Details */}
                        <div>
                            <h3 className="text-lg font-bold text-primary border-b border-gray-100 pb-2 mb-4 mt-2">Payment Verification</h3>
                            <div className="bg-yellow-50 p-4 rounded-md mb-6 text-sm text-yellow-800 border border-yellow-200">
                                <p className="font-bold mb-2">Registration Fee: £5.00 / Participant</p>
                                <p className="mb-4">Please pay via PayPal first, then enter the Transaction ID below.</p>

                                <a
                                    href="https://www.paypal.com/ncp/payment/TPP6PUX3RNVSA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-[#0070BA] text-white px-5 py-2.5 rounded-full font-bold hover:bg-[#005ea6] transition-colors shadow-sm"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.946 5.438-3.158 7.12-6.694 7.12H10.5a.5.5 0 0 0-.5.5v1.95c0 .275-.223.5-.5.5h-2.424z" /></svg>
                                    Pay with PayPal
                                </a>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">PayPal Transaction Reference ID *</label>
                                <input
                                    type="text"
                                    name="transactionId"
                                    required
                                    value={formData.transactionId}
                                    onChange={(e) => {
                                        // Allow only alphanumeric input to assist user
                                        const val = e.target.value.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
                                        setFormData(prev => ({ ...prev, transactionId: val }));
                                    }}
                                    maxLength={17}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent font-mono uppercase"
                                    placeholder="e.g. 0FT064904K8018433"
                                />
                                <p className="text-xs text-gray-500 mt-1">Found in your PayPal receipt email (17 characters).</p>

                                <div className="mt-2">
                                    <button
                                        type="button"
                                        onClick={() => setShowExample(!showExample)}
                                        className="text-xs text-accent hover:underline flex items-center gap-1 font-medium"
                                    >
                                        {showExample ? 'Hide Example' : 'Where can I find this?'}
                                    </button>

                                    {showExample && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            className="mt-2 overflow-hidden"
                                        >
                                            <div className="border border-gray-200 rounded-md p-1 bg-white inline-block">
                                                <img
                                                    src="/paypal-example.png"
                                                    alt="PayPal Payment Example"
                                                    className="max-w-[300px] w-full h-auto rounded"
                                                />
                                            </div>
                                            <p className="text-[10px] text-gray-400 mt-1 italic">Example: Layout of a PayPal receipt</p>
                                        </motion.div>
                                    )}
                                </div>
                            </div>

                            {/* Payment Screenshot Upload */}
                            <div className="mt-6 border-t border-dashed border-gray-200 pt-4">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Upload Payment Screenshot (Optional but Recommended)
                                </label>
                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md bg-white hover:bg-gray-50 transition-colors">
                                    <div className="space-y-1 text-center">
                                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <div className="flex text-sm text-gray-600 justify-center">
                                            <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-accent hover:text-accent-dark focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-accent">
                                                <span>Upload a file</span>
                                                <input id="file-upload" name="file-upload" type="file" className="sr-only" accept="image/*" onChange={handleFileChange} />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs text-gray-500">
                                            PNG, JPG, GIF up to 4MB
                                        </p>
                                        {paymentFile && (
                                            <div className="mt-2 text-sm text-green-600 font-semibold flex items-center gap-2 justify-center">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                Selected: {paymentFile.name}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Notes */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Notes / Medical Conditions</label>
                            <textarea
                                name="notes"
                                value={formData.notes}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent h-24"
                                placeholder="Optional..."
                            />
                        </div>

                        <div className="text-center pt-4">
                            <Button type="submit" fullWidth disabled={isSubmitting} className="max-w-xs text-lg shadow-lg">
                                {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                            </Button>
                        </div>

                    </form>
                </Card>
            </div>
        </Section>
    );
};

export default Register;
