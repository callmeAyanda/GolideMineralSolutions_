// src/app/components/About.jsx
'use client';

import { 
  Target, Globe, Users, Shield, 
  TrendingUp, Leaf, Award, Zap,
  ChevronRight, Building, Lightbulb,
  CheckCircle
} from 'lucide-react';

import SectionContainer from './SectionContainer';
import Card from './Card';
import IconBox from './IconBox';
import Button from './Button';


export default function About() {
  const values = [
    {
      icon: <Shield size={24} />,
      title: 'Integrity First',
      description: 'Uncompromising ethical standards in every project'
    },
    {
      icon: <Globe size={24} />,
      title: 'Global Excellence',
      description: 'World-class standards across all operations'
    },
    {
      icon: <Leaf size={24} />,
      title: 'Sustainable Solutions',
      description: 'Environmentally responsible construction practices'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Innovation Driven',
      description: 'Cutting-edge technology and methodologies'
    }
  ];

  const milestones = [
    { year: '2008', title: 'Company Founded', description: 'Started with 5 employees' },
    { year: '2012', title: 'Global Expansion', description: 'Operations in 20 countries' },
    { year: '2016', title: 'Sustainability Award', description: 'Recognized for green initiatives' },
    { year: '2023', title: '250+ Projects', description: 'Milestone achievement' }
  ];

  const teamMembers = [
    {
      name: 'Marcus Chen',
      role: 'CEO & Founder',
      expertise: '25+ years in mineral construction',
      avatar: 'MC'
    },
    {
      name: 'Sarah Johnson',
      role: 'Chief Operations',
      expertise: 'Global project management',
      avatar: 'SJ'
    },
    {
      name: 'David Rodriguez',
      role: 'Head of Innovation',
      expertise: 'Sustainable technologies',
      avatar: 'DR'
    },
    {
      name: 'Aisha Nkosi',
      role: 'Global Director',
      expertise: 'International relations',
      avatar: 'AN'
    }
  ];

  return (
    <SectionContainer 
      id="about" 
      bgColor="bg-[#e4f1fe]"
      className="relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 border-2 border-[#34495e] rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 border-2 border-[#8dc6ff] rounded-full"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#22313f] text-[#e4f1fe] rounded-full px-4 py-2 mb-4">
            <Building size={16} />
            <span className="text-sm font-medium">Our Story</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#22313f] mb-6">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8dc6ff] to-[#34495e]">Tomorrow</span> Today
          </h2>
          <p className="text-xl text-[#34495e]">
            Pioneering mineral construction solutions that bridge innovation with sustainability across global landscapes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Vision */}
          <Card className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <IconBox variant="primary">
                <Target size={28} />
              </IconBox>
              <div>
                <h3 className="text-2xl font-bold text-[#22313f] mb-2">Our Vision</h3>
                <p className="text-[#34495e]">
                  To be the global benchmark in sustainable mineral construction, 
                  transforming skylines while preserving our planet for future generations.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                'Carbon-neutral construction methodologies',
                'Global infrastructure development',
                'Innovative material science research',
                'Community-centric project planning'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-[#8dc6ff]" size={20} />
                  <span className="text-[#34495e]">{item}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Right Column - Mission */}
          <Card className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <IconBox variant="secondary">
                <Zap size={28} />
              </IconBox>
              <div>
                <h3 className="text-2xl font-bold text-[#22313f] mb-2">Our Mission</h3>
                <p className="text-[#34495e]">
                  To deliver exceptional mineral construction projects through innovative 
                  solutions, unwavering integrity, and sustainable practices worldwide.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-[#e4f1fe]/20 rounded-xl">
                <div className="text-3xl font-bold text-[#22313f]">98%</div>
                <div className="text-sm text-[#34495e]">Client Satisfaction</div>
              </div>
              <div className="text-center p-4 bg-[#e4f1fe]/20 rounded-xl">
                <div className="text-3xl font-bold text-[#22313f]">50+</div>
                <div className="text-sm text-[#34495e]">Countries Served</div>
              </div>
              <div className="text-center p-4 bg-[#e4f1fe]/20 rounded-xl">
                <div className="text-3xl font-bold text-[#22313f]">15+</div>
                <div className="text-sm text-[#34495e]">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-[#e4f1fe]/20 rounded-xl">
                <div className="text-3xl font-bold text-[#22313f]">250+</div>
                <div className="text-sm text-[#34495e]">Projects Delivered</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#22313f] mb-4">Our Core Values</h3>
            <p className="text-[#34495e] max-w-2xl mx-auto">
              These principles guide every decision we make and every project we undertake.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="p-6 text-center"
                variant="glass"
              >
                <div className="flex justify-center mb-4">
                  <IconBox size="lg" className="mx-auto">
                    {value.icon}
                  </IconBox>
                </div>
                <h4 className="text-xl font-bold text-[#22313f] mb-2">{value.title}</h4>
                <p className="text-[#34495e]">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline/Milestones */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#22313f] mb-4">Our Journey</h3>
            <p className="text-[#34495e] max-w-2xl mx-auto">
              A timeline of our growth and achievements in the global construction landscape.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#8dc6ff] to-[#34495e] hidden lg:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col lg:flex-row items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Left Side - Year */}
                  <div className="lg:w-1/2 lg:px-8 mb-4 lg:mb-0">
                    <div className={`text-right ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className="inline-flex items-center gap-2">
                        {index === milestones.length - 1 && (
                          <div className="w-2 h-2 bg-[#8dc6ff] rounded-full animate-pulse"></div>
                        )}
                        <span className="text-4xl font-bold text-[#22313f]">{milestone.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="relative z-10">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#8dc6ff] to-[#34495e] rounded-full border-4 border-[#e4f1fe] shadow-lg"></div>
                  </div>

                  {/* Right Side - Content */}
                  <div className="lg:w-1/2 lg:px-8 mt-4 lg:mt-0">
                    <Card className="p-6">
                      <h4 className="text-xl font-bold text-[#22313f] mb-2">{milestone.title}</h4>
                      <p className="text-[#34495e]">{milestone.description}</p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#22313f] text-[#e4f1fe] rounded-full px-4 py-2 mb-4">
              <Users size={16} />
              <span className="text-sm font-medium">Leadership</span>
            </div>
            <h3 className="text-3xl font-bold text-[#22313f] mb-4">Meet Our Visionaries</h3>
            <p className="text-[#34495e] max-w-2xl mx-auto">
              Guided by industry experts with decades of collective experience in global construction.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card 
                key={index} 
                className="p-6 text-center group"
                variant="highlight"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#8dc6ff] to-[#34495e] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {member.avatar}
                </div>
                <h4 className="text-xl font-bold text-[#22313f] mb-1">{member.name}</h4>
                <p className="text-[#8dc6ff] font-medium mb-3">{member.role}</p>
                <p className="text-sm text-[#34495e] mb-4">{member.expertise}</p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="ghost" size="sm" className="w-full">
                    View Profile <ChevronRight size={16} className="ml-1" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="p-8 md:p-12 text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-32 h-32 border-2 border-[#8dc6ff] rounded-full transform translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 border-2 border-[#34495e] rounded-full transform -translate-x-16 translate-y-16"></div>
          </div>

          <div className="relative z-10">
            <Award className="w-16 h-16 mx-auto mb-6 text-[#8dc6ff]" />
            <h3 className="text-3xl font-bold text-[#22313f] mb-4">
              Ready to Build Your Vision?
            </h3>
            <p className="text-xl text-[#34495e] max-w-2xl mx-auto mb-8">
              Join hundreds of satisfied clients who have trusted us with their most ambitious projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Start Your Project
                <ChevronRight className="inline ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Download Brochure
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </SectionContainer>
  );
};

