# @loom/react

React UI components for the Loom Design System.

## Install

```sh
npm install @loom/react
```

## Loom Config Integration

You can provide a global config (like font family) to all Loom components using the `LoomConfigContext`:

```tsx
import { LoomConfigContext } from '@loom/react';

<LoomConfigContext.Provider value={{ fontFamily: 'Inter, sans-serif' }}>
  <App />
</LoomConfigContext.Provider>
```

Or, create a `loom.config.js` at your project root for future integration:

```js
// loom.config.js
module.exports = {
  fontFamily: 'Inter, sans-serif',
  // ...future config
};
```

## Usage

### Button
```tsx
import { Button } from '@loom/react';

<Button variant="primary">Click me</Button>
```

### Input (Generic)
```tsx
import { Input } from '@loom/react';

<Input
  title="Email"
  placeholder="Enter your email"
  regex={/^[^@\s]+@[^@\s]+\.[^@\s]+$/}
  type="danger"
  errorText="Please enter a valid email."
  width={300}
  onChange={(val, isValid) => console.log(val, isValid)}
/>
```

### Alert
```tsx
import { Alert } from '@loom/react';

<Alert
  title="Success!"
  message="Your changes have been saved successfully."
  type="success"
  closable
  onClose={() => console.log('Alert closed')}
/>
```

### Calendar
```tsx
import { Calendar } from '@loom/react';

<Calendar
  selectedDate={new Date()}
  onDateSelect={(date) => console.log('Selected:', date)}
  titleSize={20}
  titleWeight={700}
/>
```

#### Input Props
- `title`: string — Label above the input
- `placeholder`: string
- `regex`: RegExp — Validation regex
- `type`: 'info' | 'success' | 'warning' | 'danger' — Color/border style
- `errorText`: string — Error message below input
- `width`: string | number — Input width
- `customColor`: string — Custom text color class
- `customBorder`: string — Custom border class
- `onChange`: (value: string, isValid: boolean) => void
- `onClick`, `onSelect`, `onFocus`, ...rest: Standard input props

#### Alert Props
- `title`: string — Alert title (optional)
- `message`: string — Alert message content
- `type`: 'info' | 'success' | 'warning' | 'danger' — Alert style
- `closable`: boolean — Show close button
- `onClose`: () => void — Close handler
- `customColor`: string — Custom text color class
- `customBorder`: string — Custom border class
- `titleSize`, `titleWeight`: number | string — Title styling
- `messageSize`, `messageWeight`: number | string — Message styling
- `icon`: React.ReactNode — Custom icon

#### Calendar Props
- `selectedDate`: Date — Currently selected date
- `onDateSelect`: (date: Date) => void — Date selection handler
- `titleSize`, `titleWeight`: number | string — Month/year title styling
- `customColor`: string — Custom text color class
- `customBorder`: string — Custom border class

- **Font family** is inherited from LoomConfigContext or your app's CSS.
- **Title** is always above, **error** is always below with padding, both min font size 14px.
- **Red border** and error only show when input is non-empty and invalid.

## License
MIT
