# Textarea Component

A multi-line text input component.

## Basic Usage

```tsx
import { Textarea } from '@loom/textarea';

function MyComponent() {
  return (
    <Textarea 
  placeholder="Enter your message"
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  rows={4}
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
<Textarea 
  placeholder="Enter your message"
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  rows={4}
/>
```

## Live Examples

### React Example
[View Live React Example](https://loom-css-react.vercel.app/components/textarea)

### Vue Example
[View Live Vue Example](https://loom-css-vue.netlify.app/components/textarea)

## Accessibility

The Textarea component includes proper accessibility features:

- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Styling

The Textarea component uses CSS custom properties for theming:

```css
:root {
  --loom-textarea-background: #ffffff;
  --loom-textarea-border-color: #e5e7eb;
  --loom-textarea-border-radius: 6px;
  --loom-textarea-padding: 0.5rem;
}
```
