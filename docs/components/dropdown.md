# Dropdown Component

A dropdown menu component for displaying options.

## Basic Usage

```tsx
import { Dropdown } from '@loom/dropdown';

function MyComponent() {
  return (
    <Dropdown>
  <Dropdown.Trigger>Open Menu</Dropdown.Trigger>
  <Dropdown.Content>
    <Dropdown.Item>Option 1</Dropdown.Item>
    <Dropdown.Item>Option 2</Dropdown.Item>
  </Dropdown.Content>
</Dropdown>
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
<Dropdown>
  <Dropdown.Trigger>Open Menu</Dropdown.Trigger>
  <Dropdown.Content>
    <Dropdown.Item>Option 1</Dropdown.Item>
    <Dropdown.Item>Option 2</Dropdown.Item>
  </Dropdown.Content>
</Dropdown>
```

## Live Examples

### React Example
[View Live React Example](https://loom-css-react.vercel.app/components/dropdown)

### Vue Example
[View Live Vue Example](https://loom-css-vue.netlify.app/components/dropdown)

## Accessibility

The Dropdown component includes proper accessibility features:

- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Styling

The Dropdown component uses CSS custom properties for theming:

```css
:root {
  --loom-dropdown-background: #ffffff;
  --loom-dropdown-border-color: #e5e7eb;
  --loom-dropdown-border-radius: 6px;
  --loom-dropdown-padding: 0.5rem;
}
```
