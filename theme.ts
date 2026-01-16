/**
 * Centralized Theme Configuration
 * 
 * This file contains all color definitions for the application.
 * To change the theme, simply update the values in this file.
 * 
 * USAGE:
 * - Components use Tailwind classes that match these color values
 * - Primary color: indigo-900 (#1e1b4b) - used for buttons, headings, accents
 * - Neutral colors: slate-* - used for text, backgrounds, borders
 * 
 * TO CHANGE THEME:
 * 1. Update color values in this file (for documentation)
 * 2. Use find/replace to change Tailwind classes (e.g., indigo-900 → blue-900)
 * 3. Update Tailwind config in index.html if using custom colors
 * 
 * See THEME_GUIDE.md for detailed instructions.
 */

export const theme = {
  colors: {
    // Primary Brand Colors
    primary: {
      50: '#eef2ff',   // Lightest - backgrounds
      100: '#e0e7ff',  // Light backgrounds, borders
      200: '#c7d2fe',  // Hover states
      300: '#a5b4fc',  // Disabled states
      400: '#818cf8',  // Secondary actions
      500: '#6366f1',  // Medium primary
      600: '#4f46e5',  // Active states
      700: '#4338ca',  // Hover primary
      800: '#3730a3',  // Primary buttons
      900: '#1e1b4b',  // Main brand color (indigo-900)
      950: '#1e1b4b',  // Deepest (custom)
    },
    
    // Neutral Colors
    neutral: {
      50: '#f8fafc',   // Lightest backgrounds
      100: '#f1f5f9',  // Light backgrounds
      200: '#e2e8f0',  // Borders, dividers
      300: '#cbd5e1',  // Input borders
      400: '#94a3b8',  // Placeholder text
      500: '#64748b',  // Secondary text
      600: '#475569',  // Body text
      700: '#334155',  // Headings
      800: '#1e293b',  // Dark text
      850: '#1e293b',  // Custom dark (slate-850)
      900: '#0f172a',  // Darkest - footer, dark sections
    },
    
    // Semantic Colors
    semantic: {
      success: '#10b981',
      error: '#ef4444',
      warning: '#f59e0b',
      info: '#3b82f6',
    },
    
    // Background Colors
    background: {
      white: '#ffffff',
      light: '#f8fafc',  // neutral-50
      dark: '#0f172a',   // neutral-900
    },
    
    // Text Colors
    text: {
      primary: '#0f172a',    // neutral-900
      secondary: '#475569',  // neutral-600
      tertiary: '#64748b',  // neutral-500
      inverse: '#ffffff',   // white text on dark
      muted: '#94a3b8',     // neutral-400
    },
  },
  
  // Spacing scale (using Tailwind defaults)
  spacing: {
    xs: '0.5rem',   // 8px
    sm: '0.75rem',  // 12px
    md: '1rem',     // 16px
    lg: '1.5rem',   // 24px
    xl: '2rem',     // 32px
    '2xl': '3rem',  // 48px
  },
  
  // Border radius
  borderRadius: {
    sm: '0.375rem',  // 6px
    md: '0.5rem',    // 8px
    lg: '0.75rem',   // 12px
    xl: '1rem',      // 16px
    '2xl': '1.5rem', // 24px
    '3xl': '2rem',   // 32px
    full: '9999px',
  },
} as const;

/**
 * Helper function to get Tailwind class names from theme colors
 * This allows us to use theme colors while still leveraging Tailwind's utilities
 */
export const getThemeClasses = {
  // Primary color classes
  primary: {
    bg: {
      50: 'bg-indigo-50',
      100: 'bg-indigo-100',
      200: 'bg-indigo-200',
      900: 'bg-indigo-900',
    },
    text: {
      900: 'text-indigo-900',
    },
    border: {
      900: 'border-indigo-900',
      100: 'border-indigo-100',
    },
    hover: {
      800: 'hover:bg-indigo-800',
      50: 'hover:bg-indigo-50',
    },
    focus: {
      900: 'focus:ring-indigo-900',
    },
  },
  
  // Neutral color classes
  neutral: {
    bg: {
      50: 'bg-slate-50',
      100: 'bg-slate-100',
      200: 'bg-slate-200',
      300: 'bg-slate-300',
      900: 'bg-slate-900',
    },
    text: {
      400: 'text-slate-400',
      500: 'text-slate-500',
      600: 'text-slate-600',
      700: 'text-slate-700',
      800: 'text-slate-800',
      900: 'text-slate-900',
    },
    border: {
      200: 'border-slate-200',
      300: 'border-slate-300',
    },
  },
} as const;

// Export type for theme
export type Theme = typeof theme;
