
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
          
          <div className="lg:w-1/2 relative">
            {/* Main hero image positioned to overflow on mobile and desktop */}
            <div className="relative w-full h-auto overflow-visible">
              <img 
                src="/lovable-uploads/6493f1cc-33c7-48a8-b1a1-61db5e091b25.png" 
                alt="Lemon characters with mailbox" 
                className="w-auto h-auto max-w-none lg:max-w-[140%] absolute -right-16 lg:-right-32 top-0"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Background gradient at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-lemon-50/80 to-transparent"></div>
    </section>
  );
};

export default Hero;
