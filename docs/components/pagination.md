# Pagination Component

A component for navigating through paginated content.

## Basic Usage

```tsx
import { Pagination } from '@loom/pagination';

function MyComponent() {
  return (
    <Pagination 
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}
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
<Pagination 
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}
/>
```

## Live Examples

### React Example
[View Live React Example](https://loom-css-react.vercel.app/components/pagination)

### Vue Example
[View Live Vue Example](https://loom-css-vue.netlify.app/components/pagination)

## Accessibility

The Pagination component includes proper accessibility features:

- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Styling

The Pagination component uses CSS custom properties for theming:

```css
:root {
  --loom-pagination-background: #ffffff;
  --loom-pagination-border-color: #e5e7eb;
  --loom-pagination-border-radius: 6px;
  --loom-pagination-padding: 0.5rem;
}
```
