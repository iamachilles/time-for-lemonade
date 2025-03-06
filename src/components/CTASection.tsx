
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

// Small floating element component
const FloatingElement = ({ 
  src, 
  alt, 
  className = "", 
  style = {}
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
      className={`absolute transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`} 
      style={style}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-auto h-auto max-h-16 animate-float"
        style={{ animationDuration: `${8 + Math.random() * 4}s` }}
      />
    </div>
  );
};

const CTASection = () => {
  return (
    <section className="py-20" id="cta">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-5xl mx-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-lemon-300 to-lime-300 rounded-3xl blur-3xl opacity-70"></div>
          
          <div className="relative glass-card p-12 md:p-16 rounded-3xl border-2 border-white/70 overflow-hidden">
            {/* Background effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-lemon-200 rounded-full blur-3xl -mr-20 -mt-20 opacity-70"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-lime-200 rounded-full blur-3xl -ml-20 -mb-20 opacity-70"></div>
            
            <div className="relative text-center max-w-3xl mx-auto">
              {/* Use the reference image to style the title */}
              <div className="relative flex flex-col items-center">
                {/* Floating envelope with lemon elements */}
                <img 
                  src="/lovable-uploads/e2f71d66-a030-450b-bea4-3aed9d79566f.png" 
                  alt="Email lemon illustration" 
                  className="h-auto max-h-32 mb-6"
                />
                
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight animate-slide-up">
                  It's time for <span className="text-lime-600">lemonade</span>, not
                  <br /> email stress
                </h2>
              </div>
              
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
                className="w-14"
                style={{ bottom: '-60px', right: '15%' }}
              />
              
              <FloatingElement 
                src="/lovable-uploads/1e79926d-4df6-4f1c-992b-613462adadd0.png" 
                alt="Simplified unsubscribe" 
                className="w-20"
                style={{ bottom: '-20px', left: '10%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
