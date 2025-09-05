# Loom Design System Setup Guide

This guide explains how to integrate and use the Loom Design System core CSS modules in your React application.

## Overview

The Loom Design System provides:
- **Core CSS Utilities**: Tailwind-like utility classes
- **Design Tokens**: CSS custom properties for consistent theming
- **React Components**: Pre-built UI components
- **Configuration System**: Flexible theming and customization

## Installation

### 1. Install Dependencies

```bash
npm install @loom/core @loom/react
```

### 2. Import Core Utilities

Add the core utilities to your main CSS file (e.g., `globals.css`):

```css
/* Import Loom Design System Core Utilities */
@import "@loom/core/loom-utilities.css";
```

### 3. Set Up Design Tokens

Add Loom design tokens to your CSS:

```css
:root {
  /* Loom Design System Tokens */
  --loom-font-family: 'Inter', system-ui, sans-serif;
  
  /* Colors */
  --loom-color-primary: #3b82f6;
  --loom-color-secondary: #64748b;
  --loom-color-success: #10b981;
  --loom-color-warning: #f59e0b;
  --loom-color-error: #ef4444;
  --loom-color-background: #ffffff;
  --loom-color-foreground: #0f172a;
  --loom-color-muted: #f1f5f9;
  --loom-color-accent: #f1f5f9;
  --loom-color-destructive: #ef4444;
  --loom-color-border: #e2e8f0;
  --loom-color-input: #e2e8f0;
  --loom-color-ring: #3b82f6;
  
  /* Spacing */
  --loom-spacing-xs: 0.25rem;
  --loom-spacing-sm: 0.5rem;
  --loom-spacing-md: 1rem;
  --loom-spacing-lg: 1.5rem;
  --loom-spacing-xl: 2rem;
  --loom-spacing-2xl: 3rem;
  
  /* Border Radius */
  --loom-radius-sm: 0.125rem;
  --loom-radius-md: 0.375rem;
  --loom-radius-lg: 0.5rem;
  --loom-radius-xl: 0.75rem;
  --loom-radius-2xl: 1rem;
  
  /* Shadows */
  --loom-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --loom-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --loom-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --loom-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
```

### 4. Dark Theme Support

Add dark theme variables:

```css
/* Dark Theme */
.dark {
  --loom-color-background: #0f172a;
  --loom-color-foreground: #f8fafc;
  --loom-color-muted: #1e293b;
  --loom-color-accent: #1e293b;
  --loom-color-border: #334155;
  --loom-color-input: #334155;
}

@media (prefers-color-scheme: dark) {
  :root:not(.light) {
    --loom-color-background: #0f172a;
    --loom-color-foreground: #f8fafc;
    --loom-color-muted: #1e293b;
    --loom-color-accent: #1e293b;
    --loom-color-border: #334155;
    --loom-color-input: #334155;
  }
}
```

## React Integration

### 1. Set Up LoomConfigProvider

Wrap your app with the `LoomConfigProvider`:

```tsx
import { LoomConfigProvider } from '@loom/react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LoomConfigProvider
          config={{
            fontFamily: 'var(--loom-font-family)',
            theme: 'system', // 'light', 'dark', or 'system'
          }}
        >
          {children}
        </LoomConfigProvider>
      </body>
    </html>
  );
}
```

### 2. Use Components

Import and use Loom components:

```tsx
import { Button, Card, Input, BarChart } from '@loom/react';

function MyComponent() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">My Component</h2>
      <Input placeholder="Enter text..." className="mb-4" />
      <Button>Click me</Button>
    </Card>
  );
}
```

## Using Utility Classes

### Layout Utilities

```tsx
// Grid
<div className="grid grid-cols-3 gap-4">
  <div className="col-span-1">Item 1</div>
  <div className="col-span-2">Item 2</div>
</div>

// Flexbox
<div className="flex justify-between items-center">
  <div>Left</div>
  <div>Right</div>
</div>
```

### Spacing Utilities

```tsx
// Margin and Padding
<div className="p-4 m-2">Content</div>
<div className="px-6 py-3">Content</div>
<div className="mt-4 mb-2">Content</div>
```

### Typography Utilities

```tsx
<h1 className="text-4xl font-bold text-primary">Heading</h1>
<p className="text-base text-secondary">Body text</p>
<span className="text-sm text-muted">Small text</span>
```

### Color Utilities

```tsx
// Background colors
<div className="bg-primary text-white">Primary</div>
<div className="bg-secondary text-white">Secondary</div>
<div className="bg-success text-white">Success</div>

// Text colors
<p className="text-primary">Primary text</p>
<p className="text-secondary">Secondary text</p>
<p className="text-error">Error text</p>
```

### Border and Shadow Utilities

```tsx
// Borders
<div className="border border-primary rounded-lg">Bordered</div>
<div className="border-2 border-secondary rounded-xl">Thick border</div>

// Shadows
<div className="shadow-sm">Small shadow</div>
<div className="shadow-lg">Large shadow</div>
```

## Configuration

### loom.config.js

Create a `loom.config.js` file in your project root:

```javascript
/** @type {import('loom').LoomConfig} */
const config = {
  tokens: {
    colors: {
      primary: {
        500: '#3b82f6',
        600: '#2563eb',
        // ... more shades
      },
    },
    spacing: {
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
    },
  },
  theme: {
    default: {
      colors: {
        background: '#ffffff',
        foreground: '#0f172a',
      },
    },
    dark: {
      colors: {
        background: '#0f172a',
        foreground: '#f8fafc',
      },
    },
  },
};

module.exports = config;
```

### Dynamic Theme Switching

```tsx
import { useLoomConfig } from '@loom/react';

function ThemeToggle() {
  const { setTheme, config } = useLoomConfig();
  
  return (
    <button onClick={() => setTheme(config.theme === 'dark' ? 'light' : 'dark')}>
      Toggle Theme
    </button>
  );
}
```

## Best Practices

### 1. Use Design Tokens

Always use CSS custom properties for consistent theming:

```css
.my-component {
  background-color: var(--loom-color-primary);
  padding: var(--loom-spacing-md);
  border-radius: var(--loom-radius-lg);
}
```

### 2. Combine Utilities and Components

```tsx
// Good: Combine utilities with components
<Card className="p-6 shadow-lg">
  <Button className="w-full">Full width button</Button>
</Card>
```

### 3. Responsive Design

```tsx
// Use responsive utilities
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div>Responsive item</div>
</div>
```

### 4. Custom Components

Create custom components that use Loom utilities:

```tsx
function CustomCard({ children, className = '' }) {
  return (
    <div className={`bg-white border border-border rounded-lg shadow-sm p-6 ${className}`}>
      {children}
    </div>
  );
}
```

## File Structure

```
your-app/
├── app/
│   ├── globals.css          # Import Loom utilities and tokens
│   ├── layout.tsx           # Set up LoomConfigProvider
│   └── page.tsx
├── components/
│   └── CustomComponent.tsx  # Your custom components
├── loom.config.js           # Loom configuration
└── package.json
```

## Troubleshooting

### CSS Not Loading

1. Ensure `@loom/core/loom-utilities.css` is imported in your main CSS file
2. Check that the import path is correct
3. Verify the package is installed

### Theme Not Working

1. Make sure `LoomConfigProvider` wraps your app
2. Check that CSS custom properties are defined
3. Verify dark theme classes are applied to the HTML element

### Components Not Styled

1. Ensure components are imported from `@loom/react`
2. Check that CSS modules are properly configured
3. Verify that the React package is built and up to date

## Examples

See the `UtilityExample.tsx` component for a comprehensive demonstration of all utility classes and their usage.
