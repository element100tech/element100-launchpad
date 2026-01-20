const AboutSection = () => {
  return (
    <section id="about" className="section-padding gradient-subtle">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-2 mb-6">About Element100</h2>
          <p className="text-body mb-6">
            Element100 Technology is a forward-thinking technology company dedicated to 
            building solutions that make a difference. We combine technical expertise 
            with strategic thinking to help organizations navigate the complexities of 
            modern technology.
          </p>
          <p className="text-body">
            Our mission is to deliver high-quality, scalable solutions that empower 
            businesses to achieve their goals. We believe in clean code, transparent 
            communication, and building lasting partnerships with our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-small">Client Focused</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">Quality</div>
            <div className="text-small">First Approach</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">Modern</div>
            <div className="text-small">Technology Stack</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
