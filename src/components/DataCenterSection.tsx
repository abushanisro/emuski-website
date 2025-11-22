import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const serviceItems = [
  // Engineering Services
  {
    category: "Engineering Services",
    title: "Product Cost Estimation",
    description: "Data-driven cost models helping OEMs forecast and optimize product costs with precision.",
    fullDescription: "Advanced methodologies and digital tools ensuring transparency and efficiency in decision-making with detailed cost breakdowns, risk assessments, and optimization recommendations.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80",
    link: "/blog"
  },
  {
    category: "Engineering Services",
    title: "VAVE - Teardown & Benchmarking",
    description: "Comprehensive analysis identifying cost reduction opportunities through detailed teardown and benchmarking studies.",
    fullDescription: "VAVE methodology helping OEMs refine designs, enhance competitiveness, and maximize product value through comprehensive teardown analysis and competitive benchmarking.",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=400&q=80",
    link: "/blog"
  },
  {
    category: "Engineering Services",
    title: "Strategic Sourcing Support",
    description: "End-to-end sourcing solutions connecting OEMs with reliable, cost-effective quality suppliers.",
    fullDescription: "Strengthening supply chain resilience and reducing procurement risks through comprehensive supplier evaluation, strategic partnerships, and end-to-end sourcing assistance.",
    image: "https://images.unsplash.com/photo-1566207474742-de921626ad0c?w=400&q=80",
    link: "/blog"
  },
  {
    category: "Engineering Services",
    title: "Expert Engineer Support",
    description: "Experienced Should-Costing and VAVE Engineers integrated seamlessly into your project teams.",
    fullDescription: "Should-Costing and VAVE specialists working alongside OEM teams delivering cost insights, benchmarking expertise, and problem-solving support for smarter decisions and faster execution.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80",
    link: "/blog"
  },
  // Manufacturing Services
  {
    category: "Manufacturing Services",
    title: "Rapid Prototyping",
    description: "Fast-turn prototypes bringing concepts to life with advanced NPD Center capabilities.",
    fullDescription: "Engineering knowledge combined with advanced production techniques enabling OEMs to test, validate, and refine designs in shorter cycles through our NPD Center.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80",
    link: "/blog"
  },
  {
    category: "Manufacturing Services",
    title: "On-demand Manufacturing",
    description: "Flexible production solutions adapting to evolving OEM requirements with precision and speed.",
    fullDescription: "Manufacturing agility from low-volume builds to full-scale production meeting market demands with precision, speed, and smart production solutions through our NPD Center.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80",
    link: "/blog"
  },
  // Next-Gen AI Services
  {
    category: "Next-Gen AI",
    title: "Mithran AI Platform",
    description: "AI-powered platform delivering 30% faster sourcing cycles and 15% cost savings for OEMs.",
    fullDescription: "Next-generation AI-driven engineering platform acting as digital backbone for OEMs, transforming workflows into smart ecosystems with 30% faster sourcing and 15% cost savings.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80",
    link: "/blog"
  }
];

export const DataCenterSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const itemsPerView = 3;

  const maxIndex = Math.max(0, serviceItems.length - itemsPerView);

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

  const handleServiceClick = (link: string) => {
    window.location.href = link;
  };

  return (
    <>
      {/* Separator */}
      {/* Separator */}
      <div className="h-[60px]"></div>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Left Side - Title and Description */}
            <div className="lg:col-span-1 space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                Our Services
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Comprehensive engineering and manufacturing solutions designed to drive product value, cost optimization, and supply chain excellence through deep expertise and advanced technology.
              </p>
              <div className="pt-4 space-y-3">
                {/* Quick Links Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="inline-flex items-center text-emuski-teal font-medium text-sm hover:text-emuski-teal/80 transition-colors"
                  >
                    <ChevronDown className={`h-4 w-4 mr-2 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    Quick Links
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-card border border-border rounded-lg shadow-lg z-40">
                      <div className="p-4 space-y-4">
                        {/* Engineering Services */}
                        <div>
                          <h4 className="text-sm font-semibold text-emuski-teal mb-2">Engineering Services</h4>
                          <ul className="space-y-1">
                            {serviceItems
                              .filter(item => item.category === "Engineering Services")
                              .map((item, index) => (
                                <li key={index}>
                                  <a
                                    href={item.link}
                                    className="text-xs text-muted-foreground hover:text-foreground transition-colors block py-1"
                                  >
                                    {item.title}
                                  </a>
                                </li>
                              ))}
                          </ul>
                        </div>

                        {/* Manufacturing Services */}
                        <div>
                          <h4 className="text-sm font-semibold text-emuski-teal mb-2">Manufacturing Services</h4>
                          <ul className="space-y-1">
                            {serviceItems
                              .filter(item => item.category === "Manufacturing Services")
                              .map((item, index) => (
                                <li key={index}>
                                  <a
                                    href={item.link}
                                    className="text-xs text-muted-foreground hover:text-foreground transition-colors block py-1"
                                  >
                                    {item.title}
                                  </a>
                                </li>
                              ))}
                          </ul>
                        </div>

                        {/* Next-Gen AI */}
                        <div>
                          <h4 className="text-sm font-semibold text-emuski-teal mb-2">Next-Gen AI</h4>
                          <ul className="space-y-1">
                            {serviceItems
                              .filter(item => item.category === "Next-Gen AI")
                              .map((item, index) => (
                                <li key={index}>
                                  <a
                                    href={item.link}
                                    className="text-xs text-muted-foreground hover:text-foreground transition-colors block py-1 flex items-center justify-between"
                                  >
                                    <span>{item.title}</span>
                                    <span className="bg-orange-100 text-orange-600 px-1.5 py-0.5 rounded text-[10px] font-medium ml-2">BETA</span>
                                  </a>
                                </li>
                              ))}
                          </ul>
                        </div>
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
                  <Button
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 bg-emuski-teal hover:bg-emuski-teal/90 text-white border-emuski-teal disabled:opacity-50"
                  >
                    <ChevronUp className="h-4 w-4 rotate-[-90deg]" />
                  </Button>
                  <Button
                    onClick={nextSlide}
                    disabled={currentIndex === maxIndex}
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 bg-emuski-teal hover:bg-emuski-teal/90 text-white border-emuski-teal disabled:opacity-50"
                  >
                    <ChevronUp className="h-4 w-4 rotate-[90deg]" />
                  </Button>
                </div>
              </div>

              {/* Carousel Container */}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
                >
                  {serviceItems.map((item, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-3" style={{ width: `${100 / itemsPerView}%` }}>
                      <Card className="group overflow-hidden bg-white border-gray-200 hover:border-emuski-teal/50 transition-all duration-300 h-full">
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

                            <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                              {item.title}
                            </h3>

                            <p className="text-sm text-gray-600 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </a>
                      </Card>
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
