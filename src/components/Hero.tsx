
import { Sun } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-0 md:pt-8 pb-16 overflow-hidden relative">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col items-center justify-center text-center relative">
          {/* Left side image */}
          <div className="absolute -left-10 md:-left-20 top-1/2 -translate-y-1/2 w-1/3 max-w-[240px] hidden md:block">
            <img 
              src="/lovable-uploads/84bddbc7-cf5d-4ae5-bd57-6bff30321134.png" 
              alt="Lemon character on envelope" 
              className="w-full h-auto animate-float"
              style={{ 
                animationDuration: "8s",
              }}
            />
          </div>
          
          {/* Right side image */}
          <div className="absolute -right-10 md:-right-20 top-1/2 -translate-y-1/2 w-2/5 max-w-[320px] hidden md:block">
            <img 
              src="/lovable-uploads/deb8f9a1-baea-4192-8f14-59fb0f7d5835.png" 
              alt="Lemon characters playing with email" 
              className="w-full h-auto animate-float"
              style={{ 
                animationDuration: "10s",
                transform: "rotate(6deg)"
              }}
            />
          </div>
          
          {/* Centered content - made narrower to accommodate bigger images */}
          <div className="max-w-2xl mx-auto space-y-6 z-10 py-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Make <span className="text-green-500">email</span> fun
              <br />
              again
              <br />
              <span className="text-purple-500">with Zest</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-xl mx-auto">
              We believe email should enhance your life, not consume it. Our AI gives you more time to enjoy life.
            </p>
            <div className="flex justify-center pt-4">
              <a 
                href="https://app.zest.email/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-lemon-400 hover:bg-lemon-500 text-black font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 text-xl tracking-wide"
              >
                <Sun className="h-5 w-5" />
                TRY ZEST
              </a>
            </div>
          </div>
          
          {/* Mobile image (shown only on small screens) - made larger */}
          <div className="md:hidden w-[85%] max-w-[280px] mx-auto mt-8">
            <img 
              src="/lovable-uploads/84bddbc7-cf5d-4ae5-bd57-6bff30321134.png" 
              alt="Lemon character on envelope" 
              className="w-full h-auto animate-float"
              style={{ 
                animationDuration: "8s",
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Subtle gradient at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-lemon-50/80 to-transparent"></div>
    </section>
  );
};

export default Hero;
