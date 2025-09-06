# Sidebar Component

A collapsible sidebar navigation component.

## Basic Usage

```tsx
import { Sidebar } from '@loom/sidebar';

function MyComponent() {
  return (
    <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <Sidebar.Content>Sidebar content</Sidebar.Content>
</Sidebar>
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
<Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <Sidebar.Content>Sidebar content</Sidebar.Content>
</Sidebar>
```

## Live Examples

### React Example
[View Live React Example](https://loom-css-react.vercel.app/components/sidebar)

### Vue Example
[View Live Vue Example](https://loom-css-vue.netlify.app/components/sidebar)

## Accessibility

The Sidebar component includes proper accessibility features:

- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Styling

The Sidebar component uses CSS custom properties for theming:

```css
:root {
  --loom-sidebar-background: #ffffff;
  --loom-sidebar-border-color: #e5e7eb;
  --loom-sidebar-border-radius: 6px;
  --loom-sidebar-padding: 0.5rem;
}
```
