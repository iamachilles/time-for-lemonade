
import { useState, useEffect } from "react";

interface FeaturePoint {
  title: string;
  description: string;
  imageSrc: string;
  color?: string;
}

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

// Floating feature component
const FloatingFeature = ({ 
  imageSrc, 
  title, 
  description, 
  style = {},
  color = "bg-purple-200"
}: FeaturePoint & { style?: React.CSSProperties }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, Math.random() * 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div 
      className={`absolute transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
      style={style}
    >
      <div className="animate-float" style={{ animationDuration: `${7 + Math.random() * 4}s` }}>
        <img src={imageSrc} alt={title} className="w-auto h-auto max-h-16" />
      </div>
      
      {title && description && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2">
          <FeatureCard title={title} description={description} color={color} />
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
      imageSrc: "/lovable-uploads/3d197393-1bd7-4eba-87ac-cbc53a7772af.png",
      color: "bg-purple-200"
    },
    {
      title: "AI agent",
      description: "to write, answer, correct with the touch of a key",
      imageSrc: "/lovable-uploads/d2dd5e4e-6fc5-4eae-b0fb-7431063f6f18.png",
      color: "bg-lime-200"
    },
    {
      title: "Built in drive",
      description: "for your attachments - no more back and forth!",
      imageSrc: "/lovable-uploads/d0928468-1adc-4b4f-a8ac-e11f7bb91a21.png",
      color: "bg-lemon-200"
    },
    {
      title: "Instinctive shortcuts",
      description: "to navigate, answer, sort, send in no time",
      imageSrc: "/lovable-uploads/c663818e-7422-42ba-b924-1fe838368f51.png",
      color: "bg-blue-200"
    },
    {
      title: "Use your own email address",
      description: "or create your Zest email",
      imageSrc: "/lovable-uploads/16cfe136-b61d-449c-97fb-b4774135de2c.png",
      color: "bg-purple-200"
    },
    {
      title: "Simplified unsubscribe",
      description: "to spam",
      imageSrc: "/lovable-uploads/1e79926d-4df6-4f1c-992b-613462adadd0.png",
      color: "bg-red-200"
    },
    {
      title: "File preview",
      description: "directly in your mail",
      imageSrc: "/lovable-uploads/c88fa2b6-a30b-4dce-bb73-150e0cd66eef.png",
      color: "bg-blue-200"
    },
    {
      title: "AI Mail Navigation",
      description: "with priority handling and smart suggestions",
      imageSrc: "/lovable-uploads/9bbe414c-63c7-4d3e-9f5e-4de2bc50a0ac.png",
      color: "bg-green-200"
    }
  ];

  // Generate better positions for the floating illustrations
  const generatePositions = () => {
    // Define quadrants to ensure better distribution
    const quadrants = [
      { xMin: 10, xMax: 30, yMin: 10, yMax: 30 },
      { xMin: 70, xMax: 90, yMin: 10, yMax: 30 },
      { xMin: 10, xMax: 30, yMin: 70, yMax: 90 },
      { xMin: 70, xMax: 90, yMin: 70, yMax: 90 },
      { xMin: 40, xMax: 60, yMin: 20, yMax: 40 },
      { xMin: 20, xMax: 40, yMin: 40, yMax: 60 },
      { xMin: 60, xMax: 80, yMin: 40, yMax: 60 },
      { xMin: 40, xMax: 60, yMin: 60, yMax: 80 },
    ];
    
    return features.map((feature, index) => {
      const quadrant = quadrants[index % quadrants.length];
      const top = Math.floor(Math.random() * (quadrant.yMax - quadrant.yMin)) + quadrant.yMin;
      const left = Math.floor(Math.random() * (quadrant.xMax - quadrant.xMin)) + quadrant.xMin;
      const rotate = Math.floor(Math.random() * 10) - 5; // slight rotation
      
      return { 
        top: `${top}%`, 
        left: `${left}%`, 
        transform: `rotate(${rotate}deg)` 
      };
    });
  };
  
  const positions = generatePositions();

  return (
    <section className="py-16 relative" id="smart-features">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Smart features for a smart inbox</h2>
          <p className="text-xl text-gray-600">
            Zest Mail comes with everything you need for a more productive email experience
          </p>
        </div>
        
        <div className="relative w-full h-[500px] mx-auto max-w-4xl mt-8">
          <div className="glass-card w-full h-full rounded-xl z-10"></div>
          
          {/* Use the reference image as background */}
          <img 
            src="/lovable-uploads/f6a8c1ba-2678-48ba-9c5e-087cfe05aedf.png" 
            alt="Feature background" 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover rounded-xl opacity-20 z-0"
          />
          
          {/* Floating feature elements */}
          {features.map((feature, index) => (
            <FloatingFeature
              key={index}
              {...feature}
              style={positions[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
