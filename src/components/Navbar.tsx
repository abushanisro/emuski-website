import { Menu, Home, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
const emuskiLogo = "/assets/emuskilogo.webp";

interface NavItem {
  name: string;
  path: string;
  hideOnMobile?: boolean;
}

const servicesDropdown = {
  manufacturingServices: {
    name: "Manufacturing Services",
    path: "/manufacturing-services",
    subItems: [
      { name: "OEM Manufacturing", path: "/manufacturing-services#oem" },
      { name: "Custom Manufacturing", path: "/manufacturing-services#custom" },
      { name: "Rapid Prototyping", path: "/manufacturing-services#prototyping" },
      { name: "Production Scaling", path: "/manufacturing-services#scaling" },
      { name: "SaaS Mithran AI", path: "/solutions/ai", beta: true }
    ]
  },
  precisionEngineering: {
    name: "Precision Engineering",
    path: "/precision-engineering",
    subItems: [
      { name: "CNC Machining", path: "/precision-engineering#cnc" },
      { name: "Component Design", path: "/precision-engineering#design" },
      { name: "Quality Control", path: "/precision-engineering#quality" },
      { name: "Engineering Consultation", path: "/precision-engineering#consultation" }
    ]
  }
};

const navigationConfig = {
  leftMenu: [
    { name: "Industries", path: "/industries" },
    { name: "Blog", path: "/blog" }
  ],
  rightMenu: [
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact", hideOnMobile: true }
  ],
  mobileMenuSections: [
    {
      title: "Navigation",
      items: [
        { name: "Home", path: "/" }
      ]
    },
    {
      title: "Services",
      items: [
        { name: "Manufacturing Services", path: "/manufacturing-services" },
        { name: "Precision Engineering", path: "/precision-engineering" }
      ]
    },
    {
      title: "General",
      items: [
        { name: "Industries", path: "/industries" },
        { name: "Blog", path: "/blog" }
      ]
    },
    {
      title: "Company",
      items: [
        { name: "Gallery", path: "/gallery" },
        { name: "Contact", path: "/contact" }
      ]
    }
  ]
};

// Map of all routes to their display names
const routeToPageName: Record<string, string> = {
  "/": "Home",
  "/manufacturing-services": "Manufacturing Services",
  "/precision-engineering": "Precision Engineering", 
  "/industries": "Industries",
  "/blog": "Blog",
  "/gallery": "Gallery",
  "/contact": "Contact"
};

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeServiceDropdown, setActiveServiceDropdown] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setActiveServiceDropdown(null);
      }
    };

    if (isMenuOpen || activeServiceDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen, activeServiceDropdown]);

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  const isActiveServiceLink = () => {
    return Object.values(servicesDropdown).some(service => service.path === location.pathname);
  };

  const getLinkClasses = (path: string) => {
    const baseClasses = "transition-colors text-sm font-medium";
    const activeClasses = "text-emuski-teal-darker";
    const inactiveClasses = "text-foreground hover:text-emuski-teal-darker";
    
    return `${baseClasses} ${isActiveLink(path) ? activeClasses : inactiveClasses}`;
  };

  const getServicesButtonClasses = () => {
    const baseClasses = "transition-colors text-sm font-medium flex items-center space-x-1";
    const activeClasses = "text-emuski-teal-darker";
    const inactiveClasses = "text-foreground hover:text-emuski-teal-darker";
    
    return `${baseClasses} ${isActiveServiceLink() ? activeClasses : inactiveClasses}`;
  };

  const getCurrentPageName = () => {
    return routeToPageName[location.pathname] || "Page";
  };

  return (
<nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
<div className="container mx-auto px-4 sm:px-6">
<div className="flex items-center justify-between h-16">
<div className="flex items-center space-x-8">
<Link to="/" className="flex items-center space-x-2 group">
<img 
  src={emuskiLogo} 
  alt="EMUSKI Logo" 
  className="h-8 sm:h-10 w-auto object-contain" 
  style={{ imageRendering: 'crisp-edges', filter: 'contrast(1.1) brightness(1.05)' }}
/>
<span className="text-lg sm:text-xl font-bold text-foreground group-hover:text-emuski-teal-darker transition-colors">EMUSKI</span>
</Link>

<div className="hidden md:flex items-center space-x-6" ref={servicesRef}>
<Link 
to="/" 
className={`${getLinkClasses("/")} flex items-center space-x-1`}
>
<Home className="h-4 w-4" />
<span>Home</span>
</Link>

{/* Individual Service Dropdowns */}
{Object.entries(servicesDropdown).map(([key, service]) => (
<div key={key} className="relative">
<div 
className="flex items-center"
onMouseEnter={() => setActiveServiceDropdown(key)}
onMouseLeave={() => setActiveServiceDropdown(null)}
>
<Link
to={service.path}
className={getLinkClasses(service.path)}
onClick={() => setActiveServiceDropdown(null)}
>
{service.name}
</Link>
<button
onClick={() => setActiveServiceDropdown(activeServiceDropdown === key ? null : key)}
className="ml-1 p-1 text-foreground hover:text-emuski-teal-darker transition-colors"
>
<ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeServiceDropdown === key ? 'rotate-180' : ''}`} />
</button>
</div>

{activeServiceDropdown === key && (
<div 
className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50"
onMouseEnter={() => setActiveServiceDropdown(key)}
onMouseLeave={() => setActiveServiceDropdown(null)}
style={{ boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
>
<div className="py-2">
<Link
to={service.path}
className="block px-4 py-3 text-sm font-semibold text-emuski-teal-darker border-b border-gray-100"
onClick={() => setActiveServiceDropdown(null)}
>
{service.name} Overview
</Link>
{service.subItems.map((subItem, index) => (
<Link
key={subItem.path}
to={subItem.path}
className="block px-4 py-3 text-sm text-gray-700 hover:bg-emuski-teal/5 hover:text-emuski-teal-darker transition-colors"
onClick={() => setActiveServiceDropdown(null)}
>
<div className="flex items-center justify-between">
<span>{subItem.name}</span>
{subItem.beta && (
<span className="ml-2 px-2 py-0.5 bg-orange-100 text-orange-600 text-xs font-medium rounded-full border border-orange-200">
BETA
</span>
)}
</div>
</Link>
))}
</div>
</div>
)}
</div>
))}

{navigationConfig.leftMenu.map((item) => (
<Link 
key={item.path}
to={item.path} 
className={getLinkClasses(item.path)}
>
{item.name}
</Link>
))}
</div>
</div>

<div className="flex items-center space-x-4">
<div className="hidden md:flex items-center space-x-6">
{navigationConfig.rightMenu.map((item) => (
<Link 
key={item.path}
to={item.path} 
className={getLinkClasses(item.path)}
>
{item.name}
</Link>
))}
</div>

<span className="sm:hidden transition-colors text-sm font-medium text-emuski-teal-darker">
{getCurrentPageName()}
</span>

<div className="flex items-center space-x-2 ml-4 relative md:hidden" ref={menuRef}>
<button 
onClick={() => setIsMenuOpen(!isMenuOpen)}
className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent h-10 w-10 text-foreground hover:text-emuski-teal-darker">
<Menu className="h-5 w-5" />
</button>

{/* Dropdown Menu */}
{isMenuOpen && (
<div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-[9999]" style={{ boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}>
<div className="p-6 bg-gradient-to-br from-emuski-teal/5 to-emuski-teal/10 border-b border-gray-100">
<div className="flex items-center space-x-3">
<img 
  src={emuskiLogo} 
  alt="EMUSKI Logo" 
  className="h-8 w-auto object-contain" 
  style={{ imageRendering: 'crisp-edges', filter: 'contrast(1.2) brightness(1.1)', opacity: 0.8 }}
/>
<div>
<h3 className="font-bold text-gray-900">EMUSKI</h3>
<p className="text-xs text-gray-600">One-stop solution for OEMs</p>
</div>
</div>
</div>
<div className="p-4 space-y-2">
{navigationConfig.mobileMenuSections.map((section, sectionIndex) => (
<div key={section.title} className={sectionIndex > 0 ? "border-t border-gray-100 pt-2 mt-2" : "mb-3"}>
{sectionIndex === 0 && (
<h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{section.title}</h4>
)}
{section.items.map((item) => (
<Link 
key={item.path}
to={item.path} 
className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100 hover:text-emuski-teal-darker transition-colors"
onClick={() => setIsMenuOpen(false)}
>
{item.name}
</Link>
))}
</div>
))}
</div>
</div>
)}
</div>
</div>
</div>
</div>
</nav>
  );
};
