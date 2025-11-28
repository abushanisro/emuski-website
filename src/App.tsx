import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Index from "./pages/Index";
import AutonomousMachines from "./pages/AutonomousMachines";
import Industries from "./pages/Industries";
import AISolutions from "./pages/AISolutions";
import NotFound from "./pages/NotFound";
import ManufacturingServices from "./pages/ManufacturingServices";
import PrecisionEngineering from "./pages/PrecisionEngineering";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import SubscriberDashboard from "./pages/SubscriberDashboard";
import { WhatsAppChatbot } from "./components/WhatsAppChatbot";

// ScrollToTop component - ensures every page loads at the top
const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // Multiple methods to ensure scroll to top works across all browsers
    
    // Method 1: Modern browsers with options
    try {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    } catch (error) {
      // Method 2: Fallback for older browsers
      window.scrollTo(0, 0);
    }
    
    // Method 3: Direct DOM manipulation for edge cases
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Method 4: Additional timeout for heavy pages
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname, search]); // Trigger on route or query parameter changes

  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ 
        v7_startTransition: true, 
        v7_relativeSplatPath: true 
      }}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/autonomous-machines" element={<AutonomousMachines />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/solutions/ai" element={<AISolutions />} />
          <Route path="/manufacturing-services" element={<ManufacturingServices />} />
          <Route path="/precision-engineering" element={<PrecisionEngineering />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          {/* FAQ content is now integrated into individual pages */}
          <Route path="/admin/subscribers" element={<SubscriberDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppChatbot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
