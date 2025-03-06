
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/70 backdrop-blur-md border-b border-white/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/00f05e3a-06eb-4678-b295-743dbd46914f.png" 
              alt="Zest Logo" 
              className="w-8 h-auto"
            />
            <Link to="/" className="font-display text-xl font-bold">
              <span className="text-lime-600">Zest</span>
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden sm:inline-flex">Log in</Button>
            <Button className="bg-lime-500 hover:bg-lime-600 text-white">Try Free</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
