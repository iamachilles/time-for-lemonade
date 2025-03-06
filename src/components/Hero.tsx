
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 overflow-hidden relative">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6 animate-slide-up z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Make <span className="text-lime-600">email</span> fun again
              <br />
              <span className="text-purple-500">with Zest</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              We believe email should enhance your life, not consume it. Our AI gives you more time to enjoy life.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button className="primary-button flex items-center gap-2 text-lg">
                Try Free <ArrowRight size={18} />
              </Button>
              <Button variant="outline" className="text-lg">Learn More</Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative animate-float">
            <img 
              src="/lovable-uploads/deb8f9a1-baea-4192-8f14-59fb0f7d5835.png" 
              alt="Lemon characters playing with email" 
              className="w-full h-auto max-w-xl mx-auto"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-20 right-10 animate-float opacity-30">
        <img 
          src="/lovable-uploads/d8505e94-e8fd-4d33-8e1c-e41ebf065b35.png" 
          alt="Decorative cloud" 
          className="w-32 h-auto"
        />
      </div>
      <div className="absolute top-40 left-10 animate-float opacity-30" style={{animationDelay: "1s"}}>
        <img 
          src="/lovable-uploads/d8505e94-e8fd-4d33-8e1c-e41ebf065b35.png" 
          alt="Decorative cloud" 
          className="w-24 h-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
