const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-2 mb-6">About Element100</h2>
          <p className="text-body mb-6">
            Element100 Technology is at the forefront of silicon anode innovation, 
            developing breakthrough battery materials that deliver unprecedented 
            energy density and performance.
          </p>
          <p className="text-body">
            Our proprietary 100% silicium anode technology represents a paradigm shift 
            in energy storage, offering significantly higher capacity compared to 
            traditional graphite anodes while maintaining excellent cycle stability 
            and efficiency.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center card-elevated">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-small">Silicon Anode</div>
          </div>
          <div className="text-center card-elevated">
            <div className="text-4xl font-bold text-primary mb-2">10x</div>
            <div className="text-small">Higher Capacity vs Graphite</div>
          </div>
          <div className="text-center card-elevated">
            <div className="text-4xl font-bold text-primary mb-2">Next-Gen</div>
            <div className="text-small">Energy Storage</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
