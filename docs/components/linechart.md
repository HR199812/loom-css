# Line Chart Component

A component for displaying data in line chart format.

## Basic Usage

```tsx
import { Linechart } from '@loom/linechart';

function MyComponent() {
  return (
    <LineChart 
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
<LineChart 
  data={chartData}
  width={400}
  height={300}
/>
```

## Live Examples

### React Example
[View Live React Example](https://loom-css-react.vercel.app/components/linechart)

### Vue Example
[View Live Vue Example](https://loom-css-vue.netlify.app/components/linechart)

## Accessibility

The Linechart component includes proper accessibility features:

- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Styling

The Linechart component uses CSS custom properties for theming:

```css
:root {
  --loom-linechart-background: #ffffff;
  --loom-linechart-border-color: #e5e7eb;
  --loom-linechart-border-radius: 6px;
  --loom-linechart-padding: 0.5rem;
}
```
