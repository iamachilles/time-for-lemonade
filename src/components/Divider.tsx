
import { useEffect, useState, useRef } from "react";

const Divider = () => {
  const [isVisible, setIsVisible] = useState(false);
  const dividerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Initial animation on component mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    // Setup intersection observer for scroll effect
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        root: null,
        threshold: 0.2, // Trigger when 20% of the element is visible
        rootMargin: '-50px'
      }
    );
    
    if (dividerRef.current) {
      observer.observe(dividerRef.current);
    }
    
    return () => {
      clearTimeout(timer);
      if (dividerRef.current) {
        observer.unobserve(dividerRef.current);
      }
    };
  }, []);
  
  return (
    <div ref={dividerRef} className="w-full py-16 overflow-visible relative">
      <div className={`max-w-6xl mx-auto transition-all duration-1000 ease-in-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 rotate-0 scale-100' 
          : 'opacity-0 translate-y-16 -rotate-2 scale-95'
      }`}>
        <img 
          src="/lovable-uploads/fef12092-35c0-45b7-b2e7-a7c95a934f58.png" 
          alt="Decorative lemon characters and paper divider" 
          className="w-[120%] max-w-none h-auto mx-auto relative left-1/2 -translate-x-1/2"
        />
      </div>
    </div>
  );
};

export default Divider;
