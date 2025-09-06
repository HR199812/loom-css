# Badge Component

A small component for displaying status, counts, or labels.

## Basic Usage

```tsx
import { Badge } from '@loom/badge';

function MyComponent() {
  return (
    <Badge variant="primary">New</Badge>
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
<Badge variant="primary">New</Badge>
```

## Live Examples

### React Example
[View Live React Example](https://loom-css-react.vercel.app/components/badge)

### Vue Example
[View Live Vue Example](https://loom-css-vue.netlify.app/components/badge)

## Accessibility

The Badge component includes proper accessibility features:

- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Styling

The Badge component uses CSS custom properties for theming:

```css
:root {
  --loom-badge-background: #ffffff;
  --loom-badge-border-color: #e5e7eb;
  --loom-badge-border-radius: 6px;
  --loom-badge-padding: 0.5rem;
}
```
