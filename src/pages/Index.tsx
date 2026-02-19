import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturedTemplate from "@/components/FeaturedTemplate";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FAQSection from "@/components/FAQSection";
import CTAFooterSection from "@/components/CTAFooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <CategoriesSection />
        <FeaturedTemplate />
        <TestimonialsSection />
        <AboutSection />
        <HowItWorksSection />
        <FAQSection />
        <CTAFooterSection />
      </main>
    </div>
  );
};

export default Index;
