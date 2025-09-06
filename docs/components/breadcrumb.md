# Breadcrumb Component

A navigation component showing the current page location.

## Basic Usage

```tsx
import { Breadcrumb } from '@loom/breadcrumb';

function MyComponent() {
  return (
    <Breadcrumb>
  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
  <Breadcrumb.Item>Current Page</Breadcrumb.Item>
</Breadcrumb>
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
<Breadcrumb>
  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
  <Breadcrumb.Item>Current Page</Breadcrumb.Item>
</Breadcrumb>
```

## Live Examples

### React Example
[View Live React Example](https://loom-css-react.vercel.app/components/breadcrumb)

### Vue Example
[View Live Vue Example](https://loom-css-vue.netlify.app/components/breadcrumb)

## Accessibility

The Breadcrumb component includes proper accessibility features:

- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Styling

The Breadcrumb component uses CSS custom properties for theming:

```css
:root {
  --loom-breadcrumb-background: #ffffff;
  --loom-breadcrumb-border-color: #e5e7eb;
  --loom-breadcrumb-border-radius: 6px;
  --loom-breadcrumb-padding: 0.5rem;
}
```
