
import { Button } from "@/components/ui/button";

const EmailInterface = () => {
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
          <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200">
            <img 
              src="/lovable-uploads/21d4804a-bc38-4368-b6ec-44bfcdc91dbb.png" 
              alt="Zest Email Interface" 
              className="w-full h-auto" 
            />
          </div>
          
          {/* Floating illustrations */}
          <div className="absolute -right-16 bottom-1/4 animate-float hidden md:block" style={{ animationDelay: "0.2s" }}>
            <img 
              src="/lovable-uploads/61d3f307-5955-41d1-a889-25b98e7957c2.png" 
              alt="Lemon superhero" 
              className="w-32 h-auto" 
            />
          </div>
          
          <div className="absolute -left-16 top-1/3 animate-float hidden md:block" style={{ animationDelay: "0.5s" }}>
            <img 
              src="/lovable-uploads/0fe28731-5f51-4b87-9434-56fabbadd85a.png" 
              alt="Lemon with mail" 
              className="w-28 h-auto" 
            />
          </div>
          
          <div className="absolute -bottom-10 left-1/4 animate-float hidden md:block" style={{ animationDelay: "0.7s", animationDuration: "9s" }}>
            <img 
              src="/lovable-uploads/d0928468-1adc-4b4f-a8ac-e11f7bb91a21.png" 
              alt="Lemon character" 
              className="w-20 h-auto" 
            />
          </div>
          
          <div className="absolute top-1/4 -right-10 animate-float hidden md:block" style={{ animationDelay: "1s", animationDuration: "10s" }}>
            <img 
              src="/lovable-uploads/c663818e-7422-42ba-b924-1fe838368f51.png" 
              alt="Lemon character" 
              className="w-24 h-auto" 
            />
          </div>
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
