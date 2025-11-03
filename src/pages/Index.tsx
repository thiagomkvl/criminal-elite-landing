import Hero from "@/components/Hero";
import AboutFounder from "@/components/AboutFounder";
import CasesSection from "@/components/CasesSection";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import StickyBar from "@/components/StickyBar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutFounder />
      <CasesSection />
      <HowItWorks />
      <Benefits />
      <Results />
      <Testimonials />
      <Pricing />
      <FAQ />
      
      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025. Todos os direitos reservados. Este site não é afiliado ao Facebook™ ou Meta™.
          </p>
        </div>
      </footer>

      <StickyBar />
    </div>
  );
};

export default Index;
