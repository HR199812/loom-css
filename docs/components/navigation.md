# Navigation Component

The Navigation component provides a flexible navigation bar with support for various layouts and menu items.

## Basic Usage

```tsx
import { Navigation } from '@loom/navigation';

function MyComponent() {
  return (
    <Navigation>
      <Navigation.Brand>My App</Navigation.Brand>
      <Navigation.Menu>
        <Navigation.Item href="/">Home</Navigation.Item>
        <Navigation.Item href="/about">About</Navigation.Item>
        <Navigation.Item href="/contact">Contact</Navigation.Item>
      </Navigation.Menu>
    </Navigation>
  );
}
```

## Variants

The Navigation component supports different visual variants:

- **default**: Standard navigation bar
- **transparent**: Transparent background
- **fixed**: Fixed position navigation
- **sticky**: Sticky position navigation

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'transparent' \| 'fixed' \| 'sticky'` | `'default'` | Visual variant of the navigation |
| `className` | `string` | - | Additional CSS classes |
| `children` | `React.ReactNode` | - | Navigation content |

## Navigation Subcomponents

### Navigation.Brand
Container for the brand/logo area.

### Navigation.Menu
Container for navigation menu items.

### Navigation.Item
Individual navigation menu item.

### Navigation.Dropdown
Dropdown menu for navigation items.

## Examples

### Basic Navigation

```tsx
<Navigation>
  <Navigation.Brand>My App</Navigation.Brand>
  <Navigation.Menu>
    <Navigation.Item href="/">Home</Navigation.Item>
    <Navigation.Item href="/about">About</Navigation.Item>
    <Navigation.Item href="/contact">Contact</Navigation.Item>
  </Navigation.Menu>
</Navigation>
```

### Navigation with Dropdown

```tsx
<Navigation>
  <Navigation.Brand>My App</Navigation.Brand>
  <Navigation.Menu>
    <Navigation.Item href="/">Home</Navigation.Item>
    <Navigation.Dropdown label="Products">
      <Navigation.Item href="/products/web">Web Development</Navigation.Item>
      <Navigation.Item href="/products/mobile">Mobile Apps</Navigation.Item>
      <Navigation.Item href="/products/design">Design</Navigation.Item>
    </Navigation.Dropdown>
    <Navigation.Item href="/contact">Contact</Navigation.Item>
  </Navigation.Menu>
</Navigation>
```

### Fixed Navigation

```tsx
<Navigation variant="fixed">
  <Navigation.Brand>My App</Navigation.Brand>
  <Navigation.Menu>
    <Navigation.Item href="/">Home</Navigation.Item>
    <Navigation.Item href="/about">About</Navigation.Item>
    <Navigation.Item href="/contact">Contact</Navigation.Item>
  </Navigation.Menu>
</Navigation>
```

### Navigation with Actions

```tsx
<Navigation>
  <Navigation.Brand>My App</Navigation.Brand>
  <Navigation.Menu>
    <Navigation.Item href="/">Home</Navigation.Item>
    <Navigation.Item href="/about">About</Navigation.Item>
    <Navigation.Item href="/contact">Contact</Navigation.Item>
  </Navigation.Menu>
  <Navigation.Actions>
    <Button variant="outline">Login</Button>
    <Button variant="primary">Sign Up</Button>
  </Navigation.Actions>
</Navigation>
```

## Live Examples

### React Example
[View Live React Example](https://loom-css-react.vercel.app/components/navigation)

### Vue Example
[View Live Vue Example](https://loom-css-vue.netlify.app/components/navigation)

## Accessibility

The Navigation component includes proper accessibility features:

- Semantic HTML structure with `<nav>` element
- Keyboard navigation support
- ARIA attributes for screen readers
- Focus management
- Skip links for keyboard users

## Styling

The Navigation component uses CSS custom properties for theming:

```css
:root {
  --loom-navigation-background: #ffffff;
  --loom-navigation-border-color: #e5e7eb;
  --loom-navigation-height: 4rem;
  --loom-navigation-padding: 0 1rem;
  --loom-navigation-z-index: 1000;
}
```
