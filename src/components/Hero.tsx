
import { Sun } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-0 md:pt-8 pb-16 overflow-hidden relative bg-white">
      {/* Large lemon slice background image */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <div className="relative w-full h-full">
          <img 
            src="/lovable-uploads/7ad25c85-9a3b-48f8-bd55-f74b133b8d84.png" 
            alt="Lemon slice background"
            className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 w-[140%] max-w-none opacity-[0.15]"
          />
        </div>
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col items-center justify-center text-center relative">
          {/* Left side image - made larger and positioned much lower (about 1/3 from top) */}
          <div className="absolute -left-20 md:-left-32 top-1/3 w-2/5 max-w-[300px] hidden md:block z-10">
            <img 
              src="/lovable-uploads/84bddbc7-cf5d-4ae5-bd57-6bff30321134.png" 
              alt="Lemon character on envelope" 
              className="w-full h-auto animate-float"
              style={{ 
                animationDuration: "8s",
              }}
            />
          </div>
          
          {/* Right side image - made larger */}
          <div className="absolute -right-20 md:-right-32 top-1/2 -translate-y-1/2 w-2/4 max-w-[400px] hidden md:block z-10">
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
          
          {/* Centered content - made even narrower to accommodate bigger images */}
          <div className="max-w-xl mx-auto space-y-6 z-10 py-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Make <span className="text-green-500">email</span> fun
              <br />
              again
              <br />
              <span className="text-purple-500">with Zest</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg mx-auto">
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
          
          {/* Mobile image (shown only on small screens) - made even larger */}
          <div className="md:hidden w-[95%] max-w-[320px] mx-auto mt-8 z-10">
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
      
      {/* Gradient transition from white to yellow at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-lemon-50 to-transparent"></div>
    </section>
  );
};

export default Hero;
