import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import autonomousHero from "@/assets/autonomous-hero.jpg";
import { Cpu, Zap, Shield, Layers } from "lucide-react";

const AutonomousMachines = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[90vh] bg-background overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent z-10" />
          <img
            src={autonomousHero}
            alt="Autonomous Machines"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          <div className="relative z-20 container mx-auto px-6 h-full flex items-center">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
                The Ultimate Platform for Physical AI and Robotics
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Build and deploy intelligent machines with embedded systems powered by advanced AI processors. From edge computing to autonomous robotics.
              </p>
              
              <div className="flex gap-4">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg">
                  Get Started
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-semibold px-8 py-6 text-lg">
                  View Documentation
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Overview
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Complete ecosystem for developing and deploying AI-powered autonomous systems
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Cpu className="h-12 w-12 text-primary" />,
                  title: "Embedded Systems",
                  description: "High-performance computing platforms for edge AI applications"
                },
                {
                  icon: <Zap className="h-12 w-12 text-primary" />,
                  title: "Real-Time Processing",
                  description: "Ultra-low latency inference for mission-critical applications"
                },
                {
                  icon: <Shield className="h-12 w-12 text-primary" />,
                  title: "Secure Architecture",
                  description: "Hardware-accelerated security for trusted AI deployment"
                },
                {
                  icon: <Layers className="h-12 w-12 text-primary" />,
                  title: "Software Stack",
                  description: "Complete development tools and frameworks for AI workflows"
                }
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
              Applications
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Autonomous Vehicles",
                  description: "Power self-driving cars with real-time perception and decision making",
                  image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80"
                },
                {
                  title: "Industrial Robotics",
                  description: "Enable smart factories with AI-powered robotic systems",
                  image: "https://images.unsplash.com/photo-1565843708714-52ecf69ab81f?w=800&q=80"
                },
                {
                  title: "Smart Cities",
                  description: "Deploy intelligent infrastructure for urban management",
                  image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80"
                }
              ].map((useCase, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={useCase.image}
                      alt={useCase.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {useCase.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/10 border-t border-b border-primary/20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of developers building next-generation autonomous systems
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg">
              Start Developing
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AutonomousMachines;
