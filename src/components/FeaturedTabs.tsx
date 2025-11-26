import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const featuredContent = [
  {
    id: "engineering",
    label: "Engineering",
    items: [
      {
        category: "Precision Engineering",
        title: "Automotive OEM Partnership Excellence",
        description: "EMUSKI's precision engineering team delivered critical transmission components for a leading automotive OEM, achieving 99.8% quality standards while reducing production time by 25%.",
        image: "/assets/componets/Part-Photos/IMG-20250310-WA0011.jpg"
      },
      {
        category: "Design & Validation",
        title: "Aerospace Innovation Partnership",
        description: "Our engineering excellence enabled a major aerospace client to launch their next-generation aircraft component 6 months ahead of schedule through collaborative design optimization.",
        image: "/assets/componets/forus/WhatsApp Image 2025-08-23 at 10.06.37 PM.jpeg"
      }
    ]
  },
  {
    id: "manufacturing",
    label: "Manufacturing",
    items: [
      {
        category: "Production",
        title: "Manufacturing Scale-Up Success Story",
        description: "EMUSKI partnered with an industrial equipment manufacturer to scale production from 100 to 10,000 units monthly, maintaining zero-defect quality while reducing per-unit costs by 30%.",
        image: "/assets/componets/Matica-Photos2/DSC_1008.JPG"
      },
      {
        category: "Quality Assurance",
        title: "Medical Device Quality Excellence",
        description: "Our advanced quality systems helped a medical device client achieve FDA compliance ahead of schedule, enabling faster market entry for life-saving equipment.",
        image: "/assets/componets/Part-Photos/IMG-20250519-WA0016.jpg"
      }
    ]
  },
  {
    id: "projects",
    label: "Projects",
    items: [
      {
        category: "Automotive Components",
        title: "Tier-1 Automotive Supplier Achievement",
        description: "EMUSKI became a trusted Tier-1 supplier for brake system components, delivering 2 million parts annually with 99.9% on-time delivery to global automotive giants.",
        image: "/assets/componets/Part-Photos/IMG-20250206-WA0025.jpg"
      },
      {
        category: "Custom Fixtures",
        title: "Smart Manufacturing Implementation",
        description: "Our custom fixture design reduced assembly time by 40% for an electronics manufacturer, enabling them to meet increased demand during peak season while maintaining quality standards.",
        image: "/assets/componets/3-Oct-25/cent_fixture/WhatsApp Image 2025-10-27 at 3.21.23 PM.jpeg"
      }
    ]
  }
];

export const FeaturedTabs = () => {
  const [activeTab, setActiveTab] = useState("engineering");

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full flex-wrap sm:flex-nowrap justify-center sm:justify-start bg-secondary border-b border-border rounded-none h-auto p-0 mb-8">
            {featuredContent.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4 sm:px-6 py-4 text-sm sm:text-base font-medium"
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
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-emuski-teal-darker transition-colors">
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
