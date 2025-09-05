
import React from 'react';
import { SERVICES } from '../constants';

const CheckIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white dark:bg-dark-surface">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-center text-brand-primary dark:text-gray-100 mb-2">
          What We Provide
        </h2>
        <div className="w-24 h-1 bg-brand-secondary mx-auto mb-12"></div>
        
        <div className="max-w-md mx-auto">
          <ul className="space-y-4">
            {SERVICES.map((service, index) => (
              <li key={index} className="flex items-start">
                <CheckIcon className="w-6 h-6 text-brand-accent mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700 dark:text-gray-300">{service}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-gray-600 dark:text-gray-400 font-semibold">
            ... starting from LKR 350
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
