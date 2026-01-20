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
    <section id="home" className="pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32 dot-grid-bg min-h-screen flex items-center">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-1 mb-6 animate-fade-in">
            We Build 100% Silicon Anodes
          </h1>
          <p className="text-body max-w-3xl mx-auto mb-10 animate-fade-in text-lg sm:text-xl" style={{ animationDelay: "0.1s" }}>
            Pioneering the future of energy storage with advanced pure silicon anode technology 
            that delivers unprecedented performance for next-generation lithium-ion batteries.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in mb-16" style={{ animationDelay: "0.2s" }}>
            <Button
              size="lg"
              onClick={() => handleScroll("#inquiries")}
              className="gap-2 bg-white text-primary-foreground hover:bg-white/90 font-semibold px-8"
            >
              Get in Touch
              <ArrowRight size={18} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => handleScroll("#about")}
              className="border-white/30 text-foreground hover:bg-white/10 font-semibold px-8"
            >
              Learn More
            </Button>
          </div>

          {/* Feature Card */}
          <div className="card-glass p-8 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <p className="text-sm font-medium text-foreground/70 mb-2">Pure Silicon Technology</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
              <div className="text-center">
                <p className="text-sm text-foreground/70 mb-2">Specific Capacity</p>
                <div className="text-4xl sm:text-5xl font-extrabold text-foreground mb-2">3,200</div>
                <div className="text-sm text-foreground/70">mAh/g (C/20 rate)</div>
              </div>
              <div className="text-center">
                <p className="text-sm text-foreground/70 mb-2">Coulombic Efficiency</p>
                <div className="text-4xl sm:text-5xl font-extrabold text-foreground mb-2">94%</div>
                <div className="text-sm text-foreground/70">First Cycle Efficiency</div>
              </div>
              <div className="text-center">
                <p className="text-sm text-foreground/70 mb-2">Areal Capacity</p>
                <div className="text-4xl sm:text-5xl font-extrabold text-foreground mb-2">76</div>
                <div className="text-sm text-foreground/70">mAh/cm² @ 24 µm</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
