import React, { type ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    fullWidth = false,
    className = '',
    children,
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300';

    const variants = {
        primary: 'border-transparent text-white bg-primary hover:bg-primary-light focus:ring-primary',
        secondary: 'border-transparent text-primary-dark bg-accent hover:bg-accent-light focus:ring-accent',
        outline: 'border-primary text-primary hover:bg-primary-50 focus:ring-primary',
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
