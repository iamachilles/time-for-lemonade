
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

// Small floating element component
const FloatingElement = ({ 
  src, 
  alt, 
  className, 
  style 
}: { 
  src: string; 
  alt: string; 
  className?: string;
  style?: React.CSSProperties;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, Math.random() * 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div 
      className={`absolute transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className || ''}`} 
      style={style}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-auto h-auto animate-float"
        style={{ animationDuration: `${8 + Math.random() * 4}s` }}
      />
    </div>
  );
};

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-6xl mx-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-lemon-300 to-lime-300 rounded-3xl blur-3xl opacity-70"></div>
          
          <div className="relative glass-card p-12 rounded-3xl border-2 border-white/70 overflow-hidden">
            {/* Background effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-lemon-200 rounded-full blur-3xl -mr-20 -mt-20 opacity-70"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-lime-200 rounded-full blur-3xl -ml-20 -mb-20 opacity-70"></div>
            
            <div className="relative text-center max-w-3xl mx-auto">
              {/* Main superhero lemon illustration at the top */}
              <FloatingElement 
                src="/lovable-uploads/9bbe414c-63c7-4d3e-9f5e-4de2bc50a0ac.png" 
                alt="Flying lemon superhero" 
                className="w-32 h-auto mx-auto"
                style={{ top: '-80px', left: '50%', transform: 'translateX(-50%)' }}
              />
              
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight animate-slide-up mt-12">
                It's time for <span className="text-lime-600">lemonade</span>, not email stress
              </h2>
              <p className="text-xl text-gray-700 mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
                Join thousands who've reclaimed their time and peace of mind with our AI-powered email client.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <Button className="primary-button flex items-center gap-2 text-lg px-8">
                  Try Free for 14 Days <ArrowRight size={18} />
                </Button>
                <Button variant="outline" className="text-lg">See Pricing</Button>
              </div>
              <p className="text-gray-500 mt-6 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                No credit card required. Cancel anytime.
              </p>
              
              {/* Additional floating elements */}
              <FloatingElement 
                src="/lovable-uploads/c663818e-7422-42ba-b924-1fe838368f51.png" 
                alt="Lemon character" 
                className="w-20"
                style={{ bottom: '-30px', right: '10%' }}
              />
              
              <FloatingElement 
                src="/lovable-uploads/d0928468-1adc-4b4f-a8ac-e11f7bb91a21.png" 
                alt="Lemon with mail" 
                className="w-24"
                style={{ bottom: '-40px', left: '10%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
