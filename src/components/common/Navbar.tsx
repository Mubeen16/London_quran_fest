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
        <nav className="fixed w-full top-0 z-50 bg-primary-dark/95 backdrop-blur-md border-b border-white/5 transition-all duration-300">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo Area */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-accent/20 rounded-full blur-md group-hover:bg-accent/40 transition-all duration-500"></div>
                            <img
                                src="/logo.png"
                                alt="Al Ihsan Academy Logo"
                                className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-accent relative z-10"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-serif font-bold text-lg md:text-xl tracking-wider text-white group-hover:text-accent transition-colors">
                                AL IHSAN
                            </span>
                            <span className="text-[10px] md:text-xs text-gray-400 uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                                ACADEMY
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group overflow-hidden"
                            >
                                <span className="relative z-10 tracking-wide">{link.name}</span>
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:block ml-6">
                        <Link to="/register">
                            <button className="relative px-6 py-2.5 bg-gradient-to-r from-accent to-yellow-600 text-primary-dark font-bold text-sm uppercase tracking-wider rounded shadow-[0_0_15px_rgba(218,165,32,0.3)] hover:shadow-[0_0_25px_rgba(218,165,32,0.6)] hover:scale-105 transition-all duration-300">
                                Register Now
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-2xl text-white hover:text-accent transition-colors focus:outline-none p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <HiX /> : <HiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-primary-dark/98 backdrop-blur-xl border-t border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-300 hover:text-accent hover:pl-2 transition-all duration-300 text-lg font-medium border-b border-white/5 pb-2"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/register"
                                onClick={() => setIsOpen(false)}
                                className="mt-4 bg-accent text-primary-dark font-bold py-3 px-4 rounded text-center uppercase tracking-widest shadow-lg"
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
