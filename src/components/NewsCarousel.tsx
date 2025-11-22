import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const clientLogos = [
  { name: "TechCorp", logo: "https://via.placeholder.com/120x60/FFFFFF/000000?text=TechCorp" },
  { name: "InnovateInc", logo: "https://via.placeholder.com/120x60/FFFFFF/000000?text=InnovateInc" },
  { name: "GlobalMfg", logo: "https://via.placeholder.com/120x60/FFFFFF/000000?text=GlobalMfg" },
  { name: "AutoTech", logo: "https://via.placeholder.com/120x60/FFFFFF/000000?text=AutoTech" },
  { name: "MediDevice", logo: "https://via.placeholder.com/120x60/FFFFFF/000000?text=MediDevice" },
  { name: "AeroSpace", logo: "https://via.placeholder.com/120x60/FFFFFF/000000?text=AeroSpace" },
  { name: "EnergyCorp", logo: "https://via.placeholder.com/120x60/FFFFFF/000000?text=EnergyCorp" },
  { name: "DefenseTech", logo: "https://via.placeholder.com/120x60/FFFFFF/000000?text=DefenseTech" },
];

const newsItems = [
  {
    category: "Manufacturing",
    title: "AI-Powered Precision Manufacturing Reduces Costs by 25%",
    description: "Smart manufacturing systems optimize production efficiency and quality control across automotive and aerospace sectors.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    link: "#"
  },
  {
    category: "Engineering",
    title: "Advanced Should-Costing Methodology Transforms OEM Procurement",
    description: "Data-driven cost modeling delivers 15% procurement savings through detailed component analysis and benchmarking.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    link: "#"
  },
  {
    category: "Manufacturing",
    title: "Rapid Prototyping Accelerates Product Development Cycles",
    description: "NPD Center capabilities reduce prototype delivery time by 60% enabling faster design validation and testing.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    link: "#"
  },
  {
    category: "Engineering",
    title: "VAVE Analysis Delivers Record Component Cost Optimization",
    description: "Teardown and benchmarking studies achieve 30% cost reduction while maintaining quality standards.",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&q=80",
    link: "#"
  },
  {
    category: "Manufacturing",
    title: "On-Demand Production Solutions Scale to Meet Market Demands",
    description: "Flexible manufacturing capabilities adapt from low-volume builds to full-scale production with lean principles.",
    image: "https://images.unsplash.com/photo-1566207474742-de921626ad0c?w=600&q=80",
    link: "#"
  },
  {
    category: "AI Technology",
    title: "Mithran AI Platform Revolutionizes Manufacturing Intelligence",
    description: "Next-generation AI platform delivers 30% faster sourcing cycles and 15% cost savings for OEM partners.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
    link: "#"
  }
];

export const NewsCarousel = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const cardWidth = 380;

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById("news-container");
    if (container) {
      const scrollAmount = direction === "left" ? -cardWidth * 2 : cardWidth * 2;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setScrollPosition(container.scrollLeft + scrollAmount);
    }
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

      {/* Trusted by Clients Section */}
      <section className="py-8 border-b border-border/30 relative overflow-hidden" style={{backgroundColor: '#121A21'}}>
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#4fd3d4_1px,transparent_1px),linear-gradient(to_bottom,#4fd3d4_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-lg font-semibold text-white/80 mb-4">Trusted by Industry Leaders</h2>
          </div>
          
          {/* Animated Logo Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-12 items-center">
              {/* First set of logos */}
              {clientLogos.map((client, index) => (
                <div key={index} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-12 w-auto object-contain filter brightness-0 invert"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {clientLogos.map((client, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-12 w-auto object-contain filter brightness-0 invert"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Add custom CSS for animation */}
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        `}</style>
      </section>

      <section className="py-12 border-b border-border relative overflow-hidden bg-white">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#4fd3d4_1px,transparent_1px),linear-gradient(to_bottom,#4fd3d4_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Latest News & Updates</h2>
          
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className="border-border hover:bg-secondary"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className="border-border hover:bg-secondary"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div
          id="news-container"
          className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {newsItems.map((item, index) => (
            <Card
              key={index}
              className="flex-shrink-0 w-96 group bg-white border-gray-200 hover:border-emuski-teal/50 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <a href={item.link} className="block h-full hover:no-underline">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-xs font-medium text-gray-700 uppercase tracking-wider">{item.category}</span>
                    <span className="text-gray-300">|</span>
                    <span className="text-xs font-medium text-gray-700 uppercase tracking-wider">News</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </a>
            </Card>
          ))}
        </div>
      </div>
      </section>
    </>
  );
};
