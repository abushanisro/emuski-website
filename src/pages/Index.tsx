import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { NewsCarousel } from "@/components/NewsCarousel";
import { DataCenterSection } from "@/components/DataCenterSection";
import { AboutSection } from "@/components/AboutSection";
import { FeaturedTabs } from "@/components/FeaturedTabs";
import { RecommendedSection } from "@/components/RecommendedSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <DataCenterSection />
        <NewsCarousel />
        <AboutSection />
        <FeaturedTabs />
        <RecommendedSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
