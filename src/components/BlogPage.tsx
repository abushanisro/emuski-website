import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, Calendar, User, Clock, ChevronRight, Tag } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { useBlogPosts, useBlogCategories, useBlogTags } from "../hooks/useBlogApi";
import { BlogPostSummary } from "../api/types";
import { EmailSubscription } from "./EmailSubscription";
import { LoadingPage, ServerErrorPage } from "./ui/error-pages";

export const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTag, setSelectedTag] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { categories } = useBlogCategories();
  const { tags: allTags } = useBlogTags();
  
  const filters = useMemo(() => ({
    search: searchTerm || undefined,
    category: selectedCategory !== "All" ? selectedCategory : undefined,
    tag: selectedTag || undefined,
    page: currentPage,
    limit: 10
  }), [searchTerm, selectedCategory, selectedTag, currentPage]);

  const { posts: allPosts, loading, error, meta } = useBlogPosts(filters);
  
  const featuredPosts = allPosts.filter(post => post.featured);
  const regularPosts = allPosts.filter(post => !post.featured);

  // Set SEO meta tags for blog page
  useEffect(() => {
    document.title = "EMUSKI Manufacturing Blog | Engineering Precision & Manufacturing Innovation";
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Discover expert insights on manufacturing excellence, engineering services, and AI-powered solutions. Learn from industry leaders about cost optimization, VAVE, rapid prototyping, and intelligent manufacturing.');

    // Update keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'manufacturing blog, engineering precision, cost optimization, VAVE methodology, rapid prototyping, strategic sourcing, AI manufacturing, industrial engineering');
  }, []);

  // Handle loading and error states
  if (loading) {
    return <LoadingPage title="Loading Articles" description="Please wait while we fetch the latest insights..." />;
  }

  if (error) {
    return <ServerErrorPage description={error} />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-emuski-teal-darker text-white overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 mt-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              <span style={{color: 'rgb(18, 26, 33)'}}>EMUSKI</span> <span className="text-white">Insights</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed">
              Expert perspectives on engineering precision, manufacturing innovation, 
              and the future of intelligent production systems.
            </p>
            <div className="h-1 w-24 bg-white rounded-full mx-auto"></div>
            <div className="flex items-center justify-center text-sm text-white/80">
              <span>Discover insights that drive manufacturing excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 border-b border-border relative overflow-hidden" style={{backgroundColor: 'rgb(18, 26, 33)'}}>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#4fd3d4_1px,transparent_1px),linear-gradient(to_bottom,#4fd3d4_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
              {/* Search Bar */}
              <div className="md:col-span-2 lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emuski-teal focus:border-transparent shadow-sm"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-emuski-teal focus:border-transparent shadow-sm"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Tag Filter */}
              <div>
                <select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-emuski-teal focus:border-transparent shadow-sm"
                >
                  <option value="">All Tags</option>
                  {allTags.map(tag => (
                    <option key={tag} value={tag}>{tag}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Active Filters */}
            {(selectedCategory !== "All" || selectedTag || searchTerm) && (
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-sm text-gray-400">Active filters:</span>
                {selectedCategory !== "All" && (
                  <span className="inline-flex items-center px-3 py-1 bg-emuski-teal/10 text-emuski-teal rounded-full text-xs font-medium">
                    {selectedCategory}
                    <button onClick={() => setSelectedCategory("All")} className="ml-2 hover:bg-emuski-teal/20 rounded-full">×</button>
                  </span>
                )}
                {selectedTag && (
                  <span className="inline-flex items-center px-3 py-1 bg-emuski-teal/10 text-emuski-teal rounded-full text-xs font-medium">
                    {selectedTag}
                    <button onClick={() => setSelectedTag("")} className="ml-2 hover:bg-emuski-teal/20 rounded-full">×</button>
                  </span>
                )}
                {searchTerm && (
                  <span className="inline-flex items-center px-3 py-1 bg-emuski-teal/10 text-emuski-teal rounded-full text-xs font-medium">
                    "{searchTerm}"
                    <button onClick={() => setSearchTerm("")} className="ml-2 hover:bg-emuski-teal/20 rounded-full">×</button>
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center space-x-3 mb-8">
                <div className="h-1 w-12 bg-emuski-teal rounded"></div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Featured Articles</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
                {featuredPosts.map((post) => (
                  <Link key={post.id} to={`/blog/${post.slug}`}>
                    <Card className="group overflow-hidden bg-white border-gray-200 hover:border-emuski-teal/50 transition-all duration-300 h-full shadow-sm hover:shadow-md cursor-pointer">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 bg-emuski-teal/90 text-white text-xs font-medium rounded-full">
                          Featured
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-end mb-3">
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-emuski-teal transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-600">{post.author}</span>
                        </div>
                        
                        <div className="flex items-center text-emuski-teal font-medium text-sm">
                          Read More
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </div>
                      </div>

                    </div>
                  </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      {regularPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center space-x-3 mb-8">
                <div className="h-1 w-12 bg-emuski-teal rounded"></div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Latest Articles</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
                {regularPosts.map((post) => (
                  <Link key={post.id} to={`/blog/${post.slug}`}>
                    <Card className="group overflow-hidden bg-white border-gray-200 hover:border-emuski-teal/50 transition-all duration-300 h-full shadow-sm hover:shadow-md cursor-pointer">
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    
                    <div className="p-5">
                      <div className="flex items-center justify-end mb-3">
                        <div className="flex items-center space-x-1 text-xs text-gray-500">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emuski-teal transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4 text-gray-500" />
                          <span className="text-xs text-gray-600">{post.author}</span>
                        </div>
                        
                        <div className="flex items-center space-x-1 text-xs text-gray-500">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                        </div>
                      </div>

                    </div>
                  </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* No Results */}
      {allPosts.length === 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">No articles found</h3>
              <p className="text-gray-600">
                Try adjusting your search criteria or browse all articles by clearing the filters.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                  setSelectedTag("");
                }}
                className="bg-emuski-teal hover:bg-emuski-teal/90 text-white px-8 py-3"
              >
                Clear All Filters
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-emuski-teal-darker text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <EmailSubscription variant="default" />
        </div>
      </section>
    </div>
  );
};