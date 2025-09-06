# Theme Switch Component

A component for switching between light and dark themes.

## Basic Usage

```tsx
import { Themeswitch } from '@loom/themeswitch';

function MyComponent() {
  return (
    <ThemeSwitch 
  theme={theme}
  onThemeChange={setTheme}
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
<ThemeSwitch 
  theme={theme}
  onThemeChange={setTheme}
/>
```

## Live Examples

### React Example
[View Live React Example](https://loom-css-react.vercel.app/components/themeswitch)

### Vue Example
[View Live Vue Example](https://loom-css-vue.netlify.app/components/themeswitch)

## Accessibility

The Themeswitch component includes proper accessibility features:

- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Styling

The Themeswitch component uses CSS custom properties for theming:

```css
:root {
  --loom-themeswitch-background: #ffffff;
  --loom-themeswitch-border-color: #e5e7eb;
  --loom-themeswitch-border-radius: 6px;
  --loom-themeswitch-padding: 0.5rem;
}
```
