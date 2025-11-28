import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Slide {
  image: string;
  mobileImage: string;
  category: string;
  title: string;
  shortTitle: string;
  description: string;
  link: string;
}

const slides: Slide[] = [
  {
    image: "/assets/hero/engineering.svg",
    mobileImage: "/assets/hero-mobile/engineeringmobile.svg",
    category: "Engineering Innovation",
    title: "Mastering Costs, Engineering Success",
    shortTitle: "Engineering Services",
    description: "Driving Value Engineering and maximizing cost efficiency through precision design, advanced materials science and cutting-edge manufacturing processes",
    link: "/precision-engineering",
  },
  {
    image: "/assets/hero/manufaturing.svg",
    mobileImage: "/assets/hero-mobile/manufaturingmobile.svg",
    category: "Manufacturing Excellence",
    title: "You Design It, We Build It : Justified Cost, Peerless Quality", 
    shortTitle: "Manufacturing Services",
    description: "Your One-Stop Strategic Companion for AI-Driven Manufacturing Excellence. At EMuski, where cost and quality meets profitability - delivering straight to your door",
    link: "/manufacturing-services",
  },
  {
    image: "/assets/hero/genai.svg",
    mobileImage: "/assets/hero-mobile/genaimobile.svg",
    category: "Next-Gen AI",
    title: "AI-Powered Intelligence for Tomorrow's Manufacturing",
    shortTitle: "Mithran",
    description: "Revolutionary AI solutions transforming product development, supply chain optimization, and cost engineering - where artificial intelligence meets manufacturing excellence.",
    link: "/solutions/ai",
  },
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const animationFrameRef = useRef<number>();
  const startTimeRef = useRef<number>();
  const SLIDE_DURATION = 5000; // 5 seconds

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const newProgress = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(newProgress);

      if (elapsed < SLIDE_DURATION) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        // Auto-advance to next slide
        handleNext();
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [currentSlide]);

  const handleTabClick = (index: number) => {
    if (index !== currentSlide) {
      setCurrentSlide(index);
      setProgress(0);
      startTimeRef.current = undefined;
    }
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
    startTimeRef.current = undefined;
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
    startTimeRef.current = undefined;
  };

  return (
    <section className="relative w-full h-[60vh] sm:h-screen">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1500 ease-in-out ${index === currentSlide ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105"
            }`}
        >
          {/* Mobile Layout - Text overlay on image */}
          <div className="sm:hidden h-full">
            {/* Mobile Background Image */}
            <div 
              className="absolute inset-0 w-full h-full bg-no-repeat bg-center bg-cover"
              style={{
                backgroundImage: `url(${slide.mobileImage})`,
                backgroundPosition: 'center center',
                backgroundSize: 'cover'
              }}
            />
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-black/50 transition-all duration-1500 ease-in-out" />
              <div className="absolute inset-0 bg-gradient-to-br from-emuski-teal/10 via-transparent to-emuski-teal-darker/5 opacity-30 transition-opacity duration-2000" />
            </div>
            
            {/* Text Content - positioned at top */}
            <div className="relative z-20 h-full flex flex-col justify-start px-4 pt-16 pb-8">
              <div className="space-y-3 animate-fade-in text-center">
                <span className="inline-block text-emuski-teal text-xs font-bold tracking-wider uppercase">
                  {slide.category}
                </span>
                <h1 className="text-xl font-bold text-white leading-tight drop-shadow-2xl">
                  {slide.title}
                </h1>
                <p className="text-sm text-gray-100 leading-relaxed drop-shadow-lg">
                  {slide.description}
                </p>
                <div className="pt-2 flex justify-center">
                  <Link 
                    to={slide.link}
                    className="inline-flex items-center px-5 py-2 bg-emuski-teal-dark hover:bg-emuski-teal-darker text-white font-semibold text-sm rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
                  >
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Text overlay */}
          <div className="hidden sm:block">
            {/* Desktop Background */}
            <div className="absolute inset-0">
              <div 
                className="w-full h-full bg-no-repeat bg-center bg-cover"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundPosition: 'center center',
                  backgroundAttachment: 'scroll',
                  backgroundSize: 'cover',
                  minHeight: '100svh',
                  height: '100svh'
                }}
              />
              <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30 transition-all duration-1500 ease-in-out" />
              <div className="absolute inset-0 bg-gradient-to-br from-emuski-teal/10 via-transparent to-emuski-teal-darker/5 opacity-30 transition-opacity duration-2000" />
            </div>
            </div>

            {/* Desktop Content */}
            <div className="relative z-20 h-full flex items-center justify-start px-12 md:px-16 lg:px-20 pt-20 pb-8">
              <div className="w-full max-w-2xl lg:max-w-3xl ml-4 lg:ml-8">
                <div className="text-left space-y-6 lg:space-y-8 animate-fade-in">
                  <span className="inline-block text-emuski-teal text-sm font-bold tracking-wider uppercase">
                    {slide.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight drop-shadow-2xl">
                    {slide.title}
                  </h1>
                  <p className="text-base md:text-lg lg:text-xl text-gray-100 leading-relaxed drop-shadow-lg">
                    {slide.description}
                  </p>
                  <div className="pt-8">
                    <Link 
                      to={slide.link}
                      className="inline-flex items-center px-8 py-4 bg-emuski-teal-dark hover:bg-emuski-teal-darker text-white font-semibold text-base lg:text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                    >
                      Learn More
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Bottom Navigation - Fixed and Always Visible */}
      <div className="absolute bottom-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Mobile Navigation - Desktop Style */}
          <div className="sm:hidden">
            {/* Progress bar track */}
            <div className="relative h-1 bg-white/20 overflow-hidden">
              {/* Background segments */}
              <div className="absolute inset-0 flex">
                <div className="flex-1 h-full bg-white/20" style={{ borderRight: '1px solid rgba(0,0,0,0.1)' }} />
                <div className="flex-1 h-full bg-white/20" style={{ borderRight: '1px solid rgba(0,0,0,0.1)' }} />
                <div className="flex-1 h-full bg-white/20" />
              </div>
              
              {/* Single continuous flowing progress bar */}
              <div 
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 via-emuski-teal to-blue-400 shadow-lg shadow-blue-500/50"
                style={{ 
                  width: `${(currentSlide / 3 * 100) + (progress / 3)}%`,
                  transform: 'translateZ(0)',
                  transition: 'none'
                }}
              />
            </div>
            
            {/* Tab buttons like desktop */}
            <div className="grid grid-cols-3 gap-0">
              <button
                onClick={() => handleTabClick(0)}
                className={`relative py-4 px-2 text-center transition-all duration-300 group ${0 === currentSlide ? "bg-white/10" : "hover:bg-white/5"}`}
              >
                <div className="space-y-1">
                  <div className={`text-xs uppercase tracking-wider transition-colors ${0 === currentSlide ? "text-emuski-teal" : "text-white group-hover:text-gray-300"}`}>
                    Engineering Innovation
                  </div>
                  <div className={`text-sm font-semibold transition-colors ${0 === currentSlide ? "text-white" : "text-white group-hover:text-gray-200"}`}>
                    Cost Precision
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleTabClick(1)}
                className={`relative py-4 px-2 text-center transition-all duration-300 group ${1 === currentSlide ? "bg-white/10" : "hover:bg-white/5"}`}
              >
                <div className="space-y-1">
                  <div className={`text-xs uppercase tracking-wider transition-colors ${1 === currentSlide ? "text-emuski-teal" : "text-white group-hover:text-gray-300"}`}>
                    Manufacturing Excellence
                  </div>
                  <div className={`text-sm font-semibold transition-colors ${1 === currentSlide ? "text-white" : "text-white group-hover:text-gray-200"}`}>
                    Rapid Prototyping
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleTabClick(2)}
                className={`relative py-4 px-2 text-center transition-all duration-300 group ${2 === currentSlide ? "bg-white/10" : "hover:bg-white/5"}`}
              >
                <div className="space-y-1">
                  <div className={`text-xs uppercase tracking-wider transition-colors ${2 === currentSlide ? "text-emuski-teal" : "text-white group-hover:text-gray-300"}`}>
                    Next-Gen AI
                  </div>
                  <div className={`text-sm font-semibold transition-colors ${2 === currentSlide ? "text-white" : "text-white group-hover:text-gray-200"}`}>
                    Mithran AI
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Desktop Navigation Tabs - Fixed and Always Visible */}
          <div className="hidden sm:block relative border-t border-white/10">
            {/* Background Progress Track */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-white/20 overflow-hidden">
              {/* Section dividers */}
              <div className="absolute inset-0 flex">
                <div className="flex-1 h-full bg-white/20" style={{ borderRight: '1px solid rgba(0,0,0,0.1)' }} />
                <div className="flex-1 h-full bg-white/20" style={{ borderRight: '1px solid rgba(0,0,0,0.1)' }} />
                <div className="flex-1 h-full bg-white/20" />
              </div>
              
              {/* Single continuous flowing progress bar */}
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-emuski-teal to-blue-400 shadow-lg shadow-blue-500/50"
                style={{ 
                  width: `${(currentSlide / 3 * 100) + (progress / 3)}%`,
                  transform: 'translateZ(0)',
                  transition: 'none'
                }}
              />
            </div>

            {/* Tab Buttons - Fixed Content */}
            <div className="grid grid-cols-3 gap-0">
              <button
                onClick={() => handleTabClick(0)}
                className={`relative py-6 px-4 text-left transition-all duration-300 group ${0 === currentSlide ? "bg-white/10" : "hover:bg-white/5"}`}
              >
                <div className="space-y-1 pt-2">
                  <div className={`text-xs uppercase tracking-wider transition-colors ${0 === currentSlide ? "text-emuski-teal" : "text-white group-hover:text-gray-300"}`}>
                    Engineering Innovation
                  </div>
                  <div className={`text-sm font-semibold transition-colors ${0 === currentSlide ? "text-white" : "text-white group-hover:text-gray-200"}`}>
                    Cost Precision
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleTabClick(1)}
                className={`relative py-6 px-4 text-left transition-all duration-300 group ${1 === currentSlide ? "bg-white/10" : "hover:bg-white/5"}`}
              >
                <div className="space-y-1 pt-2">
                  <div className={`text-xs uppercase tracking-wider transition-colors ${1 === currentSlide ? "text-emuski-teal" : "text-white group-hover:text-gray-300"}`}>
                    Manufacturing Excellence
                  </div>
                  <div className={`text-sm font-semibold transition-colors ${1 === currentSlide ? "text-white" : "text-white group-hover:text-gray-200"}`}>
                    Rapid Prototyping
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleTabClick(2)}
                className={`relative py-6 px-4 text-left transition-all duration-300 group ${2 === currentSlide ? "bg-white/10" : "hover:bg-white/5"}`}
              >
                <div className="space-y-1 pt-2">
                  <div className={`text-xs uppercase tracking-wider transition-colors ${2 === currentSlide ? "text-emuski-teal" : "text-white group-hover:text-gray-300"}`}>
                    Next-Gen AI
                  </div>
                  <div className={`text-sm font-semibold transition-colors ${2 === currentSlide ? "text-white" : "text-white group-hover:text-gray-200"}`}>
                    Mithran AI
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Curved Bottom Animation */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-16"
        >
          <path 
            d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z" 
            className="fill-emuski-teal/20 animate-pulse"
          />
          <path 
            d="M0,80 C200,140 400,20 600,80 C800,140 1000,20 1200,80 L1200,120 L0,120 Z" 
            className="fill-emuski-teal/10 animate-bounce"
            style={{ animationDuration: '3s' }}
          />
        </svg>
      </div>
    </section>
  );
};
