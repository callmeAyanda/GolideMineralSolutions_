// src/app/components/Tabs.jsx
'use client';

import { useState } from 'react';

export default function Tabs({ tabs, defaultTab = 0, onTabChange, className = '' }) {
    const [activeTab, setActiveTab] = useState(defaultTab);

    const handleTabClick = (index) => {
        setActiveTab(index);
        if (onTabChange) onTabChange(index);
    };

    return (
        <div className={className}>
            <div className="flex flex-wrap gap-2 mb-8">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => handleTabClick(index)}
                        className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === index
                                ? 'bg-gradient-to-r from-[#8dc6ff] to-[#34495e] text-white shadow-lg shadow-[#8dc6ff]/20'
                                : 'bg-[#e4f1fe]/10 text-[#e4f1fe] hover:bg-[#e4f1fe]/20'
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="mt-4">
                {tabs[activeTab].content}
            </div>
        </div>
    );
};


