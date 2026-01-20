'use client';

import {
    Facebook, Twitter, Linkedin, Instagram, Youtube,
    Mail, Phone, MapPin, Clock, ChevronRight,
    Globe, Shield, Award, Users, Heart
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Button from './Button';


export default function Footer() {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { label: 'Home', href: '#home' },
        { label: 'About Us', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Projects', href: '#projects' },
        { label: 'Resources', href: '#resources' },
        { label: 'Contact', href: '#contact' }
    ];

    const services = [
        { label: 'Mineral Extraction', href: '#' },
        { label: 'Deep Foundation', href: '#' },
        { label: 'Tunnel Construction', href: '#' },
        { label: 'Industrial Plants', href: '#' },
        { label: 'Heavy Civil Works', href: '#' },
        { label: 'Safety Engineering', href: '#' }
    ];

    const legalLinks = [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Cookie Policy', href: '#' },
        { label: 'Disclaimer', href: '#' },
        { label: 'Accessibility', href: '#' }
    ];

    const socialLinks = [
        { icon: <Facebook size={20} />, label: 'Facebook', href: '#' },
        { icon: <Twitter size={20} />, label: 'Twitter', href: '#' },
        { icon: <Linkedin size={20} />, label: 'LinkedIn', href: '#' },
        { icon: <Instagram size={20} />, label: 'Instagram', href: '#' },
        { icon: <Youtube size={20} />, label: 'YouTube', href: '#' }
    ];

    const certifications = [
        'ISO 9001:2015',
        'ISO 14001:2015',
        'OHSAS 18001',
        'LEED Certified',
        'Global Safety Standard'
    ];

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            // Simulate subscription
            setIsSubscribed(true);
            setTimeout(() => {
                setIsSubscribed(false);
                setEmail('');
            }, 3000);
        }
    };

    return (
        <footer className="bg-gradient-to-b from-[#22313f] to-[#0d1a26] text-[#e4f1fe]">
            {/* Top Gradient Divider */}
            <div className="h-1 bg-gradient-to-r from-[#8dc6ff] via-[#34495e] to-[#8dc6ff]"></div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-5 gap-8 mb-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8dc6ff] to-[#34495e] flex items-center justify-center">
                                <span className="text-white font-bold text-xl">GME</span>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold">Golide Minerals</h2>
                                <p className="text-[#8dc6ff] font-medium tracking-widest text-sm">EXCHANGE</p>
                            </div>
                        </div>

                        <p className="text-[#e4f1fe]/80 mb-6">
                            Pioneering sustainable mineral construction solutions across continents.
                            Building tomorrow's infrastructure with today's innovation.
                        </p>

                        {/* Certifications */}
                        <div className="mb-6">
                            <div className="flex items-center gap-2 mb-3">
                                <Shield size={18} className="text-[#8dc6ff]" />
                                <span className="font-medium">Certifications & Standards</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {certifications.map((cert, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-[#34495e]/30 text-[#8dc6ff] text-xs rounded-full border border-[#8dc6ff]/20"
                                    >
                                        {cert}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="font-medium mb-4">Connect With Us</h4>
                            <div className="flex gap-3">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className="w-10 h-10 rounded-lg bg-[#34495e]/30 flex items-center justify-center text-[#e4f1fe] hover:bg-gradient-to-br hover:from-[#8dc6ff] hover:to-[#34495e] transition-all hover:scale-110"
                                        aria-label={social.label}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 pb-2 border-b border-[#8dc6ff]/30">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="flex items-center gap-2 text-[#e4f1fe]/70 hover:text-[#8dc6ff] transition-colors group"
                                    >
                                        <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 pb-2 border-b border-[#8dc6ff]/30">Our Services</h3>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <Link
                                        href={service.href}
                                        className="flex items-center gap-2 text-[#e4f1fe]/70 hover:text-[#8dc6ff] transition-colors group"
                                    >
                                        <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                        {service.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Newsletter */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 pb-2 border-b border-[#8dc6ff]/30">Stay Updated</h3>

                        {/* Contact Info */}
                        <div className="mb-6 space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gradient-to-br from-[#8dc6ff]/20 to-[#34495e]/20 rounded-lg flex items-center justify-center">
                                    <Phone size={16} className="text-[#8dc6ff]" />
                                </div>
                                <div>
                                    <p className="text-sm text-[#e4f1fe]/60">Call Us</p>
                                    <p className="font-medium">+27 (11) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gradient-to-br from-[#8dc6ff]/20 to-[#34495e]/20 rounded-lg flex items-center justify-center">
                                    <Mail size={16} className="text-[#8dc6ff]" />
                                </div>
                                <div>
                                    <p className="text-sm text-[#e4f1fe]/60">Email Us</p>
                                    <p className="font-medium">contact@golide-minerals.co.za</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gradient-to-br from-[#8dc6ff]/20 to-[#34495e]/20 rounded-lg flex items-center justify-center">
                                    <Clock size={16} className="text-[#8dc6ff]" />
                                </div>
                                <div>
                                    <p className="text-sm text-[#e4f1fe]/60">Office Hours</p>
                                    <p className="font-medium">Mon-Fri: 8AM-6PM EST</p>
                                </div>
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h4 className="font-medium mb-4">Newsletter</h4>
                            {isSubscribed ? (
                                <div className="bg-gradient-to-r from-[#8dc6ff]/20 to-[#34495e]/20 border border-[#8dc6ff]/30 rounded-lg p-4 text-center">
                                    <div className="w-10 h-10 mx-auto mb-2 bg-gradient-to-br from-[#8dc6ff] to-[#34495e] rounded-full flex items-center justify-center text-white">
                                        <Award size={20} />
                                    </div>
                                    <p className="text-[#e4f1fe] font-medium">Subscribed Successfully!</p>
                                    <p className="text-sm text-[#e4f1fe]/70">Thank you for joining our community</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubscribe} className="space-y-3">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Your email address"
                                        className="w-full px-4 py-3 bg-[#34495e]/30 border border-[#e4f1fe]/10 rounded-lg text-[#e4f1fe] placeholder:text-[#e4f1fe]/50 focus:outline-none focus:border-[#8dc6ff]"
                                        required
                                    />
                                    <Button
                                        type="submit"
                                        className="w-full group"
                                        size="sm"
                                    >
                                        Subscribe
                                        <ChevronRight size={16} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                    <p className="text-xs text-[#e4f1fe]/60">
                                        Subscribe to receive the latest industry insights and updates
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-[#34495e]">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        {/* Copyright */}
                        <div className="text-[#e4f1fe]/60 text-sm">
                            © {currentYear} Golide Minerals Exchange. All rights reserved.
                        </div>

                        {/* Legal Links */}
                        <div className="flex flex-wrap gap-4 justify-center">
                            {legalLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className="text-[#e4f1fe]/60 hover:text-[#8dc6ff] text-sm transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>                        
                    </div>

                    {/* Made with love */}
                    <div className="mt-6 text-center">
                        <p className="text-[#e4f1fe]/50 text-sm flex items-center justify-center gap-2">
                            Built with <Heart size={14} className="text-red-400 animate-pulse" /> for the construction industry
                        </p>
                    </div>
                </div>

                {/* Back to Top Button */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-[#8dc6ff] to-[#34495e] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all z-40"
                    aria-label="Back to top"
                >
                    ↑
                </button>
            </div>

            {/* Bottom Gradient Divider */}
            <div className="h-1 bg-gradient-to-r from-[#8dc6ff] via-[#34495e] to-[#8dc6ff]"></div>
        </footer>
    );
};

