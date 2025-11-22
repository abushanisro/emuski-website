import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const recommendations = [
  {
    title: "AI Workstation",
    description: "Professional-grade computing power for AI development",
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600&q=80"
  },
  {
    title: "GPU Architecture",
    description: "Next-generation graphics processing technology",
    image: "https://images.unsplash.com/photo-1591799265444-d66432b91588?w=600&q=80"
  },
  {
    title: "Data Center Solutions",
    description: "Enterprise-scale infrastructure for AI deployment",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80"
  },
  {
    title: "Edge Computing",
    description: "Real-time AI processing at the network edge",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80"
  },
  {
    title: "Gaming Technology",
    description: "Immersive experiences with ray tracing",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&q=80"
  },
  {
    title: "Automotive AI",
    description: "Autonomous driving platforms and solutions",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80"
  }
];

export const RecommendedSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const cardWidth = 320; // Approximate card width including gap

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById("recommendations-container");
    if (container) {
      const scrollAmount = direction === "left" ? -cardWidth * 2 : cardWidth * 2;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setScrollPosition(container.scrollLeft + scrollAmount);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden" style={{backgroundColor: '#111827'}}>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#4fd3d4_1px,transparent_1px),linear-gradient(to_bottom,#4fd3d4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">Recommended For You</h2>
          
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground border-primary"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground border-primary"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div
          id="recommendations-container"
          className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {recommendations.map((item, index) => (
            <Card
              key={index}
              className="flex-shrink-0 w-80 group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
