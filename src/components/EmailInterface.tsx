
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

// Feature card component
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
      className={`absolute transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`} 
      style={style}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-auto h-auto max-h-16"
      />
      
      {card && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2">
          <FeatureCard {...card} />
        </div>
      )}
    </div>
  );
};

const EmailInterface = () => {
  return (
    <section className="py-16 bg-white/40 backdrop-blur-sm relative" id="interface">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Clean interface, smart AI</h2>
          <p className="text-xl text-gray-600">
            Enjoy a beautiful, distraction-free email experience powered by AI
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Email interface image */}
          <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200 relative z-20">
            <img 
              src="/lovable-uploads/21d4804a-bc38-4368-b6ec-44bfcdc91dbb.png" 
              alt="Zest Email Interface" 
              className="w-full h-auto" 
            />
          </div>
          
          {/* Background glow effects */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-purple-300 rounded-full blur-3xl opacity-10 -z-10"></div>
          <div className="absolute top-1/3 left-1/4 w-[40%] h-[40%] bg-lime-300 rounded-full blur-3xl opacity-10 -z-10"></div>
          
          {/* Floating feature illustrations - positioned carefully outside the main image */}
          <FloatingElement 
            src="/lovable-uploads/0fe28731-5f51-4b87-9434-56fabbadd85a.png" 
            alt="Lemon with mail" 
            className="z-30 hidden lg:block"
            style={{ top: '-10%', left: '-5%', transform: 'rotate(-5deg)' }}
            card={{
              title: "Smart sorting",
              description: "Automatically organizes your inbox",
              color: "bg-purple-200"
            }}
          />
          
          <FloatingElement 
            src="/lovable-uploads/61d3f307-5955-41d1-a889-25b98e7957c2.png" 
            alt="Lemon superhero" 
            className="z-30 hidden lg:block"
            style={{ bottom: '-5%', right: '-8%', transform: 'rotate(5deg)' }}
            card={{
              title: "AI assistant",
              description: "Your email superhero",
              color: "bg-lime-200"
            }}
          />
          
          <FloatingElement 
            src="/lovable-uploads/1e79926d-4df6-4f1c-992b-613462adadd0.png" 
            alt="Simplified unsubscribe" 
            className="z-30 hidden lg:block"
            style={{ bottom: '20%', left: '-15%', transform: 'rotate(-8deg)' }}
            card={{
              title: "Simplified unsubscribe",
              description: "One click to unsubscribe",
              color: "bg-lemon-200"
            }}
          />
          
          <FloatingElement 
            src="/lovable-uploads/c88fa2b6-a30b-4dce-bb73-150e0cd66eef.png" 
            alt="File preview" 
            className="z-30 hidden lg:block"
            style={{ top: '15%', right: '-10%', transform: 'rotate(8deg)' }}
            card={{
              title: "File preview",
              description: "See attachments instantly",
              color: "bg-blue-200"
            }}
          />
        </div>
        
        <div className="relative mt-16 text-center">
          <Button className="primary-button text-lg">
            Get Started for Free
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EmailInterface;
