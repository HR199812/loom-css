# Tabs Component

A tabbed interface component for organizing content.

## Basic Usage

```tsx
import { Tabs } from '@loom/tabs';

function MyComponent() {
  return (
    <Tabs defaultValue="tab1">
  <Tabs.List>
    <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
    <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="tab1">Content 1</Tabs.Content>
  <Tabs.Content value="tab2">Content 2</Tabs.Content>
</Tabs>
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
<Tabs defaultValue="tab1">
  <Tabs.List>
    <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
    <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="tab1">Content 1</Tabs.Content>
  <Tabs.Content value="tab2">Content 2</Tabs.Content>
</Tabs>
```

## Live Examples

### React Example
[View Live React Example](https://loom-css-react.vercel.app/components/tabs)

### Vue Example
[View Live Vue Example](https://loom-css-vue.netlify.app/components/tabs)

## Accessibility

The Tabs component includes proper accessibility features:

- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Styling

The Tabs component uses CSS custom properties for theming:

```css
:root {
  --loom-tabs-background: #ffffff;
  --loom-tabs-border-color: #e5e7eb;
  --loom-tabs-border-radius: 6px;
  --loom-tabs-padding: 0.5rem;
}
```
