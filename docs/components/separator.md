# Separator Component

A visual separator component for dividing content.

## Basic Usage

```tsx
import { Separator } from '@loom/separator';

function MyComponent() {
  return (
    <Separator orientation="horizontal" />
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
<Separator orientation="horizontal" />
```

## Live Examples

### React Example
[View Live React Example](https://loom-css-react.vercel.app/components/separator)

### Vue Example
[View Live Vue Example](https://loom-css-vue.netlify.app/components/separator)

## Accessibility

The Separator component includes proper accessibility features:

- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Styling

The Separator component uses CSS custom properties for theming:

```css
:root {
  --loom-separator-background: #ffffff;
  --loom-separator-border-color: #e5e7eb;
  --loom-separator-border-radius: 6px;
  --loom-separator-padding: 0.5rem;
}
```
