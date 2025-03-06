
import { Button } from "@/components/ui/button";

const EmailInterface = () => {
  return (
    <section className="py-16 bg-white/40 backdrop-blur-sm">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Clean interface, smart AI</h2>
          <p className="text-xl text-gray-600">
            Enjoy a beautiful, distraction-free email experience powered by AI
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200">
            <img 
              src="/lovable-uploads/21d4804a-bc38-4368-b6ec-44bfcdc91dbb.png" 
              alt="Zest Email Interface" 
              className="w-full h-auto" 
            />
          </div>
          
          <div className="absolute -right-4 md:-right-16 -bottom-8 md:-bottom-16 animate-float hidden sm:block">
            <img 
              src="/lovable-uploads/61d3f307-5955-41d1-a889-25b98e7957c2.png" 
              alt="Lemon superhero" 
              className="w-24 md:w-32 h-auto" 
            />
          </div>
          
          <div className="absolute -left-4 md:-left-16 top-1/3 animate-float hidden sm:block" style={{ animationDelay: "0.5s" }}>
            <img 
              src="/lovable-uploads/0fe28731-5f51-4b87-9434-56fabbadd85a.png" 
              alt="Lemon with mail" 
              className="w-20 md:w-28 h-auto" 
            />
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Button className="bg-lemon-500 hover:bg-lemon-600 text-black font-medium py-3 px-6 rounded-full shadow-md transition-all duration-300 text-lg">
            Get Started for Free
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EmailInterface;
