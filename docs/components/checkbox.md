# Checkbox Component

A checkbox input component for selecting multiple options.

## Basic Usage

```tsx
import { Checkbox } from '@loom/checkbox';

function MyComponent() {
  return (
    <Checkbox 
  checked={isChecked}
  onCheckedChange={setIsChecked}
  label="Accept terms and conditions"
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
<Checkbox 
  checked={isChecked}
  onCheckedChange={setIsChecked}
  label="Accept terms and conditions"
/>
```

## Live Examples

### React Example
[View Live React Example](https://loom-css-react.vercel.app/components/checkbox)

### Vue Example
[View Live Vue Example](https://loom-css-vue.netlify.app/components/checkbox)

## Accessibility

The Checkbox component includes proper accessibility features:

- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Styling

The Checkbox component uses CSS custom properties for theming:

```css
:root {
  --loom-checkbox-background: #ffffff;
  --loom-checkbox-border-color: #e5e7eb;
  --loom-checkbox-border-radius: 6px;
  --loom-checkbox-padding: 0.5rem;
}
```
