import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const recommendations = [
  {
    title: "Automotive Excellence Partnership",
    description: "EMUSKI delivered 500,000 precision brake components for a Tier-1 automotive supplier, achieving zero defects across 18 months of production",
    image: "/assets/componets/Part-Photos/IMG-20250206-WA0025.jpg"
  },
  {
    title: "Aerospace Innovation Story",
    description: "Our 5-axis CNC capabilities enabled a aerospace client to reduce component weight by 35% while improving structural integrity for next-gen aircraft",
    image: "/assets/componets/Part-Photos/IMG-20250310-WA0011.jpg"
  },
  {
    title: "Medical Device Success",
    description: "EMUSKI's cleanroom assembly operations helped a medical device startup achieve FDA approval 4 months ahead of schedule, accelerating life-saving technology to market",
    image: "/assets/componets/Matica-Photos2/DSC_1006.JPG"
  },
  {
    title: "Defense Contract Achievement",
    description: "Our quality systems exceeded military specifications, earning EMUSKI a 5-year contract for critical defense components valued at $12M annually",
    image: "/assets/componets/Part-Photos/IMG-20250519-WA0016.jpg"
  },
  {
    title: "Smart Factory Implementation",
    description: "Our custom fixture design reduced cycle time by 45% for an electronics manufacturer, increasing annual capacity from 800K to 1.2M units with same workforce",
    image: "/assets/componets/3-Oct-25/cent_fixture/WhatsApp Image 2025-10-27 at 3.21.23 PM.jpeg"
  },
  {
    title: "R&D Partnership Success",
    description: "EMUSKI's rapid prototyping enabled a Fortune 500 client to test 15 design iterations in 3 weeks, accelerating product launch by 6 months in competitive market",
    image: "/assets/componets/forus/WhatsApp Image 2025-08-23 at 10.06.37 PM.jpeg"
  }
];

export const RecommendedSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -containerRef.current.offsetWidth : containerRef.current.offsetWidth;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 relative overflow-hidden" style={{backgroundColor: '#111827'}}>
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#4fd3d4_1px,transparent_1px),linear-gradient(to_bottom,#4fd3d4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Our Manufacturing Excellence</h2>
          
          <div className="hidden sm:flex space-x-2">
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
          ref={containerRef}
          className="flex overflow-x-auto space-x-4 sm:space-x-6 pb-4 scrollbar-hide"
        >
          {recommendations.map((item, index) => (
            <Card
              key={index}
              className="flex-shrink-0 w-72 sm:w-80 group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
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
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
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
