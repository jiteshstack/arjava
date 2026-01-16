# Theme System Guide

This project uses a centralized theme system defined in `theme.ts`. This guide explains how to use and modify the theme.

## Theme Structure

The theme is defined in `/theme.ts` and includes:
- **Primary Colors**: Brand colors (currently indigo-based)
- **Neutral Colors**: Grays and text colors (currently slate-based)
- **Semantic Colors**: Success, error, warning, info
- **Background Colors**: White, light, dark variants
- **Text Colors**: Primary, secondary, tertiary, inverse, muted

## How to Change the Theme

### Option 1: Change to Another Tailwind Color

If you want to switch from `indigo` to another Tailwind color (e.g., `blue`, `purple`, `teal`):

1. **Update `theme.ts`**: Change the color values in the `colors.primary` object
2. **Update Tailwind classes**: Use find/replace across the codebase:
   - `indigo-900` → `blue-900` (or your chosen color)
   - `indigo-800` → `blue-800`
   - `indigo-50` → `blue-50`
   - etc.
3. **Update `index.html`**: Change the Tailwind config color extensions

### Option 2: Use Custom Colors

1. **Update `theme.ts`**: Replace color values with your custom hex codes
2. **Update `index.html`**: Add custom colors to Tailwind config:
   ```javascript
   colors: {
     primary: {
       900: '#YOUR_COLOR',
       // ... other shades
     }
   }
   ```
3. **Update all components**: Replace Tailwind classes with your custom color classes

## Current Theme Colors

### Primary (Brand Color)
- **900**: `#1e1b4b` - Main brand color (buttons, headings, accents)
- **800**: `#3730a3` - Hover states
- **50**: `#eef2ff` - Light backgrounds

### Neutral (Text & Backgrounds)
- **900**: `#0f172a` - Dark backgrounds (footer)
- **600**: `#475569` - Body text
- **50**: `#f8fafc` - Light backgrounds

## Component Usage

### Button Component
The `Button` component uses theme classes via `getThemeClasses` helper:
```tsx
import { getThemeClasses } from '../theme';

// Primary button uses: getThemeClasses.primary.bg[900]
```

### Section Component
The `Section` component uses theme classes for backgrounds:
```tsx
import { getThemeClasses } from '../theme';

// Light background: getThemeClasses.neutral.bg[50]
```

## Best Practices

1. **Always reference `theme.ts`** when adding new colors
2. **Use Tailwind classes** that match the theme (e.g., `indigo-900`, `slate-600`)
3. **Document custom colors** in `theme.ts` if you add new ones
4. **Test color contrast** when changing themes for accessibility

## Quick Reference

| Usage | Current Color | Tailwind Class |
|-------|--------------|----------------|
| Primary buttons | Indigo 900 | `bg-indigo-900` |
| Primary text/links | Indigo 900 | `text-indigo-900` |
| Light backgrounds | Slate 50 | `bg-slate-50` |
| Body text | Slate 600 | `text-slate-600` |
| Headings | Slate 900 | `text-slate-900` |
| Dark sections | Slate 900 | `bg-slate-900` |

## Future Improvements

Consider implementing:
- CSS custom properties (CSS variables) for runtime theme switching
- Dark mode support
- Theme provider context for React components
