import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-primary-600/30 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-fantasy font-bold text-primary-400 mb-4">
              Tycoon Kingdom
            </h3>
            <p className="text-gray-400 mb-4 max-w-md">
              From ashes of ruin, a new kingdom rises. Join us in building the ultimate 
              kingdom-building experience in the blockchain gaming world.
            </p>
            <p className="text-sm text-gray-500">
              © 2025 Tycoon Kingdom. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-primary-400 transition-colors">
                Home
              </a>
              <a href="#story" className="block text-gray-400 hover:text-primary-400 transition-colors">
                Story
              </a>
              <a href="#concept" className="block text-gray-400 hover:text-primary-400 transition-colors">
                Concept
              </a>
              <a href="#token" className="block text-gray-400 hover:text-primary-400 transition-colors">
                Token
              </a>
              <a href="#roadmap" className="block text-gray-400 hover:text-primary-400 transition-colors">
                Roadmap
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-gray-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="block text-gray-400 hover:text-primary-400 transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="block text-gray-400 hover:text-primary-400 transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            Built with ❤️ for the future of blockchain gaming
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
