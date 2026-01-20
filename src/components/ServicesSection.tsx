const capabilities = [
  {
    number: "01",
    title: "Advanced Materials Development",
    description: "Proprietary silicon anode formulations with nano-engineered architectures that manage volume expansion and maintain structural integrity through thousands of charge cycles.",
  },
  {
    number: "02",
    title: "Scalable Manufacturing",
    description: "Production-ready processes designed for commercial deployment, with quality control systems ensuring consistent performance and reliability at scale.",
  },
  {
    number: "03",
    title: "Custom Integration Solutions",
    description: "Collaborative development programs to integrate our silicon anode technology into existing battery manufacturing lines and optimize for specific application requirements.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding dot-grid-bg">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 mb-12">Our Capabilities</h2>

          <div className="space-y-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="card-glass flex gap-6">
                <div className="text-4xl font-extrabold text-foreground/30 shrink-0">
                  {capability.number}
                </div>
                <div>
                  <h3 className="heading-3 mb-3">{capability.title}</h3>
                  <p className="text-body">{capability.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
