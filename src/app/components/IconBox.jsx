"use client";


export default function IconBox({
    children,
    className = '',
    size = 'md',
    variant = 'primary'
}) {
    const baseStyles = 'rounded-xl flex items-center justify-center';

    const sizes = {
        sm: 'w-10 h-10',
        md: 'w-14 h-14',
        lg: 'w-20 h-20'
    };

    const variants = {
        primary: 'bg-gradient-to-br from-[#8dc6ff] to-[#34495e] text-white',
        secondary: 'bg-[#e4f1fe] text-[#22313f]',
        outline: 'border-2 border-[#8dc6ff] text-[#8dc6ff]'
    };

    return (
        <div className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}>
            {children}
        </div>
    );
};


