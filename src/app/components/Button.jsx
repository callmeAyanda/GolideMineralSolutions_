"use client";

// components/Button.js
export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick,
    fullWidth = false,
    type = 'button'
}) {
    const baseStyles = 'font-semibold rounded-full transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#22313f]';

    const variants = {
        primary: 'bg-gradient-to-r from-[#8dc6ff] to-[#34495e] text-white hover:shadow-lg hover:shadow-[#8dc6ff]/30',
        secondary: 'bg-[#e4f1fe] text-[#22313f] hover:bg-[#8dc6ff] hover:text-white',
        outline: 'border-2 border-[#8dc6ff] text-[#8dc6ff] hover:bg-[#8dc6ff] hover:text-white',
        ghost: 'bg-transparent text-[#e4f1fe] hover:bg-[#e4f1fe]/10'
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3',
        lg: 'px-8 py-4 text-lg',
        xl: 'px-10 py-5 text-xl'
    };

    const width = fullWidth ? 'w-full' : '';

    return (
        <button
            type={type}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};


