'use client';

import { ArrowRight, Play, Shield, Award, Clock } from 'lucide-react';

import Button from './Button';
import SectionContainer from './SectionContainer';


export default function Hero() {
  const stats = [
    { number: '250+', label: 'Projects Completed', icon: <Award size={20} /> },
    { number: '15+', label: 'Years Experience', icon: <Clock size={20} /> },
    { number: '50+', label: 'Countries', icon: <Shield size={20} /> },
  ];

  return (
    <SectionContainer
      id="home"
      className="relative overflow-hidden"
      padding="pt-24 pb-32 lg:pt-32 lg:pb-48"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero-pic.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#22313f]/90 via-[#22313f]/80 to-[#34495e]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#22313f] via-transparent to-transparent" />

        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 border-2 border-[#8dc6ff] rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 border-2 border-[#e4f1fe] rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-40 h-40 border border-[#8dc6ff] rotate-45"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">

            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#e4f1fe]/10 backdrop-blur-sm border border-[#e4f1fe]/20 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-[#8dc6ff] rounded-full animate-pulse"></div>
                <span className="text-[#e4f1fe] text-sm font-medium">
                  Building Futures Since 2008
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#e4f1fe] mb-6 leading-tight">
                <span className="block">Global Mineral</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#8dc6ff] to-[#e4f1fe]">
                  Construction Excellence
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl text-[#e4f1fe]/90 mb-10 max-w-2xl mx-auto lg:mx-0">
                Pioneering sustainable mineral construction solutions across continents.
                We bridge innovation with infrastructure, delivering projects that stand
                the test of time and nature.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-16 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="group"
                  onClick={() => console.log('Get Started clicked')}
                >
                  Start Your Project
                  <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  size="lg"
                  className="group"
                  onClick={() => console.log('Learn More clicked')}
                >
                  <Play className="inline mr-2 group-hover:scale-110 transition-transform" />
                  Watch Showcase
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-xl mx-auto lg:mx-0">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-[#34495e]/50 to-[#22313f]/50 backdrop-blur-sm border border-[#e4f1fe]/10 rounded-2xl p-4 transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center gap-2 mb-2">
                      {stat.icon}
                      <span className="text-2xl font-bold text-[#8dc6ff]">{stat.number}</span>
                    </div>
                    <p className="text-[#e4f1fe]/80 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - 3D Model/Image Placeholder */}
            <div className="flex-1 relative">
              <div className="relative w-full h-64 lg:h-96 rounded-3xl overflow-hidden shadow-2xl shadow-[#8dc6ff]/20">
                {/* Placeholder for 3D model or interactive element */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#8dc6ff]/20 to-[#34495e]/40 backdrop-blur-sm border border-[#e4f1fe]/20 rounded-3xl flex items-center justify-center">

                  {/* Interactive Floating Elements */}
                  <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                    {/* Main Circle */}
                    <div className="absolute inset-0 border-4 border-[#8dc6ff]/30 rounded-full animate-spin-slow">
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#8dc6ff] rounded-full"></div>
                      <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-4 h-4 bg-[#e4f1fe] rounded-full"></div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#8dc6ff] rounded-full"></div>
                      <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 w-4 h-4 bg-[#e4f1fe] rounded-full"></div>
                    </div>

                    {/* Inner Circle */}
                    <div className="absolute inset-10 border-2 border-[#e4f1fe]/20 rounded-full animate-spin-slow-reverse">
                      <div className="absolute top-4 left-4 w-8 h-8 bg-[#34495e]/50 backdrop-blur-sm rounded-lg"></div>
                      <div className="absolute top-4 right-4 w-8 h-8 bg-[#8dc6ff]/30 backdrop-blur-sm rounded-lg"></div>
                      <div className="absolute bottom-4 left-4 w-8 h-8 bg-[#e4f1fe]/20 backdrop-blur-sm rounded-lg"></div>
                      <div className="absolute bottom-4 right-4 w-8 h-8 bg-[#34495e]/50 backdrop-blur-sm rounded-lg"></div>
                    </div>

                    {/* Center Element */}
                    <div className="absolute inset-20 bg-gradient-to-br from-[#8dc6ff] to-[#34495e] rounded-2xl flex items-center justify-center shadow-xl">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">GME</div>
                        <div className="text-xs text-[#e4f1fe]">GLOBAL</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#8dc6ff] to-[#e4f1fe] rounded-2xl rotate-12 opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#34495e] to-[#22313f] rounded-full opacity-20"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom left-1/2 transform -translate-x-1/2 hidden lg:block">
          <div className="flex flex-col items-center">
            <span className="text-[#e4f1fe]/60 text-sm mb-2">Explore More</span>
            <div className="w-6 h-10 border-2 border-[#8dc6ff]/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-[#8dc6ff] rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};


