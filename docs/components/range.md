# Range Component

A slider component for selecting values within a range.

## Basic Usage

```tsx
import { Range } from '@loom/range';

function MyComponent() {
  return (
    <Range 
  min={0}
  max={100}
  value={value}
  onChange={setValue}
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
<Range 
  min={0}
  max={100}
  value={value}
  onChange={setValue}
/>
```

## Live Examples

### React Example
[View Live React Example](https://loom-css-react.vercel.app/components/range)

### Vue Example
[View Live Vue Example](https://loom-css-vue.netlify.app/components/range)

## Accessibility

The Range component includes proper accessibility features:

- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Styling

The Range component uses CSS custom properties for theming:

```css
:root {
  --loom-range-background: #ffffff;
  --loom-range-border-color: #e5e7eb;
  --loom-range-border-radius: 6px;
  --loom-range-padding: 0.5rem;
}
```
