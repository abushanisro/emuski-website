import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

const growthStories = [
  {
    value: "5+",
    label: "Industries",
    category: "Our Reach",
    description: "Delivering precision manufacturing excellence across automotive, aerospace, medical devices, and industrial sectors.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80",
    fullDescription: "Trusted manufacturing partner delivering specialized expertise and industry-specific quality standards across automotive, aerospace, medical devices, electronics, energy, defense, and industrial equipment sectors."
  },
  {
    value: "30+",
    label: "Clients",
    category: "Our Partnerships",
    description: "Trusted manufacturing partner for leading OEMs delivering critical project solutions with engineering excellence.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&q=80",
    fullDescription: "Building lasting partnerships with leading OEMs through trust, quality delivery, and innovative manufacturing solutions that achieve project goals efficiently and cost-effectively."
  },
  {
    value: "50+",
    label: "Individual Projects Handled",
    sublabel: "In Engineering Service", 
    category: "Our Expertise",
    description: "Complex engineering projects delivered from concept to completion with precision and cost optimization.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80",
    fullDescription: "Engineering excellence from initial design consultation through final production optimization, delivering complex projects with precision, innovation, and cost optimization focus."
  },
  {
    value: "850+",
    label: "Components Manufactured",
    category: "Our Production",
    description: "High-precision components manufactured to demanding specifications across diverse industrial applications.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80",
    fullDescription: "Manufacturing expertise spanning prototyping to full-scale production with strict quality controls, lean principles, and consistent precision meeting demanding specifications."
  }
];

const AboutSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [expandedItems, setExpandedItems] = useState<number[]>([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const itemsPerView = 3;

    const maxIndex = Math.max(0, growthStories.length - itemsPerView);

    const nextSlide = () => {
        setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
    };

    const prevSlide = () => {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
    };

    const toggleExpanded = (index: number) => {
        setExpandedItems(prev => 
            prev.includes(index) 
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    return (
        <>
            {/* Separator */}
            <div className="separator-spacer">
                <style jsx>{`
                    .separator-spacer {
                        height: 60px;
                    }
                    
                    @media screen and (min-width: 1350px) {
                        .separator-spacer {
                            height: 60px;
                        }
                    }
                    
                    @media screen and (min-width: 1024px) and (max-width: 1349px) {
                        .separator-spacer {
                            height: 60px;
                        }
                    }
                    
                    @media screen and (min-width: 640px) and (max-width: 1023px) {
                        .separator-spacer {
                            height: 60px;
                        }
                    }
                    
                    @media screen and (max-width: 639px) {
                        .separator-spacer {
                            height: 60px;
                        }
                    }
                `}</style>
            </div>

            <section className="py-16 relative overflow-hidden" style={{backgroundColor: '#121A21'}}>
                {/* Background Elements */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#4fd3d4_1px,transparent_1px),linear-gradient(to_bottom,#4fd3d4_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
                </div>
                
                <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    {/* Left Side - Title and Description */}
                    <div className="lg:col-span-1 space-y-4">
                        <h2 className="text-3xl font-bold text-white">
                            About EMUSKI
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                            One Stop Solution for OEM Manufacturing - delivering precision engineering and manufacturing excellence to bring your designs to life with unmatched quality and innovation.
                        </p>
                        <div className="pt-4 space-y-3">
                            {/* Quick Links Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="inline-flex items-center text-emuski-teal font-medium text-sm hover:text-emuski-teal/80 transition-colors"
                                >
                                    <ChevronDown className={`h-4 w-4 mr-2 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                    Our Achievements
                                </button>
                                
                                {isDropdownOpen && (
                                    <div className="absolute top-full left-0 mt-2 w-80 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-40">
                                        <div className="p-4 space-y-4">
                                            {growthStories.map((story, index) => (
                                                <div key={index}>
                                                    <h4 className="text-sm font-semibold text-emuski-teal mb-2">{story.category}</h4>
                                                    <div className="flex items-center justify-between mb-1">
                                                        <span className="text-2xl font-bold text-emuski-teal">{story.value}</span>
                                                        <span className="text-xs text-gray-400">{story.label}</span>
                                                    </div>
                                                    {story.sublabel && (
                                                        <p className="text-xs text-gray-400 mb-2">{story.sublabel}</p>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Carousel and Navigation */}
                    <div className="lg:col-span-2">
                        {/* Navigation Arrows */}
                        <div className="flex justify-end mb-4">
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
                                    <div key={index} className="w-full flex-shrink-0 px-3" style={{ width: `${100 / itemsPerView}%` }}>
                                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:border-emuski-teal/50 transition-all duration-300 h-full group overflow-hidden">
                                            {/* NVIDIA-style card format */}
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
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export { AboutSection };
