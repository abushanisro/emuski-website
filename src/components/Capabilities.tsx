import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { 
  Settings, 
  Cog, 
  Zap, 
  Shield, 
  Target, 
  Users, 
  Award, 
  TrendingUp, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Factory,
  Wrench,
  Cpu,
  BarChart3,
  Map,
  MapPin,
  Navigation,
  Maximize2
} from "lucide-react";

const capabilities = [
  {
    icon: Factory,
    title: "Precision Manufacturing",
    description: "Advanced manufacturing capabilities with cutting-edge technology and rigorous quality standards.",
    features: [
      "Multi-axis CNC Machining Centers",
      "Automated Production Lines",
      "ISO 9001:2015 Quality Systems",
      "Lean Six Sigma Processes"
    ],
    stats: { value: "99.8%", label: "First Pass Yield" }
  },
  {
    icon: Wrench,
    title: "Design Engineering",
    description: "Comprehensive design-to-manufacturing services optimizing performance and cost efficiency.",
    features: [
      "Design for Manufacturing (DFM)",
      "Value Analysis & Value Engineering",
      "Rapid Prototyping & Validation",
      "CAD/CAM Integration"
    ],
    stats: { value: "35%", label: "Cost Savings" }
  },
  {
    icon: Cpu,
    title: "Smart Manufacturing",
    description: "AI-driven automation and intelligent systems for next-generation production capabilities.",
    features: [
      "Predictive Maintenance Systems",
      "AI-Powered Quality Inspection",
      "Real-time Process Optimization",
      "IoT-Connected Equipment"
    ],
    stats: { value: "82%", label: "Efficiency Increase" }
  },
  {
    icon: BarChart3,
    title: "Quality Assurance",
    description: "Comprehensive quality management with advanced testing and certification capabilities.",
    features: [
      "Statistical Process Control",
      "Automated Inspection Systems",
      "Material Traceability",
      "Compliance Documentation"
    ],
    stats: { value: "100%", label: "Inspection Rate" }
  }
];

const technologies = [
  { name: "CNC Machining", level: 95 },
  { name: "3D Printing", level: 90 },
  { name: "IoT Integration", level: 88 },
  { name: "AI/ML", level: 85 },
  { name: "Automation", level: 92 },
  { name: "Quality Control", level: 98 }
];

const certifications = [
  {
    title: "ISO 9001:2015",
    description: "Quality Management Systems",
    icon: Award
  },
  {
    title: "ISO 14001:2015",
    description: "Environmental Management",
    icon: Shield
  },
  {
    title: "IATF 16949",
    description: "Automotive Quality",
    icon: Target
  },
  {
    title: "AS9100D",
    description: "Aerospace Standards",
    icon: Zap
  }
];

const industries = [
  "Automotive", "Aerospace", "Medical Devices", "Electronics", 
  "Energy", "Defense", "Consumer Products", "Industrial Equipment"
];

export const Capabilities = () => {
  const [activeCapability, setActiveCapability] = useState(0);
  const [is3DView, setIs3DView] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.title = "EMUSKI Capabilities | Manufacturing Excellence & Engineering Services";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Discover EMUSKI\'s comprehensive manufacturing capabilities including precision engineering, AI-powered solutions, and advanced analytics. One-stop solution for OEMs.');
  }, []);

  // Mouse tracking for VR-style movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with 3D VR-style Facility View */}
      <section className="relative h-screen overflow-hidden">
        {/* 3D VR Background */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-black"
          style={{
            transform: `translate(${(mousePosition.x - 50) * 0.02}px, ${(mousePosition.y - 50) * 0.02}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          {/* Animated 3D Factory Scene */}
          <div className="relative w-full h-full flex items-center justify-center perspective-1000">
            {/* Main Factory Complex */}
            <div 
              className="relative"
              style={{
                transform: `rotateX(${(mousePosition.y - 50) * 0.1}deg) rotateY(${(mousePosition.x - 50) * 0.2}deg) translateZ(0px)`,
                transition: 'transform 0.15s ease-out',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Main Building */}
              <div className="relative w-96 h-80 mx-auto">
                {/* Primary Structure */}
                <div 
                  className="absolute inset-0 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-700 rounded-xl shadow-2xl"
                  style={{
                    transform: `translateZ(50px) rotateY(${15 + (mousePosition.x - 50) * 0.05}deg)`,
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* Windows */}
                  <div className="absolute top-8 left-8 right-8 h-12 bg-yellow-300 rounded opacity-80 shadow-inner"></div>
                  <div className="absolute top-24 left-8 right-8 h-32 bg-blue-200 rounded opacity-60 shadow-inner"></div>
                  <div className="absolute bottom-8 left-8 right-8 h-16 bg-orange-300 rounded opacity-70 shadow-inner"></div>
                  
                  {/* Building Details */}
                  <div className="absolute top-4 left-4 w-4 h-4 bg-red-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-4 right-4 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                
                {/* Side Building */}
                <div 
                  className="absolute top-16 -right-24 w-40 h-56 bg-gradient-to-b from-gray-400 to-gray-600 rounded-lg shadow-xl"
                  style={{
                    transform: `translateZ(30px) rotateY(${-15 + (mousePosition.x - 50) * 0.03}deg)`,
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="absolute top-4 left-4 right-4 h-8 bg-gray-300 rounded opacity-80"></div>
                  <div className="absolute top-16 left-4 right-4 h-24 bg-gray-200 rounded opacity-60"></div>
                </div>

                {/* Manufacturing Wing */}
                <div 
                  className="absolute top-32 -left-32 w-48 h-40 bg-gradient-to-b from-green-400 to-green-600 rounded-lg shadow-xl"
                  style={{
                    transform: `translateZ(25px) rotateY(${25 + (mousePosition.x - 50) * 0.04}deg)`,
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="absolute top-4 left-4 right-4 h-6 bg-green-300 rounded opacity-80"></div>
                  <div className="absolute top-14 left-4 right-4 h-16 bg-green-200 rounded opacity-60"></div>
                </div>

                {/* Ground Plane */}
                <div 
                  className="absolute -bottom-8 -left-32 -right-32 h-16 bg-gradient-to-r from-green-800 via-green-700 to-green-800 rounded-full opacity-70"
                  style={{
                    transform: `translateZ(-20px) rotateX(90deg)`,
                    transformStyle: 'preserve-3d'
                  }}
                ></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full opacity-40 animate-float"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 5}s`,
                      animationDuration: `${3 + Math.random() * 4}s`,
                      transform: `translateZ(${Math.random() * 100 - 50}px)`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <span className="text-blue-300 text-sm font-semibold tracking-wider uppercase">Manufacturing Excellence</span>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Advanced <span className="text-blue-400">Manufacturing</span><br/>
                <span className="text-white/80">Capabilities</span>
              </h1>
              <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl mx-auto">
                Explore our cutting-edge manufacturing facility in immersive 3D. Discover precision engineering, AI-powered automation, and world-class quality systems.
              </p>
              
              {/* Facility Stats */}
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">50,000</div>
                  <div className="text-white/70 text-sm">sq ft facility</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">25+</div>
                  <div className="text-white/70 text-sm">CNC machines</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">100+</div>
                  <div className="text-white/70 text-sm">expert staff</div>
                </div>
              </div>

              <div className="h-1 w-16 sm:w-20 md:w-24 bg-blue-400 rounded-full mx-auto"></div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  onClick={() => window.location.href = 'mailto:abushan.isro@gmail.com?subject=Facility Tour Request&body=Hello, I would like to schedule a virtual or in-person tour of the EMUSKI manufacturing facility.'}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 text-lg shadow-xl"
                >
                  <Factory className="mr-2 h-5 w-5" />
                  Virtual Facility Tour
                </Button>
                <Button 
                  onClick={() => window.location.href = 'mailto:abushan.isro@gmail.com?subject=Service Inquiry&body=Hello, I would like to learn more about EMUSKI services.'}
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 text-lg"
                >
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* VR Controls */}
        <div className="absolute top-6 right-6 z-20 flex space-x-2">
          <Button
            onClick={() => setIs3DView(!is3DView)}
            variant="outline"
            size="sm"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
          >
            <Map className="h-4 w-4 mr-2" />
            {is3DView ? '2D View' : '3D View'}
          </Button>
          <Button
            onClick={() => setIsFullscreen(!isFullscreen)}
            variant="outline"
            size="sm"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
          >
            <Maximize2 className="h-4 w-4" />
          </Button>
        </div>

        {/* VR Instructions */}
        <div className="absolute bottom-6 left-6 z-20 text-white/70 text-sm">
          <div className="bg-black/30 backdrop-blur-sm rounded-lg px-4 py-2">
            <div className="flex items-center space-x-2">
              <Navigation className="h-4 w-4" />
              <span>Move your mouse to explore the facility in VR mode</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Manufacturing Excellence Across Industries</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Comprehensive manufacturing solutions combining precision engineering, advanced automation, and intelligent quality systems to deliver exceptional results.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <Card 
                    key={index}
                    className={`p-8 cursor-pointer transition-all duration-300 border-2 ${
                      activeCapability === index 
                        ? 'border-emuski-teal bg-emuski-teal/5' 
                        : 'border-gray-200 hover:border-emuski-teal/50'
                    }`}
                    onClick={() => setActiveCapability(index)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg ${
                        activeCapability === index ? 'bg-emuski-teal text-white' : 'bg-gray-100 text-gray-600'
                      }`}>
                        <Icon className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-2xl font-bold text-gray-900">{capability.title}</h3>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-emuski-teal">{capability.stats.value}</div>
                            <div className="text-sm text-gray-500">{capability.stats.label}</div>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4">{capability.description}</p>
                        <div className="space-y-2">
                          {capability.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-emuski-teal flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies & Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Technology Excellence
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Our expertise spans advanced manufacturing technologies, from traditional precision machining to cutting-edge automation and AI integration.
                </p>
                
                <div className="space-y-6">
                  {technologies.map((tech, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-900">{tech.name}</span>
                        <span className="text-emuski-teal font-bold">{tech.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-emuski-teal to-emuski-teal/80 h-3 rounded-full transition-all duration-1000"
                          style={{ width: `${tech.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Quality Standards & Certifications
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Certified to international standards ensuring consistent quality, environmental responsibility, and regulatory compliance across all manufacturing operations.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {certifications.map((cert, index) => {
                    const Icon = cert.icon;
                    return (
                      <Card key={index} className="p-6 border-2 border-gray-200 hover:border-emuski-teal/50 transition-colors">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-emuski-teal/10 rounded-lg">
                            <Icon className="h-6 w-6 text-emuski-teal" />
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900">{cert.title}</h3>
                            <p className="text-sm text-gray-600">{cert.description}</p>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Industry Experience
            </h2>
            <p className="text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Trusted by leading companies across diverse industries, we deliver specialized manufacturing solutions tailored to unique sector requirements.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <Card key={index} className="p-6 border-2 border-gray-200 hover:border-emuski-teal hover:bg-emuski-teal/5 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gray-100 group-hover:bg-emuski-teal/10 rounded-lg flex items-center justify-center mx-auto mb-4 transition-colors">
                      <Factory className="h-6 w-6 text-gray-600 group-hover:text-emuski-teal transition-colors" />
                    </div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-emuski-teal transition-colors">
                      {industry}
                    </h3>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emuski-teal-darker text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Partner With Manufacturing Experts
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Ready to optimize your manufacturing process? Connect with our team to discuss custom solutions that drive efficiency, quality, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button 
                onClick={() => window.location.href = 'mailto:abushan.isro@gmail.com?subject=New Project Inquiry&body=Hello, I would like to discuss a new project with EMUSKI.'}
                className="bg-white text-emuski-teal-darker hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
              >
                Start Your Project
              </Button>
              <button 
                onClick={() => window.open('mailto:abushan.isro@gmail.com?subject=Capabilities Brochure Request&body=Hello, I would like to request the EMUSKI capabilities brochure.', '_blank')}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-white bg-transparent text-white hover:bg-white hover:text-emuski-teal-darker font-medium px-4 py-2 text-sm"
              >
                Get Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};