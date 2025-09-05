import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const GallerySection: React.FC = () => {
  return (
    <section id="gallery" className="py-16 sm:py-20 bg-white dark:bg-dark-surface">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-center text-brand-primary dark:text-gray-100 mb-2">
          Gallery
        </h2>
        <div className="w-24 h-1 bg-brand-secondary mx-auto mb-8 sm:mb-12"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {GALLERY_IMAGES.map((image) => (
            <div key={image.id} className="group overflow-hidden rounded-lg shadow-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 sm:h-80 lg:h-96 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;