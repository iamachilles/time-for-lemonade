
import { useState, useEffect } from "react";

interface FeaturePoint {
  title: string;
  description: string;
  imageSrc: string;
}

const FloatingIllustration = ({ 
  imageSrc, 
  title, 
  description, 
  style 
}: FeaturePoint & { style: React.CSSProperties }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, Math.random() * 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div 
      className={`absolute transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
      style={style}
    >
      <div className="animate-float">
        <img src={imageSrc} alt={title} className="w-auto h-auto max-h-32" />
      </div>
      {title && description && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 text-center hidden md:block">
          <p className="text-purple-700 font-bold whitespace-nowrap">{title}</p>
          <p className="text-xs text-gray-600 max-w-[150px]">{description}</p>
        </div>
      )}
    </div>
  );
};

const FeatureCards = () => {
  const features: FeaturePoint[] = [
    {
      title: "AI powered labels",
      description: "to instinctively sort your mails and files",
      imageSrc: "/lovable-uploads/3d197393-1bd7-4eba-87ac-cbc53a7772af.png"
    },
    {
      title: "AI agent",
      description: "to write, answer, correct with the touch of a key",
      imageSrc: "/lovable-uploads/d2dd5e4e-6fc5-4eae-b0fb-7431063f6f18.png"
    },
    {
      title: "Built in drive",
      description: "for your attachments - no more back and forth!",
      imageSrc: "/lovable-uploads/d0928468-1adc-4b4f-a8ac-e11f7bb91a21.png"
    },
    {
      title: "Instinctive shortcuts",
      description: "to navigate, answer, sort, send in no time",
      imageSrc: "/lovable-uploads/c663818e-7422-42ba-b924-1fe838368f51.png"
    },
    {
      title: "Use your own email address",
      description: "or create your Zest email",
      imageSrc: "/lovable-uploads/16cfe136-b61d-449c-97fb-b4774135de2c.png"
    },
    {
      title: "Simplified unsubscribe",
      description: "to spam",
      imageSrc: "/lovable-uploads/1e79926d-4df6-4f1c-992b-613462adadd0.png"
    },
    {
      title: "File preview",
      description: "directly in your mail",
      imageSrc: "/lovable-uploads/c88fa2b6-a30b-4dce-bb73-150e0cd66eef.png"
    },
    {
      title: "AI Mail Navigation",
      description: "with priority handling and smart suggestions",
      imageSrc: "/lovable-uploads/9bbe414c-63c7-4d3e-9f5e-4de2bc50a0ac.png"
    }
  ];

  // Positions for the floating illustrations
  const positions = [
    { top: '5%', left: '10%', transform: 'rotate(10deg)' },
    { top: '15%', right: '8%', transform: 'rotate(-5deg)' },
    { top: '40%', left: '5%', transform: 'rotate(-10deg)' },
    { top: '35%', right: '10%', transform: 'rotate(8deg)' },
    { top: '70%', left: '15%', transform: 'rotate(5deg)' },
    { top: '60%', right: '5%', transform: 'rotate(-8deg)' },
    { top: '85%', left: '50%', transform: 'translateX(-50%) rotate(3deg)' },
    { top: '25%', left: '30%', transform: 'rotate(-5deg)' }
  ];

  return (
    <section className="py-16 relative">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Smart features for a smart inbox</h2>
          <p className="text-xl text-gray-600">
            Zest Mail comes with everything you need for a more productive email experience
          </p>
        </div>
        
        <div className="relative w-full h-[500px] mx-auto max-w-5xl mt-16">
          <div className="glass-card w-full h-full rounded-xl"></div>
          
          {features.map((feature, index) => (
            <FloatingIllustration
              key={index}
              {...feature}
              style={positions[index % positions.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
