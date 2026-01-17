"use client";

// src/app/components/Card.jsx
export default function Card({
    children,
    className = '',
    hover = true,
    variant = 'default'
}) {
    const baseStyles = 'rounded-2xl transition-all duration-300';

    const variants = {
        default: 'bg-gradient-to-br from-[#34495e] to-[#22313f] border border-[#8dc6ff]/20',
        glass: 'glass-effect border border-[#e4f1fe]/10',
        highlight: 'bg-gradient-to-br from-[#8dc6ff]/20 to-[#34495e]/40 border border-[#8dc6ff]/30'
    };

    const hoverEffect = hover ? 'hover:scale-105 hover:shadow-xl hover:shadow-[#8dc6ff]/10' : '';

    return (
        <div className={`${baseStyles} ${variants[variant]} ${hoverEffect} ${className}`}>
            {children}
        </div>
    );
};



