# Avatar Component

A component for displaying user profile pictures or initials.

## Basic Usage

```tsx
import { Avatar } from '@loom/avatar';

function MyComponent() {
  return (
    <Avatar src="/user.jpg" alt="User" size="md" />
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
<Avatar src="/user.jpg" alt="User" size="md" />
```

## Live Examples

### React Example
[View Live React Example](https://loom-css-react.vercel.app/components/avatar)

### Vue Example
[View Live Vue Example](https://loom-css-vue.netlify.app/components/avatar)

## Accessibility

The Avatar component includes proper accessibility features:

- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Styling

The Avatar component uses CSS custom properties for theming:

```css
:root {
  --loom-avatar-background: #ffffff;
  --loom-avatar-border-color: #e5e7eb;
  --loom-avatar-border-radius: 6px;
  --loom-avatar-padding: 0.5rem;
}
```
