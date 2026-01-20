'use client';

import {
    Mail, Phone, MapPin, Clock,
    Send, CheckCircle, MessageSquare,
    Building, Globe, Users, Briefcase,
    ArrowRight, ChevronRight, PhoneCall,
    Calendar, Shield, Zap, HeadphonesIcon
} from 'lucide-react';
import { useState } from 'react';
import SectionContainer from './SectionContainer';
import Card from './Card';
import Button from './Button';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budget: '',
        message: '',
        receiveUpdates: true
    });

    const [selectedOffice, setSelectedOffice] = useState('global');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [activeTab, setActiveTab] = useState('inquiry');

    const projectTypes = [
        'Mineral Extraction',
        'Tunnel Construction',
        'Industrial Plant',
        'Infrastructure',
        'Sustainability Project',
        'Safety Engineering',
        'Consultation',
        'Other'
    ];

    const budgetRanges = [
        'Under $1M',
        '$1M - $10M',
        '$10M - $50M',
        '$50M - $100M',
        '$100M - $500M',
        'Over $500M'
    ];

    const offices = [
        {
            id: 'global',
            name: 'Global Headquarters',
            address: '123 Bryanston Drive, Suite 100, Bryanston, JHB, 1455',
            phone: '+27 (11) 890 4567',
            email: 'global@golide-minerals.co.za',
            hours: 'Mon-Fri: 8:00 AM - 5:00 PM EST',
            description: 'Main coordination center for international operations'
        },
        {
            id: 'europe',
            name: 'European Operations',
            address: '456 Engineering Boulevard, London, UK EC2A 1AB',
            phone: '+44 20 1234 5678',
            email: 'europe@golide-minerals.com',
            hours: 'Mon-Fri: 9:00 AM - 5:00 PM GMT',
            description: 'Regional hub for European and African projects'
        },
        {
            id: 'asia',
            name: 'Asia Pacific Hub',
            address: '789 Innovation Tower, Singapore 018975',
            phone: '+65 1234 5678',
            email: 'asia@golide-minerals.com',
            hours: 'Mon-Fri: 9:00 AM - 6:00 PM SGT',
            description: 'Center for Asian and Oceanian operations'
        },
        {
            id: 'middleeast',
            name: 'Middle East Center',
            address: '101 Progress Road, Dubai, UAE',
            phone: '+971 4 123 4567',
            email: 'middleeast@golide-minerals.com',
            hours: 'Sun-Thu: 8:00 AM - 5:00 PM GST',
            description: 'Base for Middle Eastern and Central Asian projects'
        }
    ];

    const contactMethods = [
        {
            icon: <Phone className="text-[#8dc6ff]" size={24} />,
            title: 'Call Us',
            details: '+27 (11) 890 4567',
            description: 'Available 24/7 for emergency consultations',
            action: 'Schedule Call'
        },
        {
            icon: <Mail className="text-[#8dc6ff]" size={24} />,
            title: 'Email Us',
            details: 'contact@golide-minerals.co.za',
            description: 'Response within 4 business hours',
            action: 'Send Email'
        },
        {
            icon: <MessageSquare className="text-[#8dc6ff]" size={24} />,
            title: 'Live Chat',
            details: 'Available 8AM-5PM EST',
            description: 'Instant support from our experts',
            action: 'Start Chat'
        }
    ];

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setSubmitSuccess(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                projectType: '',
                budget: '',
                message: '',
                receiveUpdates: true
            });
            setSubmitSuccess(false);
        }, 3000);
    };

    const handleQuickInquiry = (type) => {
        setFormData(prev => ({
            ...prev,
            projectType: type,
            message: `I'm interested in ${type} services. Please contact me with more information.`
        }));
        setActiveTab('inquiry');
    };

    const selectedOfficeData = offices.find(office => office.id === selectedOffice);

    return (
        <SectionContainer
            id="contact"
            bgColor="bg-[#e4f1fe]"
            className="relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 right-10 w-64 h-64 border-4 border-[#34495e] rounded-full"></div>
                <div className="absolute bottom-10 left-10 w-80 h-80 border-4 border-[#8dc6ff] rounded-full"></div>
                {/* Connection Lines Pattern */}
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(141, 198, 255, 0.1) 2px, transparent 0)`,
                    backgroundSize: '30px 30px'
                }}></div>
            </div>

            <div className="relative z-10">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8dc6ff]/20 to-[#34495e]/20 border border-[#8dc6ff]/30 rounded-full px-4 py-2 mb-4">
                        <MessageSquare size={16} className="text-[#8dc6ff]" />
                        <span className="text-sm font-medium text-[#22313f]">Get in Touch</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#22313f] mb-6">
                        Let us Build Together
                    </h2>
                    <p className="text-xl text-[#34495e]">
                        Ready to start your next construction project? Contact our team for expert consultation.
                    </p>
                </div>

                {/* Quick Inquiry Tabs */}
                <div className="mb-12">
                    <div className="flex flex-wrap gap-3 mb-6">
                        {[
                            'Mineral Extraction Inquiry',
                            'Infrastructure Consultation',
                            'Sustainability Project',
                            'Safety Assessment',
                            'General Inquiry'
                        ].map((inquiry, index) => (
                            <button
                                key={index}
                                onClick={() => handleQuickInquiry(inquiry.split(' ')[0])}
                                className="px-5 py-3 bg-gradient-to-r from-[#8dc6ff]/10 to-[#34495e]/10 text-[#22313f] rounded-lg border border-[#8dc6ff]/30 hover:border-[#8dc6ff] transition-colors"
                            >
                                {inquiry}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Column - Contact Form */}
                    <div>
                        <Card className="p-8 h-full">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#8dc6ff] to-[#34495e] rounded-xl flex items-center justify-center text-white">
                                    <Send size={24} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-[#8dc6ff]">Send Inquiry</h3>
                                    <p className="text-[#e4f1fe]">Fill out the form and we will respond within 24 hours</p>
                                </div>
                            </div>

                            {/* Form Tabs */}
                            <div className="flex border-b border-[#e4f1fe] mb-6">
                                <button
                                    onClick={() => setActiveTab('inquiry')}
                                    className={`px-6 py-3 font-medium ${activeTab === 'inquiry' ? 'text-[#8dc6ff] border-b-2 border-[#8dc6ff]' : 'text-[#8dc6ff]'}`}
                                >
                                    Project Inquiry
                                </button>
                                <button
                                    onClick={() => setActiveTab('support')}
                                    className={`px-6 py-3 font-medium ${activeTab === 'support' ? 'text-[#8dc6ff] border-b-2 border-[#8dc6ff]' : 'text-[#8dc6ff]'}`}
                                >
                                    Technical Support
                                </button>
                                <button
                                    onClick={() => setActiveTab('careers')}
                                    className={`px-6 py-3 font-medium ${activeTab === 'careers' ? 'text-[#8dc6ff] border-b-2 border-[#8dc6ff]' : 'text-[#8dc6ff]'}`}
                                >
                                    Careers Inquiry
                                </button>
                            </div>

                            {submitSuccess ? (
                                <div className="text-center py-12">
                                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#8dc6ff] to-[#34495e] rounded-full flex items-center justify-center text-white">
                                        <CheckCircle size={32} />
                                    </div>
                                    <h4 className="text-2xl font-bold text-[#8dc6ff] mb-3">Message Sent Successfully!</h4>
                                    <p className="text-[#e4f1fe] mb-8">
                                        Thank you for contacting Golide Minerals Exchange. Our team will get back to you within 24 hours.
                                    </p>
                                    <Button variant="outline" onClick={() => setSubmitSuccess(false)}>
                                        Send Another Inquiry
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label className="block text-sm font-medium text-[#e4f1fe] mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 bg-white border border-[#e4f1fe] rounded-lg text-[#22313f] placeholder:text-[#34495e]/50 focus:outline-none focus:border-[#8dc6ff] focus:ring-2 focus:ring-[#8dc6ff]/20"
                                                placeholder="John Smith"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-[#e4f1fe] mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 bg-white border border-[#e4f1fe] rounded-lg text-[#22313f] placeholder:text-[#34495e]/50 focus:outline-none focus:border-[#8dc6ff] focus:ring-2 focus:ring-[#8dc6ff]/20"
                                                placeholder="john@company.com"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-[#e4f1fe] mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 bg-white border border-[#e4f1fe] rounded-lg text-[#22313f] placeholder:text-[#34495e]/50 focus:outline-none focus:border-[#8dc6ff] focus:ring-2 focus:ring-[#8dc6ff]/20"
                                                placeholder="+1 (555) 123-4567"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-[#e4f1fe] mb-2">
                                                Company / Organization
                                            </label>
                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 bg-white border border-[#e4f1fe] rounded-lg text-[#22313f] placeholder:text-[#34495e]/50 focus:outline-none focus:border-[#8dc6ff] focus:ring-2 focus:ring-[#8dc6ff]/20"
                                                placeholder="Company Name"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label className="block text-sm font-medium text-[#e4f1fe] mb-2">
                                                Project Type *
                                            </label>
                                            <select
                                                name="projectType"
                                                value={formData.projectType}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 bg-white border border-[#e4f1fe] rounded-lg text-[#22313f] focus:outline-none focus:border-[#8dc6ff] focus:ring-2 focus:ring-[#8dc6ff]/20"
                                            >
                                                <option value="">Select Project Type</option>
                                                {projectTypes.map((type, index) => (
                                                    <option key={index} value={type}>{type}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-[#e4f1fe] mb-2">
                                                Estimated Budget
                                            </label>
                                            <select
                                                name="budget"
                                                value={formData.budget}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 bg-white border border-[#e4f1fe] rounded-lg text-[#22313f] focus:outline-none focus:border-[#8dc6ff] focus:ring-2 focus:ring-[#8dc6ff]/20"
                                            >
                                                <option value="">Select Budget Range</option>
                                                {budgetRanges.map((range, index) => (
                                                    <option key={index} value={range}>{range}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <label className="block text-sm font-medium text-[#e4f1fe] mb-2">
                                            Project Details *
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows="5"
                                            className="w-full px-4 py-3 bg-white border border-[#e4f1fe] rounded-lg text-[#22313f] placeholder:text-[#34495e]/50 focus:outline-none focus:border-[#8dc6ff] focus:ring-2 focus:ring-[#8dc6ff]/20"
                                            placeholder="Tell us about your project requirements, timeline, and any specific challenges..."
                                        />
                                    </div>

                                    <div className="flex items-center gap-3 mb-8">
                                        <input
                                            type="checkbox"
                                            id="receiveUpdates"
                                            name="receiveUpdates"
                                            checked={formData.receiveUpdates}
                                            onChange={handleInputChange}
                                            className="w-4 h-4 text-[#8dc6ff] bg-white border-[#e4f1fe] rounded focus:ring-[#8dc6ff]"
                                        />
                                        <label htmlFor="receiveUpdates" className="text-sm text-[#e4f1fe]">
                                            I agree to receive updates, newsletters, and promotional materials from Golide Minerals Exchange
                                        </label>
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full group"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                                        <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>

                                    <p className="text-sm text-[#e4f1fe] text-center mt-4">
                                        By submitting, you agree to our Privacy Policy and Terms of Service
                                    </p>
                                </form>
                            )}
                        </Card>
                    </div>

                    {/* Right Column - Contact Details */}
                    <div className="space-y-8">
                        {/* Contact Methods */}
                        <div className="grid sm:grid-cols-3 gap-6">
                            {contactMethods.map((method, index) => (
                                <Card key={index} className="p-6 text-center">
                                    <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-[#8dc6ff]/10 to-[#34495e]/10 rounded-xl flex items-center justify-center">
                                        {method.icon}
                                    </div>
                                    <h4 className="font-bold text-[#8dc6ff] mb-2">{method.title}</h4>
                                    <p className="text-sm text-[#e4f1fe] mb-3">{method.details}</p>
                                    <p className="text-xs text-[#e4f1fe]/70 mb-4">{method.description}</p>
                                    <Button variant="outline" size="sm" className="w-full">
                                        {method.action}
                                    </Button>
                                </Card>
                            ))}
                        </div>

                        {/* Global Offices */}
                        <Card className="p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <Globe className="text-[#8dc6ff]" size={24} />
                                <h3 className="text-2xl font-bold text-[#8dc6ff]">Global Offices</h3>
                            </div>

                            {/* Office Selector */}
                            <div className="flex flex-wrap gap-3 mb-6">
                                {offices.map((office) => (
                                    <button
                                        key={office.id}
                                        onClick={() => setSelectedOffice(office.id)}
                                        className={`px-4 py-2 rounded-lg transition-all ${selectedOffice === office.id
                                            ? 'bg-gradient-to-r from-[#8dc6ff] to-[#34495e] text-white'
                                            : 'bg-[#e4f1fe] text-[#22313f]'
                                            }`}
                                    >
                                        {office.name.split(' ')[0]}
                                    </button>
                                ))}
                            </div>

                            {/* Selected Office Details */}
                            {selectedOfficeData && (
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-[#8dc6ff]/10 to-[#34495e]/10 rounded-lg flex items-center justify-center">
                                            <Building className="text-[#8dc6ff]" size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#8dc6ff] mb-1">{selectedOfficeData.name}</h4>
                                            <p className="text-sm text-[#e4f1fe]">{selectedOfficeData.description}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <MapPin size={18} className="text-[#e4f1fe]" />
                                            <span className="text-[#e4f1fe]">{selectedOfficeData.address}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Phone size={18} className="text-[#e4f1fe]" />
                                            <span className="text-[#e4f1fe]">{selectedOfficeData.phone}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Mail size={18} className="text-[#e4f1fe]" />
                                            <span className="text-[#e4f1fe]">{selectedOfficeData.email}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Clock size={18} className="text-[#e4f1fe]" />
                                            <span className="text-[#e4f1fe]">{selectedOfficeData.hours}</span>
                                        </div>
                                    </div>

                                    {/* Map Visualization */}
                                    <div className="mt-6 pt-6 border-t border-[#e4f1fe]">
                                        <div className="h-48 rounded-lg bg-gradient-to-br from-[#8dc6ff]/10 to-[#34495e]/20 border border-[#8dc6ff]/30 flex items-center justify-center">
                                            <div className="text-center">
                                                <MapPin className="mx-auto mb-2 text-[#8dc6ff]" size={32} />
                                                <p className="text-[#8dc6ff] font-medium">{selectedOfficeData.name}</p>
                                                <p className="text-sm text-[#e4f1fe]">Interactive Map</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Card>

                        {/* Response Time Guarantee */}
                        <Card className="p-8 bg-gradient-to-br from-[#22313f] to-[#34495e] text-[#e4f1fe]">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#8dc6ff] to-[#e4f1fe] rounded-xl flex items-center justify-center">
                                    <Shield className="text-[#22313f]" size={28} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Response Time Guarantee</h3>
                                    <p className="text-[#e4f1fe]/80">We commit to responding within 24 hours</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center">
                                    <div className="text-3xl font-bold mb-1">24h</div>
                                    <div className="text-sm text-[#e4f1fe]/80">Initial Response</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold mb-1">48h</div>
                                    <div className="text-sm text-[#e4f1fe]/80">Detailed Proposal</div>
                                </div>
                            </div>
                        </Card>

                        {/* Emergency Contact */}
                        <Card className="p-8 border-2 border-[#8dc6ff]/30">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#8dc6ff] to-[#34495e] rounded-lg flex items-center justify-center text-white">
                                    <PhoneCall size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#8dc6ff]">Emergency Contact</h3>
                                    <p className="text-[#e4f1fe]">24/7 for urgent matters</p>
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-[#8dc6ff] mb-2">+27 (11) 234-4567</div>
                                <p className="text-sm text-[#e4f1fe]">Available round the clock for emergency construction situations</p>
                            </div>
                        </Card>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <Card className="p-12 bg-gradient-to-br from-[#8dc6ff] to-[#34495e] text-center relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 left-0 w-64 h-64 border-4 border-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                            <div className="absolute bottom-0 right-0 w-80 h-80 border-4 border-white rounded-full transform translate-x-1/2 translate-y-1/2"></div>
                        </div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-4">
                                <Users size={16} className="text-white" />
                                <span className="text-sm font-medium text-white">Partnership Ready</span>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Ready to Transform Your Vision into Reality?
                            </h3>
                            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                                Join over 250 successful clients who have trusted us with their most ambitious construction projects.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" variant="secondary" className="group">
                                    Schedule Consultation
                                    <Calendar className="inline ml-2 group-hover:scale-110 transition-transform" />
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="text-white border-white hover:bg-white hover:text-[#22313f]"
                                >
                                    Download Brochure
                                    <ChevronRight className="inline ml-2" />
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </SectionContainer>
    );
};

