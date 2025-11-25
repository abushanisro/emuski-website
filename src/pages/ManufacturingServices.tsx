import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const services = [
  {
    title: "OEM Manufacturing",
    description: "Complete manufacturing solutions from concept to production, ensuring quality and precision at every step.",
    image: "/src/assets/componets/Matica Photos2/DSC_1008.JPG",
    features: [
      "End-to-end manufacturing process",
      "Quality control and assurance",
      "Scalable production capabilities",
      "Custom specifications support"
    ]
  },
  {
    title: "Custom Manufacturing",
    description: "Tailored manufacturing services meeting your specific requirements and quality standards.",
    image: "/src/assets/componets/Part - Photos/IMG-20250206-WA0025.jpg",
    features: [
      "Custom design solutions",
      "Flexible production volumes",
      "Specialized manufacturing processes",
      "Technical consultation"
    ]
  },
  {
    title: "Rapid Prototyping",
    description: "Fast and efficient prototyping services to bring your designs to life quickly.",
    image: "/src/assets/componets/forus/WhatsApp Image 2025-08-23 at 10.06.37 PM.jpeg",
    features: [
      "Quick turnaround times",
      "Multiple material options",
      "Iterative design support",
      "Cost-effective solutions"
    ]
  },
  {
    title: "Production Scaling",
    description: "Seamless scaling from prototype to full production with optimized processes.",
    image: "/src/assets/componets/3.Oct 25/cent_fixture/WhatsApp Image 2025-10-27 at 3.21.23 PM.jpeg",
    features: [
      "Production optimization",
      "Supply chain management",
      "Volume pricing advantages",
      "Quality consistency"
    ]
  }
];

export default function ManufacturingServices() {
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
              Complete Manufacturing Solutions
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              From concept to production, we provide comprehensive manufacturing services that bring your designs to life with precision and excellence.
            </p>
            <div className="h-1 w-24 bg-emuski-teal rounded-full mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
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

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-emuski-teal-darker text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Ready to Start Your Manufacturing Project?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-xs sm:max-w-md md:max-w-2xl mx-auto leading-relaxed">
              Get in touch with our manufacturing experts to discuss your requirements and receive a customized quote.
            </p>
            <div className="h-1 w-16 sm:w-20 md:w-24 bg-white rounded-full mx-auto"></div>
            <button className="bg-white text-emuski-teal-darker px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base">
              Request Quote
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}