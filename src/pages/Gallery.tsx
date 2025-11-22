import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Gallery as GalleryComponent } from "../components/Gallery";

const Gallery = () => {
  return (
    <>
      <Navbar />
      <GalleryComponent />
      <Footer />
    </>
  );
};

export default Gallery;