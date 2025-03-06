
import { Link } from "react-router-dom";
import { Mail, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-white/40 backdrop-blur-sm">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-lime-600 text-2xl">🍋</span>
              <span className="font-display text-xl font-bold">Time For Lemonade</span>
            </div>
            <p className="text-gray-600">
              The AI email client that gives you back your time.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-gray-700 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-700 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-700 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-black transition-colors">Features</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-black transition-colors">Pricing</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-black transition-colors">Integrations</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-black transition-colors">Case Studies</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-black transition-colors">API</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-black transition-colors">About</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-black transition-colors">Blog</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-black transition-colors">Careers</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-black transition-colors">Press</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-black transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-black transition-colors">Help Center</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-black transition-colors">Privacy</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-black transition-colors">Terms</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-black transition-colors">Security</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-black transition-colors">Status</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Time For Lemonade. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-gray-400" />
            <a href="mailto:hello@timeforlemonade.com" className="text-gray-600 hover:text-black transition-colors">
              hello@timeforlemonade.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
