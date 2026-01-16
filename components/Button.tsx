import React from 'react';
import { getThemeClasses } from '../theme';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-lg";
  
  // Using theme classes for consistent styling
  const variants = {
    primary: `${getThemeClasses.primary.bg[900]} text-white ${getThemeClasses.primary.hover[800]} ${getThemeClasses.primary.focus[900]} border border-transparent`,
    secondary: `${getThemeClasses.neutral.bg[200]} ${getThemeClasses.neutral.text[900]} ${getThemeClasses.neutral.bg[300]} focus:ring-slate-500 border border-transparent`,
    outline: `bg-transparent ${getThemeClasses.primary.text[900]} ${getThemeClasses.primary.border[900]} ${getThemeClasses.primary.hover[50]} ${getThemeClasses.primary.focus[900]}`,
    white: `bg-white ${getThemeClasses.primary.text[900]} ${getThemeClasses.primary.hover[50]} focus:ring-white border border-transparent shadow-sm`,
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg",
  };

  const width = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};