# Carousel Component

A component for displaying content in a sliding carousel.

## Basic Usage

```tsx
import { Carousel } from '@loom/carousel';

function MyComponent() {
  return (
    <Carousel>
  <Carousel.Item>Slide 1</Carousel.Item>
  <Carousel.Item>Slide 2</Carousel.Item>
  <Carousel.Item>Slide 3</Carousel.Item>
</Carousel>
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
<Carousel>
  <Carousel.Item>Slide 1</Carousel.Item>
  <Carousel.Item>Slide 2</Carousel.Item>
  <Carousel.Item>Slide 3</Carousel.Item>
</Carousel>
```

## Live Examples

### React Example
[View Live React Example](https://loom-css-react.vercel.app/components/carousel)

### Vue Example
[View Live Vue Example](https://loom-css-vue.netlify.app/components/carousel)

## Accessibility

The Carousel component includes proper accessibility features:

- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Styling

The Carousel component uses CSS custom properties for theming:

```css
:root {
  --loom-carousel-background: #ffffff;
  --loom-carousel-border-color: #e5e7eb;
  --loom-carousel-border-radius: 6px;
  --loom-carousel-padding: 0.5rem;
}
```
