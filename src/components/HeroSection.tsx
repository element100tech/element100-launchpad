import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32 gradient-subtle">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium text-primary mb-4 animate-fade-in">
            Next-Generation Battery Technology
          </p>
          <h1 className="heading-1 mb-6 animate-fade-in" style={{ animationDelay: "0.05s" }}>
            100% Silicium Anodes
          </h1>
          <p className="text-body max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Pioneering high-performance silicon anode technology for the next generation 
            of energy storage solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button
              size="lg"
              onClick={() => handleScroll("#inquiries")}
              className="gap-2"
            >
              Get in Touch
              <ArrowRight size={18} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => handleScroll("#about")}
            >
              Learn More
            </Button>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="text-center p-6 card-elevated">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">3,200 mAh/g</div>
              <div className="text-small">Specific Capacity (C/20 rate)</div>
            </div>
            <div className="text-center p-6 card-elevated">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">94%</div>
              <div className="text-small">Coulombic Efficiency (1st cycle)</div>
            </div>
            <div className="text-center p-6 card-elevated">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">76 mAh/cm²</div>
              <div className="text-small">Capacity at 24 µm thickness</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
