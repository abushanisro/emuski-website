import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const featuredContent = [
  {
    id: "ai-models",
    label: "AI Models",
    items: [
      {
        category: "Generative AI",
        title: "Open-Source AI Models Transform Research",
        description: "Introducing breakthrough models designed to accelerate AI innovation across language processing, molecular biology, and autonomous systems.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
      },
      {
        category: "Deep Learning",
        title: "Neural Architecture Advances Computer Vision",
        description: "Next-generation neural networks achieving unprecedented accuracy in real-time image recognition and analysis.",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80"
      }
    ]
  },
  {
    id: "computing",
    label: "Computing",
    items: [
      {
        category: "HPC",
        title: "Supercomputing Centers Adopt Next-Gen Architecture",
        description: "Leading research facilities worldwide deploy advanced computing infrastructure for scientific breakthroughs in climate, physics, and medicine.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
      },
      {
        category: "Data Centers",
        title: "Energy-Efficient Computing at Scale",
        description: "Revolutionary cooling and power management systems reduce data center energy consumption by 40% while increasing performance.",
        image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80"
      }
    ]
  },
  {
    id: "research",
    label: "Research",
    items: [
      {
        category: "Scientific Computing",
        title: "AI Accelerates Drug Discovery",
        description: "Machine learning models analyze molecular interactions, reducing pharmaceutical development time from years to months.",
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80"
      },
      {
        category: "Climate Science",
        title: "Simulating Earth's Climate Future",
        description: "Advanced climate models powered by AI provide unprecedented accuracy in predicting environmental changes and extreme weather patterns.",
        image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80"
      }
    ]
  }
];

export const FeaturedTabs = () => {
  const [activeTab, setActiveTab] = useState("ai-models");

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full justify-start bg-secondary border-b border-border rounded-none h-auto p-0 mb-8">
            {featuredContent.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 py-4 text-base font-medium"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {featuredContent.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-0">
              <div className="grid md:grid-cols-2 gap-8">
                {tab.items.map((item, index) => (
                  <Card
                    key={index}
                    className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-sm">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-emuski-teal-darker transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      <Button variant="link" className="text-emuski-teal-darker hover:text-emuski-teal-dark p-0 h-auto font-semibold">
                        Read More →
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
