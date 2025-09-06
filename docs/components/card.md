# Card Component

The Card component provides a flexible container for grouping related content and actions.

## Basic Usage

```tsx
import { Card } from '@loom/card';

function MyComponent() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
      </Card.Header>
      <Card.Content>
        <p>Card content goes here</p>
      </Card.Content>
      <Card.Footer>
        <Button>Action</Button>
      </Card.Footer>
    </Card>
  );
}
```

## Variants

The Card component supports different visual variants:

- **default**: Standard card with subtle border
- **elevated**: Card with shadow elevation
- **outlined**: Card with prominent border
- **filled**: Card with background fill

## Sizes

- **sm**: Small card
- **md**: Medium card (default)
- **lg**: Large card
- **xl**: Extra large card

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'elevated' \| 'outlined' \| 'filled'` | `'default'` | Visual variant of the card |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Size of the card |
| `hoverable` | `boolean` | `false` | Whether card has hover effects |
| `clickable` | `boolean` | `false` | Whether card is clickable |
| `onClick` | `() => void` | - | Click handler for clickable cards |
| `className` | `string` | - | Additional CSS classes |
| `children` | `React.ReactNode` | - | Card content |

## Card Subcomponents

### Card.Header
Container for the card header content.

### Card.Title
Styled title component for the card header.

### Card.Content
Main content area of the card.

### Card.Footer
Container for the card footer content.

## Examples

### Basic Card

```tsx
<Card>
  <Card.Content>
    <p>This is a basic card with content.</p>
  </Card.Content>
</Card>
```

### Card with Header and Footer

```tsx
<Card>
  <Card.Header>
    <Card.Title>Product Card</Card.Title>
  </Card.Header>
  <Card.Content>
    <p>Product description and details.</p>
  </Card.Content>
  <Card.Footer>
    <Button variant="primary">Add to Cart</Button>
  </Card.Footer>
</Card>
```

### Different Variants

```tsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
  <Card variant="default">
    <Card.Content>Default Card</Card.Content>
  </Card>
  <Card variant="elevated">
    <Card.Content>Elevated Card</Card.Content>
  </Card>
  <Card variant="outlined">
    <Card.Content>Outlined Card</Card.Content>
  </Card>
  <Card variant="filled">
    <Card.Content>Filled Card</Card.Content>
  </Card>
</div>
```

### Clickable Card

```tsx
<Card 
  clickable 
  hoverable
  onClick={() => console.log('Card clicked!')}
>
  <Card.Content>
    <p>Click me!</p>
  </Card.Content>
</Card>
```

### Card with Image

```tsx
<Card>
  <img src="/image.jpg" alt="Card image" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
  <Card.Content>
    <Card.Title>Image Card</Card.Title>
    <p>Card with an image header.</p>
  </Card.Content>
</Card>
```

## Live Examples

### React Example
[View Live React Example](https://loom-css-react.vercel.app/components/card)

### Vue Example
[View Live Vue Example](https://loom-css-vue.netlify.app/components/card)

## Accessibility

The Card component includes proper accessibility features:

- Proper semantic HTML structure
- Keyboard navigation support for clickable cards
- Focus management
- ARIA attributes for interactive cards

## Styling

The Card component uses CSS custom properties for theming:

```css
:root {
  --loom-card-border-radius: 8px;
  --loom-card-border-color: #e5e7eb;
  --loom-card-background: #ffffff;
  --loom-card-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  --loom-card-padding: 1rem;
  --loom-card-gap: 0.75rem;
}
```
