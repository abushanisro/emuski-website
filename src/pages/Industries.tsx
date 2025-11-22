import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import industriesHero from "@/assets/industries-hero.jpg";
import { Activity, Car, Factory, Briefcase, GraduationCap, Building2 } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: <Activity className="h-12 w-12 text-primary" />,
      title: "Healthcare",
      description: "AI-powered medical imaging, drug discovery, and personalized patient care",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
    },
    {
      icon: <Car className="h-12 w-12 text-primary" />,
      title: "Automotive",
      description: "Autonomous driving, vehicle design, and smart manufacturing",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80"
    },
    {
      icon: <Factory className="h-12 w-12 text-primary" />,
      title: "Manufacturing",
      description: "Intelligent factories, predictive maintenance, and quality control",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
    },
    {
      icon: <Briefcase className="h-12 w-12 text-primary" />,
      title: "Financial Services",
      description: "Fraud detection, algorithmic trading, and risk management",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80"
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-primary" />,
      title: "Education",
      description: "Personalized learning, virtual labs, and research acceleration",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80"
    },
    {
      icon: <Building2 className="h-12 w-12 text-primary" />,
      title: "Retail",
      description: "Smart stores, supply chain optimization, and customer analytics",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[80vh] bg-background overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent z-10" />
          <img
            src={industriesHero}
            alt="Industries"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          <div className="relative z-20 container mx-auto px-6 h-full flex items-center">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
                Transforming Industries with AI
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Discover how AI and accelerated computing are revolutionizing every sector, from healthcare to manufacturing, finance to retail.
              </p>
              
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg">
                Explore Solutions
              </Button>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                AI Solutions for Every Industry
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Cutting-edge technology powering innovation across diverse sectors
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
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
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
                  company: "Global Healthcare Provider",
                  achievement: "40% Faster Diagnosis",
                  description: "AI-powered medical imaging reduces diagnosis time while improving accuracy",
                  industry: "Healthcare"
                },
                {
                  company: "Leading Automotive Manufacturer",
                  achievement: "100M+ Miles Autonomous",
                  description: "Self-driving technology tested across diverse road conditions worldwide",
                  industry: "Automotive"
                },
                {
                  company: "Major Financial Institution",
                  achievement: "99.9% Fraud Detection",
                  description: "Real-time transaction analysis prevents billions in fraudulent activities",
                  industry: "Financial Services"
                },
                {
                  company: "Manufacturing Leader",
                  achievement: "50% Reduced Downtime",
                  description: "Predictive maintenance prevents equipment failures before they occur",
                  industry: "Manufacturing"
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
                AI Solutions
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Transform Your Industry with AI
              </h2>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
                Connect with our industry experts to explore custom AI solutions that drive innovation and optimize operations.
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
