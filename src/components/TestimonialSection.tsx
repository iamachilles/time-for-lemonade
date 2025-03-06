
import { Separator } from "@/components/ui/separator";

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  image: string;
}

const TestimonialCard = ({ quote, name, title, image }: TestimonialProps) => (
  <div className="glass-card p-8 rounded-2xl">
    <div className="flex flex-col h-full">
      <div className="mb-6 text-2xl text-lime-500">❝</div>
      <p className="text-gray-700 italic mb-6 flex-grow">{quote}</p>
      <Separator className="mb-6" />
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-gray-500 text-sm">{title}</p>
        </div>
      </div>
    </div>
  </div>
);

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "Since using this email client, I've reclaimed 5 hours per week. Now I actually have time to enjoy my lunch break.",
      name: "Sarah Johnson",
      title: "Marketing Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
      quote: "The AI responses are surprisingly good. They sound just like me, but I didn't have to spend time writing them.",
      name: "Michael Chen",
      title: "Product Manager",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
      quote: "I never thought I'd look forward to checking my email. The notification control changed my relationship with work.",
      name: "Tasha Rodriguez",
      title: "UX Designer",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&q=80&w=100&h=100"
    }
  ];

  return (
    <section className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What People Are Saying</h2>
          <p className="text-xl text-gray-600">
            People are getting back to what matters in their lives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
