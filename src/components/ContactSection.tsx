import React from 'react';

const ContactSection = () => {
  const contactInfo = {
    email: "kingdomtycoon.game@gmail.com",
    website: "https://kingdom-tycoon.vercel.app",
    telegram: "https://t.me/tycounkingdom",
    twitter: "https://x.com/kingdomtycoon__&sa=D&source=editors&ust=1757080745147406&usg=AOvVaw0brpcAexm5cdm-xesjH9Xu",
    facebook: "https://www.facebook.com/tycoonkingdom",
    youtube: "https://www.youtube.com/@TycoonKingdom&sa=D&source=editors&ust=1757080855241236&usg=AOvVaw2j2R3Bq4RUafqamFQ4KITE",
    tiktok: "https://www.tiktok.com/@tycoonkingdom_&sa=D&source=editors&ust=1757080855241736&usg=AOvVaw0qO0cCcnmpeAvNqiuJykRe"
  };

  const socialLinks = [
    {
      name: "Telegram",
      url: contactInfo.telegram,
      icon: "💬",
      color: "hover:text-blue-400"
    },
    {
      name: "X (Twitter)",
      url: contactInfo.twitter,
      icon: "🐦",
      color: "hover:text-blue-400"
    },
    {
      name: "Facebook",
      url: contactInfo.facebook,
      icon: "📘",
      color: "hover:text-blue-600"
    },
    {
      name: "YouTube",
      url: contactInfo.youtube,
      icon: "📺",
      color: "hover:text-red-500"
    },
    {
      name: "TikTok",
      url: contactInfo.tiktok,
      icon: "🎵",
      color: "hover:text-pink-400"
    }
  ];

  return (
    <section id="contact" className="py-20 token-bg relative min-h-screen">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-pixel font-bold text-primary-400 mb-8">
            Contact Us
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our community and stay updated with the latest news about Tycoon Kingdom. 
            We would love to hear from you!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-primary-600/20 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-primary-300 mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-center md:justify-start space-x-3">
                    <span className="text-2xl">📧</span>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <a 
                        href={`mailto:${contactInfo.email}`}
                        className="text-primary-300 hover:text-primary-200 transition-colors"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center justify-center md:justify-start space-x-3">
                    <span className="text-2xl">🌐</span>
                    <div>
                      <p className="text-gray-400 text-sm">Website</p>
                      <a 
                        href={contactInfo.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-300 hover:text-primary-200 transition-colors"
                      >
                        tycounkingdom.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-primary-300 mb-4">Follow Us</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-3 p-3 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-all duration-300 text-gray-300 ${social.color}`}
                    >
                      <span className="text-xl">{social.icon}</span>
                      <span className="text-sm font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          {/* <div className="bg-gradient-to-r from-primary-600/20 to-secondary-600/20 rounded-2xl p-8 border border-primary-600/30 text-center">
            <h3 className="text-2xl font-bold text-primary-300 mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-300 mb-6">
              Be the first to know about game releases, token events, and exclusive content!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-primary-400"
              />
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
