import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Slide {
  image: string;
  category: string;
  title: string;
  shortTitle: string;
  description: string;
  link: string;
}

const slides: Slide[] = [
  {
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    category: "Engineering ",
    title: "Engineering Precision",
    shortTitle: "Engineering",
    description: "Driving product value, cost optimization, and supply chain strength through deep expertise and technology. Delivering accurate cost estimation, VAVE benchmarking, strategic sourcing support, and expert engineering integration.",
    link: "/precision-engineering",
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    category: "Manufacturing Excellence",
    title: "Manufacturing Excellence",
    shortTitle: "Manufacturing",
    description: "Accelerating innovation and scaling production with flexible, technology-enabled capabilities. Our NPD Center provides rapid prototyping and on-demand manufacturing solutions for faster time-to-market.",
    link: "/manufacturing-services",
  },
  {
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    category: "Next-Gen AI - Mithran",
    title: "Next-Gen AI - Mithran",
    shortTitle: "NextGen AI",
    description: "AI-powered intelligence for smarter product development, supply chain, and cost optimization. Mithran transforms traditional workflows into a smart, data-driven ecosystem for OEMs.",
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
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        startTimeRef.current = undefined;
        setProgress(0);
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

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/70" />
          </div>

          {/* Content */}
          <div className="relative z-20 h-full flex items-center px-6 md:px-12 lg:px-24">
            <div className="max-w-3xl space-y-6 animate-fade-in">
              <span className="text-emuski-teal text-sm font-semibold tracking-wider uppercase">
                {slide.category}
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                {slide.description}
              </p>
              <div className="pt-4">
                <Link 
                  to={slide.link}
                  className="inline-flex items-center px-8 py-4 bg-emuski-teal hover:bg-emuski-teal/90 text-white font-semibold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Learn More
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Bottom Navigation Tabs */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-3 gap-0">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => handleTabClick(index)}
                className={`relative py-6 px-4 text-left transition-all duration-300 group ${index === currentSlide
                  ? "bg-white/10"
                  : "hover:bg-white/5"
                  }`}
              >
                {/* Progress Bar */}
                {index === currentSlide && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-white/20">
                    <div
                      className="h-full bg-emuski-teal transition-all duration-100 ease-linear"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}

                {/* Tab Content */}
                <div className="space-y-1">
                  <div
                    className={`text-xs uppercase tracking-wider transition-colors ${index === currentSlide
                      ? "text-emuski-teal"
                      : "text-white group-hover:text-gray-300"
                      }`}
                  >
                    {slide.category}
                  </div>
                  <div
                    className={`text-sm font-semibold transition-colors ${index === currentSlide
                      ? "text-white"
                      : "text-white group-hover:text-gray-200"
                      }`}
                  >
                    {slide.shortTitle}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
