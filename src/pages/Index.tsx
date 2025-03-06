
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import EmailInterface from "@/components/EmailInterface";
import FeatureCards from "@/components/FeatureCards";
import RelaxingLemons from "@/components/RelaxingLemons";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <EmailInterface />
        <FeatureCards />
        <RelaxingLemons />
        <Features />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
