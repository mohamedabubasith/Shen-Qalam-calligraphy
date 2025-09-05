
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-primary dark:bg-black">
      <div className="container mx-auto px-6 py-4 text-center text-gray-300">
        <p>&copy; {currentYear} Shen Qalam. All Rights Reserved.</p>
        <p className="text-sm text-gray-400 mt-1">
          {/* You can add your name or company here if you built the website */}
          Website by Mohamed Abu Basith
        </p>
      </div>
    </footer>
  );
};

export default Footer;
