# Toast Component

A notification component for displaying temporary messages.

## Basic Usage

```tsx
import { Toast } from '@loom/toast';

function MyComponent() {
  return (
    <Toast 
  title="Success"
  description="Operation completed successfully"
  variant="success"
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
<Toast 
  title="Success"
  description="Operation completed successfully"
  variant="success"
/>
```

## Live Examples

### React Example
[View Live React Example](https://loom-css-react.vercel.app/components/toast)

### Vue Example
[View Live Vue Example](https://loom-css-vue.netlify.app/components/toast)

## Accessibility

The Toast component includes proper accessibility features:

- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Styling

The Toast component uses CSS custom properties for theming:

```css
:root {
  --loom-toast-background: #ffffff;
  --loom-toast-border-color: #e5e7eb;
  --loom-toast-border-radius: 6px;
  --loom-toast-padding: 0.5rem;
}
```
