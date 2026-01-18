import React, { useState } from 'react';
import Section from '../components/common/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const images = [
    { src: 'https://via.placeholder.com/600x400?text=Competition+2025', alt: 'Competition 2025 Hall' },
    { src: 'https://via.placeholder.com/600x400?text=Top+Reciter', alt: 'Winner of 2025' },
    { src: 'https://via.placeholder.com/600x400?text=Judges+Panel', alt: 'Judges Evaluation' },
    { src: 'https://via.placeholder.com/600x400?text=Award+Ceremony', alt: 'Prize Distribution' },
    { src: 'https://via.placeholder.com/600x400?text=Audience', alt: 'Focused Audience' },
    { src: 'https://via.placeholder.com/600x400?text=Kids+Category', alt: 'Young Participants' },
];

const Gallery: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <>
            <Section className="text-center pt-24 pb-12 bg-primary-dark text-white">
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Photo Gallery</h1>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                    Highlights from our previous competitions.
                </p>
            </Section>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.02 }}
                            layoutId={`img-${index}`}
                            onClick={() => setSelectedImage(img.src)}
                            className="cursor-pointer overflow-hidden rounded-lg shadow-lg aspect-video relative group"
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white font-medium border border-white px-4 py-2 rounded-md">View</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white text-3xl focus:outline-none p-2 hover:bg-white/10 rounded-full"
                        >
                            <FaTimes />
                        </button>
                        <motion.img
                            src={selectedImage}
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Gallery;
