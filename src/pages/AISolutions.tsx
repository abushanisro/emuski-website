import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import aiSolutionsHero from "@/assets/ai-solutions-hero.jpg";
import { Brain, Sparkles, Database, Network, Code, Rocket } from "lucide-react";
import { useState } from "react";

const AISolutions = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[85vh] bg-background overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent z-10" />
          <img
            src={aiSolutionsHero}
            alt="AI Solutions"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          <div className="relative z-20 container mx-auto px-6 h-full flex items-center">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
                Next-Gen AI - Mithran
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                AI-powered intelligence for smarter product development, supply chain, and cost optimization.
              </p>
              
              <div className="flex gap-4 flex-wrap">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg">
                  Get Started
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-semibold px-6 py-6 text-lg">
                  For AI Executives
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-semibold px-6 py-6 text-lg">
                  For Developers
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Tabbed Content Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full justify-start bg-secondary border-b border-border rounded-none h-auto p-0 mb-12">
                {[
                  { id: "overview", label: "Overview" },
                  { id: "solutions", label: "Solutions" },
                  { id: "resources", label: "Resources" },
                  { id: "next-steps", label: "Next Steps" }
                ].map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 py-4 text-base font-medium"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="overview" className="mt-0">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                  <div>
                    <h2 className="text-4xl font-bold text-foreground mb-6">
                      What is Mithran?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      EMuski is building Mithran, a next-generation AI-driven engineering and manufacturing platform that acts as a digital backbone for OEMs. It is designed to simplify the entire product lifecycle—from design and costing to supplier management and project execution.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      By combining automation, artificial intelligence, supplier networking, and real-time monitoring, Mithran will transform traditional workflows into a smart, data-driven ecosystem.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: <Brain />, title: "Neural Networks", value: "100B+ Parameters" },
                      { icon: <Sparkles />, title: "AI Models", value: "10,000+ Deployed" },
                      { icon: <Database />, title: "Training Speed", value: "10x Faster" },
                      { icon: <Network />, title: "Global Reach", value: "150+ Countries" }
                    ].map((stat, index) => (
                      <Card key={index} className="p-6 bg-card border-border hover:border-primary/50 transition-all">
                        <div className="text-primary mb-3">{stat.icon}</div>
                        <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.title}</div>
                      </Card>
                    ))}
                  </div>
                </div>
                
                {/* How Mithran Will Work Section */}
                <div className="mb-16">
                  <h2 className="text-4xl font-bold text-foreground mb-8 text-center">How Mithran Will Work</h2>
                  <p className="text-xl text-muted-foreground mb-8 text-center">Mithran enables OEMs to:</p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                      {
                        title: "Upload CAD drawings and automatically generate structured BOMs",
                        description: "Streamlined design-to-BOM conversion process"
                      },
                      {
                        title: "Get AI-driven process planning and accurate cost estimation",
                        description: "Smart cost optimization and planning automation"
                      },
                      {
                        title: "Identify capable suppliers, manage RFQs, and validate quotations",
                        description: "Intelligent supplier network management"
                      },
                      {
                        title: "Collaborate on design-for-manufacturing reviews and finalize production-ready drawings",
                        description: "Enhanced DFM collaboration workflows"
                      },
                      {
                        title: "Monitor projects and logistics in real time for faster, risk-free execution",
                        description: "Real-time project visibility and control"
                      }
                    ].map((feature, index) => (
                      <Card key={index} className="p-6 bg-card border-border hover:border-primary/50 transition-all">
                        <h3 className="text-lg font-bold text-foreground mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {feature.description}
                        </p>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Why It Matters Section */}
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-6">Why It Matters</h2>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      Mithran is being built to: Accelerate design-to-production cycles, Reduce manual effort and errors, Optimize sourcing and cost validation, Provide end-to-end visibility and smarter decision-making.
                    </p>
                    <div className="space-y-4">
                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-bold text-foreground">30% faster sourcing cycles</h4>
                        <p className="text-muted-foreground text-sm">Accelerated procurement and supplier validation</p>
                      </div>
                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-bold text-foreground">15% cost savings through accurate cost validation</h4>
                        <p className="text-muted-foreground text-sm">AI-powered cost optimization and validation</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-6">Looking Ahead</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      EMuski is building Mithran to help OEMs gain AI-powered intelligence, stronger control, and global competitiveness. Once launched, Mithran will be the platform that connects engineering precision with data-driven decision-making.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="solutions" className="mt-0">
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: <Sparkles className="h-12 w-12 text-primary" />,
                      title: "Generative AI",
                      description: "Build and deploy large language models, image generation, and creative AI applications",
                      features: ["LLM Training", "Image Synthesis", "Code Generation"]
                    },
                    {
                      icon: <Brain className="h-12 w-12 text-primary" />,
                      title: "Deep Learning",
                      description: "Accelerate neural network training and inference for computer vision and NLP",
                      features: ["Model Training", "Inference Optimization", "Transfer Learning"]
                    },
                    {
                      icon: <Code className="h-12 w-12 text-primary" />,
                      title: "MLOps",
                      description: "End-to-end platform for managing the machine learning lifecycle at scale",
                      features: ["Model Management", "Pipeline Automation", "Monitoring"]
                    }
                  ].map((solution, index) => (
                    <Card key={index} className="p-8 bg-card border-border hover:border-primary/50 transition-all group">
                      <div className="mb-4 group-hover:scale-110 transition-transform">
                        {solution.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">
                        {solution.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {solution.description}
                      </p>
                      <ul className="space-y-2">
                        {solution.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="resources" className="mt-0">
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      category: "Documentation",
                      title: "AI Developer Documentation",
                      description: "Comprehensive guides for building AI applications",
                      link: "Read Docs"
                    },
                    {
                      category: "Training",
                      title: "Deep Learning Institute",
                      description: "Hands-on courses from AI experts",
                      link: "Start Learning"
                    },
                    {
                      category: "Community",
                      title: "Developer Forums",
                      description: "Connect with AI developers worldwide",
                      link: "Join Community"
                    },
                    {
                      category: "Blog",
                      title: "Latest AI Research",
                      description: "Breakthrough papers and technical insights",
                      link: "Read Blog"
                    }
                  ].map((resource, index) => (
                    <Card key={index} className="p-8 bg-card border-border hover:border-primary/50 transition-all group cursor-pointer">
                      <div className="inline-block px-3 py-1 bg-primary/10 border border-primary rounded-sm mb-4">
                        <span className="text-primary text-sm font-medium">{resource.category}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {resource.description}
                      </p>
                      <Button variant="link" className="text-primary hover:text-primary/80 p-0 h-auto font-semibold">
                        {resource.link} →
                      </Button>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="next-steps" className="mt-0">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-4xl font-bold text-foreground mb-8 text-center">
                    Start Your AI Journey
                  </h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      {
                        icon: <Rocket className="h-12 w-12 text-primary" />,
                        title: "Quick Start",
                        description: "Get up and running with AI in minutes",
                        cta: "Start Now"
                      },
                      {
                        icon: <Code className="h-12 w-12 text-primary" />,
                        title: "Developer Portal",
                        description: "Access tools, SDKs, and APIs",
                        cta: "Explore"
                      },
                      {
                        icon: <Network className="h-12 w-12 text-primary" />,
                        title: "Talk to Expert",
                        description: "Get personalized guidance",
                        cta: "Contact Us"
                      }
                    ].map((step, index) => (
                      <Card key={index} className="p-8 bg-card border-border hover:border-primary/50 transition-all text-center">
                        <div className="mb-4 flex justify-center">{step.icon}</div>
                        <h3 className="text-xl font-bold text-foreground mb-3">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          {step.description}
                        </p>
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                          {step.cta}
                        </Button>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/10 border-t border-b border-primary/20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to Build with AI?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the AI revolution and transform your business with cutting-edge technology
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg">
              Get Started Today
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AISolutions;
