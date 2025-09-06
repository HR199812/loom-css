# Button Component

The Button component is a fundamental interactive element that allows users to perform actions. It comes in various styles, sizes, and states to fit different use cases.

## Basic Usage

### React

```tsx
import { Button } from '@loom-css/react';

function App() {
  return <Button>Click me</Button>;
}
```

### Vue

```vue
<template>
  <LoomButton>Click me</LoomButton>
</template>

<script setup>
import { LoomButton } from '@loom-css/vue';
</script>
```

### CSS Only

```html
<button class="loom-btn">Click me</button>
```

## Live Examples

### Variants

```tsx live
import { Button } from '@loom-css/react';

function ButtonVariants() {
  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button variant="default">Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  );
}
```

### Sizes

```tsx live
import { Button } from '@loom-css/react';

function ButtonSizes() {
  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </Button>
    </div>
  );
}
```

### States

```tsx live
import { Button } from '@loom-css/react';

function ButtonStates() {
  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button>Normal</Button>
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>
    </div>
  );
}
```

### With Icons

```tsx live
import { Button } from '@loom-css/react';

function ButtonWithIcons() {
  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '0.5rem' }}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
        Star
      </Button>
      <Button variant="outline">
        Download
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: '0.5rem' }}>
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7,10 12,15 17,10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
      </Button>
    </div>
  );
}
```

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'destructive' \| 'link'` | `'default'` | The visual style variant of the button |
| `size` | `'sm' \| 'default' \| 'lg' \| 'icon'` | `'default'` | The size of the button |
| `disabled` | `boolean` | `false` | Whether the button is disabled |
| `loading` | `boolean` | `false` | Whether the button is in a loading state |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | The type of the button |
| `onClick` | `(event: MouseEvent) => void` | - | Click handler function |
| `className` | `string` | - | Additional CSS class names |
| `children` | `React.ReactNode` | - | Button content |

### CSS Classes

| Class | Description |
|-------|-------------|
| `.loom-btn` | Base button class |
| `.loom-btn--primary` | Primary variant |
| `.loom-btn--secondary` | Secondary variant |
| `.loom-btn--outline` | Outline variant |
| `.loom-btn--ghost` | Ghost variant |
| `.loom-btn--destructive` | Destructive variant |
| `.loom-btn--link` | Link variant |
| `.loom-btn--sm` | Small size |
| `.loom-btn--lg` | Large size |
| `.loom-btn--icon` | Icon size |
| `.loom-btn--disabled` | Disabled state |
| `.loom-btn--loading` | Loading state |

## Styling

### Custom Styling

You can customize button appearance using CSS:

```css
.custom-button {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  border: none;
  color: white;
  border-radius: 8px;
}

.custom-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
```

### CSS Custom Properties

Override button styles using CSS custom properties:

```css
:root {
  --loom-btn-primary-bg: #your-color;
  --loom-btn-primary-hover-bg: #your-hover-color;
  --loom-btn-border-radius: 8px;
}
```

## Accessibility

### Keyboard Navigation

- **Tab**: Focus the button
- **Enter/Space**: Activate the button
- **Escape**: Cancel action (for certain button types)

### Screen Reader Support

- Buttons have proper `role="button"` attributes
- Loading states are announced to screen readers
- Disabled states are properly communicated

### Best Practices

```tsx
// Good: Descriptive button text
<Button>Save Changes</Button>

// Good: Icon with text
<Button>
  <SaveIcon aria-hidden="true" />
  Save Changes
</Button>

// Good: Icon-only button with label
<Button aria-label="Close dialog">
  <CloseIcon aria-hidden="true" />
</Button>

// Avoid: Non-descriptive text
<Button>Click here</Button>
```

## Examples

### Form Actions

```tsx live
import { Button } from '@loom-css/react';

function FormActions() {
  return (
    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
      <Button variant="outline">Cancel</Button>
      <Button variant="primary">Save Changes</Button>
    </div>
  );
}
```

### Loading States

```tsx live
import { Button } from '@loom-css/react';
import { useState } from 'react';

function LoadingButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <Button 
      variant="primary" 
      loading={isLoading}
      onClick={handleClick}
    >
      {isLoading ? 'Processing...' : 'Submit Form'}
    </Button>
  );
}
```

### Button Group

```tsx live
import { Button } from '@loom-css/react';

function ButtonGroup() {
  return (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <Button variant="outline" size="sm">Previous</Button>
      <Button variant="outline" size="sm">1</Button>
      <Button variant="primary" size="sm">2</Button>
      <Button variant="outline" size="sm">3</Button>
      <Button variant="outline" size="sm">Next</Button>
    </div>
  );
}
```

## Migration Guide

### From v1 to v2

If you're upgrading from v1, here are the breaking changes:

```tsx
// v1
<Button appearance="primary" size="medium">Click me</Button>

// v2
<Button variant="primary" size="default">Click me</Button>
```

### CSS Class Changes

```css
/* v1 */
.loom-button--primary.loom-button--medium

/* v2 */
.loom-btn--primary.loom-btn--default
```

## Related Components

- [Input](./input.md) - Form input component
- [Card](./card.md) - Container component
- [Modal](./modal.md) - Overlay component
- [Navigation](./navigation.md) - Navigation components
