import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Column */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">
            SEK <span className="text-amber-500">DESIGN</span>
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Crafting exceptional digital experiences through innovative design and strategic thinking.
          </p>
        </div>

        {/* Services Column */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-4">SERVICES</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Brand Identity</li>
            <li>Web Design</li>
            <li>Digital Strategy</li>
            <li>UX/UI Design</li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-4">CONTACT</h3>
          <div className="space-y-2 text-gray-300">
            <p>hello@sek-design.com</p>
            <p>+1 (555) 123-4567</p>
            <p>New York, NY</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto pt-8 mt-8 border-t border-gray-800 text-center text-gray-400">
        <p>© 2024 SEK Design. All rights reserved.</p>
      </div>
    </footer>
  );
}