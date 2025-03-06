
import { useState, useEffect } from "react";

// Card component
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

// Small floating element component
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
      className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`} 
      style={style}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-auto h-auto animate-float"
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

const RelaxingLemons = () => {
  const features = [
    {
      title: "AI powered labels",
      description: "to instinctively sort your mails",
      image: "/lovable-uploads/3d197393-1bd7-4eba-87ac-cbc53a7772af.png",
      color: "bg-purple-200"
    },
    {
      title: "AI agent",
      description: "to write and answer emails",
      image: "/lovable-uploads/d2dd5e4e-6fc5-4eae-b0fb-7431063f6f18.png",
      color: "bg-lime-200"
    },
    {
      title: "Built in drive",
      description: "for your attachments",
      image: "/lovable-uploads/d0928468-1adc-4b4f-a8ac-e11f7bb91a21.png",
      color: "bg-lemon-200"
    }
  ];

  return (
    <section className="py-16 bg-white/40 backdrop-blur-sm" id="relax">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Time to relax</h2>
          <p className="text-xl text-gray-600">
            While our AI takes care of your emails, you can enjoy life's simple pleasures
          </p>
        </div>
        
        <div className="relative w-full max-w-4xl mx-auto">
          {/* Feature cards in a clean arrangement (similar to screenshot #4) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center mb-16">
            {features.map((feature, index) => (
              <div key={index} className="text-center relative">
                <div className={`${feature.color} px-6 py-4 rounded-xl shadow-md`}>
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="w-auto h-auto max-h-16 mx-auto mb-3"
                  />
                  <h3 className="font-bold text-gray-800">{feature.title}</h3>
                  <p className="text-sm text-gray-700">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom image with lemons */}
          <div className="relative">
            <img 
              src="/lovable-uploads/5e6031c0-1570-4713-b6a7-00e79b86bcdd.png" 
              alt="Lemons working together" 
              className="w-auto max-w-full mx-auto"
            />
            
            {/* Add some floating elements around the bottom image */}
            <div className="absolute bottom-0 right-0">
              <FloatingElement 
                src="/lovable-uploads/d8505e94-e8fd-4d33-8e1c-e41ebf065b35.png" 
                alt="Cloud" 
                className="w-24 opacity-40"
              />
            </div>
            
            <div className="absolute top-1/3 left-0">
              <FloatingElement 
                src="/lovable-uploads/d8505e94-e8fd-4d33-8e1c-e41ebf065b35.png" 
                alt="Cloud" 
                className="w-16 opacity-30"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelaxingLemons;
