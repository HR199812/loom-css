# Tooltip Component

A component for displaying contextual information on hover.

## Basic Usage

```tsx
import { Tooltip } from '@loom/tooltip';

function MyComponent() {
  return (
    <Tooltip content="This is a tooltip">
  <Button>Hover me</Button>
</Tooltip>
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
<Tooltip content="This is a tooltip">
  <Button>Hover me</Button>
</Tooltip>
```

## Live Examples

### React Example
[View Live React Example](https://loom-css-react.vercel.app/components/tooltip)

### Vue Example
[View Live Vue Example](https://loom-css-vue.netlify.app/components/tooltip)

## Accessibility

The Tooltip component includes proper accessibility features:

- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Styling

The Tooltip component uses CSS custom properties for theming:

```css
:root {
  --loom-tooltip-background: #ffffff;
  --loom-tooltip-border-color: #e5e7eb;
  --loom-tooltip-border-radius: 6px;
  --loom-tooltip-padding: 0.5rem;
}
```
