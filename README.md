# loom-css

A modern, flexible CSS design system built for React and Vue applications. loom-css provides a comprehensive set of components, utilities, and design tokens that help you build beautiful, consistent user interfaces quickly and efficiently.

## 🚀 Features

- **Framework Agnostic**: Works seamlessly with React, Vue, and vanilla JavaScript
- **Design System**: Comprehensive design tokens, consistent components, and built-in theming
- **Accessible**: WCAG compliant components with keyboard navigation and screen reader support
- **Performance**: Optimized for performance with minimal bundle size impact
- **Developer Experience**: TypeScript support, live code examples, and comprehensive documentation
- **Responsive**: Mobile-first design approach with consistent behavior across all devices

## 📦 Installation

### React
```bash
npm install @loom-css/react
```

### Vue
```bash
npm install @loom-css/vue
```

### CSS Only
```bash
npm install @loom-css/core
```

### CDN
```html
<link rel="stylesheet" href="https://unpkg.com/@loom-css/core@latest/dist/loom.css">
```

## 🎯 Quick Start

### React
```tsx
import { Button, Card, Input } from '@loom-css/react';

function App() {
  return (
    <div>
      <Button variant="primary">Hello World</Button>
      <Card>
        <Input placeholder="Enter your name" />
      </Card>
    </div>
  );
}
```

### Vue
```vue
<template>
  <div>
    <LoomButton variant="primary">Hello World</LoomButton>
    <LoomCard>
      <LoomInput placeholder="Enter your name" />
    </LoomCard>
  </div>
</template>

<script setup>
import { LoomButton, LoomCard, LoomInput } from '@loom-css/vue';
</script>
```

### CSS Only
```html
<button class="loom-btn loom-btn--primary">Hello World</button>
<div class="loom-card">
  <input class="loom-input" placeholder="Enter your name" />
</div>
```

## 📚 Documentation

Visit our comprehensive documentation at [loom-css.dev](https://loom-css.dev) to learn more about:

- [Getting Started](https://loom-css.dev/docs/intro)
- [Installation Guide](https://loom-css.dev/docs/installation)
- [React Components](https://loom-css.dev/docs/react/getting-started)
- [Vue Components](https://loom-css.dev/docs/vue/getting-started)
- [Design System](https://loom-css.dev/docs/design-system/overview)
- [Component Library](https://loom-css.dev/docs/components/button)

## 🛠️ Development

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### Setup
```bash
# Clone the repository
git clone https://github.com/HR199812/loom-css.git
cd loom-css

# Install dependencies
npm install

# Start development server
npm run dev

# Start documentation server
npm run docs:dev
```

### Available Scripts

#### Design System
- `npm run dev` - Start development server for all packages
- `npm run build` - Build all packages
- `npm run lint` - Lint all packages
- `npm run format` - Format code with Prettier
- `npm run check-types` - Type check all packages

#### Documentation
- `npm run docs:dev` - Start Docusaurus development server
- `npm run docs:build` - Build documentation for production
- `npm run docs:serve` - Serve built documentation locally
- `npm run docs:deploy` - Deploy documentation to GitHub Pages

#### Publishing
- `npm run publish:all` - Publish all packages to npm
- `npm run create:packages` - Create individual packages from monorepo

## 🏗️ Project Structure

```
loom-css/
├── apps/                    # Example applications
├── packages/               # Core packages
│   ├── components/         # React components
│   ├── components-vue/     # Vue components
│   ├── core/              # CSS core package
│   └── tokens/            # Design tokens
├── docs/                  # Documentation source
├── src/                   # Docusaurus source
├── scripts/               # Build and utility scripts
├── docusaurus.config.ts   # Docusaurus configuration
├── loom.config.js         # Design system configuration
└── turbo.json            # Turborepo configuration
```

## 🎨 Design System

loom-css is built on a comprehensive design system that includes:

### Design Tokens
- **Colors**: Semantic color system with light/dark theme support
- **Typography**: Consistent font families, sizes, and weights
- **Spacing**: 4px-based spacing scale
- **Border Radius**: Consistent corner radius values
- **Shadows**: Layered shadow system for depth

### Components
- **Button**: Multiple variants and sizes
- **Input**: Form input components
- **Card**: Container components
- **Modal**: Overlay components
- **Navigation**: Navigation components
- **Forms**: Form components and layouts

### Utilities
- **Layout**: Grid and flexbox utilities
- **Spacing**: Margin and padding utilities
- **Colors**: Color utilities
- **Typography**: Text utilities
- **Responsive**: Breakpoint utilities

## 🌙 Theming

loom-css supports both light and dark themes out of the box, with the ability to create custom themes:

```css
:root {
  --loom-primary: #3b82f6;
  --loom-secondary: #64748b;
  --loom-background: #ffffff;
  --loom-foreground: #0f172a;
}

[data-theme="dark"] {
  --loom-background: #0f172a;
  --loom-foreground: #f8fafc;
}
```

## ♿ Accessibility

All loom-css components are built with accessibility in mind:

- **WCAG 2.1 AA Compliant**: Meets accessibility standards
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Support**: Proper ARIA attributes
- **High Contrast**: Supports high contrast modes
- **Focus Management**: Clear focus indicators

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- iOS Safari (latest)
- Android Chrome (latest)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

### Code Style
- Use TypeScript for all new code
- Follow the existing code style
- Add JSDoc comments for public APIs
- Write tests for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Docusaurus](https://docusaurus.io/) for documentation
- Powered by [Turborepo](https://turbo.build/) for monorepo management
- Inspired by modern design systems like [Chakra UI](https://chakra-ui.com/) and [Mantine](https://mantine.dev/)

## 📞 Support

- 💬 [Discord Community](https://discord.gg/loom-css)
- 🐛 [GitHub Issues](https://github.com/HR199812/loom-css/issues)
- 📖 [Documentation](https://loom-css.dev)
- 📧 [Email Support](mailto:support@loom-css.dev)

---

Made with ❤️ by the loom-css team