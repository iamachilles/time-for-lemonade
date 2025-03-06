
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/70 backdrop-blur-md border-b border-white/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center py-4">
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/d2dd5e4e-6fc5-4eae-b0fb-7431063f6f18.png" 
              alt="Zest Logo" 
              className="w-8 h-auto"
            />
            <Link to="/" className="font-display text-xl font-bold">
              <span className="text-lime-600">Zest</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
