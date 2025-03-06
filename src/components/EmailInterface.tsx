
import { Button } from "@/components/ui/button";

// Feature card component
const FeatureCard = ({ 
  title, 
  description,
  color = "bg-purple-600",
  position,
  textColor = "text-white"
}: { 
  title: string; 
  description: string;
  color?: string;
  position: string;
  textColor?: string;
}) => {
  return (
    <div className={`absolute ${position} rounded-lg p-4 shadow-lg ${color} ${textColor} z-30 max-w-[220px]`}>
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

const EmailInterface = () => {
  return (
    <section className="py-16 relative bg-gradient-to-b from-lemon-50 to-yellow-50">
      <div className="container relative max-w-6xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work on your emails, not in them</h2>
          <p className="text-xl text-gray-600">
            Experience how Zest makes email seamless and enjoyable with powerful AI features
          </p>
        </div>
        
        {/* Feature cards around the email interface */}
        <FeatureCard 
          title="AI powered labels" 
          description="to instinctively sort your mails and files"
          position="top-[20%] left-0 -translate-x-1/2 lg:translate-x-0"
          color="bg-purple-600"
        />
        
        <FeatureCard 
          title="Built in drive" 
          description="for your attachments - no more back and forth!"
          position="top-[40%] left-0 -translate-x-1/2 lg:translate-x-0"
          color="bg-purple-300"
          textColor="text-purple-900"
        />
        
        <FeatureCard 
          title="Simplified unsubscribe" 
          description="to spam"
          position="bottom-[25%] left-0 -translate-x-1/2 lg:translate-x-0"
          color="bg-purple-600"
        />
        
        <FeatureCard 
          title="Instinctive shortcuts" 
          description="to navigate, answer, sort, send in no time"
          position="top-[25%] right-0 translate-x-1/2 lg:translate-x-0"
          color="bg-purple-600"
        />
        
        <FeatureCard 
          title="Use your own email adress" 
          description="or create your Zest email"
          position="top-[45%] right-0 translate-x-1/2 lg:translate-x-0"
          color="bg-purple-300"
          textColor="text-purple-900"
        />
        
        <FeatureCard 
          title="AI agent" 
          description="to write, answer, correct with the touch of a key"
          position="bottom-[40%] right-0 translate-x-1/2 lg:translate-x-0"
          color="bg-purple-300"
          textColor="text-purple-900"
        />
        
        <FeatureCard 
          title="File preview, summary and edit" 
          description="directly in your mail"
          position="bottom-[20%] right-0 translate-x-1/2 lg:translate-x-0"
          color="bg-purple-300"
          textColor="text-purple-900"
        />
        
        {/* Email interface screenshot */}
        <div className="relative max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl">
          <img 
            src="/lovable-uploads/d98d3613-2289-47da-a8f2-00e9c8debe72.png" 
            alt="Email interface screenshot" 
            className="w-full h-auto"
          />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-1/4 -mb-8">
          <img 
            src="/lovable-uploads/b612ef9b-8745-45de-8507-4d47e5825102.png" 
            alt="Decorative leaf" 
            className="w-32 h-auto opacity-90 transform -rotate-15"
          />
        </div>
      </div>
    </section>
  );
};

export default EmailInterface;
