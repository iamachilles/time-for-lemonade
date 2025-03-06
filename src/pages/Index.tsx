
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EmailInterface from "@/components/EmailInterface";
import Divider from "@/components/Divider";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <main className="bg-lemon-50">
        <Hero />
        <EmailInterface />
        <Divider />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
