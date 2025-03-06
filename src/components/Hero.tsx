
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6 animate-slide-up">
            <div className="inline-block px-3 py-1 bg-lemon-200 rounded-full text-sm font-medium text-gray-900 animate-pulse">
              AI-Powered Email Made Simple
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              The <span className="text-purple-500">AI</span> Inbox
              <br />
              <span className="text-lime-500">For Laid-Back Living</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              We believe email should enhance your life, not consume it. Our AI gives you more time to get a lemonade.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button className="primary-button flex items-center gap-2 text-lg">
                Try Free <ArrowRight size={18} />
              </Button>
              <Button variant="outline" className="text-lg">Learn More</Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative animate-slide-in-right">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-lemon-200 via-lime-100 to-purple-100 rounded-full blur-3xl opacity-70 animate-pulse"></div>
              <div className="relative glass-card rounded-2xl overflow-hidden border-2 border-white/50 shadow-xl">
                <img 
                  src="/lovable-uploads/38c730bf-e5d1-4b75-aec1-e800e2923994.png" 
                  alt="AI Email Interface" 
                  className="w-full h-auto"
                />
                <div className="absolute bottom-6 right-6 animate-float">
                  <div className="bg-lime-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                    <span className="text-xl">🍋</span>
                    <span className="font-medium">Get your lemonade time back</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
