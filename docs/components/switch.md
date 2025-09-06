# Switch Component

A toggle switch component for boolean values.

## Basic Usage

```tsx
import { Switch } from '@loom/switch';

function MyComponent() {
  return (
    <Switch 
  checked={isEnabled}
  onCheckedChange={setIsEnabled}
  label="Enable notifications"
/>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |
| `children` | `React.ReactNode` | - | Component content |

## Examples

### Basic Usage

```tsx
<Switch 
  checked={isEnabled}
  onCheckedChange={setIsEnabled}
  label="Enable notifications"
/>
```

## Live Examples

### React Example
[View Live React Example](https://loom-css-react.vercel.app/components/switch)

### Vue Example
[View Live Vue Example](https://loom-css-vue.netlify.app/components/switch)

## Accessibility

The Switch component includes proper accessibility features:

- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Styling

The Switch component uses CSS custom properties for theming:

```css
:root {
  --loom-switch-background: #ffffff;
  --loom-switch-border-color: #e5e7eb;
  --loom-switch-border-radius: 6px;
  --loom-switch-padding: 0.5rem;
}
```
