# Input Component

The Input component provides a styled text input field with various configurations and states.

## Basic Usage

```tsx
import { Input } from '@loom/input';

function MyComponent() {
  return (
    <Input 
      placeholder="Enter your text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
```

## Variants

The Input component supports different visual variants:

- **default**: Standard input styling
- **filled**: Input with filled background
- **outlined**: Input with outlined border

## Sizes

- **sm**: Small size
- **md**: Medium size (default)
- **lg**: Large size

## States

- **default**: Normal state
- **error**: Error state with red styling
- **success**: Success state with green styling
- **disabled**: Disabled state

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'filled' \| 'outlined'` | `'default'` | Visual variant of the input |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the input |
| `state` | `'default' \| 'error' \| 'success' \| 'disabled'` | `'default'` | State of the input |
| `placeholder` | `string` | - | Placeholder text |
| `value` | `string` | - | Input value |
| `onChange` | `(e: ChangeEvent<HTMLInputElement>) => void` | - | Change handler |
| `disabled` | `boolean` | `false` | Whether input is disabled |
| `required` | `boolean` | `false` | Whether input is required |
| `type` | `string` | `'text'` | Input type |
| `label` | `string` | - | Label for the input |
| `helperText` | `string` | - | Helper text below input |
| `errorText` | `string` | - | Error text to display |

## Examples

### Basic Input

```tsx
<Input placeholder="Enter your name" />
```

### Input with Label and Helper Text

```tsx
<Input 
  label="Email Address"
  placeholder="Enter your email"
  helperText="We'll never share your email"
  type="email"
/>
```

### Input with Error State

```tsx
<Input 
  label="Password"
  type="password"
  state="error"
  errorText="Password must be at least 8 characters"
/>
```

### Different Sizes

```tsx
<div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
  <Input size="sm" placeholder="Small" />
  <Input size="md" placeholder="Medium" />
  <Input size="lg" placeholder="Large" />
</div>
```

### Different Variants

```tsx
<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
  <Input variant="default" placeholder="Default variant" />
  <Input variant="filled" placeholder="Filled variant" />
  <Input variant="outlined" placeholder="Outlined variant" />
</div>
```

## Live Examples

### React Example
[View Live React Example](https://loom-css-react.vercel.app/components/input)

### Vue Example
[View Live Vue Example](https://loom-css-vue.netlify.app/components/input)

## Accessibility

The Input component includes proper accessibility features:

- Proper labeling with `aria-label` or associated label elements
- Error state announcements for screen readers
- Keyboard navigation support
- Focus management

## Styling

The Input component uses CSS custom properties for theming:

```css
:root {
  --loom-input-border-color: #d1d5db;
  --loom-input-border-radius: 6px;
  --loom-input-padding: 0.5rem 0.75rem;
  --loom-input-font-size: 1rem;
  --loom-input-background: #ffffff;
  --loom-input-color: #111827;
}
```
