
import { Check } from "lucide-react";
import { useEffect, useState } from "react";

// Floating card component
const FeatureCard = ({ 
  title, 
  description, 
  color = "bg-purple-200" 
}: { 
  title: string; 
  description: string;
  color?: string;
}) => {
  return (
    <div className={`${color} px-5 py-3 rounded-xl shadow-md max-w-[200px] transform rotate-${Math.floor(Math.random() * 6) - 3}`}>
      <p className="text-gray-800 font-bold text-sm">{title}</p>
      <p className="text-xs text-gray-700">{description}</p>
    </div>
  );
};

// Small floating illustration component
const FloatingElement = ({ 
  src, 
  alt, 
  className = "", 
  style = {},
  card = null
}: { 
  src: string; 
  alt: string; 
  className?: string;
  style?: React.CSSProperties;
  card?: {title: string, description: string, color?: string} | null;
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
      style={{ 
        animationDuration: `${8 + Math.random() * 4}s`,
        ...style 
      }}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-auto h-auto max-h-16 animate-float"
        style={{ animationDuration: `${8 + Math.random() * 4}s` }}
      />
      
      {card && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2">
          <FeatureCard {...card} />
        </div>
      )}
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
    <section className="py-20 bg-gradient-to-b from-white/0 to-purple-50/30 overflow-hidden" id="features">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 relative">
            {/* Main illustration styled like in the reference image */}
            <div className="relative">
              <img 
                src="/lovable-uploads/bb970efb-46fa-4f36-9872-3ea0835166c1.png" 
                alt="Feature showcase" 
                className="w-full max-w-md mx-auto relative z-20"
              />
              
              {/* Floating elements around the main image */}
              <FloatingElement 
                src="/lovable-uploads/c663818e-7422-42ba-b924-1fe838368f51.png" 
                alt="Lemon character" 
                className="z-30 hidden lg:block"
                style={{ bottom: '10%', right: '0%', transform: 'rotate(5deg)' }}
              />
              
              <FloatingElement 
                src="/lovable-uploads/9bbe414c-63c7-4d3e-9f5e-4de2bc50a0ac.png" 
                alt="Lemon with envelopes" 
                className="z-30 hidden lg:block"
                style={{ top: '10%', left: '-10%', transform: 'rotate(-5deg)' }}
              />
              
              <FloatingElement 
                src="/lovable-uploads/d8505e94-e8fd-4d33-8e1c-e41ebf065b35.png" 
                alt="Cloud" 
                className="w-20 opacity-40 z-10 hidden lg:block"
                style={{ bottom: '30%', left: '10%' }}
              />
            </div>
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
