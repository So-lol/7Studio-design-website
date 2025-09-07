import React, { useState, useEffect } from "react";
import { ArrowDown, Play } from "lucide-react";

export default function Hero({ onScrollClick }) {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrolled = window.scrollY;
      setShowScrollIndicator(scrolled < heroHeight * 0.5);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="h-fit bg-gradient-to-b from-gray-50 to-white flex items-center pt-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-light leading-tight tracking-tight">
                <span className="block">We craft</span>
                <span className="block text-amber-500">extraordinary</span>
                <span className="block">experiences</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Through strategic design thinking and innovative solutions, we transform brands and create digital experiences that resonate with your audience.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
              <button className="w-full sm:w-auto bg-black text-white px-8 py-4 text-sm font-medium tracking-wide hover:bg-gray-900 transition-colors duration-300">
                VIEW OUR WORK
              </button>
              <button className="w-full sm:w-auto flex items-center justify-center gap-3 text-gray-900 hover:text-amber-500 transition-colors duration-300">  
                <div className="w-12 h-12 border-2 border-current rounded-full flex items-center justify-center">
                  <Play className="w-5 h-5 fill-current" />
                </div>
                <span className="font-medium tracking-wide">WATCH REEL</span>
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=800&fit=crop&crop=center" 
                alt="Creative workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-amber-500 rounded-2xl flex items-center justify-center">
              <div className="text-center text-black">
                <div className="text-2xl font-light">10+</div>
                <div className="text-xs font-medium tracking-wide">YEARS</div>
              </div>
            </div>
          </div>
        </div>

      {showScrollIndicator && (
        <div 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-18 flex flex-col items-center cursor-pointer"
          onClick={onScrollClick}
        >
          <ArrowDown className="w-8 h-8 text-gray-600 animate-bounce" />
          <small className="text-gray-600 mt-2 uppercase">SCROLL DOWN</small>
        </div>
      )}    
      </div>
    </section>
  );
}
