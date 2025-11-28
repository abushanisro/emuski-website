import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Linkedin } from 'lucide-react';

const growthStories = [
  {
    value: "SINGARAVELAN SRINIVASAN",
    label: "Founder & CEO @EMUSKI",
    category: "Leadership",
    description: "\"Striving for Value-Driven Empowerment \"",
    image: "/founder.jpg",
    linkedinUrl: "https://www.linkedin.com/in/singaravelan-srinivasan-emuski/",
    isFounder: true,
    location: "Bengaluru, Karnataka, India",
  },
  {
    value: "75+ Clients | 15+ Industries",
    label: "Strategic Partnerships",
    category: "Our Reach",
    description: "Trusted manufacturing partner for leading OEMs across automotive, aerospace, medical devices, and industrial sectors delivering critical project solutions with engineering excellence.",
    image: "/assets/componets/Matica-Photos2/DSC_1008.JPG",
  },
  {
    value: "120+",
    label: "Individual Projects Handled",
    sublabel: "In Engineering Service", 
    category: "Our Expertise",
    description: "Complex engineering projects delivered from concept to completion with precision and cost optimization.",
    image: "/assets/componets/forus/WhatsApp Image 2025-08-23 at 10.06.37 PM.jpeg",
  },
  {
    value: "2500+",
    label: "Components Manufactured",
    category: "Our Production",
    description: "High-precision components manufactured to demanding specifications across diverse industrial applications.",
    image: "/assets/componets/Part-Photos/IMG-20250519-WA0016.jpg",
  }
];

const AboutSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerView = window.innerWidth < 1024 ? 1 : 3;
    const maxIndex = Math.max(0, growthStories.length - itemsPerView);
    const [animatedValues, setAnimatedValues] = useState<{ [key: number]: number }>({});
    const [hasAnimated, setHasAnimated] = useState(false);
    const achievementsRef = useRef<HTMLDivElement>(null);

    // Define specific achievements for the container
    const achievementsData = [
        {
            value: "15+",
            number: 15,
            label: "Industries",
            category: "Our Reach"
        },
        {
            value: "75+",
            number: 75,
            label: "Clients", 
            category: "Strategic Partnerships"
        },
        {
            value: "120+",
            number: 120,
            label: "Individual Projects",
            sublabel: "In Engineering Service",
            category: "Our Expertise"
        },
        {
            value: "2500+",
            number: 2500,
            label: "Components Manufactured",
            category: "Our Production"
        }
    ];

    // Extract numbers from achievement values for animation
    const getNumberFromValue = (achievement: any): number => {
        return achievement.number || 0;
    };

    // Animate number counting
    const animateNumber = (finalValue: number, index: number, duration: number = 2000) => {
        const startTime = Date.now();
        const startValue = 0;

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentValue = Math.floor(startValue + (finalValue - startValue) * easeOutQuart);

            setAnimatedValues(prev => ({ ...prev, [index]: currentValue }));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    };

    // Intersection Observer for triggering animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        achievementsData.forEach((achievement, index) => {
                            const finalNumber = getNumberFromValue(achievement);
                            setTimeout(() => {
                                animateNumber(finalNumber, index, 2000 + index * 200);
                            }, index * 100);
                        });
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (achievementsRef.current) {
            observer.observe(achievementsRef.current);
        }

        return () => {
            if (achievementsRef.current) {
                observer.unobserve(achievementsRef.current);
            }
        };
    }, [hasAnimated]);

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
                            About EMUSKI
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                            One stop solution for OEM Manufacturing - We deliver precision engineering and manufacturing excellence for OEMs across industries.
                        </p>
                        <div className="mt-6 p-4 bg-gray-800/30 rounded-lg border border-emuski-teal/20">
                            <h4 className="text-lg font-semibold text-emuski-teal mb-3">Technology-Driven Engineering, Manufacturing & Digital Excellence</h4>
                            <p className="text-sm text-gray-300 italic mb-3">"Empowering OEMs with intelligence, agility, and precision across the product lifecycle"</p>
                            <p className="text-sm text-gray-300 leading-relaxed">
                                At EMUSKI, we combine engineering expertise, manufacturing mastery, and AI-driven digital innovation to support OEMs at every stage of their manufacturing lifecycle. Our services includes from design engineering to end-to-end value, cost efficiency, and speed to market.
                            </p>
                            <div className="mt-4 text-center">
                                <p className="text-sm text-emuski-teal font-medium">"At EMUSKI, where cost and quality meets profitability in manufacturing"</p>
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
                                    className="h-10 w-10 bg-emuski-teal-dark hover:bg-emuski-teal-darker text-white border-emuski-teal disabled:opacity-50 inline-flex items-center justify-center rounded-md border transition-colors"
                                >
                                    <ChevronLeft className="h-4 w-4" />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    disabled={currentIndex === maxIndex}
                                    className="h-10 w-10 bg-emuski-teal-dark hover:bg-emuski-teal-darker text-white border-emuski-teal disabled:opacity-50 inline-flex items-center justify-center rounded-md border transition-colors"
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
                                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:border-emuski-teal/50 transition-all duration-300 h-full group overflow-hidden cursor-pointer">
                                            <div className="relative h-48 overflow-hidden">
                                                <img
                                                    src={story.image}
                                                    alt={story.label}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                            </div>
                                            
                                            <div className="p-4">
                                                
                                                <div className="flex items-start justify-between mb-2">
                                                    <div className="flex-1">
                                                        {story.isFounder ? (
                                                            <>
                                                                <h3 className="text-base font-bold text-gray-900 leading-tight mb-1">
                                                                    {story.value}
                                                                </h3>
                                                                <p className="text-sm font-semibold text-emuski-teal-darker mb-1">
                                                                    {story.label}
                                                                </p>
                                                                {story.location && (
                                                                    <p className="text-xs text-gray-500 mb-2">
                                                                        {story.location}
                                                                    </p>
                                                                )}
                                                            </>
                                                        ) : (
                                                            <h3 className="text-lg font-bold text-gray-900 leading-tight">
                                                                {story.value} {story.label}
                                                            </h3>
                                                        )}
                                                    </div>
                                                    {story.linkedinUrl && (
                                                        <a 
                                                            href={story.linkedinUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors ml-2 flex-shrink-0"
                                                            onClick={(e) => e.stopPropagation()}
                                                            title="View LinkedIn Profile"
                                                        >
                                                            <Linkedin className="h-4 w-4" />
                                                        </a>
                                                    )}
                                                </div>
                                                
                                                {story.description && (
                                                    <p className="text-sm text-gray-600 leading-relaxed mb-3">
                                                        {story.isFounder ? (
                                                            <span className="relative">
                                                                <span className="text-xl text-gray-600 opacity-70 mr-1">"</span>
                                                                <span className="italic">Striving for Value-Driven Empowerment</span>
                                                                <span className="text-xl text-gray-600 opacity-70 ml-1">"</span>
                                                            </span>
                                                        ) : (
                                                            story.description
                                                        )}
                                                    </p>
                                                )}
                                            </div>
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
                                    className="h-10 w-10 bg-emuski-teal-dark hover:bg-emuski-teal-darker text-white border-emuski-teal disabled:opacity-50 inline-flex items-center justify-center rounded-md border transition-colors"
                                >
                                    <ChevronLeft className="h-4 w-4" />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    disabled={currentIndex === maxIndex}
                                    className="h-10 w-10 bg-emuski-teal-dark hover:bg-emuski-teal-darker text-white border-emuski-teal disabled:opacity-50 inline-flex items-center justify-center rounded-md border transition-colors"
                                >
                                    <ChevronRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Achievements Section - Both Mobile and Desktop */}
                <div className="mt-8 lg:mt-12" ref={achievementsRef}>
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-6 text-center">Our Achievements</h3>
                    
                    {/* Desktop Achievements - Horizontal Layout */}
                    <div className="hidden lg:grid lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {achievementsData.map((story, index) => {
                            const animatedValue = animatedValues[index] || 0;
                            const suffix = story.value.includes('+') ? '+' : '';
                            return (
                                <div key={index} className="text-center bg-gray-800/30 p-6 rounded-lg border border-emuski-teal/20 hover:bg-gray-800/50 transition-all duration-300">
                                    <div className="text-3xl xl:text-4xl font-bold text-emuski-teal mb-2">
                                        {animatedValue}{suffix}
                                    </div>
                                    <div className="text-sm font-medium text-gray-300 mb-1">{story.label}</div>
                                    {story.sublabel && (
                                        <div className="text-xs text-gray-400">{story.sublabel}</div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                    
                    {/* Mobile Achievements - 2x2 Grid */}
                    <div className="lg:hidden grid grid-cols-2 gap-4">
                        {achievementsData.map((story, index) => {
                            const animatedValue = animatedValues[index] || 0;
                            const suffix = story.value.includes('+') ? '+' : '';
                            return (
                                <div key={index} className="bg-gray-800/50 p-4 rounded-lg border border-emuski-teal/20 text-center">
                                    <span className="text-xl sm:text-2xl font-bold text-emuski-teal block">
                                        {animatedValue}{suffix}
                                    </span>
                                    <p className="text-xs sm:text-sm text-gray-300">{story.label}</p>
                                    {story.sublabel && (
                                        <p className="text-xs text-gray-400">{story.sublabel}</p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export { AboutSection };
