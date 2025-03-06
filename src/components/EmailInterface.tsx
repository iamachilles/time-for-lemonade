import { Button } from "@/components/ui/button";

// Feature card component
const FeatureCard = ({ 
  title, 
  description,
  color = "bg-purple-600",
  position,
  textColor = "text-white",
  imageSrc
}: { 
  title: string; 
  description: string;
  color?: string;
  position: string;
  textColor?: string;
  imageSrc?: string;
}) => {
  // If an image source is provided, use the image-based card
  if (imageSrc) {
    return (
      <div className={`absolute ${position} z-30 max-w-[110px] md:block hidden animate-float`} style={{
        animationDuration: `${7 + Math.random() * 5}s`,
        transform: `translateX(${Math.random() * 20 - 10}px) translateY(${Math.random() * 30 - 15}px)`
      }}>
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    );
  }
  
  // Otherwise use the text-based card design
  return (
    <div className={`absolute ${position} rounded-lg p-4 shadow-lg ${color} ${textColor} z-30 max-w-[110px] md:block hidden animate-float`} style={{
      animationDuration: `${7 + Math.random() * 4}s`,
      transform: `translateX(${Math.random() * 20 - 10}px) translateY(${Math.random() * 30 - 15}px)`
    }}>
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

// Mobile feature grid component for small screens
const MobileFeatureGrid = () => {
  const features = [
    {
      imageSrc: "/lovable-uploads/2d2165ef-6a82-45e6-bcf2-eb7ef2a74b98.png",
      title: "AI powered labels",
      description: "to instinctively sort your mails and files"
    },
    {
      imageSrc: "/lovable-uploads/e0dc382a-602d-4bd1-b550-f28f415314ce.png",
      title: "Built in drive",
      description: "for your attachments - no more back and forth!"
    },
    {
      imageSrc: "/lovable-uploads/ce4e62fe-3a92-48cd-aecb-98934d1d8176.png",
      title: "Simplified unsubscribe",
      description: "to spam"
    },
    {
      imageSrc: "/lovable-uploads/9ec40265-ecf7-4565-b5bf-dd2d2125cf02.png",
      title: "Instinctive shortcuts",
      description: "to navigate, answer, sort, send in no time"
    },
    {
      imageSrc: "/lovable-uploads/770e9e41-3db3-4a4d-bf87-be5aea433b50.png",
      title: "Use your own email adress",
      description: "or create your Zest email"
    },
    {
      imageSrc: "/lovable-uploads/e2f4c982-70d5-4310-b5ac-3c8070669440.png",
      title: "AI agent",
      description: "to write, answer, correct with the touch of a key"
    },
    {
      imageSrc: "/lovable-uploads/61b3e7ef-0c2d-4bac-9c93-b580e5eaecac.png",
      title: "File preview, summary and edit",
      description: "directly in your mail"
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-4 mb-8 md:hidden">
      {features.map((feature, index) => (
        <div key={index} className="bg-white p-3 rounded-lg shadow-md">
          <img 
            src={feature.imageSrc} 
            alt={feature.title} 
            className="w-16 h-auto mx-auto mb-2"
          />
          <h3 className="font-bold text-sm text-center">{feature.title}</h3>
          <p className="text-xs text-center text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

const EmailInterface = () => {
  return (
    <section className="py-12 md:py-16 relative bg-gradient-to-b from-lemon-50 to-yellow-50">
      <div className="container relative max-w-6xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Work on your emails, not in them</h2>
          <p className="text-lg md:text-xl text-gray-600">
            Experience how Zest makes email seamless and enjoyable with powerful AI features
          </p>
        </div>
        
        {/* Feature cards around the email interface - using the provided images */}
        <FeatureCard 
          imageSrc="/lovable-uploads/2d2165ef-6a82-45e6-bcf2-eb7ef2a74b98.png"
          title="AI powered labels" 
          description="to instinctively sort your mails and files"
          position="top-[15%] left-0 -translate-x-1/3 lg:-translate-x-1/4"
        />
        
        <FeatureCard 
          imageSrc="/lovable-uploads/e0dc382a-602d-4bd1-b550-f28f415314ce.png"
          title="Built in drive" 
          description="for your attachments - no more back and forth!"
          position="top-[40%] left-0 -translate-x-1/3 lg:-translate-x-1/4"
        />
        
        <FeatureCard 
          imageSrc="/lovable-uploads/ce4e62fe-3a92-48cd-aecb-98934d1d8176.png"
          title="Simplified unsubscribe" 
          description="to spam"
          position="bottom-[30%] left-0 -translate-x-1/3 lg:-translate-x-1/4"
        />
        
        <FeatureCard 
          imageSrc="/lovable-uploads/9ec40265-ecf7-4565-b5bf-dd2d2125cf02.png"
          title="Instinctive shortcuts" 
          description="to navigate, answer, sort, send in no time"
          position="top-[20%] right-0 translate-x-1/3 lg:translate-x-1/4"
        />
        
        <FeatureCard 
          imageSrc="/lovable-uploads/770e9e41-3db3-4a4d-bf87-be5aea433b50.png"
          title="Use your own email adress" 
          description="or create your Zest email"
          position="top-[45%] right-0 translate-x-1/3 lg:translate-x-1/4"
        />
        
        <FeatureCard 
          imageSrc="/lovable-uploads/e2f4c982-70d5-4310-b5ac-3c8070669440.png"
          title="AI agent" 
          description="to write, answer, correct with the touch of a key"
          position="bottom-[35%] right-0 translate-x-1/3 lg:translate-x-1/4"
        />
        
        <FeatureCard 
          imageSrc="/lovable-uploads/61b3e7ef-0c2d-4bac-9c93-b580e5eaecac.png"
          title="File preview, summary and edit" 
          description="directly in your mail"
          position="bottom-[15%] right-0 translate-x-1/3 lg:translate-x-1/4"
        />
        
        {/* Mobile grid view of features - only shown on small screens */}
        <MobileFeatureGrid />
        
        {/* Email interface screenshot - updated with new image */}
        <div className="relative max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl">
          <img 
            src="/lovable-uploads/214b2fbf-805d-4683-ba89-a22bcb850cf5.png" 
            alt="Email interface screenshot" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default EmailInterface;
