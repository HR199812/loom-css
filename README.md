# Loom Design System

A modern, open-source design system inspired by Tailwind CSS and shadcn/ui. Loom provides design tokens, React components, and utilities for building beautiful, consistent UIs across your projects.

---

## Features
- **Design Tokens:** Centralized color, spacing, and typography tokens.
- **React Components:** Accessible, customizable UI components (Button, Input, Alert, Calendar).
- **Utility Primitives:** (Planned) Utility CSS classes for rapid prototyping.
- **TypeScript Support:** Fully typed for safety and autocompletion.
- **Monorepo:** All packages managed together for easy contribution and updates.
- **Font Integration:** Seamless font family integration with your app.

---

## Packages
- [`@loom/core`](./packages/core): Design tokens (colors, spacing, typography) and utilities.
- [`@loom/react`](./packages/react): Headless and styled React UI components.
- [`@loom/ui`](./packages/ui): (Planned) Utility CSS classes and primitives.

---

## Installation

### 1. Install Dependencies
```sh
npm install @loom/react @loom/core
```

### 2. Setup Font Integration (Optional)
Add to your app's `globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

:root {
  --loom-font-family: 'Rubik', Inter, Segoe UI, Arial, sans-serif;
}

html, body {
  font-family: var(--loom-font-family);
}
```

### 3. Create Loom Config (Optional)
Create `loom.config.js` in your project root:
```js
module.exports = {
  fontFamily: 'Rubik, Inter, Segoe UI, Arial, sans-serif',
  // Add more config options here
};
```

---

## Usage

### Basic Setup
```tsx
import { Button, Input, Alert, Calendar } from '@loom/react';

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Input title="Email" placeholder="Enter your email" />
      <Alert message="Welcome to Loom!" type="info" />
      <Calendar onDateSelect={(date) => console.log(date)} />
    </div>
  );
}
```

### Advanced Usage with Props
```tsx
import { Input, Alert, Calendar } from '@loom/react';

function AdvancedExample() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      {/* Input with validation */}
      <Input
        title="Email Address"
        placeholder="Enter your email"
        regex={/^[^@\s]+@[^@\s]+\.[^@\s]+$/}
        type="danger"
        errorText="Please enter a valid email."
        width="300px"
        titleSize={16}
        titleWeight={600}
        onChange={(val, isValid) => console.log(val, isValid)}
      />

      {/* Alert with custom styling */}
      <Alert
        title="Success!"
        message="Your changes have been saved successfully."
        type="success"
        closable
        titleSize={18}
        titleWeight={700}
        onClose={() => console.log('Alert closed')}
      />

      {/* Calendar with selection */}
      <Calendar
        selectedDate={selectedDate}
        onDateSelect={setSelectedDate}
        titleSize={20}
        titleWeight={700}
        customColor="#1f2937"
      />
    </div>
  );
}
```

---

## Components

### Button
Simple button component with variants.
```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
```

### Input
Advanced input with validation, styling, and error handling.
```tsx
<Input
  title="Email"
  placeholder="Enter your email"
  regex={/^[^@\s]+@[^@\s]+\.[^@\s]+$/}
  type="info"
  errorText="Invalid email"
  width="300px"
  onChange={(val, isValid) => console.log(val, isValid)}
/>
```

### Alert
Notification component with different types and close functionality.
```tsx
<Alert
  title="Success!"
  message="Operation completed successfully."
  type="success"
  closable
  onClose={() => console.log('Closed')}
/>
```

### Calendar
Interactive calendar with date selection and current date highlighting.
```tsx
<Calendar
  selectedDate={new Date()}
  onDateSelect={(date) => console.log('Selected:', date)}
  titleSize={20}
  titleWeight={700}
/>
```

---

## Development

### Running the Project
```sh
# Install dependencies
npm install

# Start development server
npm run dev

# Build all packages
npm run build

# Run linting
npm run lint
```

### Project Structure
```
packages/
├── core/           # Design tokens and utilities
├── react/          # React components
└── ui/             # (Planned) CSS utilities

apps/
├── web/            # Next.js demo app
└── docs/           # Documentation site
```

---

## Contributing
We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

- Fork the repo and create your branch from `main`.
- Add/Update tests for new features or bug fixes.
- Ensure code passes lint and type checks.
- Follow the existing code style and patterns.

---

## License
[MIT](./LICENSE) © Loom Contributors

---

## Links
- [GitHub Repository](https://github.com/HR199812/loom-css)
- [NPM Package](https://www.npmjs.com/package/@loom/react)
