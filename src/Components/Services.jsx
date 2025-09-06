import React from "react";
import { Palette, Monitor, Zap, Users } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Complete brand development from concept to execution, creating memorable identities that stand out.",
    features: ["Logo Design", "Visual Guidelines", "Brand Strategy", "Print Materials"]
  },
  {
    icon: Monitor,
    title: "Web Design",
    description: "Responsive, user-centric websites that combine beautiful aesthetics with seamless functionality.",
    features: ["UI/UX Design", "Responsive Development", "E-commerce", "CMS Integration"]
  },
  {
    icon: Zap,
    title: "Digital Strategy",
    description: "Strategic planning and execution to maximize your digital presence and business growth.",
    features: ["Market Research", "User Analytics", "Growth Strategy", "Performance Optimization"]
  },
  {
    icon: Users,
    title: "Consultation",
    description: "Expert guidance and creative direction to elevate your brand and achieve your business goals.",
    features: ["Design Audit", "Creative Direction", "Team Training", "Ongoing Support"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
            Our <span className="text-amber-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We offer a comprehensive suite of design services to help your brand thrive in the digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-gray-50 p-12 rounded-3xl hover:bg-gray-100 transition-colors duration-500">
                <div className="mb-8">
                  <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-medium mb-4 tracking-wide">{service.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">{service.description}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="text-sm font-medium text-gray-800 bg-white px-4 py-2 rounded-lg">
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}