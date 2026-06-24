import HeroSection from "@/components/sections/hero-section";
import PartnersMarquee from "@/components/sections/partners-marquee";
import FeaturesSection from "@/components/sections/features-section";
import FeaturesShowcaseSection from "@/components/sections/features-showcase-section";
import HowItWorksSection from "@/components/sections/how-it-works-section";
import LoanTypesSection from "@/components/sections/loan-types-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import FAQSection from "@/components/sections/faq-section";
import CTASection from "@/components/sections/cta-section";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PartnersMarquee />
      <FeaturesSection />
      <FeaturesShowcaseSection />
      <div id="how-it-works">
        <HowItWorksSection />
      </div>
      <LoanTypesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
