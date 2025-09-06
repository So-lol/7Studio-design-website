import React from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Luxe Fashion",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&crop=center",
    description: "Premium fashion brand redesign with focus on luxury user experience."
  },
  {
    title: "TechFlow",
    category: "SaaS Platform",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
    description: "Complete platform redesign for B2B productivity software."
  },
  {
    title: "Urban Spaces",
    category: "Real Estate",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&crop=center",
    description: "Modern real estate platform focusing on urban properties."
  },
  {
    title: "Mindful",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center",
    description: "Mental health app with calming, accessible design approach."
  },
  {
    title: "GreenTech",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop&crop=center",
    description: "Environmental technology company brand and web presence."
  },
  {
    title: "Artisan Co.",
    category: "Craft Business",
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=600&h=400&fit=crop&crop=center",
    description: "Handcrafted goods marketplace with authentic, warm aesthetic."
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
            Selected <span className="text-amber-500">Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A curated collection of our most impactful projects across various industries and creative disciplines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-amber-500 tracking-wide">{project.category}</span>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-amber-500 transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-medium mb-3 tracking-wide">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-black text-white px-8 py-4 text-sm font-medium tracking-wide hover:bg-gray-900 transition-colors duration-300">
            VIEW ALL PROJECTS
          </button>
        </div>
      </div>
    </section>
  );
} 