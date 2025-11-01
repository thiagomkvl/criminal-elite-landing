import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const StickyBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling 300px and hide on mobile when near bottom
      const scrolled = window.scrollY > 300;
      const nearBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 100;
      setIsVisible(scrolled && !nearBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-background/95 backdrop-blur-md border-t border-border shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <Button 
            variant="hero" 
            size="lg" 
            className="w-full"
            asChild
          >
            <a href="#condicao">Quero essa estrutura</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyBar;
