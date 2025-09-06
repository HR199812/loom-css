# Grid Component

A flexible grid layout component.

## Basic Usage

```tsx
import { Grid } from '@loom/grid';

function MyComponent() {
  return (
    <Grid columns={3} gap="1rem">
  <Grid.Item>Item 1</Grid.Item>
  <Grid.Item>Item 2</Grid.Item>
  <Grid.Item>Item 3</Grid.Item>
</Grid>
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
<Grid columns={3} gap="1rem">
  <Grid.Item>Item 1</Grid.Item>
  <Grid.Item>Item 2</Grid.Item>
  <Grid.Item>Item 3</Grid.Item>
</Grid>
```

## Live Examples

### React Example
[View Live React Example](https://loom-css-react.vercel.app/components/grid)

### Vue Example
[View Live Vue Example](https://loom-css-vue.netlify.app/components/grid)

## Accessibility

The Grid component includes proper accessibility features:

- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Styling

The Grid component uses CSS custom properties for theming:

```css
:root {
  --loom-grid-background: #ffffff;
  --loom-grid-border-color: #e5e7eb;
  --loom-grid-border-radius: 6px;
  --loom-grid-padding: 0.5rem;
}
```
