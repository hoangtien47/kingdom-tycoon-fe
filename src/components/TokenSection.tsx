import React from 'react';
import Image from 'next/image';

const TokenSection = () => {
  return (
    <section id="token" className="token-bg relative min-h-screen">
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
                        
            {/* Character Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <Image 
                  src="/images/land.png" 
                  alt="NFT Land" 
                  width={400}
                  height={400}
                  className="w-64 md:w-80 lg:w-96 h-auto object-contain drop-shadow-2xl"
                />
                {/* Optional glow effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent rounded-lg blur-xl -z-10"></div>
              </div>
            </div>
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-fantasy font-bold text-primary-400 mb-8">
                NFT Town           
              </h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <ul>
                  <li>
                    Higher drop rate 
                  </li>
                  <li>
                    AI auto support → smarter combat behaviors
                  </li>
                  <li>
                    Burn mechanism prevents inflation, balances supply & demand.
                  </li>
                  <li>
                    Reduced cooldown for boss summoning → faster event cycle
                  </li>
                </ul>
                <br />
                <i>NFTs provide real gameplay value, not just cosmetics.</i>
              </div>
            </div>
                        {/* Text Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-fantasy font-bold text-primary-400 mb-8">
                Tokenomics          
              </h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <ul>
                  <li>
                    Utility Token ($TKD): core currency of the game. Earned by defeating minibosses during hunts.
                  </li>
                  <li>
                    Spent on upgrades, crafting, healing boosts, and events.
                  </li>
                  <li>
                    Burn mechanism prevents inflation, balances supply & demand.
                  </li>
                  <li>
                    Designed for long-term sustainability and real utility.
                  </li>
                </ul>
              </div>
            </div>
            {/* Character Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <Image 
                  src="/images/irisbook.png" 
                  alt="NFT Iris Book" 
                  width={300}
                  height={300}
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

export default TokenSection;
