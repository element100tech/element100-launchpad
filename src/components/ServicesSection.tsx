import { Code, Database, Cloud, Lightbulb, Shield, Zap } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored applications built to meet your specific business requirements using modern technologies.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services to optimize your operations.",
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description: "Transform your data into actionable insights with our analytics and data engineering services.",
  },
  {
    icon: Lightbulb,
    title: "Technology Consulting",
    description: "Strategic guidance to help you make informed technology decisions for your business.",
  },
  {
    icon: Shield,
    title: "Security Solutions",
    description: "Protect your digital assets with comprehensive security assessments and implementations.",
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Streamline workflows and increase efficiency through intelligent automation.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Our Services</h2>
          <p className="text-body max-w-2xl mx-auto">
            We offer comprehensive technology services designed to help your business 
            grow and succeed in today's competitive landscape.
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
