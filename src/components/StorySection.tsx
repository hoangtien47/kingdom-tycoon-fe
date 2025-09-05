import React from 'react';
import Image from 'next/image';

const StorySection = () => {
  return (
    <section id="story" className="story2-bg relative min-h-screen">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-fantasy font-bold text-primary-400 mb-8">
                The Game Story
              </h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                    Long ago, a devastating wave of monsters swept across the land, 
                    leaving villages in ruins and kingdoms on the brink of collapse.
                    Hunters were the last hope, 
                    rising from the ashes to fight back against endless hordes 
                    and protect what remained of their world.
                </p>
                <p>
                    Players step into the role of leaders who gather brave hunters, rebuild shattered villages, and reclaim lost territories.
                    From a humble village, every hunt, every victory, and every rebuilt structure brings the realm closer to becoming a prosperous kingdom once again.
                    &ldquo;From ashes of ruin, a new kingdom rises.&rdquo;
                </p>
                <p className="text-primary-300 font-semibold text-xl">
                  Will you answer the call and build the ultimate Tycoon Kingdom?
                </p>
              </div>
            </div>
            
            {/* Character Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <Image 
                  src="/images/iris_2d.png" 
                  alt="Iris Character" 
                  width={384}
                  height={384}
                  className="w-64 md:w-80 lg:w-96 h-auto object-contain drop-shadow-2xl"
                />
                {/* Optional glow effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent rounded-lg blur-xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
