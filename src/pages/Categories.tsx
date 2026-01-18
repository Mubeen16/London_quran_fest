import React from 'react';
import Section from '../components/common/Section';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { textCategories } from '../data/categories';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Categories: React.FC = () => {
    return (
        <>
            <Section className="bg-cream pt-24 pb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Competition Categories</h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Choose the category that best fits your age and memorization level.
                    Each category is judged by qualified scholars with strict adherence to Tajweed rules.
                </p>
            </Section>

            <Section className="pt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {textCategories.map((cat, index) => (
                        <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full flex flex-col hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-accent">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                                        {cat.ageLimit}
                                    </div>
                                    <div className="text-2xl text-accent font-arabic">
                                        {cat.arabicTitle}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-primary mb-3">{cat.title}</h3>

                                <p className="text-gray-600 mb-6 flex-grow">
                                    {cat.description}
                                </p>

                                <div className="border-t border-gray-100 pt-4 mt-auto">
                                    <h4 className="font-semibold text-sm text-gray-400 uppercase tracking-widest mb-2">Criteria</h4>
                                    <ul className="text-sm text-gray-500 space-y-1 mb-6">
                                        <li>• Memorization Accuracy</li>
                                        <li>• Tajweed Rules</li>
                                        <li>• Voice & Melody (Tilawah)</li>
                                    </ul>

                                    <Link to={`/register?category=${cat.id}`} className="block">
                                        <Button variant="outline" fullWidth className="hover:bg-primary hover:text-white border-primary text-primary">
                                            Register for this Category
                                        </Button>
                                    </Link>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Section>

            <Section dark className="text-center">
                <h2 className="text-3xl font-serif font-bold mb-6">Not sure which category?</h2>
                <p className="mb-8 text-gray-300 max-w-2xl mx-auto">
                    Contact our coordinators for an assessment to help you decide the best category for your level.
                </p>
                <Link to="/contact">
                    <Button variant="secondary">Contact Us</Button>
                </Link>
            </Section>
        </>
    );
};

export default Categories;
