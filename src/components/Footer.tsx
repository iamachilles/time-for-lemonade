
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-10 bg-white/40 backdrop-blur-sm">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/00f05e3a-06eb-4678-b295-743dbd46914f.png" 
              alt="Zest Logo" 
              className="w-8 h-auto"
            />
            <span className="font-display text-xl font-bold">
              <span className="text-lime-600">Zest</span>
            </span>
          </div>
          
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="https://app.zest.email/" className="text-gray-600 hover:text-black transition-colors" target="_blank" rel="noopener noreferrer">
              Pricing
            </a>
            <a href="https://www.zest.email/terms-of-service" className="text-gray-600 hover:text-black transition-colors" target="_blank" rel="noopener noreferrer">
              Terms
            </a>
            <a href="https://www.zest.email/privacy-policy" className="text-gray-600 hover:text-black transition-colors" target="_blank" rel="noopener noreferrer">
              Privacy
            </a>
          </div>
          
          <p className="text-gray-500 text-sm mt-4 md:mt-0">
            © {new Date().getFullYear()} Zest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
