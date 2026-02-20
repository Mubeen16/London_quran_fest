import React, { useState } from 'react';
import Section from '../components/common/Section';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { textCategories } from '../data/categories';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Register: React.FC = () => {
    const [searchParams] = useSearchParams();
    const initialCategory = searchParams.get('category') || '';

    const [formData, setFormData] = useState({
        fullName: '',
        dateOfBirth: '',
        gender: 'male',
        category: initialCategory,
        parentName: '',
        phone: '',
        email: '',
        address: '',
        transactionId: '', // New field for Payment Reference
        notes: ''
    });

    const calculateAge = (dob: string) => {
        if (!dob) return 0;
        const birthDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});

    // File Upload State removed


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (fieldErrors[name]) {
            setFieldErrors(prev => ({ ...prev, [name]: '' }));
        }
    };



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');
        setFieldErrors({});

        const newErrors: { [key: string]: string } = {};

        // Basic validation
        if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
        if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of Birth is required';
        if (!formData.category) newErrors.category = 'Competition Level is required';
        if (!formData.address.trim()) newErrors.address = 'Address is required';

        // Validate Phone Number
        // Must start with + and have at least 10 digits
        const phoneRegex = /^\+[0-9\s-]{10,20}$/;
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone Number is required';
        } else if (!phoneRegex.test(formData.phone.trim())) {
            newErrors.phone = 'Invalid format. Use +[Code][Number] (e.g. +44 7466 123456)';
        }

        // Validate Parent Name for Minors
        const age = calculateAge(formData.dateOfBirth);
        const isMinor = age < 18;

        if (isMinor && !formData.parentName.trim()) {
            newErrors.parentName = 'Parent / Guardian Name is required for participants under 18.';
        }

        // Validate Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Email Address is required';
        } else if (!emailRegex.test(formData.email.trim())) {
            newErrors.email = 'Invalid email address';
        }

        // Validate Transaction ID / Bank Reference format
        const txnIdRegex = /^[A-Za-z0-9\s-]{5,25}$/;
        if (!formData.transactionId.trim()) {
            newErrors.transactionId = 'Bank reference is required';
        } else if (!txnIdRegex.test(formData.transactionId.trim())) {
            newErrors.transactionId = 'Must be between 5-25 alphanumeric characters';
        }



        if (Object.keys(newErrors).length > 0) {
            setFieldErrors(newErrors);
            setError('Please correct the highlighted errors before submitting.');
            setIsSubmitting(false);

            // Scroll to first error
            const firstErrorKey = Object.keys(newErrors)[0];
            const element = document.getElementsByName(firstErrorKey)[0];
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                element.focus();
            }

            return;
        }

        try {
            // Send data to Google Sheet via Google Apps Script Web App
            const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwySRsWz08jvKXah0L2RSltHN1ALhQ1Y3GNiIFhwnYHncyKBnWrQY1OPZTQB4Oeoj2u/exec";

            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    age: calculateAge(formData.dateOfBirth), // Send calculated age for Google Sheet compatibility
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

    const navigate = useNavigate();

    const handleReset = () => {
        setFormData({
            fullName: '',
            dateOfBirth: '',
            gender: 'male',
            category: initialCategory,
            parentName: '',
            phone: '',
            email: '',
            address: '',
            transactionId: '',
            notes: ''
        });

        setSubmitted(false);
        setError('');
        setFieldErrors({});
        window.scrollTo(0, 0);
    };

    if (submitted) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", duration: 0.6, bounce: 0.3 }}
                    className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden relative"
                >
                    {/* Decorative Header */}
                    <div className="bg-[#0f5132] h-24 relative overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg relative z-10 mt-10"
                        >
                            <svg className="w-10 h-10 text-[#0f5132]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        </motion.div>
                    </div>

                    <div className="px-8 pt-12 pb-8 text-center">
                        <h2 className="text-3xl font-serif font-bold text-[#0f5132] mb-1">Registration Complete</h2>
                        <p className="text-[#DAA520] font-medium tracking-widest text-xs uppercase mb-6">Alhamdulillah</p>

                        <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 mb-6">
                            <p className="text-gray-500 text-sm mb-2">Participant</p>
                            <p className="text-xl font-bold text-gray-800 font-serif">{formData.fullName}</p>
                            <div className="w-full h-px bg-gray-200 my-3"></div>
                            <p className="text-gray-500 text-sm mb-1">Category</p>
                            <p className="text-[#0f5132] font-semibold">
                                {textCategories.find(c => c.id === formData.category)?.title || 'Competition'}
                            </p>
                        </div>

                        <p className="text-sm text-gray-500 leading-relaxed mb-6">
                            Your registration has been received. A confirmation email has been sent to <strong>{formData.email}</strong>.
                        </p>

                        <div className="space-y-3">
                            <Button
                                onClick={handleReset}
                                className="w-full bg-[#0f5132] hover:bg-[#0b3d26] text-white py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                            >
                                Register Another Participant
                            </Button>
                            <button
                                onClick={() => navigate('/')}
                                className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                Return to Home
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <Section className="bg-[#fcfaf7] min-h-screen py-16 relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230f5132' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
            ></div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4 tracking-tight">Registration</h1>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-500 max-w-lg mx-auto font-light text-lg">
                        "The best of you are those who learn the Quran and teach it."
                    </p>
                </div>

                <Card className="p-8 md:p-12 shadow-2xl relative border-t-8 border-primary overflow-hidden">
                    {/* Overlay for submission loading state */}
                    {isSubmitting && (
                        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-20 flex flex-col items-center justify-center rounded-lg">
                            <div className="w-16 h-16 border-4 border-gray-200 border-t-primary rounded-full animate-spin mb-4"></div>
                            <div className="text-primary font-serif font-bold text-xl animate-pulse">Processing Registration...</div>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-10">
                        {error && (
                            <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-r shadow-sm flex items-start">
                                <span className="mr-2">⚠️</span>
                                <span>{error}</span>
                            </div>
                        )}

                        {/* Personal Details */}
                        <div>
                            <h3 className="text-2xl font-serif font-bold text-primary mb-6 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-sans">1</span>
                                Participant Details
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="block text-xs uppercase tracking-wider font-bold text-gray-500">Full Name *</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        required
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none font-medium text-gray-800 placeholder-gray-400 ${fieldErrors.fullName ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                                        placeholder="Enter full name"
                                    />
                                    {fieldErrors.fullName && <p className="text-red-500 text-xs mt-1">{fieldErrors.fullName}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-xs uppercase tracking-wider font-bold text-gray-500">Date of Birth *</label>
                                    <input
                                        type="date"
                                        name="dateOfBirth"
                                        required
                                        value={formData.dateOfBirth}
                                        onChange={handleChange}
                                        max={new Date().toISOString().split("T")[0]}
                                        className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none font-medium text-gray-800 placeholder-gray-400 ${fieldErrors.dateOfBirth ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                                    />
                                    {fieldErrors.dateOfBirth && <p className="text-red-500 text-xs mt-1">{fieldErrors.dateOfBirth}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-xs uppercase tracking-wider font-bold text-gray-500">Gender *</label>
                                    <div className="relative">
                                        <select
                                            name="gender"
                                            value={formData.gender}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none font-medium text-gray-800 appearance-none"
                                        >
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
                                            ▼
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-xs uppercase tracking-wider font-bold text-gray-500">Competition Level *</label>
                                    <div className="relative">
                                        <select
                                            name="category"
                                            required
                                            value={formData.category}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none font-medium text-gray-800 appearance-none ${fieldErrors.category ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                                        >
                                            <option value="" disabled>-- Select Category --</option>
                                            {textCategories.map(cat => (
                                                <option key={cat.id} value={cat.id}>{cat.title} ({cat.ageLimit})</option>
                                            ))}
                                        </select>
                                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
                                            ▼
                                        </div>
                                    </div>
                                    {fieldErrors.category && <p className="text-red-500 text-xs mt-1">{fieldErrors.category}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Guardian & Contact */}
                        <div>
                            <h3 className="text-2xl font-serif font-bold text-primary mb-6 flex items-center gap-3 pt-4 border-t border-gray-100">
                                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-sans">2</span>
                                Guardian & Contact
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="md:col-span-2 space-y-2">
                                    <label className="block text-xs uppercase tracking-wider font-bold text-gray-500">
                                        Parent / Guardian Name {(calculateAge(formData.dateOfBirth) >= 18) ? <span className="text-gray-400 font-normal normal-case">(Optional for 18+)</span> : '*'}
                                    </label>
                                    <input
                                        type="text"
                                        name="parentName"
                                        required={calculateAge(formData.dateOfBirth) < 18}
                                        value={formData.parentName}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none font-medium text-gray-800 placeholder-gray-400 ${fieldErrors.parentName ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                                        placeholder={(calculateAge(formData.dateOfBirth) >= 18) ? "Optional" : "Authorized Guardian Name"}
                                    />
                                    {fieldErrors.parentName && <p className="text-red-500 text-xs mt-1">{fieldErrors.parentName}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-xs uppercase tracking-wider font-bold text-gray-500">Phone Number *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none font-medium text-gray-800 placeholder-gray-400 ${fieldErrors.phone ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                                        placeholder="+44 7..."
                                    />
                                    {fieldErrors.phone && <p className="text-red-500 text-xs mt-1">{fieldErrors.phone}</p>}
                                    <p className="text-xs text-gray-400 mt-1">Format: +[Country Code] [Number] (e.g. +44 7466 123456)</p>
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-xs uppercase tracking-wider font-bold text-gray-500">Email Address *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none font-medium text-gray-800 placeholder-gray-400 ${fieldErrors.email ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                                        placeholder="name@example.com"
                                    />
                                    {fieldErrors.email && <p className="text-red-500 text-xs mt-1">{fieldErrors.email}</p>}
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="block text-xs uppercase tracking-wider font-bold text-gray-500">Address / City *</label>
                                    <input
                                        type="text"
                                        name="address"
                                        required
                                        value={formData.address}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none font-medium text-gray-800 placeholder-gray-400 ${fieldErrors.address ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                                        placeholder="Full address"
                                    />
                                    {fieldErrors.address && <p className="text-red-500 text-xs mt-1">{fieldErrors.address}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Payment Details */}
                        <div>
                            <h3 className="text-2xl font-serif font-bold text-primary mb-6 flex items-center gap-3 pt-4 border-t border-gray-100">
                                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-sans">3</span>
                                Payment Verification
                            </h3>

                            <div className="bg-[#fcfaf7] p-6 rounded-xl border border-accent/20 mb-8 relative overflow-hidden group hover:shadow-md transition-shadow">
                                <div className="absolute top-0 right-0 p-4 opacity-10 font-serif text-6xl text-primary font-bold">£</div>
                                <h4 className="font-bold text-primary text-lg mb-2">Registration Fee: £5.00</h4>
                                <p className="text-gray-600 text-sm mb-4">
                                    Please complete the payment via Bank Transfer. Use <strong>LQF</strong> and your child's name as the payment reference.
                                </p>

                                <div className="bg-white p-4 rounded-lg border border-gray-200 mt-4 space-y-2">
                                    <div className="flex justify-between border-b pb-2">
                                        <span className="text-gray-500 text-sm font-bold uppercase">Account Name</span>
                                        <span className="text-gray-800 font-medium">Al Ihsan UK Academy</span>
                                    </div>
                                    <div className="flex justify-between border-b pb-2">
                                        <span className="text-gray-500 text-sm font-bold uppercase">Sort Code</span>
                                        <span className="text-gray-800 font-mono tracking-widest font-bold">20-21-77</span>
                                    </div>
                                    <div className="flex justify-between border-b pb-2">
                                        <span className="text-gray-500 text-sm font-bold uppercase">Account Number</span>
                                        <span className="text-gray-800 font-mono tracking-widest font-bold">63209547</span>
                                    </div>
                                    <div className="flex justify-between pt-1">
                                        <span className="text-gray-500 text-sm font-bold uppercase">Reference</span>
                                        <span className="text-gray-800 font-bold">LQF + Child Name</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-8">
                                <div className="space-y-2">
                                    <label className="block text-xs uppercase tracking-wider font-bold text-gray-500">Bank Transfer Reference / Transaction ID *</label>
                                    <input
                                        type="text"
                                        name="transactionId"
                                        required
                                        value={formData.transactionId}
                                        onChange={(e) => {
                                            const val = e.target.value.replace(/[^A-Za-z0-9\s-]/g, '').toUpperCase();
                                            setFormData(prev => ({ ...prev, transactionId: val }));
                                            if (fieldErrors.transactionId) setFieldErrors(prev => ({ ...prev, transactionId: '' }));
                                        }}
                                        maxLength={25}
                                        className={`w-full px-4 py-3 bg-white border-2 border-dashed rounded-lg focus:ring-none focus:border-accent transition-all font-mono text-lg uppercase tracking-widest text-center text-primary placeholder-gray-300 ${fieldErrors.transactionId ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                                        placeholder="ENTER REF OR ID"
                                    />
                                    {fieldErrors.transactionId && <p className="text-red-500 text-xs mt-1 text-center">{fieldErrors.transactionId}</p>}
                                    <div className="flex justify-center items-center px-1">
                                        <p className="text-xs text-gray-400">Enter the exact reference you used for the bank transfer</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Notes */}
                        <div className="pt-4 border-t border-gray-100">
                            <label className="block text-xs uppercase tracking-wider font-bold text-gray-500 mb-2">Additional Notes / Medical Conditions</label>
                            <textarea
                                name="notes"
                                value={formData.notes}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none font-medium text-gray-800 h-24 resize-none"
                                placeholder="..."
                            />
                        </div>

                        <div className="text-center pt-8">
                            <Button type="submit" fullWidth disabled={isSubmitting} className="max-w-md text-lg font-bold py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all">
                                {isSubmitting ? 'Submitting Registration...' : 'Complete Registration'}
                            </Button>
                            <p className="text-xs text-gray-400 mt-4">
                                By submitting, you agree to the rules and regulations of the competition.
                            </p>
                        </div>

                    </form>
                </Card>
            </div>
        </Section>
    );
};

export default Register;
