'use client';

import {
    Building2, Drill, Mountain, Factory,
    Wrench, Shield, Leaf, Zap,
    Globe, BarChart3, CheckCircle, ArrowRight,
    Toolbox, Anchor, HardHat, Truck
} from 'lucide-react';

import SectionContainer from '@/app/components/SectionContainer';
import Card from '@/app/components/Card';
import IconBox from '@/app/components/IconBox';
import Button from '@/app/components/Button';
import Tabs from '@/app/components/Tabs';
import { useState, useEffect } from 'react';



const ServiceCard = ({ service, onClick }) => (
    <Card
        className="p-6 group cursor-pointer h-full flex flex-col"
        hover={true}
        onClick={onClick}
    >
        <div className="flex items-start gap-4 mb-4">
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white`}>
                {service.icon}
            </div>
            <div>
                <h4 className="text-xl font-bold text-[#e4f1fe] mb-2">{service.title}</h4>
                <p className="text-sm text-[#e4f1fe]/80">{service.description}</p>
            </div>
        </div>

        <div className="space-y-2 mb-6">
            {service.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-[#8dc6ff]" />
                    <span className="text-sm text-[#e4f1fe]/90">{feature}</span>
                </div>
            ))}
        </div>

        <div className="mt-auto pt-4 border-t border-[#e4f1fe]/10">
            <button className="text-[#8dc6ff] text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                View Details
                <ArrowRight size={16} />
            </button>
        </div>
    </Card>
);

export default function Services() {
    const [selectedService, setSelectedService] = useState(null);

    const constructionServices = [
        {
            id: 1,
            icon: <Building2 size={28} />,
            title: 'Mineral Extraction',
            description: 'Advanced extraction methodologies for sustainable mineral resources',
            features: [
                'Surface & underground mining',
                'Mineral processing plants',
                'Resource optimization',
                'Environmental monitoring'
            ],
            color: 'from-[#34495e] to-[#22313f]'
        },
        {
            id: 2,
            icon: <Drill size={28} />,
            title: 'Deep Foundation',
            description: 'Specialized foundation solutions for complex geological conditions',
            features: [
                'Pile foundation systems',
                'Diaphragm walls',
                'Ground improvement',
                'Underpinning solutions'
            ],
            color: 'from-[#34495e] to-[#22313f]'
        },
        {
            id: 3,
            icon: <Mountain size={28} />,
            title: 'Tunnel Construction',
            description: 'Safe and efficient tunnel construction through challenging terrains',
            features: [
                'TBM tunneling',
                'Drill & blast methods',
                'Ventilation systems',
                'Safety monitoring'
            ],
            color: 'from-[#34495e] to-[#22313f]'
        },
        {
            id: 4,
            icon: <Factory size={28} />,
            title: 'Industrial Plants',
            description: 'Turnkey solutions for mineral processing and industrial facilities',
            features: [
                'Processing plant design',
                'Material handling systems',
                'Automation integration',
                'Quality control labs'
            ],
            color: 'from-[#34495e] to-[#22313f]'
        },
        {
            id: 5,
            icon: <Wrench size={28} />,
            title: 'Heavy Civil Works',
            description: 'Large-scale infrastructure development and civil engineering',
            features: [
                'Bridges & viaducts',
                'Dams & reservoirs',
                'Ports & harbors',
                'Railway networks'
            ],
            color: 'from-[#34495e] to-[#22313f]'
        },
        {
            id: 6,
            icon: <Shield size={28} />,
            title: 'Safety Engineering',
            description: 'Comprehensive safety systems and risk management',
            features: [
                'Risk assessment',
                'Safety protocols',
                'Emergency response',
                'Compliance auditing'
            ],
            color: 'from-[#34495e] to-[#22313f]'
        }
    ];

    const expertiseAreas = [
        {
            title: 'Sustainable Mining',
            description: 'Eco-friendly extraction methods with minimal environmental impact',
            icon: <Leaf size={24} />,
            stats: '40% less environmental impact'
        },
        {
            title: 'Advanced Drilling',
            description: 'Precision drilling technologies for optimal resource extraction',
            icon: <Drill size={24} />,
            stats: '99.8% accuracy rate'
        },
        {
            title: 'Automation',
            description: 'AI-powered automation for enhanced efficiency and safety',
            icon: <Zap size={24} />,
            stats: '60% efficiency gain'
        },
        {
            title: 'Global Logistics',
            description: 'Worldwide supply chain management for materials and equipment',
            icon: <Globe size={24} />,
            stats: '50+ countries served'
        }
    ];

    const technologies = [
        { name: '3D Geological Mapping', level: 95 },
        { name: 'Automated Drilling Systems', level: 90 },
        { name: 'Real-time Monitoring', level: 98 },
        { name: 'Sustainable Material Processing', level: 85 },
        { name: 'AI-Powered Safety Systems', level: 92 }
    ];

    // Create tab content using the ServiceCard component
    const allServicesTab = (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {constructionServices.map((service) => (
                <ServiceCard
                    key={service.id}
                    service={service}
                    onClick={() => setSelectedService(service)}
                />
            ))}
        </div>
    );

    const specializedTab = (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {constructionServices.slice(0, 3).map((service) => (
                <ServiceCard
                    key={service.id}
                    service={service}
                    onClick={() => setSelectedService(service)}
                />
            ))}
        </div>
    );

    const infrastructureTab = (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {constructionServices.slice(3).map((service) => (
                <ServiceCard
                    key={service.id}
                    service={service}
                    onClick={() => setSelectedService(service)}
                />
            ))}
        </div>
    );

    const tabs = [
        {
            label: 'All Services',
            content: allServicesTab
        },
        {
            label: 'Specialized',
            content: specializedTab
        },
        {
            label: 'Infrastructure',
            content: infrastructureTab
        }
    ];

    // Progress bar animation effect
    useEffect(() => {
        const animateProgressBars = () => {
            const progressBars = document.querySelectorAll('.progress-bar-fill');
            progressBars.forEach((bar) => {
                const width = bar.getAttribute('data-width');
                setTimeout(() => {
                    bar.style.width = `${width}%`;
                }, 300);
            });
        };

        // Use Intersection Observer to trigger animation when section is visible
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animateProgressBars();
                    }
                });
            },
            { threshold: 0.3 }
        );

        const servicesSection = document.getElementById('services');
        if (servicesSection) {
            observer.observe(servicesSection);
        }

        return () => {
            if (servicesSection) {
                observer.unobserve(servicesSection);
            }
        };
    }, []);

    return (
        <SectionContainer
            id="services"
            bgColor="bg-[#22313f]"
            className="relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-1/4 w-96 h-96 border-2 border-[#8dc6ff] rounded-full"></div>
                <div className="absolute bottom-0 right-1/4 w-80 h-80 border-2 border-[#e4f1fe] rounded-full"></div>
                {/* Construction Pattern */}
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(141, 198, 255, 0.1) 2px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8dc6ff]/20 to-[#34495e]/20 border border-[#8dc6ff]/30 rounded-full px-4 py-2 mb-4">
                        <Toolbox size={16} className="text-[#8dc6ff]" />
                        <span className="text-sm font-medium text-[#e4f1fe]">Our Expertise</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#e4f1fe] mb-6">
                        Construction Services
                    </h2>
                    <p className="text-xl text-[#e4f1fe]/80">
                        Comprehensive mineral construction solutions backed by cutting-edge technology and decades of expertise.
                    </p>
                </div>

                {/* Interactive Tabs */}
                <div className="mb-16">
                    <Tabs
                        tabs={tabs}
                        onTabChange={() => setSelectedService(null)}
                    />
                </div>

                {/* Selected Service Detail */}
                {selectedService && (
                    <div className="mb-12 animate-fadeIn">
                        <Card className="p-8 border-2 border-[#8dc6ff]/30">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${selectedService.color} flex items-center justify-center text-white`}>
                                        {selectedService.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-[#e4f1fe]">{selectedService.title}</h3>
                                        <p className="text-[#e4f1fe]/80">{selectedService.description}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedService(null)}
                                    className="text-[#8dc6ff] hover:text-[#e4f1fe] transition-colors p-2"
                                >
                                    ✕
                                </button>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-lg font-semibold text-[#e4f1fe] mb-4">Key Features</h4>
                                    <ul className="space-y-3">
                                        {selectedService.features.map((feature, index) => (
                                            <li key={index} className="flex items-center gap-3">
                                                <div className="w-2 h-2 bg-[#8dc6ff] rounded-full"></div>
                                                <span className="text-[#e4f1fe]/90">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-[#e4f1fe] mb-4">Capabilities</h4>
                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-[#e4f1fe]/90">Project Scale</span>
                                                <span className="text-[#8dc6ff] font-medium">Large-scale</span>
                                            </div>
                                            <div className="w-full bg-[#34495e] rounded-full h-2 overflow-hidden">
                                                <div
                                                    className="progress-bar-fill bg-gradient-to-r from-[#8dc6ff] to-[#34495e] h-2 rounded-full transition-all duration-1000 ease-out"
                                                    data-width="75"
                                                ></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-[#e4f1fe]/90">Technology Integration</span>
                                                <span className="text-[#8dc6ff] font-medium">Advanced</span>
                                            </div>
                                            <div className="w-full bg-[#34495e] rounded-full h-2 overflow-hidden">
                                                <div
                                                    className="progress-bar-fill bg-gradient-to-r from-[#8dc6ff] to-[#34495e] h-2 rounded-full transition-all duration-1000 ease-out"
                                                    data-width="80"
                                                ></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-[#e4f1fe]/90">Global Reach</span>
                                                <span className="text-[#8dc6ff] font-medium">Worldwide</span>
                                            </div>
                                            <div className="w-full bg-[#34495e] rounded-full h-2 overflow-hidden">
                                                <div
                                                    className="progress-bar-fill bg-gradient-to-r from-[#8dc6ff] to-[#34495e] h-2 rounded-full transition-all duration-1000 ease-out"
                                                    data-width="90"
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                )}

                {/* Expertise Areas */}
                <div className="mb-16">
                    <div className="text-center mb-10">
                        <h3 className="text-3xl font-bold text-[#e4f1fe] mb-4">Specialized Expertise</h3>
                        <p className="text-[#e4f1fe]/80 max-w-2xl mx-auto">
                            Advanced capabilities that set us apart in the global construction industry.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {expertiseAreas.map((expertise, index) => (
                            <Card
                                key={index}
                                className="p-6 text-center group hover:border-[#8dc6ff]/50 transition-colors"
                                variant="glass"
                            >
                                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#8dc6ff] to-[#34495e] rounded-xl flex items-center justify-center text-white">
                                    {expertise.icon}
                                </div>
                                <h4 className="text-xl font-bold text-[#e4f1fe] mb-2">{expertise.title}</h4>
                                <p className="text-[#e4f1fe]/80 mb-4 text-sm">{expertise.description}</p>
                                <div className="text-[#8dc6ff] font-semibold text-sm">
                                    {expertise.stats}
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Technology & Innovation */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h3 className="text-3xl font-bold text-[#e4f1fe] mb-6">Technology Mastery</h3>
                        <p className="text-[#e4f1fe]/80 mb-8">
                            Leveraging cutting-edge technologies to deliver superior construction outcomes with precision and efficiency.
                        </p>

                        <div className="space-y-6">
                            {technologies.map((tech, index) => (
                                <div key={index} className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-[#e4f1fe] font-medium">{tech.name}</span>
                                        <span className="text-[#8dc6ff] font-bold">{tech.level}%</span>
                                    </div>
                                    <div className="w-full bg-[#34495e] rounded-full h-3 overflow-hidden">
                                        <div
                                            className="progress-bar-fill bg-gradient-to-r from-[#8dc6ff] to-[#34495e] h-3 rounded-full transition-all duration-1000 ease-out"
                                            data-width={tech.level}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <Card className="p-8 h-full" variant="highlight">
                            <div className="text-center mb-6">
                                <HardHat className="w-12 h-12 mx-auto mb-4 text-[#8dc6ff]" />
                                <h4 className="text-2xl font-bold text-[#e4f1fe] mb-3">Why Choose Us?</h4>
                                <p className="text-[#e4f1fe]/80">
                                    Experience the difference with our integrated approach to mineral construction.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {[
                                    'Integrated project lifecycle management',
                                    'Real-time progress monitoring',
                                    'Sustainable construction practices',
                                    '24/7 global support network',
                                    'Cutting-edge safety protocols',
                                    'Transparent communication'
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-[#8dc6ff] rounded-full"></div>
                                        <span className="text-[#e4f1fe]/90">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 pt-6 border-t border-[#e4f1fe]/20">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-3xl font-bold text-[#e4f1fe]">250+</div>
                                        <div className="text-sm text-[#e4f1fe]/80">Successful Projects</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-[#e4f1fe]">98%</div>
                                        <div className="text-sm text-[#e4f1fe]/80">Client Satisfaction</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-[#e4f1fe]">15+</div>
                                        <div className="text-sm text-[#e4f1fe]/80">Years Experience</div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>

                {/* Process Flow */}
                <div className="mb-16">
                    <div className="text-center mb-10">
                        <h3 className="text-3xl font-bold text-[#e4f1fe] mb-4">Our Process</h3>
                        <p className="text-[#e4f1fe]/80 max-w-2xl mx-auto">
                            A streamlined approach from concept to completion, ensuring excellence at every stage.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Process Line */}
                        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#8dc6ff] via-[#34495e] to-[#8dc6ff] transform -translate-y-1/2"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                            {[
                                { step: '01', title: 'Consultation', desc: 'Needs assessment & planning', icon: <BarChart3 size={24} /> },
                                { step: '02', title: 'Design', desc: 'Technical specifications & planning', icon: <Toolbox size={24} /> },
                                { step: '03', title: 'Execution', desc: 'Construction & implementation', icon: <HardHat size={24} /> },
                                { step: '04', title: 'Quality Control', desc: 'Testing & compliance verification', icon: <Shield size={24} /> },
                                { step: '05', title: 'Delivery', desc: 'Project handover & support', icon: <Truck size={24} /> }
                            ].map((process, index) => (
                                <div key={index} className="relative z-10">
                                    <Card className="p-6 text-center">
                                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#8dc6ff] to-[#34495e] rounded-full flex items-center justify-center text-white text-xl font-bold">
                                            {process.step}
                                        </div>
                                        <div className="w-12 h-12 mx-auto mb-4 bg-[#22313f] rounded-xl flex items-center justify-center text-[#8dc6ff]">
                                            {process.icon}
                                        </div>
                                        <h4 className="text-lg font-bold text-[#e4f1fe] mb-2">{process.title}</h4>
                                        <p className="text-sm text-[#e4f1fe]/80">{process.desc}</p>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
};


