import React from 'react';
import { FaMosque, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-primary-dark text-gray-300 py-10">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* About */}
                <div>
                    <h3 className="text-xl font-serif font-bold text-white mb-4 flex items-center gap-2">
                        <FaMosque className="text-accent" />
                        Annual Quran Competition
                    </h3>
                    <p className="text-sm leading-relaxed">
                        Fostering love for the Holy Quran in the hearts of our youth.
                        Join us in this spiritual journey of learning and recitation.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/about" className="hover:text-accent transition-colors">About Us</a></li>
                        <li><a href="/categories" className="hover:text-accent transition-colors">Categories</a></li>
                        <li><a href="/rules" className="hover:text-accent transition-colors">Rules & Guidelines</a></li>
                        <li><a href="/results" className="hover:text-accent transition-colors">Competition Results</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-3">
                            <FaMapMarkerAlt className="text-accent" />
                            <span>Al Ihsan Academy, London, UK</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaPhone className="text-accent" />
                            <span>07917 044 585 | 07534 039 748</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaEnvelope className="text-accent" />
                            <span>academy@alihsan.co.uk</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm">
                <p>&copy; 2026 Annual Quran Competition. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
