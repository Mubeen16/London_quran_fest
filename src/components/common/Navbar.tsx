import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Categories', path: '/categories' },
        { name: 'Schedule', path: '/schedule' },
        { name: 'Rules', path: '/rules' },
        { name: 'Results', path: '/results' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="bg-primary text-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-serif font-bold tracking-wide flex items-center gap-2">
                    {/* <span className="text-accent text-3xl">۞</span> */}
                    <img src="/logo.png" alt="Al Ihsan Academy Logo" className="w-12 h-12 rounded-full object-cover border-2 border-accent" />
                    <span className="hidden sm:inline">Al Ihsan Academy</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="hover:text-accent transition-colors duration-300 font-medium"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/register"
                        className="bg-accent hover:bg-yellow-500 text-primary-dark font-bold py-2 px-4 rounded-md transition-colors"
                    >
                        Register Now
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden bg-primary-dark overflow-hidden"
                    >
                        <div className="flex flex-col p-4 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="hover:text-accent transition-colors block"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/register"
                                onClick={() => setIsOpen(false)}
                                className="bg-accent text-center text-primary-dark font-bold py-2 px-4 rounded-md w-full block"
                            >
                                Register Now
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
