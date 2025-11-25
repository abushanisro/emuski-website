import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const engineeringServices = [
  {
    title: "Precision CNC Machining",
    description: "State-of-the-art CNC machining capabilities delivering high-precision components for automotive and aerospace applications with tight tolerances.",
    image: "/src/assets/componets/Part - Photos/IMG-20250310-WA0011.jpg",
    features: [
      "5-axis CNC machining for complex geometries",
      "Tight tolerance manufacturing (±0.01mm)",
      "Surface finish optimization",
      "Material expertise across metals and polymers"
    ]
  },
  {
    title: "Component Design & Validation",
    description: "Complete product development lifecycle from concept to production, including rapid prototyping and engineering validation services.",
    image: "/src/assets/componets/forus/WhatsApp Image 2025-08-23 at 10.06.37 PM.jpeg",
    features: [
      "CAD design and 3D modeling",
      "Rapid prototyping and testing",
      "Design validation and verification",
      "Engineering consultation and optimization"
    ]
  },
  {
    title: "Custom Fixture & Tooling Design",
    description: "Custom-designed fixtures and tooling solutions to optimize manufacturing processes and ensure consistent component quality for enhanced production efficiency.",
    image: "/src/assets/componets/3.Oct 25/cent_fixture/WhatsApp Image 2025-10-27 at 3.21.23 PM.jpeg",
    features: [
      "Custom fixture design and manufacturing",
      "Specialized tooling development",
      "Assembly automation solutions",
      "Production efficiency optimization"
    ]
  },
  {
    title: "Quality Control Excellence",
    description: "Advanced quality inspection and testing protocols ensuring every component meets exact specifications and industry standards for automotive and aerospace applications.",
    image: "/src/assets/componets/Part - Photos/IMG-20250519-WA0016.jpg",
    features: [
      "Dimensional inspection and verification",
      "Material testing and certification",
      "Statistical process control (SPC)",
      "ISO 9001:2015 compliance assurance"
    ]
  }
];

export default function PrecisionEngineering() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-industrial-dark text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#4fd3d4_1px,transparent_1px),linear-gradient(to_bottom,#4fd3d4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Engineering Precision with Cost Focus
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Precision engineering with core focus on cost engineering - optimizing manufacturing processes and reducing production costs while maintaining the highest quality standards.
            </p>
            <div className="h-1 w-24 bg-emuski-teal rounded-full mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Engineering Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Engineering Capabilities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive engineering solutions focused on cost optimization and manufacturing excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {engineeringServices.map((service, index) => (
              <div key={index} className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-emuski-teal rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="text-primary hover:text-primary/80 font-semibold transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Engineering Focus */}
      <section className="py-16" style={{backgroundColor: '#121A21'}}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Cost Engineering at the Core
            </h2>
            <p className="text-xl text-gray-300">
              Our precision engineering services are built around cost engineering principles, ensuring every project delivers maximum value and efficiency.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-emuski-teal/20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-emuski-teal">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white">Cost Analysis</h3>
                <p className="text-gray-400">Comprehensive cost breakdown and optimization opportunities identification.</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-emuski-teal/20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-emuski-teal">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white">Process Optimization</h3>
                <p className="text-gray-400">Streamlining manufacturing processes for maximum efficiency and cost reduction.</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-emuski-teal/20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-emuski-teal">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white">Value Engineering</h3>
                <p className="text-gray-400">Delivering the same functionality at reduced costs through smart engineering.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-emuski-teal-darker text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Optimize Your Manufacturing Costs
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-xs sm:max-w-md md:max-w-2xl mx-auto leading-relaxed">
              Let our precision engineering team analyze your project and identify cost optimization opportunities.
            </p>
            <div className="h-1 w-16 sm:w-20 md:w-24 bg-white rounded-full mx-auto"></div>
            <button className="bg-white text-emuski-teal-darker px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base">
              Get Engineering Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}