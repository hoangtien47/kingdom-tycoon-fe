import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-bg relative">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-6 text-center relative z-10 pt-80">
        <div className="animate-fade-in-up">
          {/* <h1 className="text-6xl md:text-8xl font-fantasy font-bold text-white mb-6">
            Tycoon Kingdom
          </h1> */}
          {/* <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            From ashes of ruin, a new kingdom rises.
          </p> */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Play Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
