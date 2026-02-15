import React from 'react';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import CountdownTimer from '../components/feature/CountdownTimer';
import { textCategories } from '../data/categories';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaQuran, FaMicrophone, FaAward } from 'react-icons/fa';

const Home: React.FC = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center bg-primary-dark overflow-hidden pt-20 md:pt-24">
                {/* Background Pattern Overlay - Simulated with CSS radial gradient for now */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-light/20 to-primary-dark z-0"></div>

                <div className="container mx-auto px-4 z-10 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-xl md:text-2xl font-arabic text-accent mb-4">
                            وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا
                        </p>
                        <p className="text-sm md:text-base text-gray-300 italic mb-8">
                            "And recite the Quran with measured recitation." (73:4)
                        </p>

                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white drop-shadow-lg">
                            London's most awaited <br /><span className="text-accent">Quran Fest '26</span>
                        </h1>

                        <p className="max-w-2xl mx-auto text-lg text-gray-200 mb-10 leading-relaxed uppercase tracking-widest font-semibold text-accent">
                            Celebrating the Qur'an
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                            <Link to="/register">
                                <Button variant="secondary" className="w-full sm:w-auto text-lg px-8">
                                    Register Now
                                </Button>
                            </Link>
                            <Link to="/categories">
                                <Button variant="outline" className="w-full sm:w-auto text-lg px-8 text-white border-white hover:bg-white/10">
                                    View Categories
                                </Button>
                            </Link>
                        </div>

                        <CountdownTimer />
                    </motion.div>
                </div>
            </section>

            {/* Highlights / Features */}
            <Section className="bg-cream">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <Card animate className="p-8">
                        <div className="text-accent text-4xl mb-4 flex justify-center"><FaQuran /></div>
                        <h3 className="text-xl font-bold mb-2">Hifz Categories</h3>
                        <p className="text-gray-600">From 3 Juz to the full Holy Quran. Challenge yourself in memorization.</p>
                    </Card>
                    <Card animate className="p-8">
                        <div className="text-accent text-4xl mb-4 flex justify-center"><FaMicrophone /></div>
                        <h3 className="text-xl font-bold mb-2">Beautiful Tilawah</h3>
                        <p className="text-gray-600">Showcase your voice and mastery of Tajweed rules in our recitation category.</p>
                    </Card>
                    <Card animate className="p-8">
                        <div className="text-accent text-4xl mb-4 flex justify-center"><FaAward /></div>
                        <h3 className="text-xl font-bold mb-2">Prestigious Awards</h3>
                        <p className="text-gray-600">Win scholarships, trophies, and recognition from renowned scholars.</p>
                    </Card>
                </div>
            </Section>

            {/* Categories Preview */}
            <Section className="bg-white">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif font-bold text-primary mb-4">Competition Categories</h2>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {textCategories.slice(0, 3).map((cat) => (
                        <Card key={cat.id} animate className="hover:shadow-lg transition-shadow border-t-4 border-t-transparent hover:border-t-accent">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-primary">{cat.title}</h3>
                                <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">{cat.ageLimit}</span>
                            </div>
                            <p className="font-arabic text-right text-lg text-gray-500 mb-2">{cat.arabicTitle}</p>
                            <p className="text-gray-600 mb-4">{cat.description}</p>
                            <Link to="/categories" className="text-accent font-medium hover:underline">Learn more &rarr;</Link>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link to="/categories">
                        <Button variant="primary">View All Categories</Button>
                    </Link>
                </div>
            </Section>
        </>
    );
};

export default Home;
