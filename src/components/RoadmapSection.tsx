import React from 'react';
import Image from 'next/image';

const RoadmapSection = () => {
  const roadmapPhases = [
    {
      phase: "Phase 1",
      title: "Foundation",
      timeline: "",
      deliverables: [
        "Hunter, Monster, Item, Village, map",
        "Basic Save/Load system",
        "Goal: prove the core gameplay loop",
        "Community building launch"
      ],
      growth: "1K+ community members"
    },
    {
      phase: "Phase 2", 
      title: "Development",
      timeline: "",
      deliverables: [
        "Multiple hunting zones",
        "Polished UI",
        "Core economy design",
        "Basic quests & events",
      ],
      growth: "5–15k users, 5–7k transactions, 1–2k DAU, 3–6k MAU"
    },
    {
      phase: "Phase 3",
      title: "Play Testing",
      timeline: "",
      deliverables: [
        "Building system",
        "Crafting loop, guilds",
        "Meta-progression",
        "Village expansion"
      ],
      growth: "20–50k users, 10–30k transactions, 2–5k DAU, 25–50k MAU"
    },
    {
      phase: "Phase 4",
      title: "Launch",
      timeline: "",
      deliverables: [
        "Full game release",
        "Monetization (IAP, VIP, Ads), ",
        "Event system",
        "Release polish & scaling"
      ],
      growth: "50–100k users, 25–50k transactions, 5–10k DAU, 25–50k MAU"
    }
  ];

  return (
    <section id="roadmap" className="py-20 concept-bg relative min-h-screen">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-pixel font-bold text-primary-400 mb-8">
            Growth Potential & Roadmap
          </h2>
          
          {/* Growth Potential Cards */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-primary-600/20 to-purple-600/20 rounded-2xl p-8 border border-primary-600/30 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-600 rounded-full p-3 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-primary-300 mb-3">Wide Market Appeal</h3>
                  <p className="text-gray-300 leading-relaxed">
                    <strong>Idle RPG:</strong> Low barrier, wide appeal to Web2 & Web3 players. 
                    Fans of Evil Hunter Tycoon: proven demand for this genre, easy to attract with familiar gameplay.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl p-8 border border-blue-600/30 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 rounded-full p-3 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-blue-300 mb-3">Community Collaboration</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Introduce special bosses dropping community tokens, attracting their fans into the game. 
                    <strong>Dai Viet Ky Nhan community:</strong> 68K+ followers, 10k+ active RPG fans ready to onboard.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-2xl p-8 border border-green-600/30 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 rounded-full p-3 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-green-300 mb-3">Ownership Mechanics</h3>
                  <p className="text-gray-300 leading-relaxed">
                    True asset ownership drives player retention and creates powerful monetization opportunities 
                    through player investment and trading.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-600/30 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 rounded-full p-3 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-purple-300 mb-3">Expansion Path</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Natural progression from individual hunters to guilds to full kingdom economy, 
                    creating long-term engagement and growth opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-primary-300 text-center mb-12">
            Development Roadmap
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roadmapPhases.map((phase, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-primary-600/20 hover:border-primary-400/40 transition-all duration-300"
              >
                <div className="text-center mb-4">
                  <div className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-2">
                    {phase.phase}
                  </div>
                  <h4 className="text-xl font-bold text-primary-300">{phase.title}</h4>
                  <p className="text-gray-400">{phase.timeline}</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-200 mb-2">Deliverables:</h5>
                    <ul className="space-y-1 text-sm text-gray-400">
                      {phase.deliverables.map((item, idx) => (
                        <li key={idx}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-200 mb-2">Growth Target:</h5>
                    <p className="text-sm text-primary-300 font-semibold">{phase.growth}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Growth Potential */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary-600/20 to-secondary-600/20 rounded-2xl p-8 border border-primary-600/30">
            <h4 className="text-2xl font-bold text-primary-300 mb-6 text-center">
              Market Potential
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-400">$200B+</div>
                <p className="text-gray-300">Global Gaming Market</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-400">$25B+</div>
                <p className="text-gray-300">Blockchain Gaming by 2030</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-400">3B+</div>
                <p className="text-gray-300">Global Gamers Worldwide</p>
              </div>
            </div>
          </div>
        </div>
                
                
        {/* We Know How It's Done */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-primary-300 text-center mb-8 mt-20">
            We Know How It&apos;s Done
          </h3>
          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-primary-600/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Text Content */}
                <div className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    Before Tycoon Kingdom, our team successfully developed MemeForest, an Idle-style Web3 project 
                    launched on Movement Chain. MemeForest was designed as an experimental game combining auto farming 
                    mechanics with tokenized rewards. The project validated that Idle gameplay works well for both 
                    casual players and blockchain communities, giving us proven experience to build on.
                  </p>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-primary-300 mb-4">Key Achievements:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start space-x-3">
                        <span className="text-primary-400 text-lg">•</span>
                        <span><strong>50+ partners</strong> collaborated during launch</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-primary-400 text-lg">•</span>
                        <span><strong>100+ KOLs</strong> supported across social platforms</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-primary-400 text-lg">•</span>
                        <span><strong>10,000+</strong> joined the ecosystem in early stage</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-primary-400 text-lg">•</span>
                        <span><strong>MAU:</strong> ~1,000 active users</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-primary-400 text-lg">•</span>
                        <span><strong>DAU / Transactions:</strong> consistent engagement across player base</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="pt-4">
                    <p className="text-sm text-gray-400">
                      More information: <a href="https://movementlabs.xyz" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 underline">movementlabs.xyz</a>
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
                      <a href="https://blog.movementlabs.xyz/article/Movement-Gaming-Blockchain-Games" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 underline">
                        Movement Gaming Blockchain Games Blog Post
                      </a>
                    </p>
                  </div>
                </div>
                
                {/* MemeForest Image */}
                <div className="flex justify-center">
                  <div className="relative">
                    <Image
                      src="/images/x.png"
                      alt="MemeForest Project Screenshot"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
