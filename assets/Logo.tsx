import React from 'react';

// An accurate vector representation of the Shen Qalam logo, based on the provided image.
const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Shen Qalam Logo"
  >
    {/* Group for centering and scaling */}
    <g transform="translate(2, 2) scale(0.96)">
      {/* Black Swoosh Part. Drawn as a filled shape for accuracy. */}
      <path
        d="M50 8C26.8 8 8 26.8 8 50s18.8 42 42 42c12.3 0 23.4-5.6 31.2-14.2C75.3 85.2 63.4 90 50 90 27.9 90 10 72.1 10 50S27.9 10 50 10c13.4 0 25.3 4.8 31.2 12.2C73.4 13.6 62.3 8 50 8zm29.4 72.3c15.1-10.1 24.6-27.6 24.6-47.3C104 23.3 80.7 0 52 0 35.7 0 21.9 8.3 10.3 22.3 16.2 12.5 26.8 6 39 6c23.2 0 42 18.8 42 42s-18.8 42-42 42c-8 0-15.2-2.7-21.4-6.7 10.4 7.7 23.1 12.7 37.4 12.7 8.3 0 16.2-1.9 23.4-5.2z"
        fill="#211d1d"
        className="dark:fill-gray-300"
      />
      {/* Brown 'S' Shape. Drawn as a single filled path for theme color compatibility. */}
      <path
        d="M68.5,35.7C68.4,27.5,62.8,21,53.8,21c-10.4,0-17.5,7.3-17.5,16.6h10.4c0.1-3.6,2.8-6.4,7-6.4c3.7,0,6.1,2.1,6.1,5.2c0,4.1-3.1,5.8-7.8,6.4l-11.1,1.5c-6.3,0.8-10.5,4.3-10.5,10c0,6.4,5.1,11.3,12.7,11.3c8.1,0,13.3-5,13.6-11.8h-10.5c-0.4,3.3-2.9,5.9-6.9,5.9c-3.4,0-5.9-2.3-5.9-5.4c0-3.5,3-5.3,8.2-6.1l10.7-1.5c8.9-1.2,14.5-6.5,14.5-13.6Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default Logo;
