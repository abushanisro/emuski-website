import { Linkedin, Instagram, Twitter, BookOpen } from 'lucide-react';

const emuskiLogo = "/assets/emuskilogo.webp";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 text-left">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h4 className="text-foreground font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-emuski-teal-darker transition-colors text-sm block py-1">OEM Manufacturing Solutions</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-emuski-teal-darker transition-colors text-sm block py-1">Precision CNC Machining</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-emuski-teal-darker transition-colors text-sm block py-1">Design for Manufacturing DFM</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-emuski-teal-darker transition-colors text-sm block py-1">ISO Quality Control Systems</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-foreground font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-emuski-teal-darker transition-colors text-sm block py-1">Custom Metal Fabrication</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-emuski-teal-darker transition-colors text-sm block py-1">Rapid Prototyping Services</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-emuski-teal-darker transition-colors text-sm block py-1">Mass Production Manufacturing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-emuski-teal-darker transition-colors text-sm block py-1">Supply Chain Optimization</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-foreground font-semibold mb-4">Industries</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-emuski-teal-darker transition-colors text-sm block py-1">Automotive Parts Manufacturing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-emuski-teal-darker transition-colors text-sm block py-1">Electronics Assembly Services</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-emuski-teal-darker transition-colors text-sm block py-1">Medical Device Manufacturing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-emuski-teal-darker transition-colors text-sm block py-1">Aerospace Component Production</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-foreground font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-emuski-teal-darker transition-colors text-sm block py-1">Manufacturing Quote Request</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-emuski-teal-darker transition-colors text-sm block py-1">Engineering Technical Support</a></li>
              <li><a href="/blog" className="text-muted-foreground hover:text-emuski-teal-darker transition-colors text-sm block py-1">Manufacturing Industry Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-emuski-teal-darker transition-colors text-sm block py-1">Contact Manufacturing Engineers</a></li>
            </ul>
          </div>
        </div>
        
        {/* SEO Keywords Section */}
        <div className="border-t border-border pt-6 pb-4">
          <div className="text-center">
            <p className="text-muted-foreground text-xs leading-relaxed">
              <span className="font-medium">Manufacturing Services:</span> CNC Machining Bangalore | Precision Engineering India | Sheet Metal Fabrication | Injection Molding Services | 
              Tool & Die Making | Prototype Manufacturing | CAD Design Services | Quality Control Testing | ISO 9001 Certified Manufacturing | 
              Lean Manufacturing Solutions | Six Sigma Quality | Industrial Automation | Smart Manufacturing | Industry 4.0 | 
              Contract Manufacturing | OEM Production | Custom Metal Works | Mechanical Engineering Services | Production Planning | 
              Supply Chain Management | Cost Optimization | VAVE Analysis | Design for Manufacturability | Rapid Turnaround Manufacturing
            </p>
          </div>
        </div>
        
        {/* Social Media Section */}
        <div className="border-t border-border pt-6 pb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <div>
              <h4 className="text-foreground font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/company/e-muski/posts/?feedView=all" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-emuski-teal-darker transition-colors p-2 hover:bg-muted rounded-lg"
                  aria-label="Follow EMUSKI on LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.instagram.com/emuski" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-emuski-teal-darker transition-colors p-2 hover:bg-muted rounded-lg"
                  aria-label="Follow EMUSKI on Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://twitter.com/emuski" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-emuski-teal-darker transition-colors p-2 hover:bg-muted rounded-lg"
                  aria-label="Follow EMUSKI on X (Twitter)"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.reddit.com/user/emuski" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-emuski-teal-darker transition-colors p-2 hover:bg-muted rounded-lg"
                  aria-label="Follow EMUSKI on Reddit"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                  </svg>
                </a>
                <a 
                  href="/blog" 
                  className="text-muted-foreground hover:text-emuski-teal-darker transition-colors p-2 hover:bg-muted rounded-lg"
                  aria-label="Read EMUSKI Manufacturing Blog"
                >
                  <BookOpen className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="text-center sm:text-right">
              <p className="text-muted-foreground text-sm">Connect with EMUSKI Manufacturing</p>
              <p className="text-muted-foreground text-xs mt-1">Latest CNC machining innovations & manufacturing insights</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
            <div className="flex items-center space-x-2">
              <img src={emuskiLogo} alt="EMUSKI Logo" className="h-6 w-auto" />
              <span className="text-foreground font-bold text-lg">EMUSKI</span>
            </div>
            <span className="text-muted-foreground text-sm">© 2025 EMUSKI Corporation. All rights reserved.</span>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
            <a href="#" className="text-muted-foreground hover:text-emuski-teal-darker transition-colors text-sm block py-2 sm:inline sm:py-0">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-emuski-teal-darker transition-colors text-sm block py-2 sm:inline sm:py-0">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-emuski-teal-darker transition-colors text-sm block py-2 sm:inline sm:py-0">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
