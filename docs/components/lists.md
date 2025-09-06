# Lists Component

A component for displaying ordered and unordered lists.

## Basic Usage

```tsx
import { Lists } from '@loom/lists';

function MyComponent() {
  return (
    <List>
  <List.Item>First item</List.Item>
  <List.Item>Second item</List.Item>
  <List.Item>Third item</List.Item>
</List>
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
<List>
  <List.Item>First item</List.Item>
  <List.Item>Second item</List.Item>
  <List.Item>Third item</List.Item>
</List>
```

## Live Examples

### React Example
[View Live React Example](https://loom-css-react.vercel.app/components/lists)

### Vue Example
[View Live Vue Example](https://loom-css-vue.netlify.app/components/lists)

## Accessibility

The Lists component includes proper accessibility features:

- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Styling

The Lists component uses CSS custom properties for theming:

```css
:root {
  --loom-lists-background: #ffffff;
  --loom-lists-border-color: #e5e7eb;
  --loom-lists-border-radius: 6px;
  --loom-lists-padding: 0.5rem;
}
```
