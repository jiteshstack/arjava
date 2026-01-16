import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClass?: string;
  id?: string;
  background?: 'white' | 'light' | 'dark';
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  containerClass = '',
  id,
  background = 'white'
}) => {
  const bgStyles = {
    white: "bg-white",
    light: "bg-slate-50 border-y border-slate-200",
    dark: "bg-slate-900 text-white",
  };

  return (
    <section id={id} className={`${bgStyles[background]} py-16 md:py-24 ${className}`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClass}`}>
        {children}
      </div>
    </section>
  );
};