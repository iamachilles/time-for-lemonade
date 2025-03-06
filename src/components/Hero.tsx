
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-20 md:pt-28 pb-16 overflow-hidden relative">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6 z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Make <span className="text-green-500">email</span> fun
              <br />
              again
              <br />
              <span className="text-purple-500">with Zest</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              We believe email should enhance your life, not consume it. Our AI gives you more time to enjoy life.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-6 rounded-full shadow-md transition-all duration-300 flex items-center gap-2 text-lg">
                Try Free <ArrowRight size={18} />
              </Button>
              <Button variant="outline" className="text-lg">Learn More</Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <img 
              src="/lovable-uploads/deb8f9a1-baea-4192-8f14-59fb0f7d5835.png" 
              alt="Lemon characters playing with email" 
              className="w-full h-auto max-w-2xl mx-auto animate-float"
              style={{ animationDuration: "10s" }}
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
