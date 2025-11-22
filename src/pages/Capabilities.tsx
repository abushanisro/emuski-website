import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Capabilities as CapabilitiesComponent } from "../components/Capabilities";

const Capabilities = () => {
  return (
    <>
      <Navbar />
      <CapabilitiesComponent />
      <Footer />
    </>
  );
};

export default Capabilities;