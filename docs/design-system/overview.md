# Design System Overview

loom-css is built on a comprehensive design system that provides consistency, scalability, and maintainability across all components and applications. This guide will help you understand the core principles and structure of our design system.

## Design Principles

### 1. **Consistency**
All components follow the same design patterns, spacing, and interaction models to create a cohesive user experience.

### 2. **Accessibility**
Every component is built with accessibility in mind, following WCAG 2.1 guidelines and supporting keyboard navigation, screen readers, and high contrast modes.

### 3. **Flexibility**
The design system is flexible enough to adapt to different use cases while maintaining consistency.

### 4. **Performance**
Optimized for performance with minimal bundle size impact and efficient rendering.

## Design Tokens

Design tokens are the foundational elements of our design system. They define the visual properties that make up our design language.

### Colors

Our color system is built around semantic color roles that adapt to different themes:

```css
/* Primary Colors */
--loom-primary-50: #eff6ff;
--loom-primary-500: #3b82f6;
--loom-primary-900: #1e3a8a;

/* Semantic Colors */
--loom-success: #10b981;
--loom-warning: #f59e0b;
--loom-error: #ef4444;
--loom-info: #3b82f6;
```

### Typography

Consistent typography scale and font families:

```css
/* Font Families */
--loom-font-sans: 'Inter', system-ui, sans-serif;
--loom-font-serif: 'Georgia', serif;
--loom-font-mono: 'JetBrains Mono', monospace;

/* Font Sizes */
--loom-text-xs: 0.75rem;
--loom-text-sm: 0.875rem;
--loom-text-base: 1rem;
--loom-text-lg: 1.125rem;
--loom-text-xl: 1.25rem;
```

### Spacing

Consistent spacing scale based on a 4px grid:

```css
/* Spacing Scale */
--loom-space-1: 0.25rem;  /* 4px */
--loom-space-2: 0.5rem;   /* 8px */
--loom-space-3: 0.75rem;  /* 12px */
--loom-space-4: 1rem;     /* 16px */
--loom-space-6: 1.5rem;   /* 24px */
--loom-space-8: 2rem;     /* 32px */
```

### Border Radius

Consistent border radius values:

```css
/* Border Radius */
--loom-radius-sm: 0.125rem;  /* 2px */
--loom-radius-md: 0.375rem;  /* 6px */
--loom-radius-lg: 0.5rem;    /* 8px */
--loom-radius-xl: 0.75rem;   /* 12px */
```

### Shadows

Layered shadow system for depth:

```css
/* Shadows */
--loom-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--loom-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--loom-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--loom-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
```

## Component Architecture

### Base Components

All components are built on a foundation of base components that provide common functionality:

- **BaseComponent**: Core component with common props and methods
- **StyledComponent**: Component with built-in styling capabilities
- **InteractiveComponent**: Component with interaction handling

### Component Structure

Each component follows a consistent structure:

```
ComponentName/
├── index.ts          # Main export
├── ComponentName.tsx # Component implementation
├── ComponentName.css # Component styles
├── types.ts          # TypeScript definitions
├── stories.tsx       # Storybook stories
└── test.tsx          # Component tests
```

### Component Props

All components follow a consistent prop structure:

```tsx
interface ComponentProps {
  // Base props
  className?: string;
  children?: React.ReactNode;
  
  // Variant props
  variant?: 'default' | 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  
  // State props
  disabled?: boolean;
  loading?: boolean;
  
  // Event handlers
  onClick?: (event: React.MouseEvent) => void;
  onChange?: (value: any) => void;
}
```

## Theming System

### Theme Structure

Themes are defined using CSS custom properties:

```css
:root {
  /* Light theme */
  --loom-background: #ffffff;
  --loom-foreground: #0f172a;
  --loom-primary: #3b82f6;
  --loom-secondary: #64748b;
}

[data-theme="dark"] {
  /* Dark theme */
  --loom-background: #0f172a;
  --loom-foreground: #f8fafc;
  --loom-primary: #3b82f6;
  --loom-secondary: #64748b;
}
```

### Custom Themes

You can create custom themes by overriding the design tokens:

```css
:root[data-theme="custom"] {
  --loom-primary: #your-primary-color;
  --loom-secondary: #your-secondary-color;
  --loom-font-sans: 'Your Font', sans-serif;
}
```

## Layout System

### Grid System

Flexible grid system based on CSS Grid and Flexbox:

```css
.loom-grid {
  display: grid;
  gap: var(--loom-space-4);
  grid-template-columns: repeat(12, 1fr);
}

.loom-col-1 { grid-column: span 1; }
.loom-col-2 { grid-column: span 2; }
.loom-col-3 { grid-column: span 3; }
/* ... up to 12 */
```

### Spacing Utilities

Consistent spacing utilities:

```css
.loom-p-4 { padding: var(--loom-space-4); }
.loom-m-4 { margin: var(--loom-space-4); }
.loom-space-x-4 > * + * { margin-left: var(--loom-space-4); }
.loom-space-y-4 > * + * { margin-top: var(--loom-space-4); }
```

## Responsive Design

### Breakpoints

Consistent breakpoint system:

```css
/* Breakpoints */
--loom-breakpoint-sm: 640px;
--loom-breakpoint-md: 768px;
--loom-breakpoint-lg: 1024px;
--loom-breakpoint-xl: 1280px;
--loom-breakpoint-2xl: 1536px;
```

### Responsive Utilities

```css
.loom-sm\:text-lg { @media (min-width: 640px) { font-size: 1.125rem; } }
.loom-md\:text-xl { @media (min-width: 768px) { font-size: 1.25rem; } }
.loom-lg\:text-2xl { @media (min-width: 1024px) { font-size: 1.5rem; } }
```

## Animation System

### Transition Tokens

Consistent animation timing and easing:

```css
/* Transitions */
--loom-transition-fast: 150ms ease;
--loom-transition-base: 200ms ease;
--loom-transition-slow: 300ms ease;

/* Easing Functions */
--loom-ease-in: cubic-bezier(0.4, 0, 1, 1);
--loom-ease-out: cubic-bezier(0, 0, 0.2, 1);
--loom-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### Animation Classes

```css
.loom-transition {
  transition: all var(--loom-transition-base);
}

.loom-hover\:scale-105:hover {
  transform: scale(1.05);
}
```

## Accessibility Guidelines

### Color Contrast

All color combinations meet WCAG AA standards:

- Normal text: 4.5:1 contrast ratio
- Large text: 3:1 contrast ratio
- UI components: 3:1 contrast ratio

### Focus Management

Consistent focus indicators:

```css
.loom-focus {
  outline: 2px solid var(--loom-primary);
  outline-offset: 2px;
}
```

### Screen Reader Support

All components include proper ARIA attributes and semantic HTML.

## Best Practices

### 1. Use Design Tokens

Always use design tokens instead of hardcoded values:

```css
/* Good */
.button {
  background-color: var(--loom-primary);
  padding: var(--loom-space-4);
  border-radius: var(--loom-radius-md);
}

/* Bad */
.button {
  background-color: #3b82f6;
  padding: 16px;
  border-radius: 6px;
}
```

### 2. Follow Component Patterns

Use established component patterns for consistency:

```tsx
// Good: Follows established pattern
<Button variant="primary" size="lg" disabled={isLoading}>
  {isLoading ? 'Loading...' : 'Submit'}
</Button>
```

### 3. Maintain Accessibility

Always consider accessibility when building components:

```tsx
// Good: Accessible button
<Button
  aria-label="Close dialog"
  aria-describedby="dialog-description"
  onClick={onClose}
>
  <CloseIcon aria-hidden="true" />
</Button>
```

## Next Steps

- 🎨 [Colors](./colors.md) - Explore the color system in detail
- 📝 [Typography](./typography.md) - Learn about typography guidelines
- 📏 [Spacing](./spacing.md) - Understand spacing and layout principles
- 🧩 [Components](./components.md) - Browse available components
- 🎯 [Tokens](./tokens.md) - Learn about design tokens
