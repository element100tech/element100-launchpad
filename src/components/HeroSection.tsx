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
    <section id="home" className="pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="heading-1 mb-6 animate-fade-in">
            Technology Solutions
            <br />
            <span className="text-primary">Built for Tomorrow</span>
          </h1>
          <p className="text-body max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Element100 Technology delivers innovative software and technology consulting 
            services to help businesses thrive in the digital age.
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
              onClick={() => handleScroll("#services")}
            >
              View Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
