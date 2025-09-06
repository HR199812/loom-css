# Title Component

A styled heading component with semantic HTML.

## Basic Usage

```tsx
import { Title } from '@loom/title';

function MyComponent() {
  return (
    <Title level={1}>Main Title</Title>
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
<Title level={1}>Main Title</Title>
```

## Live Examples

### React Example
[View Live React Example](https://loom-css-react.vercel.app/components/title)

### Vue Example
[View Live Vue Example](https://loom-css-vue.netlify.app/components/title)

## Accessibility

The Title component includes proper accessibility features:

- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Styling

The Title component uses CSS custom properties for theming:

```css
:root {
  --loom-title-background: #ffffff;
  --loom-title-border-color: #e5e7eb;
  --loom-title-border-radius: 6px;
  --loom-title-padding: 0.5rem;
}
```
