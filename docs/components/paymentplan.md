# Payment Plan Component

A component for displaying pricing and payment plans.

## Basic Usage

```tsx
import { Paymentplan } from '@loom/paymentplan';

function MyComponent() {
  return (
    <PaymentPlan 
  title="Basic Plan"
  price="$9.99"
  features={['Feature 1', 'Feature 2']}
  onSelect={() => {}}
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
<PaymentPlan 
  title="Basic Plan"
  price="$9.99"
  features={['Feature 1', 'Feature 2']}
  onSelect={() => {}}
/>
```

## Live Examples

### React Example
[View Live React Example](https://loom-css-react.vercel.app/components/paymentplan)

### Vue Example
[View Live Vue Example](https://loom-css-vue.netlify.app/components/paymentplan)

## Accessibility

The Paymentplan component includes proper accessibility features:

- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Styling

The Paymentplan component uses CSS custom properties for theming:

```css
:root {
  --loom-paymentplan-background: #ffffff;
  --loom-paymentplan-border-color: #e5e7eb;
  --loom-paymentplan-border-radius: 6px;
  --loom-paymentplan-padding: 0.5rem;
}
```
