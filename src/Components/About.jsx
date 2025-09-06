import React from "react";
import { Award, Users2, Globe, Heart } from "lucide-react";

const stats = [
  { number: "150+", label: "Projects Completed" },
  { number: "50+", label: "Happy Clients" },
  { number: "25+", label: "Awards Won" },
  { number: "10+", label: "Years Experience" }
];

const values = [
  {
    icon: Heart,
    title: "Passion-Driven",
    description: "We believe great design comes from genuine passion and dedication to craft."
  },
  {
    icon: Users2,
    title: "Collaborative",
    description: "Our best work emerges through close partnership with our clients."
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "We design with cultural awareness and international sensibility."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for perfection in every detail of our creative process."
  }
];

export default function About() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-8">
              About <span className="text-amber-500">SEK Design</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Founded in 2014, SEK Design has been at the forefront of creative innovation, 
                helping brands tell their stories through compelling visual experiences.
              </p>
              <p>
                Our team of talented designers, strategists, and developers work collaboratively 
                to create solutions that not only look beautiful but also drive real business results.
              </p>
              <p>
                We believe that good design is invisible—it simply works. Great design, however, 
                creates emotional connections and memorable experiences that last.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop&crop=center" 
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-32 bg-amber-500 rounded-2xl flex items-center justify-center">
                <div className="text-center text-black">
                  <div className="text-2xl font-light">Creative</div>
                  <div className="text-xs font-medium tracking-wide">EXCELLENCE</div>
                </div>
              </div>
            </div>
            <div className="space-y-6 mt-12">
              <div className="h-32 bg-gray-900 rounded-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-2xl font-light">Strategic</div>
                  <div className="text-xs font-medium tracking-wide">THINKING</div>
                </div>
              </div>
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop&crop=center" 
                  alt="Creative process"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-20 p-12 bg-gray-50 rounded-3xl">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-light mb-2">{stat.number}</div>
              <div className="text-sm font-medium text-gray-600 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-medium mb-4 tracking-wide">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}