# Text Component

A styled text component with various typography options.

## Basic Usage

```tsx
import { Text } from '@loom/text';

function MyComponent() {
  return (
    <Text variant="body" size="md">This is some text content.</Text>
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
<Text variant="body" size="md">This is some text content.</Text>
```

## Live Examples

### React Example
[View Live React Example](https://loom-css-react.vercel.app/components/text)

### Vue Example
[View Live Vue Example](https://loom-css-vue.netlify.app/components/text)

## Accessibility

The Text component includes proper accessibility features:

- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Styling

The Text component uses CSS custom properties for theming:

```css
:root {
  --loom-text-background: #ffffff;
  --loom-text-border-color: #e5e7eb;
  --loom-text-border-radius: 6px;
  --loom-text-padding: 0.5rem;
}
```
