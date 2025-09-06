# Radio Component

A radio button component for single selection.

## Basic Usage

```tsx
import { Radio } from '@loom/radio';

function MyComponent() {
  return (
    <Radio 
  value="option1"
  checked={selectedOption === 'option1'}
  onChange={() => setSelectedOption('option1')}
  label="Option 1"
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
<Radio 
  value="option1"
  checked={selectedOption === 'option1'}
  onChange={() => setSelectedOption('option1')}
  label="Option 1"
/>
```

## Live Examples

### React Example
[View Live React Example](https://loom-css-react.vercel.app/components/radio)

### Vue Example
[View Live Vue Example](https://loom-css-vue.netlify.app/components/radio)

## Accessibility

The Radio component includes proper accessibility features:

- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Styling

The Radio component uses CSS custom properties for theming:

```css
:root {
  --loom-radio-background: #ffffff;
  --loom-radio-border-color: #e5e7eb;
  --loom-radio-border-radius: 6px;
  --loom-radio-padding: 0.5rem;
}
```
