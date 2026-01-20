import { Lightbulb, Globe, Users } from "lucide-react";

const highlights = [
  {
    icon: Lightbulb,
    title: "Materials Innovation",
    description: "Pioneering nano-engineered silicon structures",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Enabling the clean energy transition",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Led by world-class scientists and engineers",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding dot-grid-bg">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 mb-8">Who We Are</h2>
          
          <div className="space-y-6 text-body mb-12">
            <p>
              <strong className="text-foreground">Element100 Technology</strong> is an advanced materials company 
              pioneering pure silicon anode solutions for next-generation lithium-ion batteries. Our proprietary 
              technology overcomes the traditional challenges of silicon anodes—including volume expansion and 
              cycle degradation—to deliver transformative improvements in energy density and performance.
            </p>
            <p>
              Founded by materials scientists and electrochemistry experts, we're committed to accelerating 
              the global transition to clean energy through breakthrough battery innovations.
            </p>
            <p>
              Our pure silicon anode technology represents years of research and development in nano-structuring, 
              surface engineering, and advanced manufacturing processes. We work with leading battery manufacturers, 
              automotive companies, and energy storage providers to bring this technology to market.
            </p>
            <p>
              With applications ranging from electric vehicles to grid-scale energy storage, Element100 is 
              powering the future of sustainable energy systems with materials that enable longer range, 
              faster charging, and greater efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="card-glass flex flex-col items-start">
                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
