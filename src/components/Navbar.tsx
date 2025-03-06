
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/70 backdrop-blur-md border-b border-white/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <span className="text-lime-600 text-2xl">🍋</span>
            <Link to="/" className="font-display text-xl font-bold">
              <span>Time For </span>
              <span className="text-lime-600">Lemonade</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-gray-600 hover:text-black transition-colors">Features</Link>
            <Link to="/" className="font-medium text-gray-600 hover:text-black transition-colors">Pricing</Link>
            <Link to="/" className="font-medium text-gray-600 hover:text-black transition-colors">About</Link>
            <Link to="/" className="font-medium text-gray-600 hover:text-black transition-colors">Blog</Link>
          </nav>
          
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
