import emuskiLogo from "../assets/Emuski Logo.svg";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-foreground font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-emuski-teal-darker transition-colors text-sm">OEM Manufacturing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-emuski-teal-darker transition-colors text-sm">Precision Engineering</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-emuski-teal-darker transition-colors text-sm">Design for Manufacturing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-emuski-teal-darker transition-colors text-sm">Quality Assurance</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-foreground font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-emuski-teal-darker transition-colors text-sm">Custom Manufacturing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-emuski-teal-darker transition-colors text-sm">Rapid Prototyping</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-emuski-teal-darker transition-colors text-sm">Production Scaling</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-emuski-teal-darker transition-colors text-sm">Supply Chain Management</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-foreground font-semibold mb-4">Industries</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-emuski-teal-darker transition-colors text-sm">Automotive</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-emuski-teal-darker transition-colors text-sm">Electronics</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-emuski-teal-darker transition-colors text-sm">Medical Devices</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-emuski-teal-darker transition-colors text-sm">Consumer Products</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-foreground font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-emuski-teal-darker transition-colors text-sm">Quote Request</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-emuski-teal-darker transition-colors text-sm">Technical Support</a></li>
              <li><a href="/blog" className="text-muted-foreground hover:text-emuski-teal-darker transition-colors text-sm">Blog & Insights</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-emuski-teal-darker transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <img src={emuskiLogo} alt="EMUSKI Logo" className="h-6 w-auto" />
              <span className="text-foreground font-bold text-lg">EMUSKI</span>
            </div>
            <span className="text-muted-foreground text-sm">© 2025 EMUSKI Corporation. All rights reserved.</span>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-emuski-teal-darker transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-emuski-teal-darker transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-emuski-teal-darker transition-colors text-sm">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
