
import { Check } from "lucide-react";

const Features = () => {
  const features = [
    "AI-powered smart categorization",
    "Automatic response generation",
    "Distraction-free interface",
    "Priority handling for important emails",
    "Built-in attachment management",
    "One-click unsubscribe",
    "Intuitive file previews and editing",
    "Custom AI rules for your workflow"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white/0 to-purple-50/30 overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 relative flex justify-center">
            <img 
              src="/lovable-uploads/075bc4b2-fe29-483f-bc52-c449b1a2d8f4.png" 
              alt="Lemon mail illustration" 
              className="max-w-full md:max-w-md object-contain"
            />
          </div>
          
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Emails that <span className="text-lime-600">work for you</span>,
              <br className="hidden md:block" />
              not the other way around
            </h2>
            <p className="text-xl text-gray-600">
              Our AI understands your priorities and handles the tedious parts of email management, so you can focus on what matters.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="bg-lime-500 rounded-full p-1 text-white mt-0.5 flex-shrink-0">
                    <Check size={16} />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
