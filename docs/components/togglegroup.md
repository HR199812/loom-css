# Toggle Group Component

A group of toggle buttons for multiple selection.

## Basic Usage

```tsx
import { Togglegroup } from '@loom/togglegroup';

function MyComponent() {
  return (
    <ToggleGroup 
  type="multiple"
  value={selectedItems}
  onValueChange={setSelectedItems}
>
  <ToggleGroup.Item value="item1">Item 1</ToggleGroup.Item>
  <ToggleGroup.Item value="item2">Item 2</ToggleGroup.Item>
</ToggleGroup>
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
<ToggleGroup 
  type="multiple"
  value={selectedItems}
  onValueChange={setSelectedItems}
>
  <ToggleGroup.Item value="item1">Item 1</ToggleGroup.Item>
  <ToggleGroup.Item value="item2">Item 2</ToggleGroup.Item>
</ToggleGroup>
```

## Live Examples

### React Example
[View Live React Example](https://loom-css-react.vercel.app/components/togglegroup)

### Vue Example
[View Live Vue Example](https://loom-css-vue.netlify.app/components/togglegroup)

## Accessibility

The Togglegroup component includes proper accessibility features:

- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Styling

The Togglegroup component uses CSS custom properties for theming:

```css
:root {
  --loom-togglegroup-background: #ffffff;
  --loom-togglegroup-border-color: #e5e7eb;
  --loom-togglegroup-border-radius: 6px;
  --loom-togglegroup-padding: 0.5rem;
}
```
