
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-6xl mx-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-lemon-300 to-lime-300 rounded-3xl blur-3xl opacity-70"></div>
          
          <div className="relative glass-card p-12 rounded-3xl border-2 border-white/70 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-lemon-200 rounded-full blur-3xl -mr-20 -mt-20 opacity-70"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-lime-200 rounded-full blur-3xl -ml-20 -mb-20 opacity-70"></div>
            
            <div className="relative text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight animate-slide-up">
                It's time for <span className="text-lime-600">lemonade</span>, not email stress
              </h2>
              <p className="text-xl text-gray-700 mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
                Join thousands who've reclaimed their time and peace of mind with our AI-powered email client.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <Button className="primary-button flex items-center gap-2 text-lg px-8">
                  Try Free for 14 Days <ArrowRight size={18} />
                </Button>
                <Button variant="outline" className="text-lg">See Pricing</Button>
              </div>
              <p className="text-gray-500 mt-6 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                No credit card required. Cancel anytime.
              </p>
              
              <div className="mt-12 flex flex-wrap justify-center gap-8 animate-slide-up" style={{ animationDelay: "0.4s" }}>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-lime-100 flex items-center justify-center">
                    <span className="text-lime-600 text-lg">✓</span>
                  </div>
                  <span className="text-gray-700">14-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-lime-100 flex items-center justify-center">
                    <span className="text-lime-600 text-lg">✓</span>
                  </div>
                  <span className="text-gray-700">No credit card</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-lime-100 flex items-center justify-center">
                    <span className="text-lime-600 text-lg">✓</span>
                  </div>
                  <span className="text-gray-700">Easy setup</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
