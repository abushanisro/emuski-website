import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, Twitter, Linkedin, Facebook, Mail, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { blogPosts, relatedPosts, BlogPost } from "../data/blogData";
import { EmailSubscription } from "./EmailSubscription";

export const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    if (slug) {
      const foundPost = blogPosts.find(p => p.slug === slug);
      setPost(foundPost || null);
    }
  }, [slug]);

  // Update document title and meta tags
  useEffect(() => {
    if (post) {
      document.title = post.seoTitle;
      
      // Update meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', post.metaDescription);

      // Update keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', post.keywords.join(', '));

      // Update Open Graph tags
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (!ogTitle) {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitle);
      }
      ogTitle.setAttribute('content', post.title);

      let ogDescription = document.querySelector('meta[property="og:description"]');
      if (!ogDescription) {
        ogDescription = document.createElement('meta');
        ogDescription.setAttribute('property', 'og:description');
        document.head.appendChild(ogDescription);
      }
      ogDescription.setAttribute('content', post.excerpt);

      let ogImage = document.querySelector('meta[property="og:image"]');
      if (!ogImage) {
        ogImage = document.createElement('meta');
        ogImage.setAttribute('property', 'og:image');
        document.head.appendChild(ogImage);
      }
      ogImage.setAttribute('content', post.image);
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Article Not Found</h2>
          <p className="text-gray-600">The article you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button className="bg-emuski-teal hover:bg-emuski-teal/90 text-white">
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = post.title;
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`);
        break;
      case 'linkedin':
        window.open(`https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`);
        break;
      case 'facebook':
        window.open(`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        break;
      case 'email':
        window.open(`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`);
        break;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <div className="border-b border-gray-100 py-4 bg-white sticky top-16 z-40">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link to="/blog" className="flex items-center space-x-2 text-gray-600 hover:text-emuski-teal transition-colors">
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm font-medium">Back to Blog</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsBookmarked(!isBookmarked)}
                className="text-gray-600 hover:text-emuski-teal"
              >
                <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
              </Button>
              
              <div className="flex items-center space-x-2">
                <Share2 className="h-4 w-4 text-gray-600" />
                <span className="text-sm text-gray-600">Share:</span>
                <div className="flex space-x-2">
                  <button onClick={() => handleShare('twitter')} className="text-gray-400 hover:text-blue-500 transition-colors">
                    <Twitter className="h-4 w-4" />
                  </button>
                  <button onClick={() => handleShare('linkedin')} className="text-gray-400 hover:text-blue-700 transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </button>
                  <button onClick={() => handleShare('facebook')} className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Facebook className="h-4 w-4" />
                  </button>
                  <button onClick={() => handleShare('email')} className="text-gray-400 hover:text-gray-600 transition-colors">
                    <Mail className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Article Header */}
              <div className="mb-8">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-emuski-teal/10 text-emuski-teal text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  {post.title}
                </h1>
                
                <div className="flex items-center space-x-6 text-sm text-gray-600 mb-8">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.publishDate).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                {/* Hero Image */}
                <div className="relative h-96 rounded-lg overflow-hidden mb-8">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div 
                  className="text-gray-700 leading-relaxed space-y-6"
                  dangerouslySetInnerHTML={{ 
                    __html: post.fullContent.replace(/\n/g, '<br/>').replace(/#{1,6}\s/g, match => {
                      const level = match.trim().length;
                      return `<h${level} class="text-${4-level}xl font-bold text-gray-900 mt-8 mb-4">`;
                    }).replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
                  }}
                />
              </div>

              {/* Author Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-start space-x-4">
                  <img
                    src={post.authorImage}
                    alt={post.author}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{post.author}</h4>
                    <p className="text-gray-600 leading-relaxed">{post.authorBio}</p>
                  </div>
                </div>
              </div>

              {/* Share Section */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-medium text-gray-900">Share this article:</span>
                    <div className="flex space-x-3">
                      <button onClick={() => handleShare('twitter')} className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                        <Twitter className="h-4 w-4" />
                      </button>
                      <button onClick={() => handleShare('linkedin')} className="p-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
                        <Linkedin className="h-4 w-4" />
                      </button>
                      <button onClick={() => handleShare('facebook')} className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        <Facebook className="h-4 w-4" />
                      </button>
                      <button onClick={() => handleShare('email')} className="p-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                        <Mail className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  
                  <Button
                    variant="ghost"
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className="text-gray-600 hover:text-emuski-teal"
                  >
                    <Bookmark className={`h-4 w-4 mr-2 ${isBookmarked ? 'fill-current' : ''}`} />
                    {isBookmarked ? 'Bookmarked' : 'Bookmark'}
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                {/* Related Articles */}
                <Card className="p-6 bg-white border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link key={relatedPost.id} to={`/blog/${blogPosts.find(p => p.id === relatedPost.id)?.slug}`} className="block group">
                        <div className="flex space-x-3">
                          <img
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium text-gray-900 group-hover:text-emuski-teal transition-colors line-clamp-2 mb-1">
                              {relatedPost.title}
                            </h4>
                            <p className="text-xs text-gray-600 line-clamp-2">
                              {relatedPost.excerpt}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </Card>

                {/* Newsletter Signup */}
                <EmailSubscription variant="sidebar" />

                {/* Quick Links */}
                <Card className="p-6 bg-white border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
                  <div className="space-y-3">
                    <Link to="/manufacturing-services" className="flex items-center space-x-2 text-sm text-gray-600 hover:text-emuski-teal transition-colors">
                      <ChevronRight className="h-3 w-3" />
                      <span>Manufacturing Services</span>
                    </Link>
                    <Link to="/precision-engineering" className="flex items-center space-x-2 text-sm text-gray-600 hover:text-emuski-teal transition-colors">
                      <ChevronRight className="h-3 w-3" />
                      <span>Precision Engineering</span>
                    </Link>
                    <Link to="/industries" className="flex items-center space-x-2 text-sm text-gray-600 hover:text-emuski-teal transition-colors">
                      <ChevronRight className="h-3 w-3" />
                      <span>Industries</span>
                    </Link>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};