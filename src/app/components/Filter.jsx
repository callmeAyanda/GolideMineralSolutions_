// src/app/components/Filter.jsx
'use client';

import { useState } from 'react';

export default function Filter({
    categories,
    activeCategory,
    onCategoryChange,
    className = ''
}) {

    return (
        <div className={`flex flex-wrap gap-3 ${className}`}>
            <button
                onClick={() => onCategoryChange('all')}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === 'all'
                    ? 'bg-gradient-to-r from-[#8dc6ff] to-[#34495e] text-white shadow-lg shadow-[#8dc6ff]/20'
                    : 'bg-[#e4f1fe]/10 text-[#22313f] hover:bg-[#e4f1fe]/20'
                    }`}
            >
                All Projects
            </button>

            {categories.map((category) => (
                <button
                    key={category.id}
                    onClick={() => onCategoryChange(category.id)}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === category.id
                        ? 'bg-gradient-to-r from-[#8dc6ff] to-[#34495e] text-white shadow-lg shadow-[#8dc6ff]/20'
                        : 'bg-[#e4f1fe]/10 text-[#22313f] hover:bg-[#e4f1fe]/20'
                        }`}
                >
                    {category.name}
                </button>
            ))}
        </div>
    );
};


