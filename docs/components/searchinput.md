# Search Input Component

A specialized input component with search functionality.

## Basic Usage

```tsx
import { Searchinput } from '@loom/searchinput';

function MyComponent() {
  return (
    <SearchInput 
  placeholder="Search..."
  value={searchTerm}
  onChange={setSearchTerm}
  onSearch={handleSearch}
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
<SearchInput 
  placeholder="Search..."
  value={searchTerm}
  onChange={setSearchTerm}
  onSearch={handleSearch}
/>
```

## Live Examples

### React Example
[View Live React Example](https://loom-css-react.vercel.app/components/searchinput)

### Vue Example
[View Live Vue Example](https://loom-css-vue.netlify.app/components/searchinput)

## Accessibility

The Searchinput component includes proper accessibility features:

- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Styling

The Searchinput component uses CSS custom properties for theming:

```css
:root {
  --loom-searchinput-background: #ffffff;
  --loom-searchinput-border-color: #e5e7eb;
  --loom-searchinput-border-radius: 6px;
  --loom-searchinput-padding: 0.5rem;
}
```
