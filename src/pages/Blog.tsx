import { Navbar } from "../components/Navbar";
import { BlogPage } from "../components/BlogPage";
import { Footer } from "../components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <BlogPage />
      <Footer />
    </div>
  );
};

export default Blog;