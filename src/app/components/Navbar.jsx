"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';


export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Projects', href: '#projects' },
        { label: 'Resources', href: '#resources' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <>
            {/* Top Info Bar */}
            <div className="bg-[#22313f] text-[#e4f1fe] py-2 px-4 hidden md:block">
                <div className="container mx-auto flex justify-between items-center text-sm">
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                            <Phone size={16} />
                            <span>+27 (11) 123-4567</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Mail size={16} />
                            <span>contact@golide-minerals.co.za</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <MapPin size={16} />
                            <span>Global Headquarters</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="hover:text-[#8dc6ff] transition-colors">Careers</button>
                        <button className="hover:text-[#8dc6ff] transition-colors">Client Portal</button>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#22313f]/95 backdrop-blur-md shadow-xl' : 'bg-[#22313f]'
                }`}>
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-4">
                        {/* Logo */}
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8dc6ff] to-[#34495e] flex items-center justify-center">
                                <span className="text-white font-bold text-xl">GME</span>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-[#e4f1fe]">Golide Minerals</h1>
                                <p className="text-xs text-[#8dc6ff] font-medium tracking-widest">EXCHANGE</p>
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="text-[#e4f1fe] hover:text-[#8dc6ff] transition-colors relative group font-medium"
                                >
                                    {item.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8dc6ff] group-hover:w-full transition-all duration-300"></span>
                                </a>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="hidden lg:flex items-center space-x-4">
                            <button className="px-6 py-3 bg-gradient-to-r from-[#8dc6ff] to-[#34495e] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#8dc6ff]/20 transition-all duration-300 transform hover:-translate-y-0.5">
                                Get Quote
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden text-[#e4f1fe] p-2"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isOpen && (
                        <div className="lg:hidden bg-[#34495e] rounded-xl mt-2 mb-4 p-6 animate-fadeIn">
                            <div className="flex flex-col space-y-6">
                                {navItems.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        className="text-[#e4f1fe] hover:text-[#8dc6ff] text-lg font-medium py-2 border-b border-[#22313f] last:border-0"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.label}
                                    </a>
                                ))}
                                <button className="mt-4 px-6 py-3 bg-gradient-to-r from-[#8dc6ff] to-[#34495e] text-white rounded-full font-semibold w-full">
                                    Get Quote
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
};


