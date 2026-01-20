import { Zap, Battery, Layers, FlaskConical, Factory, Handshake } from "lucide-react";

const services = [
  {
    icon: Battery,
    title: "High-Capacity Anodes",
    description: "100% silicon anodes delivering up to 3,200 mAh/g specific capacity, far exceeding traditional graphite materials.",
  },
  {
    icon: Zap,
    title: "Superior Efficiency",
    description: "First-cycle coulombic efficiency of 94%, minimizing energy loss and maximizing battery performance.",
  },
  {
    icon: Layers,
    title: "Ultra-Thin Design",
    description: "Achieving 76 mAh/cm² capacity with only 24 µm thickness for compact, high-energy applications.",
  },
  {
    icon: FlaskConical,
    title: "R&D Collaboration",
    description: "Partner with our research team to develop customized silicon anode solutions for your specific applications.",
  },
  {
    icon: Factory,
    title: "Scalable Production",
    description: "Manufacturing processes designed for scalability, from prototype quantities to commercial volumes.",
  },
  {
    icon: Handshake,
    title: "Technology Licensing",
    description: "Flexible licensing arrangements for our proprietary silicon anode technology and manufacturing processes.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding gradient-subtle">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Our Capabilities</h2>
          <p className="text-body max-w-2xl mx-auto">
            We offer comprehensive silicon anode solutions, from materials research 
            to production-ready technology for next-generation batteries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="card-elevated">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="heading-3 mb-2">{service.title}</h3>
              <p className="text-small">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
