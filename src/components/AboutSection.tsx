import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const growthStories = [
  {
    value: "5+",
    label: "Industries",
    category: "Our Reach",
    description: "Delivering precision manufacturing excellence across automotive, aerospace, medical devices, and industrial sectors.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80",
  },
  {
    value: "30+",
    label: "Clients",
    category: "Our Partnerships",
    description: "Trusted manufacturing partner for leading OEMs delivering critical project solutions with engineering excellence.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&q=80",
  },
  {
    value: "50+",
    label: "Individual Projects Handled",
    sublabel: "In Engineering Service", 
    category: "Our Expertise",
    description: "Complex engineering projects delivered from concept to completion with precision and cost optimization.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80",
  },
  {
    value: "850+",
    label: "Components Manufactured",
    category: "Our Production",
    description: "High-precision components manufactured to demanding specifications across diverse industrial applications.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80",
  }
];

const AboutSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerView = window.innerWidth < 1024 ? 1 : 3;
    const maxIndex = Math.max(0, growthStories.length - itemsPerView);

    const nextSlide = () => {
        setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
    };

    const prevSlide = () => {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
    };

    return (
        <>
            <div className="h-16" />

            <section className="py-16 relative overflow-hidden" style={{backgroundColor: '#121A21'}}>
                {/* Background Elements */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#4fd3d4_1px,transparent_1px),linear-gradient(to_bottom,#4fd3d4_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
                </div>
                
                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    {/* Left Side - Title and Description */}
                    <div className="lg:col-span-1 space-y-4">
                        <h2 className="text-3xl font-bold text-white">
                            About EMuski
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                            At EMuski, we are shaping the future of manufacturing by combining engineering expertise, manufacturing expertise, and AI-driven excellence. Our unique strengths that we have put in the intersection of innovation, intelligence, and implementation—directly serving OEMs. Our New Product Development (NPD) Center integrates design, engineering, and in-house production, enabling faster prototyping to solutions, self-controlled product launches. This holistic approach ensures OEMs to move from concept to market with confidence and agility.
                        </p>
                        <div className="mt-6 p-4 bg-gray-800/30 rounded-lg border border-emuski-teal/20">
                            <h4 className="text-lg font-semibold text-emuski-teal mb-3">Technology-Driven Engineering, Manufacturing & Digital Excellence</h4>
                            <p className="text-sm text-gray-300 italic mb-3">"Empowering OEMs with intelligence, agility, and precision across the product lifecycle"</p>
                            <p className="text-sm text-gray-300 leading-relaxed">
                                At EMuski, we combine engineering expertise, manufacturing mastery, and AI-driven digital innovation to support OEMs at every stage of their manufacturing lifecycle. Our services includes from design engineering to end-to-end value, cost efficiency, and speed to market.
                            </p>
                            <div className="mt-4 text-center">
                                <p className="text-sm text-emuski-teal font-medium">"At EMuski, where cost and quality meets profitability in manufacturing"</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Carousel and Navigation */}
                    <div className="lg:col-span-2">
                        {/* Navigation Arrows */}
                        <div className="hidden lg:flex justify-end mb-4">
                            <div className="flex space-x-2">
                                <button
                                    onClick={prevSlide}
                                    disabled={currentIndex === 0}
                                    className="h-10 w-10 bg-emuski-teal hover:bg-emuski-teal/90 text-white border-emuski-teal disabled:opacity-50 inline-flex items-center justify-center rounded-md border transition-colors"
                                >
                                    <ChevronLeft className="h-4 w-4" />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    disabled={currentIndex === maxIndex}
                                    className="h-10 w-10 bg-emuski-teal hover:bg-emuski-teal/90 text-white border-emuski-teal disabled:opacity-50 inline-flex items-center justify-center rounded-md border transition-colors"
                                >
                                    <ChevronRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>

                        {/* Carousel Container */}
                        <div className="overflow-hidden">
                            <div 
                                className="flex transition-transform duration-300 ease-in-out"
                                style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
                            >
                                {growthStories.map((story, index) => (
                                    <div key={index} className="w-full lg:w-1/3 flex-shrink-0 px-2">
                                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:border-emuski-teal/50 transition-all duration-300 h-full group overflow-hidden">
                                            <a href="#" className="block h-full hover:no-underline">
                                                <div className="relative h-48 overflow-hidden">
                                                    <img
                                                        src={story.image}
                                                        alt={story.label}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                </div>
                                                
                                                <div className="p-4">
                                                    <div className="flex items-center space-x-2 mb-3">
                                                        <span className="text-xs font-medium text-gray-700 uppercase tracking-wider">{story.category}</span>
                                                        <span className="text-gray-300">|</span>
                                                        <span className="text-xs font-medium text-gray-700 uppercase tracking-wider">Milestone</span>
                                                    </div>
                                                    
                                                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                                                        {story.value} {story.label}
                                                    </h3>
                                                    
                                                    <p className="text-sm text-gray-600 leading-relaxed">
                                                        {story.description}
                                                    </p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                         {/* Mobile Navigation */}
                        <div className="lg:hidden flex justify-center mt-4">
                            <div className="flex space-x-2">
                                <button
                                    onClick={prevSlide}
                                    disabled={currentIndex === 0}
                                    className="h-10 w-10 bg-emuski-teal hover:bg-emuski-teal/90 text-white border-emuski-teal disabled:opacity-50 inline-flex items-center justify-center rounded-md border transition-colors"
                                >
                                    <ChevronLeft className="h-4 w-4" />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    disabled={currentIndex === maxIndex}
                                    className="h-10 w-10 bg-emuski-teal hover:bg-emuski-teal/90 text-white border-emuski-teal disabled:opacity-50 inline-flex items-center justify-center rounded-md border transition-colors"
                                >
                                    <ChevronRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Achievements Section - Both Mobile and Desktop */}
                <div className="mt-8 lg:mt-12">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-6 text-center">Our Achievements</h3>
                    
                    {/* Desktop Achievements - Horizontal Layout */}
                    <div className="hidden lg:grid lg:grid-cols-4 gap-8">
                        {growthStories.map((story, index) => (
                            <div key={index} className="text-center bg-gray-800/30 p-6 rounded-lg border border-emuski-teal/20 hover:bg-gray-800/50 transition-all duration-300">
                                <div className="text-3xl xl:text-4xl font-bold text-emuski-teal mb-2">{story.value}</div>
                                <div className="text-sm font-medium text-gray-300 mb-1">{story.label}</div>
                                {story.sublabel && (
                                    <div className="text-xs text-gray-400">{story.sublabel}</div>
                                )}
                            </div>
                        ))}
                    </div>
                    
                    {/* Mobile Achievements - 2x2 Grid */}
                    <div className="lg:hidden grid grid-cols-2 gap-4">
                        {growthStories.map((story, index) => (
                            <div key={index} className="bg-gray-800/50 p-4 rounded-lg border border-emuski-teal/20">
                                <span className="text-xl sm:text-2xl font-bold text-emuski-teal block">{story.value}</span>
                                <p className="text-xs sm:text-sm text-gray-300">{story.label}</p>
                                {story.sublabel && (
                                    <p className="text-xs text-gray-400">{story.sublabel}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export { AboutSection };
