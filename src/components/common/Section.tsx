import React, { type ReactNode } from 'react';
import clsx from 'clsx';

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, className, id, dark = false }) => {
    return (
        <section
            id={id}
            className={clsx(
                'py-16 md:py-20',
                dark ? 'bg-primary-dark text-white' : 'bg-transparent text-gray-800',
                className
            )}
        >
            <div className="container mx-auto px-4">
                {children}
            </div>
        </section>
    );
};

export default Section;
