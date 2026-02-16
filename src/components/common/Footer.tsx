import React from 'react';
import { Link } from 'react-router-dom';
import { FaMosque, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-primary-dark text-gray-300 py-10">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* About */}
                <div>
                    <h3 className="text-xl font-serif font-bold text-white mb-4 flex items-center gap-2">
                        <FaMosque className="text-accent" />
                        London Quran Fest
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
                        <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                        <li><Link to="/categories" className="hover:text-accent transition-colors">Categories</Link></li>
                        <li><Link to="/rules" className="hover:text-accent transition-colors">Rules & Guidelines</Link></li>
                        <li><Link to="/results" className="hover:text-accent transition-colors">Competition Results</Link></li>
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
                            <div className="flex flex-col">
                                <span>+44 7466139997 in UK</span>
                                <span>+91 81 3789 8323 in India</span>
                            </div>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaEnvelope className="text-accent" />
                            <div className="flex flex-col">
                                <span>londonquranfest@gmail.com</span>
                                <span>academy@alihsan.co.uk</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm">
                <p>&copy; 2026 London Quran Fest. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
