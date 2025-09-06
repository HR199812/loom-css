# Progress Bar Component

A component for displaying progress or loading states.

## Basic Usage

```tsx
import { Progressbar } from '@loom/progressbar';

function MyComponent() {
  return (
    <ProgressBar 
  value={progress}
  max={100}
  label="Loading..."
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
<ProgressBar 
  value={progress}
  max={100}
  label="Loading..."
/>
```

## Live Examples

### React Example
[View Live React Example](https://loom-css-react.vercel.app/components/progressbar)

### Vue Example
[View Live Vue Example](https://loom-css-vue.netlify.app/components/progressbar)

## Accessibility

The Progressbar component includes proper accessibility features:

- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Styling

The Progressbar component uses CSS custom properties for theming:

```css
:root {
  --loom-progressbar-background: #ffffff;
  --loom-progressbar-border-color: #e5e7eb;
  --loom-progressbar-border-radius: 6px;
  --loom-progressbar-padding: 0.5rem;
}
```
