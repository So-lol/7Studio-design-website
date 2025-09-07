import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold">
              SEK <span className="text-amber-500">DESIGN</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-900 hover:text-amber-500 px-3 py-2 text-sm font-medium transition-colors duration-300"
              >
                HOME
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-900 hover:text-amber-500 px-3 py-2 text-sm font-medium transition-colors duration-300"
              >
                SERVICES
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-gray-900 hover:text-amber-500 px-3 py-2 text-sm font-medium transition-colors duration-300"
              >
                PORTFOLIO
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-900 hover:text-amber-500 px-3 py-2 text-sm font-medium transition-colors duration-300"
              >
                ABOUT
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-900 hover:text-amber-500 px-3 py-2 text-sm font-medium transition-colors duration-300"
              >
                CONTACT
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-gray-50 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <button
              onClick={() => scrollToSection('home')}
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-amber-500 w-full text-left"
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-amber-500 w-full text-left"
            >
              SERVICES
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-amber-500 w-full text-left"
            >
              PORTFOLIO
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-amber-500 w-full text-left"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-amber-500 w-full text-left"
            >
              CONTACT
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
