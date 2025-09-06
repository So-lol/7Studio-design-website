import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900">
              SEK <span className="text-amber-500">DESIGN</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-900 hover:text-yellow-500 px-3 py-2 text-sm font-medium uppercase tracking-wide">
                HOME
              </a>
              <a href="#services" className="text-gray-600 hover:text-yellow-500 px-3 py-2 text-sm font-medium uppercase tracking-wide">
                SERVICES
              </a>
              <a href="#portfolio" className="text-gray-600 hover:text-yellow-500 px-3 py-2 text-sm font-medium uppercase tracking-wide">
                PORTFOLIO
              </a>
              <a href="#about" className="text-gray-600 hover:text-yellow-500 px-3 py-2 text-sm font-medium uppercase tracking-wide">
                ABOUT
              </a>
              <a href="#contact" className="text-gray-600 hover:text-yellow-500 px-3 py-2 text-sm font-medium uppercase tracking-wide">
                CONTACT
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-gray-50 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
            <a href="#home" className="text-gray-900 hover:text-yellow-500 block px-3 py-2 text-base font-medium uppercase">
              HOME
            </a>
            <a href="#services" className="text-gray-600 hover:text-yellow-500 block px-3 py-2 text-base font-medium uppercase">
              SERVICES
            </a>
            <a href="#portfolio" className="text-gray-600 hover:text-yellow-500 block px-3 py-2 text-base font-medium uppercase">
              PORTFOLIO
            </a>
            <a href="#about" className="text-gray-600 hover:text-yellow-500 block px-3 py-2 text-base font-medium uppercase">
              ABOUT
            </a>
            <a href="#contact" className="text-gray-600 hover:text-yellow-500 block px-3 py-2 text-base font-medium uppercase">
              CONTACT
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
