
interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  bgColor: string;
}

const FeatureCard = ({ title, description, imageSrc, bgColor }: FeatureCardProps) => (
  <div className={`rounded-xl overflow-hidden shadow-lg ${bgColor} text-white p-6`}>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-white/90 mb-4 text-sm">{description}</p>
    <img src={imageSrc} alt={title} className="w-full h-auto" />
  </div>
);

const FeatureCards = () => {
  const features = [
    {
      title: "AI powered labels",
      description: "to instinctively sort your mails and files",
      imageSrc: "/lovable-uploads/3d197393-1bd7-4eba-87ac-cbc53a7772af.png",
      bgColor: "bg-purple-600"
    },
    {
      title: "AI agent",
      description: "to write, answer, correct with the touch of a key",
      imageSrc: "/lovable-uploads/d2dd5e4e-6fc5-4eae-b0fb-7431063f6f18.png",
      bgColor: "bg-purple-400"
    },
    {
      title: "Built in drive",
      description: "for your attachments - no more back and forth!",
      imageSrc: "/lovable-uploads/d0928468-1adc-4b4f-a8ac-e11f7bb91a21.png",
      bgColor: "bg-purple-400"
    },
    {
      title: "Instinctive shortcuts",
      description: "to navigate, answer, sort, send in no time",
      imageSrc: "/lovable-uploads/c663818e-7422-42ba-b924-1fe838368f51.png",
      bgColor: "bg-purple-600"
    },
    {
      title: "Use your own email address",
      description: "or create your Zest email",
      imageSrc: "/lovable-uploads/16cfe136-b61d-449c-97fb-b4774135de2c.png",
      bgColor: "bg-purple-400"
    },
    {
      title: "Simplified unsubscribe",
      description: "to spam",
      imageSrc: "/lovable-uploads/1e79926d-4df6-4f1c-992b-613462adadd0.png",
      bgColor: "bg-purple-600"
    },
    {
      title: "File preview, summary and edit",
      description: "directly in your mail",
      imageSrc: "/lovable-uploads/c88fa2b6-a30b-4dce-bb73-150e0cd66eef.png",
      bgColor: "bg-purple-400"
    },
    {
      title: "AI Mail Navigation",
      description: "with priority handling and smart suggestions",
      imageSrc: "/lovable-uploads/9bbe414c-63c7-4d3e-9f5e-4de2bc50a0ac.png", 
      bgColor: "bg-purple-600"
    }
  ];

  return (
    <section className="py-16">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
