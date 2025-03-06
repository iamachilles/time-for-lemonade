
import { Check } from "lucide-react";
import { useEffect, useState } from "react";

// Small floating animation component
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

const Features = () => {
  const features = [
    "AI-powered smart categorization",
    "Automatic response generation",
    "Distraction-free interface",
    "Priority handling for important emails",
    "Built-in attachment management",
    "One-click unsubscribe",
    "Intuitive file previews and editing",
    "Custom AI rules for your workflow"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white/0 to-purple-50/30 overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 relative">
            {/* Main illustration */}
            <div className="animate-float" style={{ animationDuration: "12s" }}>
              <img 
                src="/lovable-uploads/d0928468-1adc-4b4f-a8ac-e11f7bb91a21.png" 
                alt="Lemon mail illustration" 
                className="w-full max-w-md mx-auto"
              />
            </div>
            
            {/* Floating elements around main illustration */}
            <FloatingElement 
              src="/lovable-uploads/c663818e-7422-42ba-b924-1fe838368f51.png" 
              alt="Lemon character" 
              className="w-20 md:w-24"
              style={{ bottom: '0%', right: '5%' }}
            />
            
            <FloatingElement 
              src="/lovable-uploads/9bbe414c-63c7-4d3e-9f5e-4de2bc50a0ac.png" 
              alt="Lemon with envelopes" 
              className="w-24 md:w-28"
              style={{ top: '10%', left: '0%' }}
            />
            
            <FloatingElement 
              src="/lovable-uploads/d8505e94-e8fd-4d33-8e1c-e41ebf065b35.png" 
              alt="Cloud" 
              className="w-32 opacity-40"
              style={{ bottom: '30%', left: '10%' }}
            />
          </div>
          
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Emails that <span className="text-lime-600">work for you</span>,
              <br />
              not the other way around
            </h2>
            <p className="text-xl text-gray-600">
              Our AI understands your priorities and handles the tedious parts of email management, so you can focus on what matters.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="bg-lime-500 rounded-full p-1 text-white mt-0.5 flex-shrink-0">
                    <Check size={16} />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
