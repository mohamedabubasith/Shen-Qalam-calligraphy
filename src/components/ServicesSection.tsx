import React from 'react';
import { SERVICES } from '../constants';

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-20 bg-white dark:bg-dark-surface">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-center text-brand-primary dark:text-gray-100 mb-2">
          What We Provide
        </h2>
        <div className="w-24 h-1 bg-brand-secondary mx-auto mb-8 sm:mb-12"></div>

        <div className="max-w-md mx-auto">
          <ul className="space-y-4">
            {SERVICES.map((service, index) => (
              <li key={index} className="flex items-start">
                <CheckIcon className="w-6 h-6 text-brand-accent mr-3 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-700 dark:text-gray-300">{service}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-xl text-center shadow-lg">
            <p className="text-white text-sm font-medium uppercase tracking-wide mb-2">Starting Price</p>
            <div className="text-white">
              <span className="text-2xl sm:text-3xl font-bold">LKR 350</span>
              <span className="text-base sm:text-lg ml-1">onwards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;