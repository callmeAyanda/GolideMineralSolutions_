'use client';

import {
    Globe, Calendar, MapPin, DollarSign,
    Users, Clock, Award, ChevronRight,
    ArrowUpRight, Maximize2, Filter as FilterIcon,
    TrendingUp, Shield, Leaf, Zap
} from 'lucide-react';
import { useState, useEffect } from 'react';
import SectionContainer from '@/app/components/SectionContainer';
import Card from '@/app/components/Card';
import Button from '@/app/components/Button';
import Filter from '@/app/components/Filter';


export default function Projects() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'detailed'
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [isClient, setIsClient] = useState(false);

    // useEffect(() => {
    // setIsClient(true);
    // }, []);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isModalOpen]);

    const categories = [
        { id: 'mining', name: 'Mining', count: 8 },
        { id: 'infrastructure', name: 'Infrastructure', count: 12 },
        { id: 'industrial', name: 'Industrial Plants', count: 6 },
        { id: 'tunneling', name: 'Tunneling', count: 4 },
        { id: 'sustainable', name: 'Sustainable', count: 10 }
    ];

    const projects = [
        {
            id: 1,
            title: 'Atlas Mountain Mining Complex',
            category: 'mining',
            year: '2023',
            location: 'Chile',
            duration: '24 months',
            budget: '$250M',
            teamSize: '450+',
            description: 'Advanced mineral extraction facility in the Andes mountains with sustainable mining practices.',
            highlights: [
                '40% reduction in water usage',
                'Renewable energy integration',
                'Automated safety systems',
                'Zero-waste processing'
            ],
            stats: {
                efficiency: 35,
                safety: 99.8,
                sustainability: 90
            },
            image: '/projects/mining-1.jpg',
            featured: true
        },
        {
            id: 2,
            title: 'Transcontinental Tunnel Network',
            category: 'tunneling',
            year: '2022-2024',
            location: 'Switzerland',
            duration: '36 months',
            budget: '$500M',
            teamSize: '1200+',
            description: 'Underground transportation network connecting major European cities through the Alps.',
            highlights: [
                'Advanced TBM technology',
                'Real-time monitoring systems',
                'Earthquake-resistant design',
                'Automated ventilation'
            ],
            stats: {
                efficiency: 42,
                safety: 99.9,
                sustainability: 85
            },
            image: '/projects/tunnel-1.jpg',
            featured: true
        },
        {
            id: 3,
            title: 'Pacific Coast Processing Plant',
            category: 'industrial',
            year: '2023',
            location: 'Australia',
            duration: '18 months',
            budget: '$180M',
            teamSize: '300+',
            description: 'State-of-the-art mineral processing facility with AI-powered optimization.',
            highlights: [
                'AI-driven quality control',
                'Zero-emission operations',
                'Automated logistics',
                'Smart grid integration'
            ],
            stats: {
                efficiency: 38,
                safety: 99.7,
                sustainability: 88
            },
            image: '/projects/industrial-1.jpg',
            featured: false
        },
        {
            id: 4,
            title: 'Desert Renewable Mining Hub',
            category: 'sustainable',
            year: '2022',
            location: 'Saudi Arabia',
            duration: '30 months',
            budget: '$320M',
            teamSize: '600+',
            description: 'Solar-powered mining operation with water recycling and desert restoration.',
            highlights: [
                '100% renewable energy',
                'Water recycling system',
                'Desert ecosystem restoration',
                'Carbon-negative operations'
            ],
            stats: {
                efficiency: 45,
                safety: 99.6,
                sustainability: 95
            },
            image: '/projects/sustainable-1.jpg',
            featured: true
        },
        {
            id: 5,
            title: 'Arctic Deep Water Port',
            category: 'infrastructure',
            year: '2023-2025',
            location: 'Norway',
            duration: '42 months',
            budget: '$450M',
            teamSize: '800+',
            description: 'Ice-resistant port facility for mineral export in Arctic conditions.',
            highlights: [
                'Ice-breaking technology',
                'Climate-resilient design',
                'Automated cargo handling',
                'Emergency response systems'
            ],
            stats: {
                efficiency: 40,
                safety: 99.9,
                sustainability: 82
            },
            image: '/projects/infrastructure-1.jpg',
            featured: false
        },
        {
            id: 6,
            title: 'Urban Mining Redevelopment',
            category: 'sustainable',
            year: '2023',
            location: 'Germany',
            duration: '20 months',
            budget: '$150M',
            teamSize: '350+',
            description: 'Rehabilitation of former mining sites into sustainable urban communities.',
            highlights: [
                'Land restoration',
                'Community integration',
                'Green infrastructure',
                'Heritage preservation'
            ],
            stats: {
                efficiency: 32,
                safety: 99.5,
                sustainability: 92
            },
            image: '/projects/sustainable-2.jpg',
            featured: false
        }
    ];

    const stats = [
        { value: '250+', label: 'Projects Completed', icon: <Award size={24} /> },
        { value: '$5B+', label: 'Total Investment', icon: <DollarSign size={24} /> },
        { value: '50+', label: 'Countries', icon: <Globe size={24} /> },
        { value: '98.5%', label: 'Success Rate', icon: <TrendingUp size={24} /> }
    ];

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    const featuredProjects = projects.filter(project => project.featured);

    const openProjectModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeProjectModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    // Close modal on escape key
    useEffect(() => {
        const handleEscKey = (e) => {
            if (e.key === 'Escape') closeProjectModal();
        };

        if (isModalOpen) {
            window.addEventListener('keydown', handleEscKey);
        }

        return () => {
            window.removeEventListener('keydown', handleEscKey);
        };
    }, [isModalOpen]);

    return (
        <SectionContainer
            id="projects"
            bgColor="bg-[#e4f1fe]"
            className="relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 right-20 w-96 h-96 border-4 border-[#34495e] rounded-full"></div>
                <div className="absolute bottom-20 left-20 w-80 h-80 border-4 border-[#8dc6ff] rounded-full"></div>
                {/* Grid Pattern */}
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(to right, rgba(34, 49, 63, 0.05) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(34, 49, 63, 0.05) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="relative z-10">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 bg-[#22313f] text-[#e4f1fe] rounded-full px-4 py-2 mb-4">
                        <Award size={16} />
                        <span className="text-sm font-medium">Our Portfolio</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#22313f] mb-6">
                        Building Legacy
                    </h2>
                    <p className="text-xl text-[#34495e]">
                        Explore our landmark projects that define global construction excellence and innovation.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    {stats.map((stat, index) => (
                        <Card key={index} className="p-6 text-center">
                            <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-[#8dc6ff] to-[#34495e] rounded-xl flex items-center justify-center text-white">
                                {stat.icon}
                            </div>
                            <div className="text-3xl font-bold text-[#8dc6ff] mb-2">{stat.value}</div>
                            <div className="text-sm text-[#e4f1fe]">{stat.label}</div>
                        </Card>
                    ))}
                </div>

                {/* Featured Projects */}
                <div className="mb-16">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-2xl font-bold text-[#22313f]">Featured Projects</h3>
                            <p className="text-[#34495e]">Showcase of our most innovative and complex constructions</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-[#22313f] text-[#e4f1fe]' : 'bg-[#e4f1fe] text-[#22313f]'}`}
                            >
                                <Maximize2 size={20} />
                            </button>
                            <button
                                onClick={() => setViewMode('detailed')}
                                className={`p-2 rounded-lg ${viewMode === 'detailed' ? 'bg-[#22313f] text-[#e4f1fe]' : 'bg-[#e4f1fe] text-[#22313f]'}`}
                            >
                                <FilterIcon size={20} />
                            </button>
                        </div>
                    </div>

                    {viewMode === 'grid' ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                            {featuredProjects.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    onClick={() => openProjectModal(project)}
                                    viewMode={viewMode}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="space-y-6 mb-8">
                            {featuredProjects.map((project) => (
                                <DetailedProjectCard
                                    key={project.id}
                                    project={project}
                                    onClick={() => openProjectModal(project)}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Project Filter & Gallery */}
                <div className="mb-16">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-2xl font-bold text-[#22313f]">Project Gallery</h3>
                            <p className="text-[#34495e]">Filter by category to explore specific project types</p>
                        </div>
                        <div className="text-sm text-[#34495e]">
                            Showing {filteredProjects.length} of {projects.length} projects
                        </div>
                    </div>

                    {/* Filter */}
                    <div className="mb-8">
                        <Filter
                            categories={categories}
                            activeCategory={activeCategory}
                            onCategoryChange={setActiveCategory}
                        />
                    </div>

                    {/* Project Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {filteredProjects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onClick={() => openProjectModal(project)}
                                viewMode="grid"
                            />
                        ))}
                    </div>

                    {/* Load More Button */}
                    {filteredProjects.length > 6 && (
                        <div className="text-center">
                            <Button variant="primary" size="lg">
                                Load More Projects
                                <ChevronRight className="inline ml-2" />
                            </Button>
                        </div>
                    )}
                </div>

                {/* Global Reach Map */}
                <Card className="p-8 mb-16 relative overflow-hidden">
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-[#8dc6ff] to-[#34495e] text-white px-4 py-2 rounded-full text-sm font-medium">
                        Global Presence
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-[#8dc6ff] mb-4">Global Footprint</h3>
                            <p className="text-[#e4f1fe] mb-6">
                                Our projects span across continents, demonstrating our capability to deliver excellence
                                in diverse geographical and climatic conditions.
                            </p>

                            <div className="space-y-4">
                                {[
                                    { region: 'Americas', projects: 85, color: 'bg-[#8dc6ff]' },
                                    { region: 'Europe', projects: 62, color: 'bg-[#34495e]' },
                                    { region: 'Asia Pacific', projects: 74, color: 'bg-[#22313f]' },
                                    { region: 'Africa', projects: 29, color: 'bg-gradient-to-r from-[#8dc6ff] to-[#34495e]' }
                                ].map((region, index) => (
                                    <div key={index} className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-3 h-3 rounded-full ${region.color}`}></div>
                                            <span className="font-medium text-[#e4f1fe]">{region.region}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#e4f1fe]">{region.projects} projects</span>
                                            <ArrowUpRight size={16} className="text-[#8dc6ff]" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Map Visualization */}
                        <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#8dc6ff]/10 to-[#34495e]/20 border-2 border-[#e4f1fe] rounded-xl">
                                {/* Simplified World Map */}
                                <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-gradient-to-br from-[#8dc6ff] to-[#34495e] rounded-full opacity-80 animate-pulse"></div>
                                <div className="absolute top-1/3 right-1/3 w-10 h-10 bg-gradient-to-br from-[#34495e] to-[#22313f] rounded-full opacity-80 animate-pulse delay-300"></div>
                                <div className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-gradient-to-br from-[#8dc6ff] to-[#e4f1fe] rounded-full opacity-80 animate-pulse delay-500"></div>
                                <div className="absolute bottom-1/4 right-1/4 w-14 h-14 bg-gradient-to-br from-[#22313f] to-[#34495e] rounded-full opacity-80 animate-pulse delay-700"></div>
                                <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-gradient-to-br from-[#8dc6ff] to-[#34495e] rounded-full opacity-60 animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Project Detail Modal */}
            {isModalOpen && selectedProject && (
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                        {/* Background Overlay */}
                        <div
                            className="fixed inset-0 transition-opacity bg-black/70 backdrop-blur-sm"
                            onClick={closeProjectModal}
                        ></div>

                        {/* Modal Content */}
                        <div className="inline-block align-bottom bg-gradient-to-br from-[#e4f1fe] to-white rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
                            <div className="px-8 pt-8 pb-6">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h3 className="text-3xl font-bold text-[#22313f]">{selectedProject.title}</h3>
                                        <div className="flex items-center gap-4 mt-2">
                                            <span className="inline-flex items-center gap-1 text-[#34495e]">
                                                <MapPin size={16} />
                                                {selectedProject.location}
                                            </span>
                                            <span className="inline-flex items-center gap-1 text-[#34495e]">
                                                <Calendar size={16} />
                                                {selectedProject.year}
                                            </span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={closeProjectModal}
                                        className="text-[#22313f] hover:text-[#8dc6ff] transition-colors p-2"
                                    >
                                        ✕
                                    </button>
                                </div>

                                <div className="grid md:grid-cols-3 gap-6 mb-8">
                                    <div className="md:col-span-2">
                                        {/* Project Image */}
                                        <div className="h-64 md:h-80 rounded-xl bg-gradient-to-br from-[#8dc6ff]/20 to-[#34495e]/30 mb-6 flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="text-4xl font-bold text-[#22313f] mb-2">{selectedProject.title.split(' ')[0]}</div>
                                                <div className="text-[#34495e]">Project Visualization</div>
                                            </div>
                                        </div>

                                        <p className="text-[#34495e] mb-6">{selectedProject.description}</p>
                                    </div>

                                    <div className="space-y-6">
                                        <Card className="p-6">
                                            <h4 className="font-bold text-[#22313f] mb-4">Project Details</h4>
                                            <div className="space-y-3">
                                                <div className="flex justify-between">
                                                    <span className="text-[#34495e]">Duration</span>
                                                    <span className="font-medium text-[#22313f]">{selectedProject.duration}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-[#34495e]">Budget</span>
                                                    <span className="font-medium text-[#22313f]">{selectedProject.budget}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-[#34495e]">Team Size</span>
                                                    <span className="font-medium text-[#22313f]">{selectedProject.teamSize}</span>
                                                </div>
                                            </div>
                                        </Card>

                                        <Card className="p-6">
                                            <h4 className="font-bold text-[#22313f] mb-4">Performance Metrics</h4>
                                            <div className="space-y-4">
                                                <div>
                                                    <div className="flex justify-between mb-1">
                                                        <span className="text-[#34495e]">Efficiency</span>
                                                        <span className="font-medium text-[#22313f]">{selectedProject.stats.efficiency}%</span>
                                                    </div>
                                                    <div className="w-full bg-[#e4f1fe] rounded-full h-2">
                                                        <div
                                                            className="bg-gradient-to-r from-[#8dc6ff] to-[#34495e] h-2 rounded-full transition-all duration-1000"
                                                            style={{ width: `${selectedProject.stats.efficiency}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="flex justify-between mb-1">
                                                        <span className="text-[#34495e]">Safety</span>
                                                        <span className="font-medium text-[#22313f]">{selectedProject.stats.safety}%</span>
                                                    </div>
                                                    <div className="w-full bg-[#e4f1fe] rounded-full h-2">
                                                        <div
                                                            className="bg-gradient-to-r from-[#8dc6ff] to-[#34495e] h-2 rounded-full transition-all duration-1000"
                                                            style={{ width: `${selectedProject.stats.safety}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="flex justify-between mb-1">
                                                        <span className="text-[#34495e]">Sustainability</span>
                                                        <span className="font-medium text-[#22313f]">{selectedProject.stats.sustainability}%</span>
                                                    </div>
                                                    <div className="w-full bg-[#e4f1fe] rounded-full h-2">
                                                        <div
                                                            className="bg-gradient-to-r from-[#8dc6ff] to-[#34495e] h-2 rounded-full transition-all duration-1000"
                                                            style={{ width: `${selectedProject.stats.sustainability}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <h4 className="font-bold text-[#22313f] mb-4">Key Highlights</h4>
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {selectedProject.highlights.map((highlight, index) => (
                                            <div key={index} className="flex items-center gap-3 bg-[#e4f1fe]/30 rounded-lg p-3">
                                                <div className="w-2 h-2 bg-[#8dc6ff] rounded-full"></div>
                                                <span className="text-[#34495e]">{highlight}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex justify-end gap-4">
                                    <Button variant="outline" onClick={closeProjectModal}>
                                        Close
                                    </Button>
                                    <Button>
                                        Request Case Study
                                        <ArrowUpRight className="inline ml-2" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </SectionContainer>
    );
};

// Project Card Component
const ProjectCard = ({ project, onClick, viewMode }) => (
    <Card
        className="group cursor-pointer overflow-hidden hover-lift"
        onClick={onClick}
    >
        <div className="relative h-48 overflow-hidden">
            {/* Project Image Placeholder */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.category === 'sustainable' ? 'from-[#8dc6ff]/30 to-[#34495e]/30' :
                project.category === 'mining' ? 'from-[#22313f]/30 to-[#34495e]/30' :
                    'from-[#8dc6ff]/20 to-[#22313f]/30'}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <div className="text-2xl font-bold text-[#8dc6ff] mb-1">{project.title.split(' ')[0]}</div>
                        <div className="text-sm text-[#e4f1fe]">{project.category}</div>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 right-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <ArrowUpRight className="text-[#22313f]" size={20} />
                    </div>
                </div>
            </div>

            {/* Category Badge */}
            <div className="absolute top-4 left-4 bg-gradient-to-r from-[#8dc6ff] to-[#34495e] text-white text-xs font-medium px-3 py-1 rounded-full">
                {project.category}
            </div>
        </div>

        <div className="p-6">
            <h4 className="text-xl font-bold text-[#8dc6ff] mb-2 line-clamp-1">{project.title}</h4>
            <p className="text-[#e4f1fe] text-sm mb-4 line-clamp-2">{project.description}</p>

            <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-[#e4f1fe]">
                        <MapPin size={14} />
                        {project.location}
                    </span>
                    <span className="flex items-center gap-1 text-[#e4f1fe]">
                        <Calendar size={14} />
                        {project.year}
                    </span>
                </div>
                {project.featured && (
                    <div className="text-[#8dc6ff] font-medium">Featured</div>
                )}
            </div>
        </div>
    </Card>
);

// Detailed Project Card Component
const DetailedProjectCard = ({ project, onClick }) => (
    <Card className="group cursor-pointer" onClick={onClick}>
        <div className="grid md:grid-cols-3 gap-6">
            {/* Left: Image */}
            <div className="relative h-48 md:h-full rounded-xl overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.category === 'sustainable' ? 'from-[#8dc6ff]/30 to-[#34495e]/30' :
                    project.category === 'mining' ? 'from-[#22313f]/30 to-[#34495e]/30' :
                        'from-[#8dc6ff]/20 to-[#22313f]/30'}`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                            <div className="text-xl font-bold text-[#22313f]">{project.title.split(' ')[0]}</div>
                            <div className="text-sm text-[#34495e]">{project.category}</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Middle: Details */}
            <div className="md:col-span-2">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <h4 className="text-2xl font-bold text-[#22313f] mb-2">{project.title}</h4>
                        <div className="flex items-center gap-4 mb-3">
                            <span className="inline-flex items-center gap-1 text-[#34495e]">
                                <MapPin size={16} />
                                {project.location}
                            </span>
                            <span className="inline-flex items-center gap-1 text-[#34495e]">
                                <Calendar size={16} />
                                {project.year}
                            </span>
                            <span className="inline-flex items-center gap-1 text-[#34495e]">
                                <DollarSign size={16} />
                                {project.budget}
                            </span>
                        </div>
                    </div>
                    {project.featured && (
                        <div className="bg-gradient-to-r from-[#8dc6ff] to-[#34495e] text-white text-xs font-medium px-3 py-1 rounded-full">
                            Featured
                        </div>
                    )}
                </div>

                <p className="text-[#34495e] mb-4">{project.description}</p>

                <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center p-3 bg-[#e4f1fe]/30 rounded-lg">
                        <div className="text-lg font-bold text-[#22313f]">{project.duration}</div>
                        <div className="text-xs text-[#34495e]">Duration</div>
                    </div>
                    <div className="text-center p-3 bg-[#e4f1fe]/30 rounded-lg">
                        <div className="text-lg font-bold text-[#22313f]">{project.teamSize}</div>
                        <div className="text-xs text-[#34495e]">Team Size</div>
                    </div>
                    <div className="text-center p-3 bg-[#e4f1fe]/30 rounded-lg">
                        <div className="text-lg font-bold text-[#22313f]">{project.stats.efficiency}%</div>
                        <div className="text-xs text-[#34495e]">Efficiency</div>
                    </div>
                </div>

                <button className="text-[#8dc6ff] font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    View Project Details
                    <ArrowUpRight size={16} />
                </button>
            </div>
        </div>
    </Card>
);


