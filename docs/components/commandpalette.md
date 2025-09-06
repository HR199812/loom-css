# Command Palette Component

A searchable command palette for quick actions.

## Basic Usage

```tsx
import { Commandpalette } from '@loom/commandpalette';

function MyComponent() {
  return (
    <CommandPalette 
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  commands={commands}
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
<CommandPalette 
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  commands={commands}
/>
```

## Live Examples

### React Example
[View Live React Example](https://loom-css-react.vercel.app/components/commandpalette)

### Vue Example
[View Live Vue Example](https://loom-css-vue.netlify.app/components/commandpalette)

## Accessibility

The Commandpalette component includes proper accessibility features:

- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Styling

The Commandpalette component uses CSS custom properties for theming:

```css
:root {
  --loom-commandpalette-background: #ffffff;
  --loom-commandpalette-border-color: #e5e7eb;
  --loom-commandpalette-border-radius: 6px;
  --loom-commandpalette-padding: 0.5rem;
}
```
