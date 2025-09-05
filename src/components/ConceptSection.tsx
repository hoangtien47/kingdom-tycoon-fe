'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const ConceptSection = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const carouselPages = [
    {
      title: "Game Concept",
      subtitle: "The concept of Kingdom was sketched out in 2025 and slow-cooked over months of iteration. It was born out of love for management RPGs, the frustration of shallow base-building titles, and an unhealthy obsession with turning monster-slaying into a lifestyle.",
      features: [
        {
          title: "Architecture",
          description: "Shows town → kingdom growth, core of tycoon.",
          image: "/images/town1.png",
          imageAlt: "Building"
        },
        {
          title: "Hunters",
          description: "Player's identity, gear visible, drive progression.",
          image: "/images/character1.png", 
          imageAlt: "Hunter Character"
        },
        {
          title: "Monsters",
          description: "Iconic threats, clear difficulty, core challenge.",
          image: "/images/zombie1.png",
          imageAlt: "Monster"
        },
        {
          title: "Items & UI",
          description: "Rewarding loot visuals, simple interface for clarity.",
          image: "/images/ui1.png",
          imageAlt: "Monster"
        }
      ]
    },
    {
      title: "Gameplay",
      subtitle: "Immersive and engaging gameplay mechanics.",
      features: [
        {
          title: "Hunting",
          description: "Hero auto hunts in assigned zone, gains EXP & levels up.",
          image: "/images/iris_attack.png",
          imageAlt: "Hunting"
        },
        {
          title: "Forging",
          description: "Forge powerful equipment and upgrade your gear.",
          image: "/images/irisblacksmith.png",
          imageAlt: "Forging"
        },
        {
          title: "Leveling",
          description: "Clear progression paths and character development with visual feedback on growth.",
          image: "/images/iris_cover.png",
          imageAlt: "Leveling"
        },
        {
          title: "Exploring",
          description: "Discover new territories, gather resources, and uncover hidden secrets.",
          image: "/images/land_game.png",
          imageAlt: "Exploring"
        }
      ]
    },
    {
      title: "Map", 
      subtitle: "Explore the vast kingdom realm and plan your strategic expansion across diverse territories.",
      features: [
        {
          title: "Kingdom Map",
          description: "Interactive kingdom map showing territories, resources, and strategic locations.",
          image: "/images/map.png",
          imageAlt: "Kingdom Map",
          isMainMap: true
        }
      ]
    }
  ];

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % carouselPages.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + carouselPages.length) % carouselPages.length);
  };

  return (
    <section id="concept" className="py-20 concept-bg relative min-h-screen">
      {/* <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black/60"></div> */}
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Page Indicators */}
          <div className="flex justify-center mb-8 space-x-4">
            {carouselPages.map((page, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`px-4 py-2 text-sm font-bold transition-all duration-300 ${
                  index === currentPage
                    ? 'text-yellow-400 border-b-2 border-yellow-400'
                    : 'text-gray-400 hover:text-yellow-300'
                }`}
              >
                {page.title}
              </button>
            ))}
          </div>

          {/* Carousel Content */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {carouselPages.map((page, pageIndex) => (
                <div key={pageIndex} className="w-full flex-shrink-0">
                  {/* Page Header */}
                  <div className="text-left mb-12 max-w-4xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-wider">
                      {page.title}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                      {page.subtitle}
                    </p>
                  </div>
                  
                  {/* Features Grid */}
                  {page.title === "Map" ? (
                    /* Special Map Display */
                    <div className="flex justify-center mb-8">
                      <div className="relative max-w-3xl w-full">
                        <div className="text-center space-y-6">
                          {/* Map Image with 3D Hover Effect */}
                          <div className="flex justify-center mb-6">
                            <div className="relative">
                              <Image
                                src="/images/map.png"
                                alt="Kingdom Map"
                                width={600}
                                height={500}
                                className="w-full h-auto object-contain pixelated rounded-lg shadow-2xl"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Regular Features Grid */
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
                      {page.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex}
                          className="text-center space-y-4"
                        >
                          {/* Feature Image */}
                          <div className="flex justify-center mb-6">
                            <div className="w-32 h-32 md:w-40 md:h-40 relative">
                              {feature.image ? (
                                <Image
                                  src={feature.image}
                                  alt={feature.imageAlt}
                                  width={160}
                                  height={160}
                                  className="w-full h-full object-contain pixelated"
                                />
                              ) : (
                                <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center">
                                  <span className="text-4xl">🎮</span>
                                </div>
                              )}
                            </div>
                          </div>
                          
                          {/* Feature Title */}
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                            {feature.title}
                          </h3>
                          
                          {/* Feature Description */}
                          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xs mx-auto">
                            {feature.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevPage}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-gray-800/80 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-10"
            aria-label="Previous page"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextPage}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-gray-800/80 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-10"
            aria-label="Next page"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Bottom indicator dots */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {carouselPages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentPage ? 'bg-yellow-400' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-right mt-12">
          <p className="text-gray-500 text-sm">SHURF CORP</p>
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;
