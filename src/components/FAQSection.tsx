
import { useState } from "react";
import { HelpCircle, ChevronDown, Shield, Mail, Layers } from "lucide-react";

type FAQItemProps = {
  question: string;
  answer: React.ReactNode;
  icon: React.ReactNode;
  isOpen: boolean;
  toggleOpen: () => void;
};

const FAQItem = ({ question, answer, icon, isOpen, toggleOpen }: FAQItemProps) => {
  return (
    <div className="glass-card border-white/30 overflow-hidden transition-all duration-300">
      <div 
        className="flex items-start gap-4 p-6 cursor-pointer"
        onClick={toggleOpen}
      >
        <div className="text-lime-600 mt-1 flex-shrink-0">
          {icon}
        </div>
        <div className="flex-grow">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-800">{question}</h3>
            <ChevronDown 
              className={`text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
            />
          </div>
          
          <div className={`mt-4 text-gray-600 text-lg transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const faqs = [
    {
      question: "How does Zest work?",
      answer: (
        <>
          <p className="mb-4">
            Zest uses AI to help you write emails and organize your inbox. It analyzes your messages and suggests responses based on context.
          </p>
          <p>
            You get a @zest.email address and can connect your existing email accounts to manage everything in one place.
          </p>
        </>
      ),
      icon: <Mail className="h-6 w-6" />
    },
    {
      question: "Can I connect my existing email?",
      answer: (
        <>
          <p className="mb-4">
            Yes. Zest works with Gmail, Outlook, Yahoo, and OVH.
          </p>
          <p>
            We also support IMAP and SMTP protocols, as well as email forwarding.
          </p>
        </>
      ),
      icon: <Layers className="h-6 w-6" />
    },
    {
      question: "Can I still use my own email address?",
      answer: (
        <>
          <p className="mb-4">
            Yes. You can connect multiple email accounts to Zest and use them together.
          </p>
          <p>
            When you connect your Gmail account, for example, you keep access to your emails, contacts, and calendar. Zest simply provides an additional interface to manage them.
          </p>
        </>
      ),
      icon: <Mail className="h-6 w-6" />
    },
    {
      question: "Is my data secure?",
      answer: (
        <>
          <p className="mb-4">
            We conduct security audits each year.
          </p>
          <p className="mb-4">
            Your data is encrypted and stored on servers in the European Union.
          </p>
          <p>
            We do not sell your data. We operate on a subscription model only.
          </p>
        </>
      ),
      icon: <Shield className="h-6 w-6" />
    }
  ];

  return (
    <section className="py-16 bg-lemon-50 relative">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <HelpCircle className="h-12 w-12 text-purple-500" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about Zest and how it transforms your email experience
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                icon={faq.icon}
                isOpen={openIndex === index}
                toggleOpen={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative lemon image */}
      <div className="absolute -bottom-16 -right-16 w-40 h-40 opacity-20 hidden md:block">
        <img 
          src="/lovable-uploads/2f91b7b3-684e-4a99-83e5-4fbac924113a.png" 
          alt="Decorative lemon" 
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default FAQSection;
