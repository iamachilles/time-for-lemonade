
import { Sun } from "lucide-react";
import { useEffect, useState } from "react";

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-6xl mx-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-lemon-300 to-lime-300 rounded-3xl blur-3xl opacity-70"></div>
          
          <div className="relative glass-card p-12 rounded-3xl border-2 border-white/70 overflow-hidden">
            {/* Background effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-lemon-200 rounded-full blur-3xl -mr-20 -mt-20 opacity-70"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-lime-200 rounded-full blur-3xl -ml-20 -mb-20 opacity-70"></div>
            
            <div className="relative text-center max-w-3xl mx-auto">
              {/* Floating relaxing lemon image */}
              <div className={`transition-all duration-1000 ease-in-out ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}>
                <img 
                  src="/lovable-uploads/990ddb2a-ccfb-4384-bd18-51abe30e54c4.png" 
                  alt="Relaxing lemon in tube" 
                  className="w-48 h-auto mx-auto mb-6 animate-float"
                />
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight animate-slide-up">
                It's time for <span className="text-lime-600">lemonade</span>, not email stress
              </h2>
              <p className="text-xl text-gray-700 mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
                Join thousands who've reclaimed their time and peace of mind with our AI-powered email client.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <a 
                  href="https://app.zest.email/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-lemon-400 hover:bg-lemon-500 text-black font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 text-xl tracking-wide justify-center"
                >
                  <Sun className="h-5 w-5" />
                  TRY ZEST
                </a>
                <a 
                  href="https://app.zest.email/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg inline-flex items-center justify-center h-12 px-8 py-2 border-2 border-gray-800 bg-white/50 hover:bg-white text-gray-800 font-medium rounded-xl"
                >
                  See Pricing
                </a>
              </div>
              <p className="text-gray-500 mt-6 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                No credit card required. Cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
