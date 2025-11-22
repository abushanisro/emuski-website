import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Check, Mail, AlertCircle, Loader2 } from "lucide-react";

interface SubscriptionResponse {
  success: boolean;
  message: string;
  subscriberId?: string;
}

export const EmailSubscription = ({ className = "", variant = "default" }: { className?: string, variant?: "default" | "compact" | "sidebar" }) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");
    
    try {
      // Simulate API call - replace with your actual endpoint
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          source: "blog",
          interests: ["manufacturing", "engineering", "AI"],
          subscribeDate: new Date().toISOString()
        }),
      });

      const data: SubscriptionResponse = await response.json();

      if (data.success) {
        setStatus("success");
        setMessage("Successfully subscribed! Check your email for confirmation.");
        setEmail("");
        
        // Track subscription event
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'subscribe', {
            'event_category': 'engagement',
            'event_label': 'email_newsletter'
          });
        }
      } else {
        setStatus("error");
        setMessage(data.message || "Subscription failed. Please try again.");
      }
    } catch (error) {
      // Fallback: Store in localStorage for now (replace with proper backend)
      const subscribers = JSON.parse(localStorage.getItem("emuski_subscribers") || "[]");
      const existingSubscriber = subscribers.find((sub: any) => sub.email === email.trim().toLowerCase());
      
      if (existingSubscriber) {
        setStatus("error");
        setMessage("You're already subscribed to our newsletter!");
      } else {
        const newSubscriber = {
          id: Date.now().toString(),
          email: email.trim().toLowerCase(),
          subscribeDate: new Date().toISOString(),
          status: "active",
          source: "blog",
          interests: ["manufacturing", "engineering", "AI"]
        };
        
        subscribers.push(newSubscriber);
        localStorage.setItem("emuski_subscribers", JSON.stringify(subscribers));
        
        setStatus("success");
        setMessage("Successfully subscribed! You'll receive our daily manufacturing insights.");
        setEmail("");
      }
    }

    // Reset status after 5 seconds
    setTimeout(() => {
      setStatus("idle");
      setMessage("");
    }, 5000);
  };

  const renderCompactForm = () => (
    <div className={`space-y-3 ${className}`}>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emuski-teal focus:border-transparent"
          disabled={status === "loading" || status === "success"}
        />
        <Button 
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="bg-emuski-teal hover:bg-emuski-teal/90 text-white px-6 py-2"
        >
          {status === "loading" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : status === "success" ? (
            <Check className="h-4 w-4" />
          ) : (
            "Subscribe"
          )}
        </Button>
      </form>
      
      {message && (
        <div className={`flex items-center space-x-2 text-sm ${
          status === "success" ? "text-green-600" : "text-red-600"
        }`}>
          {status === "success" ? (
            <Check className="h-4 w-4" />
          ) : (
            <AlertCircle className="h-4 w-4" />
          )}
          <span>{message}</span>
        </div>
      )}
    </div>
  );

  const renderSidebarForm = () => (
    <Card className={`p-6 bg-gradient-to-br from-emuski-teal/5 to-emuski-teal/10 border-emuski-teal/20 ${className}`}>
      <div className="flex items-center space-x-2 mb-3">
        <Mail className="h-5 w-5 text-emuski-teal" />
        <h3 className="text-lg font-bold text-gray-900">Daily Insights</h3>
      </div>
      <p className="text-sm text-gray-600 mb-4">Get expert manufacturing insights delivered to your inbox every day.</p>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emuski-teal focus:border-transparent"
          disabled={status === "loading" || status === "success"}
        />
        <Button 
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="w-full bg-emuski-teal hover:bg-emuski-teal/90 text-white"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin mr-2" />
              Subscribing...
            </>
          ) : status === "success" ? (
            <>
              <Check className="h-4 w-4 mr-2" />
              Subscribed!
            </>
          ) : (
            "Subscribe Now"
          )}
        </Button>
      </form>

      {message && (
        <div className={`mt-3 flex items-center space-x-2 text-sm ${
          status === "success" ? "text-green-600" : "text-red-600"
        }`}>
          {status === "success" ? (
            <Check className="h-4 w-4" />
          ) : (
            <AlertCircle className="h-4 w-4" />
          )}
          <span>{message}</span>
        </div>
      )}
      
      {status !== "success" && (
        <p className="text-xs text-gray-500 mt-3">
          Join 5,000+ manufacturing professionals.
        </p>
      )}
    </Card>
  );

  const renderDefaultForm = () => (
    <div className={`max-w-4xl mx-auto text-center space-y-6 ${className}`}>
      <div className="space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <Mail className="h-6 w-6 text-white" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Daily Manufacturing Insights
          </h2>
        </div>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">
          Get expert insights on manufacturing excellence, engineering innovation, and AI-powered solutions delivered to your inbox every morning.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your professional email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emuski-teal focus:border-transparent shadow-sm"
            disabled={status === "loading" || status === "success"}
          />
          <Button 
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="bg-emuski-teal hover:bg-emuski-teal/90 text-white px-12 py-4 text-lg font-semibold whitespace-nowrap"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                Subscribing...
              </>
            ) : status === "success" ? (
              <>
                <Check className="h-4 w-4 mr-2" />
                Subscribed!
              </>
            ) : (
              "Subscribe Free"
            )}
          </Button>
        </div>
      </form>

      {message && (
        <div className={`flex items-center justify-center space-x-2 ${
          status === "success" ? "text-green-600" : "text-red-600"
        }`}>
          {status === "success" ? (
            <Check className="h-4 w-4" />
          ) : (
            <AlertCircle className="h-4 w-4" />
          )}
          <span>{message}</span>
        </div>
      )}
      
      {status !== "success" && (
        <div className="text-center space-y-2">
          <p className="text-sm text-white/80">
            Join 5,000+ manufacturing professionals who trust EMUSKI insights.
          </p>
          <div className="flex items-center justify-center space-x-6 text-xs text-white/70">
            <span className="flex items-center space-x-1">
              <Check className="h-3 w-3" />
              <span>Daily insights</span>
            </span>
            <span className="flex items-center space-x-1">
              <Check className="h-3 w-3" />
              <span>Expert analysis</span>
            </span>
            <span className="flex items-center space-x-1">
            </span>
          </div>
        </div>
      )}
    </div>
  );

  switch (variant) {
    case "compact":
      return renderCompactForm();
    case "sidebar":
      return renderSidebarForm();
    default:
      return renderDefaultForm();
  }
};