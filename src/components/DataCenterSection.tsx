import { useState, useRef } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const serviceItems = [
  // Engineering Services
  {
    category: "Precision Engineering",
    title: "CNC Machining Excellence",
    description: "High-precision CNC machining capabilities delivering complex geometries with tight tolerances for automotive and aerospace applications.",
    image: "/assets/componets/Part-Photos/IMG-20250310-WA0011.jpg",
    link: "/precision-engineering"
  },
  {
    category: "Engineering Services",
    title: "Component Design & Validation",
    description: "Complete product development lifecycle from concept to production, including rapid prototyping and validation services.",
    image: "/assets/componets/forus/WhatsApp Image 2025-08-23 at 10.06.37 PM.jpeg",
    link: "/precision-engineering"
  },
  {
    category: "Quality Assurance",
    title: "Quality Control Systems",
    description: "Advanced quality inspection and testing protocols ensuring every component meets exact specifications and industry standards.",
    image: "/assets/componets/Part-Photos/IMG-20250519-WA0016.jpg",
    link: "/precision-engineering"
  },
  {
    category: "Custom Solutions",
    title: "Fixture Design & Tooling",
    description: "Custom-designed fixtures and tooling solutions to optimize manufacturing processes and ensure consistent component quality.",
    image: "/assets/componets/3-Oct-25/cent_fixture/WhatsApp Image 2025-10-27 at 3.21.23 PM.jpeg",
    link: "/manufacturing-services"
  },
  // Manufacturing Services
  {
    category: "Manufacturing Services",
    title: "Production Line Excellence",
    description: "Professional production line setup and manufacturing excellence with advanced assembly stations and workflow optimization.",
    image: "/assets/componets/Matica-Photos2/DSC_1008.JPG",
    link: "/manufacturing-services"
  },
  {
    category: "Manufacturing Services",
    title: "Precision Component Manufacturing",
    description: "High-precision manufactured components showcasing our CNC machining capabilities and partnership with automotive OEMs.",
    image: "/assets/componets/Part-Photos/IMG-20250206-WA0025.jpg",
    link: "/manufacturing-services"
  },
  // Next-Gen AI Services
  {
    category: "Next-Gen AI",
    title: "Mithran AI Platform",
    description: "AI-powered intelligence for smarter product development, supply chain, and cost optimization delivering measurable results for OEMs.",
    image: "/assets/componets/3-Oct-25/WhatsApp Image 2025-08-28 at 10.34.17 AM.jpeg",
    link: "/solutions/ai"
  },
];

const quickLineupServices = [
  {
    title: "CNC Machining Excellence",
    category: "Precision Engineering",
    link: "/precision-engineering"
  },
  {
    title: "Component Design & Validation", 
    category: "Engineering Services",
    link: "/precision-engineering"
  },
  {
    title: "Quality Control Systems",
    category: "Quality Assurance", 
    link: "/precision-engineering"
  },
  {
    title: "Fixture Design & Tooling",
    category: "Custom Solutions",
    link: "/manufacturing-services"
  },
  {
    title: "Production Line Excellence",
    category: "Manufacturing Services",
    link: "/manufacturing-services"
  },
  {
    title: "Precision Component Manufacturing",
    category: "Manufacturing Services", 
    link: "/manufacturing-services"
  },
  {
    title: "Mithran AI Platform",
    category: "Next-Gen AI",
    link: "/solutions/ai"
  }
];

export const DataCenterSection = () => {
  const [showQuickLineup, setShowQuickLineup] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const toggleQuickLineup = () => {
    setShowQuickLineup(prev => !prev);
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-secondary/30" style={{ marginTop: '0' }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Left Side - Title and Description */}
            <div className="lg:col-span-1 space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                Our Services
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Comprehensive engineering and manufacturing solutions designed to drive product value, cost optimization, and supply chain excellence through deep expertise and advanced technology.
              </p>
              
              {/* Quick Lineup */}
              <button
                onClick={toggleQuickLineup}
                className="mt-4 text-emuski-teal-darker hover:text-emuski-teal-dark font-medium flex items-center transition-colors"
              >
                Quick Lineup
                <ChevronDown className={`ml-2 h-4 w-4 transform transition-transform ${showQuickLineup ? 'rotate-180' : ''}`} />
              </button>
              
              {showQuickLineup && (
                <div className="mt-3 space-y-1">
                  {quickLineupServices.map((service, index) => (
                    <a 
                      key={index}
                      href={service.link} 
                      className="group flex items-center py-1 px-2 -mx-2 rounded text-sm text-gray-600 hover:text-emuski-teal-darker hover:bg-emuski-teal/5 transition-all duration-200"
                    >
                      <span className="w-1 h-1 bg-gray-400 group-hover:bg-emuski-teal-darker rounded-full mr-3 transition-colors"></span>
                      <span className="flex-1 flex items-center">
                        {service.title}
                        {service.title === "Mithran AI Platform" && (
                          <span className="ml-2 px-1.5 py-0.5 text-xs font-medium bg-blue-100 text-blue-600 rounded border border-blue-200">
                            BETA
                          </span>
                        )}
                      </span>
                      <svg className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" />
                      </svg>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Right Side - Horizontal Scroll */}
            <div className="lg:col-span-2">
              {/* Navigation Arrows */}
              <div className="hidden lg:flex justify-end mb-4">
                <div className="flex space-x-2">
                  <Button
                    onClick={scrollLeft}
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 bg-emuski-teal-dark hover:bg-emuski-teal-darker text-white border-emuski-teal"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    onClick={scrollRight}
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 bg-emuski-teal-dark hover:bg-emuski-teal-darker text-white border-emuski-teal"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div 
                ref={scrollContainerRef}
                className="flex overflow-x-auto space-x-4 sm:space-x-6 pb-4 scrollbar-hide"
              >
                {serviceItems.map((item, index) => (
                  <Card key={index} className="flex-shrink-0 w-80 sm:w-96 group bg-white border-gray-200 hover:border-emuski-teal-darker/50 transition-all duration-300 cursor-pointer overflow-hidden">
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
                          <span className="text-xs font-medium text-gray-700 uppercase tracking-wider">Service</span>
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
          </div>
           {/* Mobile Services */}
           <div className="lg:hidden mt-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Our Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {serviceItems.map((item, index) => (
                      <a key={index} href={item.link} className="bg-card p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-md font-bold text-foreground mb-1">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.category}</p>
                      </a>
                  ))}
              </div>
            </div>
        </div>
      </section>
  );
};
