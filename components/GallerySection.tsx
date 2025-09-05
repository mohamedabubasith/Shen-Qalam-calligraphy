
import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const GallerySection: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-white dark:bg-dark-surface">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-center text-brand-primary dark:text-gray-100 mb-2">
          Gallery
        </h2>
        <div className="w-24 h-1 bg-brand-secondary mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Replace the placeholder images in constants.ts with your actual artwork photos */}
          {GALLERY_IMAGES.map((image) => (
            <div key={image.id} className="group overflow-hidden rounded-lg shadow-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
