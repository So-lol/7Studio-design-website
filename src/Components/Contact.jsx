import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input"; 
import { Textarea } from "./ui/textarea";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
            Let's Create <span className="text-amber-500">Together</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your vision to life? We'd love to hear about your project and discuss how we can help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-medium mb-8 tracking-wide">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-gray-600">hello@sek-design.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-gray-600">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-gray-600">New York, NY</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl">
              <h4 className="font-medium text-lg mb-4">Project Budget Range</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-gray-50 px-4 py-3 rounded-lg text-center">$5K - $15K</div>
                <div className="bg-gray-50 px-4 py-3 rounded-lg text-center">$15K - $30K</div>
                <div className="bg-gray-50 px-4 py-3 rounded-lg text-center">$30K - $50K</div>
                <div className="bg-gray-50 px-4 py-3 rounded-lg text-center">$50K+</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-12 rounded-3xl">
            <h3 className="text-2xl font-medium mb-8 tracking-wide">Start a Project</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-gray-200 focus:border-amber-500 focus:ring-amber-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-gray-200 focus:border-amber-500 focus:ring-amber-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                <Input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full border-gray-200 focus:border-amber-500 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full border-gray-200 focus:border-amber-500 focus:ring-amber-500"
                  placeholder="Tell us about your project, goals, and timeline..."
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-black text-white hover:bg-gray-900 py-4 text-sm font-medium tracking-wide"
              >
                <Send className="w-4 h-4 mr-2" />
                SEND MESSAGE
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}