# Calendar Component

A date picker component for selecting dates.

## Basic Usage

```tsx
import { Calendar } from '@loom/calendar';

function MyComponent() {
  return (
    <Calendar 
  selected={selectedDate}
  onSelect={setSelectedDate}
  mode="single"
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
<Calendar 
  selected={selectedDate}
  onSelect={setSelectedDate}
  mode="single"
/>
```

## Live Examples

### React Example
[View Live React Example](https://loom-css-react.vercel.app/components/calendar)

### Vue Example
[View Live Vue Example](https://loom-css-vue.netlify.app/components/calendar)

## Accessibility

The Calendar component includes proper accessibility features:

- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Styling

The Calendar component uses CSS custom properties for theming:

```css
:root {
  --loom-calendar-background: #ffffff;
  --loom-calendar-border-color: #e5e7eb;
  --loom-calendar-border-radius: 6px;
  --loom-calendar-padding: 0.5rem;
}
```
