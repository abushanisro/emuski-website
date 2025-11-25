import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Activity, Rocket, Shield } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: <Activity className="h-12 w-12 text-primary" />,
      title: "Healthcare & Medical Devices",
      description: "Precision-manufactured medical components and devices meeting stringent FDA requirements, supporting life-saving technologies with exceptional quality standards.",
      image: "/src/assets/componets/Part - Photos/IMG-20250519-WA0016.jpg"
    },
    {
      icon: <Rocket className="h-12 w-12 text-primary" />,
      title: "Space Technology & Aerospace",
      description: "High-precision components for aerospace and space applications, delivering critical parts that withstand extreme environments with zero-defect manufacturing.",
      image: "/src/assets/componets/Part - Photos/IMG-20250310-WA0011.jpg"
    },
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Defense & Critical Systems",
      description: "Mission-critical components for defense applications, meeting military specifications with advanced quality systems and stringent security protocols.",
      image: "/src/assets/componets/3.Oct 25/cent_fixture/WhatsApp Image 2025-10-27 at 3.21.23 PM.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-emuski-teal-darker text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Precision Manufacturing for Critical Industries
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
                EMuski delivers precision-engineered components for healthcare, space technology, and defense applications where quality, reliability, and performance are mission-critical.
              </p>
              
              <div className="h-1 w-24 bg-white rounded-full mx-auto"></div>
              
              <Button className="bg-white text-emuski-teal-darker hover:bg-gray-100 font-semibold px-8 py-4 text-lg">
                Explore Our Capabilities
              </Button>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Critical Industries We Serve
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Specialized manufacturing solutions for mission-critical applications where precision and reliability are paramount
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute bottom-4 left-4">
                      {industry.icon}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {industry.description}
                    </p>
                    <Button variant="link" className="text-primary hover:text-primary/80 p-0 h-auto font-semibold">
                      Learn More →
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
              Success Stories
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  company: "Leading Medical Device Manufacturer",
                  achievement: "FDA Approval Accelerated",
                  description: "EMuski's precision manufacturing helped accelerate FDA approval by delivering medical device components that exceeded quality standards and regulatory requirements.",
                  industry: "Healthcare"
                },
                {
                  company: "Space Technology Pioneer",
                  achievement: "Zero-Defect Mission Success",
                  description: "Critical aerospace components manufactured by EMuski achieved 100% mission success rate in demanding space environments with zero component failures.",
                  industry: "Space Technology"
                },
                {
                  company: "Defense Contractor",
                  achievement: "$12M Annual Contract",
                  description: "EMuski earned a 5-year defense contract valued at $12M annually by exceeding military specifications and stringent security requirements.",
                  industry: "Defense"
                },
                {
                  company: "Aerospace OEM",
                  achievement: "30% Weight Reduction",
                  description: "Advanced engineering solutions reduced component weight by 30% while improving structural integrity for next-generation aircraft applications.",
                  industry: "Aerospace"
                }
              ].map((story, index) => (
                <Card
                  key={index}
                  className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="inline-block px-3 py-1 bg-primary/10 border border-primary rounded-sm mb-4">
                    <span className="text-primary text-sm font-medium">{story.industry}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-primary mb-2">
                    {story.achievement}
                  </h3>
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    {story.company}
                  </h4>
                  <p className="text-muted-foreground">
                    {story.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 lg:py-24 bg-emuski-teal-darker text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <span className="text-white/80 text-sm font-semibold tracking-wider uppercase">
                Precision Manufacturing
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Partner with EMuski for Mission-Critical Components
              </h2>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
                Connect with our engineering experts to explore precision manufacturing solutions for healthcare, space technology, and defense applications.
              </p>
              <div className="h-1 w-16 sm:w-20 md:w-24 bg-white rounded-full mx-auto"></div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  onClick={() => window.location.href = 'mailto:abushan.isro@gmail.com?subject=Sales Inquiry&body=Hello, I would like to speak with someone from EMUSKI sales team.'}
                  className="bg-white text-emuski-teal-darker hover:bg-gray-100 font-semibold px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg"
                >
                  Contact Sales
                </Button>
                <button 
                  onClick={() => window.open('mailto:abushan.isro@gmail.com?subject=Whitepaper Request&body=Hello, I would like to request the EMUSKI industry whitepaper.', '_blank')}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-white bg-transparent text-white hover:bg-white hover:text-emuski-teal-darker font-semibold px-4 py-2 text-base"
                >
                  Download Whitepaper
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Industries;
