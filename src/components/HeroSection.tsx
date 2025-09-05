import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-light-bg dark:bg-dark-bg pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-[fadeInUp_1s_ease-out]">
          <img
            src="/Shen-Qalam-calligraphy/logo-icon.jpg"
            alt="Shen Qalam Logo"
            className="h-40 w-40 -mt-20 sm:h-40 sm:w-40 md:h-48 md:w-48 mx-auto mb-6 object-contain rounded-lg transition-all duration-300 dark:brightness-0 dark:invert"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-brand-primary dark:text-gray-100 mb-4">
            Shen Qalam
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            Elevate Your Space with Elegant Handmade Arabic Art!
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 px-4">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3 bg-brand-primary text-white font-semibold rounded-lg shadow-md hover:bg-brand-secondary dark:hover:bg-brand-secondary/80 transition-all duration-300 transform hover:scale-105 text-center"
            >
              Order Now
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3 bg-gray-200 text-brand-primary font-semibold rounded-lg shadow-md hover:bg-gray-300 dark:bg-dark-surface dark:text-gray-200 dark:hover:bg-dark-surface/80 transition-all duration-300 transform hover:scale-105 text-center"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;