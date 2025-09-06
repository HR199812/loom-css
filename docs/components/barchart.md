# Bar Chart Component

A component for displaying data in bar chart format.

## Basic Usage

```tsx
import { Barchart } from '@loom/barchart';

function MyComponent() {
  return (
    <BarChart 
  data={chartData}
  width={400}
  height={300}
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
<BarChart 
  data={chartData}
  width={400}
  height={300}
/>
```

## Live Examples

### React Example
[View Live React Example](https://loom-css-react.vercel.app/components/barchart)

### Vue Example
[View Live Vue Example](https://loom-css-vue.netlify.app/components/barchart)

## Accessibility

The Barchart component includes proper accessibility features:

- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Styling

The Barchart component uses CSS custom properties for theming:

```css
:root {
  --loom-barchart-background: #ffffff;
  --loom-barchart-border-color: #e5e7eb;
  --loom-barchart-border-radius: 6px;
  --loom-barchart-padding: 0.5rem;
}
```
