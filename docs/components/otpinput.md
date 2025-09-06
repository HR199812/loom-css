# OTP Input Component

A component for entering one-time passwords or verification codes.

## Basic Usage

```tsx
import { Otpinput } from '@loom/otpinput';

function MyComponent() {
  return (
    <OTPInput 
  length={6}
  value={otp}
  onChange={setOtp}
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
<OTPInput 
  length={6}
  value={otp}
  onChange={setOtp}
/>
```

## Live Examples

### React Example
[View Live React Example](https://loom-css-react.vercel.app/components/otpinput)

### Vue Example
[View Live Vue Example](https://loom-css-vue.netlify.app/components/otpinput)

## Accessibility

The Otpinput component includes proper accessibility features:

- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Styling

The Otpinput component uses CSS custom properties for theming:

```css
:root {
  --loom-otpinput-background: #ffffff;
  --loom-otpinput-border-color: #e5e7eb;
  --loom-otpinput-border-radius: 6px;
  --loom-otpinput-padding: 0.5rem;
}
```
