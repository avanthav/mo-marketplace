import React from 'react';

export const MoLogo: React.FC<{ className?: string }> = ({ className = 'h-7 w-auto' }) => {
  return (
    <svg
      viewBox="0 0 110 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Custom styled chunky MO logo matching brand reference */}
      <path
        d="M6 34V6h8.8l6.8 14.8L28.4 6H37v28h-7.6V16.8L23.2 30h-3.6L13.4 16.8V34H6z"
        fill="#FF0000"
      />
      <circle cx="75" cy="20" r="14" fill="#FF0000" />
      <circle cx="75" cy="20" r="6" fill="#FFFFFF" />
    </svg>
  );
};

