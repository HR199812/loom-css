# Alert Component

A component for displaying important messages and notifications.

## Basic Usage

```tsx
import { Alert } from '@loom/alert';

function MyComponent() {
  return (
    <Alert variant="info">
  <Alert.Title>Information</Alert.Title>
  <Alert.Description>This is an informational alert.</Alert.Description>
</Alert>
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
<Alert variant="info">
  <Alert.Title>Information</Alert.Title>
  <Alert.Description>This is an informational alert.</Alert.Description>
</Alert>
```

## Live Examples

### React Example
[View Live React Example](https://loom-css-react.vercel.app/components/alert)

### Vue Example
[View Live Vue Example](https://loom-css-vue.netlify.app/components/alert)

## Accessibility

The Alert component includes proper accessibility features:

- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Styling

The Alert component uses CSS custom properties for theming:

```css
:root {
  --loom-alert-background: #ffffff;
  --loom-alert-border-color: #e5e7eb;
  --loom-alert-border-radius: 6px;
  --loom-alert-padding: 0.5rem;
}
```
