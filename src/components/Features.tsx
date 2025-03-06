
import { LucideIcon, Mail, Clock, Brain, Shield, Zap } from "lucide-react";

interface FeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const FeatureCard = ({ icon: Icon, title, description, color }: FeatureProps) => (
  <div className="feature-card">
    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${color}`}>
      <Icon size={24} className="text-white" />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: Mail,
      title: "Smart Email Summarization",
      description: "AI summarizes your emails so you only read what matters.",
      color: "bg-purple-500"
    },
    {
      icon: Brain,
      title: "AI Response Generator",
      description: "Let AI craft perfect responses based on your style.",
      color: "bg-lime-500"
    },
    {
      icon: Clock,
      title: "Time-Based Batching",
      description: "Get emails delivered in batches when it works for you.",
      color: "bg-lemon-500"
    },
    {
      icon: Shield,
      title: "Spam & Distraction Shield",
      description: "Advanced filtering keeps your inbox clean and relevant.",
      color: "bg-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-white/40 backdrop-blur-sm">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Features That Give You Time Back</h2>
          <p className="text-xl text-gray-600">
            Our AI-powered tools handle the tedious email work, so you can enjoy more of what matters.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-lemon-200 rounded-full text-gray-800 animate-pulse">
            <Zap size={18} />
            <span className="font-medium">AI powered. Human approved.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
