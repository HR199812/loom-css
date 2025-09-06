# Table Component

A data table component for displaying structured data.

## Basic Usage

```tsx
import { Table } from '@loom/table';

function MyComponent() {
  return (
    <Table>
  <Table.Header>
    <Table.Row>
      <Table.Head>Name</Table.Head>
      <Table.Head>Email</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell>John Doe</Table.Cell>
      <Table.Cell>john@example.com</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
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
<Table>
  <Table.Header>
    <Table.Row>
      <Table.Head>Name</Table.Head>
      <Table.Head>Email</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell>John Doe</Table.Cell>
      <Table.Cell>john@example.com</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
```

## Live Examples

### React Example
[View Live React Example](https://loom-css-react.vercel.app/components/table)

### Vue Example
[View Live Vue Example](https://loom-css-vue.netlify.app/components/table)

## Accessibility

The Table component includes proper accessibility features:

- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Styling

The Table component uses CSS custom properties for theming:

```css
:root {
  --loom-table-background: #ffffff;
  --loom-table-border-color: #e5e7eb;
  --loom-table-border-radius: 6px;
  --loom-table-padding: 0.5rem;
}
```
