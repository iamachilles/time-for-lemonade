
const RelaxingLemons = () => {
  return (
    <section className="py-16 bg-white/40 backdrop-blur-sm overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Time to relax</h2>
          <p className="text-xl text-gray-600">
            While our AI takes care of your emails, you can enjoy life's simple pleasures
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="animate-float flex justify-center">
            <img 
              src="/lovable-uploads/a55e0fa3-ce73-4b41-8429-4257dd7a4631.png" 
              alt="Lemon relaxing with letters" 
              className="max-w-full max-h-64 md:max-h-80 object-contain"
            />
          </div>
          <div className="animate-float flex justify-center" style={{ animationDelay: "0.5s" }}>
            <img 
              src="/lovable-uploads/3acc7630-0ff8-4f5b-b64b-db4558ad081c.png" 
              alt="Lemon superhero flying" 
              className="max-w-full max-h-64 md:max-h-80 object-contain"
            />
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="relative max-w-4xl mx-auto overflow-hidden">
            <img 
              src="/lovable-uploads/5e6031c0-1570-4713-b6a7-00e79b86bcdd.png" 
              alt="Lemons working together" 
              className="max-w-full h-auto mx-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelaxingLemons;
