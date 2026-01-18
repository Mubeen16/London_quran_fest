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
        parentName: '',
        phone: '',
        email: '',
        city: '',
        category: initialCategory,
        notes: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Validate form logic here (simple check for now)
        if (formData.fullName && formData.phone && formData.category) {
            console.log('Form Submitted:', formData);
            setSubmitted(true);
            window.scrollTo(0, 0);
        }
    };

    if (submitted) {
        return (
            <Section className="min-h-[60vh] flex items-center justify-center text-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="max-w-md w-full"
                >
                    <Card className="border-t-4 border-accent">
                        <div className="text-5xl text-primary mb-4">✓</div>
                        <h2 className="text-2xl font-bold font-serif text-primary mb-4">Registration Successful!</h2>
                        <p className="text-gray-600 mb-6">
                            JazakAllah Khair <strong>{formData.fullName}</strong>. Your registration for the
                            <strong> {textCategories.find(c => c.id === formData.category)?.title || 'Competition'} </strong>
                            has been received.
                        </p>
                        <p className="text-sm text-gray-500 mb-8">
                            we have sent a confirmation email to {formData.email}.
                        </p>
                        <Button onClick={() => setSubmitted(false)} variant="outline">Register Another Participant</Button>
                    </Card>
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

                <Card className="p-8 md:p-10 shadow-lg">
                    <form onSubmit={handleSubmit} className="space-y-6">

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
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Age *</label>
                                    <input
                                        type="number"
                                        name="age"
                                        required
                                        min="4"
                                        max="100"
                                        value={formData.age}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                                        placeholder="Age"
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
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Select Category *</label>
                                    <select
                                        name="category"
                                        required
                                        value={formData.category}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                                    >
                                        <option value="" disabled>-- Select Category --</option>
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
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Parent / Guardian Name</label>
                                    <input
                                        type="text"
                                        name="parentName"
                                        value={formData.parentName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                                        placeholder="Required for under 18"
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
                                        placeholder="example@email.com"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">City / Location *</label>
                                    <input
                                        type="text"
                                        name="city"
                                        required
                                        value={formData.city}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                                        placeholder="e.g. London"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Notes / Special Requirements</label>
                                    <textarea
                                        name="notes"
                                        value={formData.notes}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent h-24"
                                        placeholder="Any health conditions or questions..."
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="text-center pt-4">
                            <Button type="submit" fullWidth className="max-w-xs text-lg shadow-lg">Submit Registration</Button>
                        </div>

                    </form>
                </Card>
            </div>
        </Section>
    );
};

export default Register;
