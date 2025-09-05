
import React from 'react';
import Logo from '../assets/Logo';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-light-bg dark:bg-dark-bg pt-20">
      <div className="container mx-auto px-6 text-center">
        {/* The animation classes below create a simple fade-in and slide-up effect.
            For more complex animations, consider adding a library like Framer Motion. */}
        <div className="animate-[fadeInUp_1s_ease-out]">
          <Logo className="h-40 w-40 mx-auto text-brand-primary dark:text-brand-secondary mb-4" />
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-primary dark:text-gray-100">
            Shen Qalam
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Elevate Your Space with Elegant Handmade Arabic Art!
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-brand-primary text-white font-semibold rounded-lg shadow-md hover:bg-brand-secondary dark:hover:bg-brand-secondary/80 transition-all duration-300 transform hover:scale-105"
            >
              Order Now
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-gray-200 text-brand-primary font-semibold rounded-lg shadow-md hover:bg-gray-300 dark:bg-dark-surface dark:text-gray-200 dark:hover:bg-dark-surface/80 transition-all duration-300 transform hover:scale-105"
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
