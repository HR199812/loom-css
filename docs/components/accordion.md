# Accordion Component

A collapsible content component for organizing information in expandable sections.

## Basic Usage

```tsx
import { Accordion } from '@loom/accordion';

function MyComponent() {
  return (
    <Accordion>
  <Accordion.Item>
    <Accordion.Trigger>Section 1</Accordion.Trigger>
    <Accordion.Content>Content for section 1</Accordion.Content>
  </Accordion.Item>
  <Accordion.Item>
    <Accordion.Trigger>Section 2</Accordion.Trigger>
    <Accordion.Content>Content for section 2</Accordion.Content>
  </Accordion.Item>
</Accordion>
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
<Accordion>
  <Accordion.Item>
    <Accordion.Trigger>Section 1</Accordion.Trigger>
    <Accordion.Content>Content for section 1</Accordion.Content>
  </Accordion.Item>
  <Accordion.Item>
    <Accordion.Trigger>Section 2</Accordion.Trigger>
    <Accordion.Content>Content for section 2</Accordion.Content>
  </Accordion.Item>
</Accordion>
```

## Live Examples

### React Example
[View Live React Example](https://loom-css-react.vercel.app/components/accordion)

### Vue Example
[View Live Vue Example](https://loom-css-vue.netlify.app/components/accordion)

## Accessibility

The Accordion component includes proper accessibility features:

- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Styling

The Accordion component uses CSS custom properties for theming:

```css
:root {
  --loom-accordion-background: #ffffff;
  --loom-accordion-border-color: #e5e7eb;
  --loom-accordion-border-radius: 6px;
  --loom-accordion-padding: 0.5rem;
}
```
