import React, { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
    children: ReactNode;
    className?: string;
    animate?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', animate = false }) => {
    const baseClasses = 'bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 p-6';

    if (animate) {
        return (
            <motion.div
                className={`${baseClasses} ${className}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {children}
            </motion.div>
        );
    }

    return (
        <div className={`${baseClasses} ${className}`}>
            {children}
        </div>
    );
};

export default Card;
