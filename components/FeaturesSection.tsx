
import React from 'react';
import { FEATURES } from '../constants';

const SparkleIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M19 3v4M17 5h4M12 21v-4M10 19h4M5 21l4-4M15 17l4 4M3 12h4M17 12h4M9 12a3 3 0 11-6 0 3 3 0 016 0zM21 12a3 3 0 11-6 0 3 3 0 016 0zM12 9a3 3 0 110-6 3 3 0 010 6z" />
    </svg>
);

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-light-bg dark:bg-dark-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-center text-brand-primary dark:text-gray-100 mb-2">
          Special Features
        </h2>
        <div className="w-24 h-1 bg-brand-secondary mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {FEATURES.map((feature, index) => (
            <div key={index} className="p-6 bg-white dark:bg-dark-surface rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <SparkleIcon className="w-12 h-12 text-brand-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{feature}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
