import React from 'react';

export const Logo = ({
  className = "w-8 h-8",
  tealColor = "#15B7D3",
  orangeColor = "#EF7B1E"
}: {
  className?: string;
  tealColor?: string;
  orangeColor?: string;
}) => {
  return (
    <svg
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Connection lines */}
      <g stroke={tealColor} strokeWidth="4.5" strokeMiterlimit="10" fill="none">
        <line x1="150" y1="70.1" x2="150" y2="224.5" />
        <line x1="242" y1="179.5" x2="58.4" y2="179.5" />
        <line x1="225.2" y1="113.8" x2="165.2" y2="230.3" />
        <line x1="249.3" y1="198.4" x2="178.5" y2="243.3" />
        <line x1="251.7" y1="114.1" x2="265.1" y2="147.7" />
        <line x1="46.8" y1="114.1" x2="33.4" y2="147.7" />
        <line x1="50.5" y1="198.4" x2="121.3" y2="243.3" />
        <line x1="73.9" y1="113.8" x2="133.9" y2="230.3" />
        <path d="M163.4,66.4c17.4,37.3,44.2,71.6,82,102.9" />
        <path d="M137,66.4c-17.4,37.3-44.2,71.6-82,102.9" />
        <path d="M184.5,103c8.1-2.6,16.5-4.5,25.4-5.7" />
        <path d="M116.4,103c-8.1-2.6-16.5-4.5-25.4-5.7" />
      </g>

      {/* Orange nodes (top-left and top-right) */}
      <circle cx="60" cy="85.9" r="19.8" fill={orangeColor} stroke="#F9DDCA" strokeWidth="5" strokeMiterlimit="10" />
      <circle cx="238.2" cy="85.9" r="19.8" fill={orangeColor} stroke="#F9DDCA" strokeWidth="5" strokeMiterlimit="10" />

      {/* Teal nodes */}
      <circle cx="148.6" cy="260" r="19.8" fill={tealColor} stroke="#CDF5F9" strokeWidth="5" strokeMiterlimit="10" />
      <circle cx="272.9" cy="179.5" r="19.8" fill={tealColor} stroke="#CDF5F9" strokeWidth="5" strokeMiterlimit="10" />
      <circle cx="27.1" cy="179.5" r="19.8" fill={tealColor} stroke="#CDF5F9" strokeWidth="5" strokeMiterlimit="10" />
      <circle cx="148.6" cy="40" r="19.8" fill={tealColor} stroke="#CDF5F9" strokeWidth="5" strokeMiterlimit="10" />

      {/* White highlight circles for 3D effect */}
      <circle cx="59.9" cy="84.3" r="8.3" fill="#FFFFFF" opacity="0.2" />
      <circle cx="238.2" cy="84.3" r="8.3" fill="#FFFFFF" opacity="0.2" />
      <circle cx="148.6" cy="38.1" r="8.3" fill="#FFFFFF" opacity="0.2" />
      <circle cx="148.6" cy="259" r="8.3" fill="#FFFFFF" opacity="0.2" />
      <circle cx="272.9" cy="177.6" r="8.3" fill="#FFFFFF" opacity="0.2" />
      <circle cx="27.1" cy="177.6" r="8.3" fill="#FFFFFF" opacity="0.2" />
    </svg>
  );
};
