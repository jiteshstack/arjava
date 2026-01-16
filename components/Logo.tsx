import React from 'react';

export const Logo = ({ className = "w-8 h-8", color = "currentColor" }: { className?: string, color?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Geometric Hexagon Shield Base implying security and structure */}
    <path 
      d="M20 3L36 11V28L20 37L4 28V11L20 3Z" 
      fill={color} 
      fillOpacity="0.1" 
      stroke={color} 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    
    {/* Inner 'A' Monogram / Architectural Node Structure */}
    <path 
      d="M20 8L29 28H11L20 8Z" 
      stroke={color} 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M15.5 19H24.5" 
      stroke={color} 
      strokeWidth="2.5" 
      strokeLinecap="round"
    />
    
    {/* Core integrity dot */}
    <circle cx="20" cy="18" r="1.5" fill={color} />
  </svg>
);