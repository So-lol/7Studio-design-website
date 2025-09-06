import React from "react";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-light tracking-wide">
              <span className="text-black">SEK</span>
              <span className="text-amber-500 ml-1">DESIGN</span>
            </div>
            
            <div className="hidden md:flex space-x-12 text-sm font-medium tracking-wide">
              <a href="#home" className="text-gray-900 hover:text-amber-500 transition-colors duration-300">HOME</a>
              <a href="#services" className="text-gray-900 hover:text-amber-500 transition-colors duration-300">SERVICES</a>
              <a href="#portfolio" className="text-gray-900 hover:text-amber-500 transition-colors duration-300">PORTFOLIO</a>
              <a href="#about" className="text-gray-900 hover:text-amber-500 transition-colors duration-300">ABOUT</a>
              <a href="#contact" className="text-gray-900 hover:text-amber-500 transition-colors duration-300">CONTACT</a>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="space-y-2">
                <div className={`w-6 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-black transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-white border-t border-gray-100 transition-all duration-300 ${isMenuOpen ? 'max-h-64' : 'max-h-0 overflow-hidden'}`}>
          <div className="px-6 py-4 space-y-4 text-sm font-medium tracking-wide">
            <a href="#home" className="block text-gray-900 hover:text-amber-500 transition-colors duration-300">HOME</a>
            <a href="#services" className="block text-gray-900 hover:text-amber-500 transition-colors duration-300">SERVICES</a>
            <a href="#portfolio" className="block text-gray-900 hover:text-amber-500 transition-colors duration-300">PORTFOLIO</a>
            <a href="#about" className="block text-gray-900 hover:text-amber-500 transition-colors duration-300">ABOUT</a>
            <a href="#contact" className="block text-gray-900 hover:text-amber-500 transition-colors duration-300">CONTACT</a>
          </div>
        </div>
      </nav>

      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-3xl font-light tracking-wide mb-6">
                <span className="text-white">SEK</span>
                <span className="text-amber-500 ml-1">DESIGN</span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Crafting exceptional digital experiences through innovative design and strategic thinking.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-lg mb-6 tracking-wide">SERVICES</h4>
              <div className="space-y-3 text-gray-400">
                <p>Brand Identity</p>
                <p>Web Design</p>
                <p>Digital Strategy</p>
                <p>UX/UI Design</p>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-lg mb-6 tracking-wide">CONTACT</h4>
              <div className="space-y-3 text-gray-400">
                <p>hello@sek-design.com</p>
                <p>+1 (555) 123-4567</p>
                <p>New York, NY</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SEK Design. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}