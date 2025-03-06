
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

// Small floating illustration component
const FloatingElement = ({ 
  src, 
  alt, 
  className, 
  style,
  title,
  description 
}: { 
  src: string; 
  alt: string; 
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  description?: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, Math.random() * 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const colors = ["bg-purple-200", "bg-lemon-200", "bg-lime-200", "bg-blue-200"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  return (
    <div 
      className={`absolute transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className || ''}`} 
      style={style}
    >
      <div className="animate-float" style={{ animationDuration: `${7 + Math.random() * 5}s` }}>
        <img 
          src={src} 
          alt={alt} 
          className="w-auto h-auto"
        />
        
        {title && description && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 text-center">
            <div className={`${randomColor} px-3 py-2 rounded-xl shadow-md max-w-[160px]`}>
              <p className="text-purple-900 font-bold text-sm">{title}</p>
              <p className="text-xs text-gray-700">{description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const EmailInterface = () => {
  const features = [
    {
      title: "AI powered labels",
      description: "to sort your emails",
      image: "/lovable-uploads/3d197393-1bd7-4eba-87ac-cbc53a7772af.png"
    },
    {
      title: "Simplified unsubscribe",
      description: "in one click",
      image: "/lovable-uploads/1e79926d-4df6-4f1c-992b-613462adadd0.png"
    },
    {
      title: "File preview",
      description: "right in your inbox",
      image: "/lovable-uploads/c88fa2b6-a30b-4dce-bb73-150e0cd66eef.png"
    },
    {
      title: "Use your email",
      description: "or create a Zest one",
      image: "/lovable-uploads/16cfe136-b61d-449c-97fb-b4774135de2c.png"
    },
  ];

  return (
    <section className="py-16 bg-white/40 backdrop-blur-sm relative">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Clean interface, smart AI</h2>
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
          
          {/* Floating feature illustrations */}
          <FloatingElement 
            src="/lovable-uploads/0fe28731-5f51-4b87-9434-56fabbadd85a.png" 
            alt="Lemon with mail" 
            className="w-24 md:w-28 z-10"
            style={{ top: '-15%', left: '15%' }}
            title="Smart sorting"
            description="Automatically organizes your inbox"
          />
          
          <FloatingElement 
            src="/lovable-uploads/61d3f307-5955-41d1-a889-25b98e7957c2.png" 
            alt="Lemon superhero" 
            className="w-28 md:w-32 z-10"
            style={{ bottom: '-10%', right: '15%' }}
            title="AI assistant"
            description="Your email superhero"
          />
          
          <FloatingElement 
            src="/lovable-uploads/d0928468-1adc-4b4f-a8ac-e11f7bb91a21.png" 
            alt="Lemon character" 
            className="w-20 md:w-24 z-10"
            style={{ bottom: '20%', left: '-5%' }}
            title="Attachment handling"
            description="Everything in one place"
          />
          
          <FloatingElement 
            src="/lovable-uploads/c663818e-7422-42ba-b924-1fe838368f51.png" 
            alt="Lemon character" 
            className="w-20 md:w-24 z-10"
            style={{ top: '20%', right: '-5%' }}
            title="Inbox zen"
            description="Calm your email chaos"
          />
        </div>
        
        <div className="relative mt-16 text-center">
          <Button className="primary-button text-lg">
            Get Started for Free
          </Button>
          
          <div className="absolute -right-10 bottom-0 animate-float md:block hidden" style={{ animationDelay: "0.3s" }}>
            <img 
              src="/lovable-uploads/d8505e94-e8fd-4d33-8e1c-e41ebf065b35.png" 
              alt="Decorative cloud" 
              className="w-24 h-auto opacity-50"
            />
          </div>
        </div>
      </div>
      
      {/* Additional floating clouds in background */}
      <div className="absolute bottom-10 right-10 animate-float opacity-40 hidden md:block" style={{ animationDelay: "0.5s" }}>
        <img 
          src="/lovable-uploads/d8505e94-e8fd-4d33-8e1c-e41ebf065b35.png" 
          alt="Decorative cloud" 
          className="w-32 h-auto"
        />
      </div>
    </section>
  );
};

export default EmailInterface;
