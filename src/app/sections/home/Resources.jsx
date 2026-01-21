'use client';

import {
    Download, FileText, BookOpen, Video,
    Calendar, User, Clock, TrendingUp,
    ArrowRight, Search, Filter, Bookmark,
    Share2, Eye, BarChart, Globe,
    Shield, Leaf, Zap, Award
} from 'lucide-react';
import { useState } from 'react';
import SectionContainer from '@/app/components/SectionContainer';
import Card from '@/app/components/Card';
import Button from '@/app/components/Button';


const getTypeIcon = (type) => {
    switch (type) {
        case 'whitepaper': return <FileText size={20} className="text-[#8dc6ff]" />;
        case 'casestudy': return <BarChart size={20} className="text-[#8dc6ff]" />;
        case 'report': return <TrendingUp size={20} className="text-[#8dc6ff]" />;
        case 'guide': return <BookOpen size={20} className="text-[#8dc6ff]" />;
        case 'video': return <Video size={20} className="text-[#8dc6ff]" />;
        default: return <FileText size={20} />;
    }
};

const getTypeColor = (type) => {
    switch (type) {
        case 'whitepaper': return 'bg-gradient-to-br from-[#8dc6ff]/20 to-[#22313f]/20';
        case 'casestudy': return 'bg-gradient-to-br from-[#34495e]/20 to-[#8dc6ff]/20';
        case 'report': return 'bg-gradient-to-br from-[#22313f]/20 to-[#34495e]/20';
        case 'guide': return 'bg-gradient-to-br from-[#8dc6ff]/20 to-[#34495e]/20';
        case 'video': return 'bg-gradient-to-br from-[#34495e]/20 to-[#22313f]/20';
        default: return 'bg-gradient-to-br from-[#8dc6ff]/20 to-[#34495e]/20';
    }
};


// Resource Card Component
const ResourceCard = ({ resource, onView, compact = false }) => {
    const {
        title,
        type,
        category,
        description,
        author,
        date,
        readTime,
        downloads,
        views,
        featured,
        tags
    } = resource;

    if (compact) {
        return (
            <Card className="group cursor-pointer" onClick={onView}>
                <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 rounded-lg ${getTypeColor(type)} flex items-center justify-center`}>
                            {getTypeIcon(type)}
                        </div>
                        <div>
                            <span className="text-xs font-medium text-[#8dc6ff] uppercase">{category}</span>
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-[#e4f1fe]/60">{type}</span>
                            </div>
                        </div>
                    </div>

                    <h4 className="text-base font-bold text-[#e4f1fe] mb-2 line-clamp-2">{title}</h4>
                    <p className="text-sm text-[#e4f1fe]/70 mb-3 line-clamp-2">{description}</p>

                    <div className="flex items-center justify-between text-xs text-[#e4f1fe]/50">
                        <span className="flex items-center gap-1">
                            <Download size={12} />
                            {downloads}
                        </span>
                    </div>
                </div>
            </Card>
        );
    }

    return (
        <Card className="group cursor-pointer hover-lift" onClick={onView}>
            <div className="relative">
                <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <span className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-[#8dc6ff]/10 to-[#34495e]/10 rounded-full text-sm font-medium text-[#8dc6ff]">
                                {getTypeIcon(type)}
                                {category}
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="p-2 text-[#e4f1fe]/60 hover:text-[#8dc6ff]">
                                <Bookmark size={18} />
                            </button>
                            <button className="p-2 text-[#e4f1fe]/60 hover:text-[#8dc6ff]">
                                <Share2 size={18} />
                            </button>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold text-[#e4f1fe] mb-3">{title}</h3>
                    <p className="text-[#e4f1fe]/70 mb-6">{description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-[#34495e]/30 text-[#e4f1fe]/80 text-xs rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-[#e4f1fe]/10">
                        <div className="flex items-center gap-4 text-sm text-[#e4f1fe]/60">
                            <span className="flex items-center gap-1">
                                <User size={14} />
                                {author}
                            </span>
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="flex items-center gap-2 text-[#8dc6ff] font-medium group">
                                View Resource
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
};


export default function Resources() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedResource, setSelectedResource] = useState(null);

    const resourceTypes = [
        { id: 'all', name: 'All Resources', count: 42, icon: <FileText size={18} /> },
        { id: 'whitepaper', name: 'Whitepapers', count: 12, icon: <BookOpen size={18} /> },
        { id: 'casestudy', name: 'Case Studies', count: 8, icon: <BarChart size={18} /> },
        { id: 'report', name: 'Industry Reports', count: 6, icon: <TrendingUp size={18} /> },
        { id: 'guide', name: 'Technical Guides', count: 10, icon: <Bookmark size={18} /> },
        { id: 'video', name: 'Video Content', count: 6, icon: <Video size={18} /> }
    ];

    const trendingTopics = [
        'Sustainable Mining', 'Safety Innovations', 'Automation', 'Global Logistics',
        'Mineral Processing', 'Infrastructure', 'Renewable Energy', 'Water Management'
    ];

    const resources = [
        {
            id: 1,
            title: 'Sustainable Mineral Extraction 2024',
            type: 'whitepaper',
            category: 'Sustainability',
            description: 'Comprehensive guide to eco-friendly mining practices and technologies.',
            author: 'Dr. Sarah Chen',
            featured: true,
            tags: ['Sustainability', 'Innovation', 'Mining']
        },
        {
            id: 2,
            title: 'Deep Tunnel Construction Case Study',
            type: 'casestudy',
            category: 'Infrastructure',
            description: 'Success story of the Transcontinental Tunnel Network project.',
            author: 'Marcus Johnson',
            featured: true,
            tags: ['Tunneling', 'Safety', 'Innovation']
        },
        {
            id: 3,
            title: 'Global Construction Market Report 2024',
            type: 'report',
            category: 'Industry',
            description: 'Analysis of global construction trends and market opportunities.',
            author: 'Global Research Team',
            featured: false,
            tags: ['Market Analysis', 'Trends', 'Global']
        },
        {
            id: 4,
            title: 'Automated Safety Systems Guide',
            type: 'guide',
            category: 'Safety',
            description: 'Complete guide to implementing AI-powered safety protocols.',
            author: 'David Rodriguez',
            featured: true,
            tags: ['Safety', 'Automation', 'Technology']
        },
        {
            id: 5,
            title: 'Green Construction Video Series',
            type: 'video',
            category: 'Sustainability',
            description: '5-part series on sustainable construction methodologies.',
            author: 'Environmental Team',
            featured: false,
            tags: ['Video', 'Sustainability', 'Education']
        },
        {
            id: 6,
            title: 'Mineral Processing Innovations',
            type: 'whitepaper',
            category: 'Technology',
            description: 'Latest advancements in mineral extraction and processing.',
            author: 'Tech Innovation Lab',
            featured: false,
            tags: ['Technology', 'Processing', 'Innovation']
        },
        {
            id: 7,
            title: 'Arctic Construction Challenges',
            type: 'casestudy',
            category: 'Infrastructure',
            description: 'Overcoming extreme conditions in Arctic projects.',
            author: 'Polar Engineering Team',
            featured: false,
            tags: ['Arctic', 'Engineering', 'Case Study']
        },
        {
            id: 8,
            title: 'Digital Transformation in Mining',
            type: 'report',
            category: 'Technology',
            description: 'How digital technologies are revolutionizing mining operations.',
            author: 'Digital Solutions Group',
            featured: true,
            tags: ['Digital', 'Transformation', 'Technology']
        }
    ];

    const featuredResources = resources.filter(r => r.featured);
    const filteredResources = activeFilter === 'all'
        ? resources
        : resources.filter(r => r.type === activeFilter);


    return (
        <SectionContainer
            id="resources"
            bgColor="bg-[#22313f]"
            className="relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-80 h-80 border-4 border-[#8dc6ff] rounded-full"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 border-4 border-[#34495e] rounded-full"></div>
                {/* Document Pattern */}
                <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(141, 198, 255, 0.05) 20px)`,
                }}></div>
            </div>

            <div className="relative z-10">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8dc6ff]/20 to-[#34495e]/20 border border-[#8dc6ff]/30 rounded-full px-4 py-2 mb-4">
                        <BookOpen size={16} className="text-[#8dc6ff]" />
                        <span className="text-sm font-medium text-[#e4f1fe]">Knowledge Hub</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#e4f1fe] mb-6">
                        Industry Resources
                    </h2>
                    <p className="text-xl text-[#e4f1fe]/80">
                        Access our library of whitepapers, case studies, and industry insights to stay ahead in mineral construction.
                    </p>
                </div>

                {/* Search & Filter Bar */}
                <div className="mb-12">
                    <Card className="p-6 mb-6">
                        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                            <div className="flex-1 w-full">
                                <div className="relative">
                                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#8dc6ff]" size={20} />
                                    <input
                                        type="text"
                                        placeholder="Search resources, topics, or authors..."
                                        className="w-full pl-12 pr-4 py-3 bg-[#34495e]/30 border border-[#e4f1fe]/10 rounded-lg text-[#e4f1fe] placeholder:text-[#e4f1fe]/50 focus:outline-none focus:border-[#8dc6ff]"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2 text-[#e4f1fe]">
                                    <Filter size={18} />
                                    <span className="text-sm">Filter by:</span>
                                </div>
                                <select
                                    className="bg-[#34495e] text-[#e4f1fe] border border-[#e4f1fe]/10 rounded-lg px-4 py-2 focus:outline-none focus:border-[#8dc6ff]"
                                    value={activeFilter}
                                    onChange={(e) => setActiveFilter(e.target.value)}
                                >
                                    <option value="all">All Resources</option>
                                    <option value="whitepaper">Whitepapers</option>
                                    <option value="casestudy">Case Studies</option>
                                    <option value="report">Reports</option>
                                    <option value="guide">Guides</option>
                                    <option value="video">Videos</option>
                                </select>
                            </div>
                        </div>
                    </Card>

                    {/* Resource Type Filter */}
                    <div className="flex flex-wrap gap-3 mb-8">
                        {resourceTypes.map((type) => (
                            <button
                                key={type.id}
                                onClick={() => setActiveFilter(type.id)}
                                className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-300 ${activeFilter === type.id
                                    ? 'bg-gradient-to-r from-[#8dc6ff] to-[#34495e] text-white shadow-lg shadow-[#8dc6ff]/20'
                                    : 'bg-[#34495e]/30 text-[#e4f1fe] hover:bg-[#34495e]/50'
                                    }`}
                            >
                                {type.icon}
                                <span>{type.name}</span>
                                <span className="text-xs bg-[#e4f1fe]/20 px-2 py-1 rounded-full">
                                    {type.count}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Featured Resources */}
                <div className="mb-16">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-2xl font-bold text-[#e4f1fe]">Featured Resources</h3>
                            <p className="text-[#e4f1fe]/80">Top industry insights and research</p>
                        </div>
                        <Button size="sm" className="text-[#e4f1fe] border-[#e4f1fe] hover:text-[#e4f1fe]">
                            View All Featured
                        </Button>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {featuredResources.map((resource) => (
                            <ResourceCard
                                key={resource.id}
                                resource={resource}
                                onView={() => setSelectedResource(resource)}
                            />
                        ))}
                    </div>
                </div>

                {/* All Resources */}
                <div className="mb-16">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-2xl font-bold text-[#e4f1fe]">All Resources</h3>
                            <p className="text-[#e4f1fe]/80">Browse our complete knowledge library</p>
                        </div>
                        <div className="text-sm text-[#e4f1fe]/80">
                            Showing {filteredResources.length} of {resources.length} resources
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredResources.map((resource) => (
                            <ResourceCard
                                key={resource.id}
                                resource={resource}
                                onView={() => setSelectedResource(resource)}
                                compact={true}
                            />
                        ))}
                    </div>
                </div>

                {/* Trending Topics */}
                <Card className="p-8 mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <TrendingUp className="text-[#8dc6ff]" size={24} />
                        <h3 className="text-2xl font-bold text-[#e4f1fe]">Trending Topics</h3>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {trendingTopics.map((topic, index) => (
                            <button
                                key={index}
                                className="px-4 py-2 bg-gradient-to-r from-[#8dc6ff]/10 to-[#34495e]/10 text-[#e4f1fe] rounded-full border border-[#8dc6ff]/20 hover:border-[#8dc6ff] transition-colors"
                            >
                                {topic}
                            </button>
                        ))}
                    </div>
                </Card>

                {/* Stats & Newsletter */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {/* Resource Stats */}
                    <Card className="p-8">
                        <h3 className="text-2xl font-bold text-[#e4f1fe] mb-6">Resource Statistics</h3>
                        <div className="space-y-6">
                            {[
                                { label: 'Total Downloads', value: '15,420', icon: <Download className="text-[#8dc6ff]" /> },
                                { label: 'Monthly Views', value: '32,800', icon: <Eye className="text-[#8dc6ff]" /> },
                                { label: 'Countries Reached', value: '65+', icon: <Globe className="text-[#8dc6ff]" /> },
                                { label: 'Industry Partners', value: '48', icon: <User className="text-[#8dc6ff]" /> }
                            ].map((stat, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-[#34495e] to-[#22313f] rounded-lg flex items-center justify-center">
                                            {stat.icon}
                                        </div>
                                        <span className="text-[#e4f1fe]">{stat.label}</span>
                                    </div>
                                    <span className="text-2xl font-bold text-[#8dc6ff]">{stat.value}</span>
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* Newsletter Signup */}
                    <Card className="p-8 bg-gradient-to-br from-[#34495e] to-[#22313f]">
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#8dc6ff] to-[#e4f1fe] rounded-full flex items-center justify-center">
                                <BookOpen className="text-[#22313f]" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-[#e4f1fe] mb-3">Stay Updated</h3>
                            <p className="text-[#e4f1fe]/80">
                                Subscribe to receive the latest industry insights and resources.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full px-4 py-3 bg-[#22313f] border border-[#e4f1fe]/10 rounded-lg text-[#e4f1fe] placeholder:text-[#e4f1fe]/50 focus:outline-none focus:border-[#8dc6ff]"
                            />
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="newsletter" className="text-[#8dc6ff]" />
                                <label htmlFor="newsletter" className="text-sm text-[#e4f1fe]/80">
                                    I agree to receive updates and promotional materials
                                </label>
                            </div>
                            <Button className="w-full">
                                Subscribe Now
                                <ArrowRight className="inline ml-2" />
                            </Button>
                        </div>
                    </Card>
                </div>                
            </div>
        </SectionContainer>
    );
};




