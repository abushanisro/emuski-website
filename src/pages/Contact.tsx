import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Contact as ContactComponent } from "../components/Contact";

const Contact = () => {
  return (
    <>
      <Navbar />
      <ContactComponent />
      <Footer />
    </>
  );
};

export default Contact;