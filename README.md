# Loom Design System

A modern, open-source design system inspired by Tailwind CSS and shadcn/ui. Loom provides design tokens, React components, and utilities for building beautiful, consistent UIs across your projects.

---

## Features
- **Design Tokens:** Centralized color, spacing, and typography tokens.
- **React Components:** Accessible, customizable UI components.
- **Utility Primitives:** (Planned) Utility CSS classes for rapid prototyping.
- **TypeScript Support:** Fully typed for safety and autocompletion.
- **Monorepo:** All packages managed together for easy contribution and updates.

---

## Packages
- [`@loom/core`](./packages/core): Design tokens (colors, spacing, typography) and utilities.
- [`@loom/react`](./packages/react): Headless and styled React UI components.
- [`@loom/ui`](./packages/ui): (Planned) Utility CSS classes and primitives.

---

## Getting Started

### 1. Install
```sh
npm install @loom/react @loom/core
```

### 2. Usage Example
```tsx
import { Button } from '@loom/react';

<Button variant="primary">Click me</Button>
```

---

## Contributing
We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

- Fork the repo and create your branch from `main`.
- Add/Update tests for new features or bug fixes.
- Ensure code passes lint and type checks.

---

## License
[MIT](./LICENSE) © Loom Contributors

---

## Links
- [GitHub Repository](https://github.com/HR199812/loom-css)
