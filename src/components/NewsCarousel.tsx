import { useState, useRef, useEffect } from "react";
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

const successStories = [
  {
    category: "Automotive Excellence",
    title: "Tier-1 Automotive Supplier Achievement",
    description: "EMUSKI became a trusted Tier-1 supplier for brake system components, delivering 2 million parts annually with 99.9% on-time delivery to global automotive giants.",
    image: "/assets/componets/Part-Photos/IMG-20250206-WA0025.jpg",
    link: "/gallery"
  },
  {
    category: "Precision Engineering",
    title: "October 2025 Production Excellence Initiative",
    description: "EMUSKI launched an ambitious manufacturing excellence initiative, partnering with leading automotive OEMs to deliver critical components with unprecedented precision and speed.",
    image: "/assets/componets/3-Oct-25/WhatsApp Image 2025-08-28 at 10.34.17 AM.jpeg",
    link: "/gallery"
  },
  {
    category: "Smart Manufacturing",
    title: "Custom Fixture Implementation Success",
    description: "Our custom fixture design reduced assembly time by 40% for an electronics manufacturer, enabling them to meet increased demand during peak season while maintaining quality standards.",
    image: "/assets/componets/3-Oct-25/cent_fixture/WhatsApp Image 2025-10-27 at 3.21.23 PM.jpeg",
    link: "/gallery"
  },
  {
    category: "Production Systems",
    title: "Matica Production Line Excellence",
    description: "Professional production line setup showcasing our advanced assembly stations, quality assurance processes, and manufacturing workflow optimization for operational excellence.",
    image: "/assets/componets/Matica-Photos2/DSC_1008.JPG",
    link: "/gallery"
  },
  {
    category: "CNC Machining",
    title: "High-Precision Component Manufacturing",
    description: "Delivered complex geometries with tight tolerances and exceptional surface finishes for automotive OEMs, demonstrating our advanced CNC machining capabilities.",
    image: "/assets/componets/Part-Photos/IMG-20250310-WA0011.jpg",
    link: "/gallery"
  },
  {
    category: "Client Partnership",
    title: "Aerospace Innovation Partnership Success",
    description: "Strategic partnership with Forus showcasing EMUSKI's rapid prototyping and engineering validation capabilities, enabling accelerated product development cycles for our B2B manufacturing partners.",
    image: "/assets/componets/forus/WhatsApp Image 2025-08-23 at 10.06.37 PM.jpeg",
    link: "/gallery"
  }
];

export const NewsCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -containerRef.current.offsetWidth : containerRef.current.offsetWidth;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="h-16" />

      {/* Trusted by Clients Section */}
      <section className="py-8 border-b border-border/30 relative overflow-hidden" style={{backgroundColor: '#121A21'}}>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#4fd3d4_1px,transparent_1px),linear-gradient(to_bottom,#4fd3d4_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-lg font-semibold text-white/80 mb-4">Trusted by Industry Leaders</h2>
          </div>
          
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-12 items-center">
              {[...clientLogos, ...clientLogos].map((client, index) => (
                <div key={index} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-8 sm:h-12 w-auto object-contain filter brightness-0 invert"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
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
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#4fd3d4_1px,transparent_1px),linear-gradient(to_bottom,#4fd3d4_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Our Success Stories</h2>
          
          <div className="hidden sm:flex space-x-2">
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
          ref={containerRef}
          className="flex overflow-x-auto space-x-4 sm:space-x-6 pb-4 scrollbar-hide"
        >
          {successStories.map((item, index) => (
            <Card
              key={index}
              className="flex-shrink-0 w-80 sm:w-96 group bg-white border-gray-200 hover:border-emuski-teal/50 transition-all duration-300 cursor-pointer overflow-hidden"
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
                    <span className="text-xs font-medium text-gray-700 uppercase tracking-wider">Success Story</span>
                  </div>
                  
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-tight">
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
