
import { useEffect, useState } from "react";

const Divider = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="w-full py-16 overflow-hidden">
      <div className={`max-w-6xl mx-auto px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <img 
          src="/lovable-uploads/fef12092-35c0-45b7-b2e7-a7c95a934f58.png" 
          alt="Decorative lemon characters and paper divider" 
          className="w-full max-w-3xl h-auto mx-auto animate-float"
        />
      </div>
    </div>
  );
};

export default Divider;
