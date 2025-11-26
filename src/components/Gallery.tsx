import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Search, Filter, Grid, List, Eye, Download, Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";

// Complete EMUSKI component gallery with consolidated manufacturing images
const galleryItems = [
  // October 2025 Manufacturing Excellence Story - Consolidated
  {
    id: 1,
    title: "October 2025 Production Excellence Initiative",
    category: "Recent Work",
    type: "gallery",
    thumbnail: "/assets/componets/3-Oct-25/WhatsApp Image 2025-08-28 at 10.34.17 AM.jpeg",
    images: [
      "/assets/componets/3-Oct-25/WhatsApp Image 2025-08-28 at 10.34.17 AM.jpeg",
      "/assets/componets/3-Oct-25/WhatsApp Image 2025-08-28 at 10.36.22 AM.jpeg",
      "/assets/componets/3-Oct-25/WhatsApp Image 2025-08-28 at 11.05.36 AM.jpeg",
      "/assets/componets/3-Oct-25/WhatsApp Image 2025-09-03 at 11.58.16 AM.jpeg",
      "/assets/componets/3-Oct-25/WhatsApp Image 2025-09-03 at 11.58.40 AM.jpeg",
      "/assets/componets/3-Oct-25/WhatsApp Image 2025-09-03 at 11.58.58 AM.jpeg",
      "/assets/componets/3-Oct-25/WhatsApp Image 2025-09-15 at 12.00.26 PM (1).jpeg",
      "/assets/componets/3-Oct-25/WhatsApp Image 2025-09-15 at 12.00.26 PM.jpeg"
    ],
    image: "/assets/componets/3-Oct-25/WhatsApp Image 2025-08-28 at 10.34.17 AM.jpeg",
    description: "EMUSKI's October 2025 manufacturing excellence initiative showcased our partnership with leading automotive OEMs, delivering critical components with unprecedented precision and speed. This comprehensive project included streamlined assembly operations, advanced quality validation systems, and seamless production transitions, resulting in 40% faster production cycles while maintaining ISO 9001:2015 quality standards.",
    tags: ["October", "Production", "Excellence", "Components"]
  },
  
  // Centering Fixtures - Consolidated
  {
    id: 2,
    title: "Precision Centering Fixtures Collection",
    category: "Fixtures & Tooling",
    type: "gallery",
    thumbnail: "/assets/componets/3-Oct-25/cent_fixture/WhatsApp Image 2025-10-27 at 3.21.23 PM.jpeg",
    images: [
      "/assets/componets/3-Oct-25/cent_fixture/WhatsApp Image 2025-10-27 at 3.21.23 PM.jpeg",
      "/assets/componets/3-Oct-25/cent_fixture/WhatsApp Image 2025-10-27 at 3.21.56 PM.jpeg",
      "/assets/componets/3-Oct-25/cent_fixture/WhatsApp Image 2025-10-27 at 3.22.40 PM.jpeg",
      "/assets/componets/3-Oct-25/cent_fixture/WhatsApp Image 2025-10-27 at 3.23.17 PM.jpeg",
      "/assets/componets/3-Oct-25/cent_fixture/WhatsApp Image 2025-10-27 at 3.23.56 PM.jpeg",
      "/assets/componets/3-Oct-25/cent_fixture/WhatsApp Image 2025-10-27 at 3.24.36 PM.jpeg",
      "/assets/componets/3-Oct-25/cent_fixture/WhatsApp Image 2025-10-27 at 3.25.16 PM.jpeg",
      "/assets/componets/3-Oct-25/cent_fixture/WhatsApp Image 2025-10-27 at 3.26.01 PM.jpeg",
      "/assets/componets/3-Oct-25/cent_fixture/WhatsApp Image 2025-10-27 at 3.26.20 PM.jpeg"
    ],
    image: "/assets/componets/3-Oct-25/cent_fixture/WhatsApp Image 2025-10-27 at 3.21.23 PM.jpeg",
    description: "Comprehensive collection of custom-designed centering fixtures showcasing EMUSKI's precision manufacturing capabilities. These fixtures demonstrate our expertise in advanced tooling design, specialized manufacturing requirements, and integration of tooling systems for comprehensive manufacturing solutions. From initial design through final assembly, each fixture represents our commitment to manufacturing excellence.",
    tags: ["Fixtures", "Centering", "Precision", "Custom"]
  },

  // Innaccel Project - Consolidated
  {
    id: 3,
    title: "Innaccel Project Manufacturing Solutions",
    category: "Client Projects",
    type: "gallery",
    thumbnail: "/assets/componets/3-Oct-25/innaccel/WhatsApp Image 2025-10-22 at 10.33.50 AM.jpeg",
    images: [
      "/assets/componets/3-Oct-25/innaccel/WhatsApp Image 2025-10-22 at 10.33.50 AM.jpeg",
      "/assets/componets/3-Oct-25/innaccel/WhatsApp Image 2025-10-22 at 10.34.03 AM.jpeg"
    ],
    image: "/assets/componets/3-Oct-25/innaccel/WhatsApp Image 2025-10-22 at 10.33.50 AM.jpeg",
    description: "Specialized manufacturing solutions developed for Innaccel project requirements, showcasing EMUSKI's ability to deliver custom engineering solutions for unique industrial applications.",
    tags: ["Innaccel", "Project", "Specialized", "Manufacturing"]
  },

  // Matica Production Collection - Consolidated
  {
    id: 4,
    title: "Matica Production Line Excellence",
    category: "Production Systems",
    type: "gallery",
    thumbnail: "/assets/componets/Matica-Photos2/DSC_1006.JPG",
    images: [
      "/assets/componets/Matica-Photos2/DSC_1006.JPG",
      "/assets/componets/Matica-Photos2/DSC_1008.JPG",
      "/assets/componets/Matica-Photos2/DSC_1009.JPG",
      "/assets/componets/Matica-Photos2/DSC_1010.JPG",
      "/assets/componets/Matica-Photos2/DSC_1011.JPG",
      "/assets/componets/Matica-Photos2/DSC_1012.JPG",
      "/assets/componets/Matica-Photos2/DSC_1013.JPG",
      "/assets/componets/Matica-Photos2/DSC_1014.JPG",
      "/assets/componets/Matica-Photos2/DSC_1015.JPG",
      "/assets/componets/Matica-Photos2/DSC_1016.JPG",
      "/assets/componets/Matica-Photos2/DSC_1017.JPG",
      "/assets/componets/Matica-Photos2/DSC_1018.JPG",
      "/assets/componets/Matica-Photos2/DSC_1019.JPG",
      "/assets/componets/Matica-Photos2/DSC_1020.JPG"
    ],
    image: "/assets/componets/Matica-Photos2/DSC_1006.JPG",
    description: "Professional production line setup and manufacturing excellence for Matica project. This comprehensive collection showcases our advanced assembly stations, quality assurance processes, manufacturing workflow optimization, and cutting-edge production technology implementation, demonstrating EMUSKI's commitment to operational excellence and process innovation.",
    tags: ["Matica", "Production", "Excellence", "Professional"]
  },

  // Manufacturing Components Collection - Consolidated  
  {
    id: 5,
    title: "Precision Manufacturing Components",
    category: "CNC Machining & Parts",
    type: "gallery",
    thumbnail: "/assets/componets/Part-Photos/IMG-20250206-WA0025.jpg",
    images: [
      "/assets/componets/Part-Photos/IMG-20250206-WA0025.jpg",
      "/assets/componets/Part-Photos/IMG-20250310-WA0011.jpg",
      "/assets/componets/Part-Photos/IMG-20250519-WA0016.jpg",
      "/assets/componets/Part-Photos/IMG-20250519-WA0017.jpg",
      "/assets/componets/Part-Photos/IMG-20250519-WA0018.jpg",
      "/assets/componets/Part-Photos/IMG-20250519-WA0019.jpg",
      "/assets/componets/Part-Photos/IMG-20250519-WA0020.jpg",
      "/assets/componets/Part-Photos/IMG-20250519-WA0021.jpg"
    ],
    image: "/assets/componets/Part-Photos/IMG-20250206-WA0025.jpg",
    description: "High-precision manufactured components showcasing EMUSKI's CNC machining capabilities and quality control excellence. These components represent our partnership with automotive OEMs and industrial clients, demonstrating our ability to deliver complex geometries with tight tolerances and exceptional surface finishes.",
    tags: ["Components", "CNC", "Precision", "Manufacturing"]
  },

  // Forus Project Collection
  {
    id: 6,
    title: "Forus Partnership Engineering Excellence",
    category: "Client Projects", 
    type: "gallery",
    thumbnail: "/assets/componets/forus/WhatsApp Image 2025-08-23 at 10.06.37 PM.jpeg",
    images: [
      "/assets/componets/forus/WhatsApp Image 2025-08-23 at 10.06.37 PM.jpeg"
    ],
    image: "/assets/componets/forus/WhatsApp Image 2025-08-23 at 10.06.37 PM.jpeg",
    description: "Strategic partnership with Forus showcasing EMUSKI's rapid prototyping and engineering validation capabilities, enabling accelerated product development cycles for our B2B manufacturing partners.",
    tags: ["Forus", "Partnership", "Engineering", "Prototyping"]
  }
];

// Category mapping for better UX
const categoryMapping: { [key: string]: string } = {
  "Recent Work": "Recent Work",
  "Fixtures & Tooling": "Fixtures & Tooling", 
  "Client Projects": "Client Projects",
  "Production Systems": "Production Systems",
  "CNC Machining & Parts": "CNC Machining & Parts",
  "Assembly & Production": "Assembly & Production",
  "Quality Control": "Quality Control"
};

// Get unique categories for filtering
const categories = ["All", ...Object.values(categoryMapping)];

export const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImage) {
        if (e.key === 'Escape') {
          closeLightbox();
        } else if (e.key === 'ArrowLeft') {
          navigateGallery(-1);
        } else if (e.key === 'ArrowRight') {
          navigateGallery(1);
        }
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, currentImageIndex, currentGalleryIndex]);

  // Set SEO meta tags for gallery page
  useEffect(() => {
    document.title = "EMUSKI Component Gallery - Manufacturing Excellence Showcase";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore EMUSKI\'s comprehensive gallery of precision manufacturing components, engineering solutions, and production excellence. Showcasing automotive, aerospace, and industrial manufacturing capabilities.');
    }
  }, []);

  const openLightbox = (item: typeof galleryItems[0], index: number) => {
    setSelectedImage(item);
    setCurrentImageIndex(index);
    setCurrentGalleryIndex(0); // Start with first image in gallery
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setCurrentImageIndex(0);
    setCurrentGalleryIndex(0);
  };

  const navigateGallery = (direction: number) => {
    if (!selectedImage || !selectedImage.images) return;
    
    const newIndex = currentGalleryIndex + direction;
    if (newIndex >= 0 && newIndex < selectedImage.images.length) {
      setCurrentGalleryIndex(newIndex);
    }
  };

  // Filter items based on search term and category
  const filteredItems = galleryItems.filter(item => {
    const matchesSearch = 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getCurrentImage = () => {
    if (!selectedImage) return "";
    if (selectedImage.type === "gallery" && selectedImage.images) {
      return selectedImage.images[currentGalleryIndex];
    }
    return selectedImage.image;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="relative bg-emuski-teal-darker text-white overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 mt-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight" style={{color: 'rgb(18, 26, 33)'}}>
              Manufacturing Excellence Gallery
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Explore EMUSKI's comprehensive portfolio of precision manufacturing, engineering solutions, and production excellence across automotive, aerospace, and industrial sectors.
            </p>
            <div className="h-1 w-24 bg-white rounded-full mx-auto"></div>
          </div>
        </div>
      </section>
      
      <div className="container mx-auto px-4 sm:px-6 py-20">
        {/* Content moved here */}
        <div className="mb-12"></div>

        {/* Search and Filter Controls */}
        <div className="mb-8 space-y-4 lg:space-y-0 lg:flex lg:items-center lg:justify-between">
          {/* Search Bar */}
          <div className="relative flex-1 lg:max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search components, manufacturing processes, technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emuski-teal focus:border-transparent"
            />
          </div>

          {/* Filters and View Controls */}
          <div className="flex items-center space-x-4">
            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emuski-teal appearance-none bg-white min-w-[180px]"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-3 ${viewMode === "grid" ? "bg-emuski-teal text-white" : "bg-white text-gray-600 hover:bg-gray-50"} transition-colors`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-3 ${viewMode === "list" ? "bg-emuski-teal text-white" : "bg-white text-gray-600 hover:bg-gray-50"} transition-colors`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-gray-600">
          Showing {filteredItems.length} of {galleryItems.length} manufacturing portfolios
        </div>

        {/* Gallery Grid */}
        <div className={`${viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-6"}`}>
          {filteredItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group overflow-hidden bg-white hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(item, index)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="h-8 w-8 mx-auto mb-2" />
                    <span className="text-sm font-medium">
                      {item.type === "gallery" ? `View ${item.images?.length || 1} Images` : "Click to View"}
                    </span>
                  </div>
                </div>
                
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-emuski-teal text-white text-xs font-semibold rounded-sm">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emuski-teal transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 line-clamp-3">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-600">Try adjusting your search terms or category filter</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-30 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors text-xl sm:text-2xl font-bold shadow-lg backdrop-blur-sm border border-white/20 w-12 h-12 flex items-center justify-center"
            >
              ×
            </button>

            {/* Gallery Navigation */}
            {selectedImage.type === "gallery" && selectedImage.images && selectedImage.images.length > 1 && (
              <>
                <button
                  onClick={() => navigateGallery(-1)}
                  disabled={currentGalleryIndex === 0}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-full transition-colors shadow-lg backdrop-blur-sm border border-white/20"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={() => navigateGallery(1)}
                  disabled={currentGalleryIndex === selectedImage.images.length - 1}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-full transition-colors shadow-lg backdrop-blur-sm border border-white/20"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Image Counter */}
                <div className="absolute top-4 left-4 z-30 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-white/20">
                  {currentGalleryIndex + 1} / {selectedImage.images.length}
                </div>
              </>
            )}

            {/* Image Content */}
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={getCurrentImage()}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[50vh] sm:max-h-[60vh] object-contain"
              />
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="px-3 py-1 bg-emuski-teal/10 text-emuski-teal text-xs sm:text-sm font-medium rounded-full">
                      {selectedImage.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-2">{selectedImage.title}</h3>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
                <p className="text-gray-700 mb-4">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};