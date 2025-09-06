# Date Input Component

A specialized input component for date selection.

## Basic Usage

```tsx
import { Dateinput } from '@loom/dateinput';

function MyComponent() {
  return (
    <DateInput 
  value={date}
  onChange={setDate}
  placeholder="Select date"
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
<DateInput 
  value={date}
  onChange={setDate}
  placeholder="Select date"
/>
```

## Live Examples

### React Example
[View Live React Example](https://loom-css-react.vercel.app/components/dateinput)

### Vue Example
[View Live Vue Example](https://loom-css-vue.netlify.app/components/dateinput)

## Accessibility

The Dateinput component includes proper accessibility features:

- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Styling

The Dateinput component uses CSS custom properties for theming:

```css
:root {
  --loom-dateinput-background: #ffffff;
  --loom-dateinput-border-color: #e5e7eb;
  --loom-dateinput-border-radius: 6px;
  --loom-dateinput-padding: 0.5rem;
}
```
