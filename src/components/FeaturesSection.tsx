import React from 'react';
import { FEATURES } from '../constants';

// Better icons for each feature
const HandmadeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m-3-3a1.5 1.5 0 013 0v3m-3-3a1.5 1.5 0 113 0v3m-3-3a1.5 1.5 0 013 0v3" />
  </svg>
);

const AffordableIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CustomizableIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const FramingIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const FeaturesSection: React.FC = () => {
  const featureIcons = [HandmadeIcon, AffordableIcon, CustomizableIcon, FramingIcon];

  return (
    <section id="features" className="py-16 sm:py-20 bg-light-bg dark:bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-center text-brand-primary dark:text-gray-100 mb-2">
          Special Features
        </h2>
        <div className="w-24 h-1 bg-brand-secondary mx-auto mb-8 sm:mb-12"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
          {FEATURES.map((feature, index) => {
            const IconComponent = featureIcons[index];
            return (
              <div key={index} className="p-4 sm:p-6 bg-white dark:bg-dark-surface rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <IconComponent className="w-10 h-10 sm:w-12 sm:h-12 text-brand-accent mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">{feature}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;