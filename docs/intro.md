# Introduction

Welcome to **loom-css**, a modern, flexible CSS design system built for React and Vue applications. loom-css provides a comprehensive set of components, utilities, and design tokens that help you build beautiful, consistent user interfaces quickly and efficiently.

## What is loom-css?

loom-css is a design system that includes:

- 🎨 **Design Tokens**: Consistent colors, typography, spacing, and more
- 🧩 **Components**: Pre-built, accessible UI components for React and Vue
- 🛠️ **Utilities**: CSS utility classes for rapid development
- 📱 **Responsive**: Mobile-first design approach
- 🌙 **Theming**: Built-in light and dark theme support
- ♿ **Accessible**: WCAG compliant components out of the box

## Key Features

### 🚀 **Framework Agnostic**
- Works seamlessly with React and Vue
- CSS-only components for maximum compatibility
- Framework-specific wrappers for enhanced DX

### 🎯 **Developer Experience**
- TypeScript support
- Live code examples
- Comprehensive documentation
- Hot reload in development

### 🎨 **Design System**
- Consistent design tokens
- Customizable themes
- Component variants and sizes
- Design guidelines and best practices

### 📦 **Easy Integration**
- NPM packages for easy installation
- CDN support for quick prototyping
- Tree-shaking friendly
- Minimal bundle size impact

## Quick Start

Get started with loom-css in just a few steps:

### React
```bash
npm install @loom-css/react
```

```tsx
import { Button } from '@loom-css/react';

function App() {
  return <Button variant="primary">Hello loom-css!</Button>;
}
```

### Vue
```bash
npm install @loom-css/vue
```

```vue
<template>
  <LoomButton variant="primary">Hello loom-css!</LoomButton>
</template>

<script setup>
import { LoomButton } from '@loom-css/vue';
</script>
```

### CSS Only
```html
<link rel="stylesheet" href="https://unpkg.com/@loom-css/core@latest/dist/loom.css">
```

```html
<button class="loom-btn loom-btn--primary">Hello loom-css!</button>
```

## What's Next?

- 📖 [Installation Guide](./installation.md) - Learn how to install and set up loom-css
- ⚛️ [React Guide](./react/getting-started.md) - Get started with React components
- 🟢 [Vue Guide](./vue/getting-started.md) - Get started with Vue components
- 🎨 [Design System](./design-system/overview.md) - Explore the design system

## Community

Join our community to get help, share ideas, and contribute:

- 💬 [Discord](https://discord.gg/loom-css) - Chat with the community
- 🐛 [GitHub Issues](https://github.com/HR199812/loom-css/issues) - Report bugs and request features
- 📝 [GitHub Discussions](https://github.com/HR199812/loom-css/discussions) - Ask questions and share ideas

## License

loom-css is open source and available under the [MIT License](https://github.com/HR199812/loom-css/blob/main/LICENSE).
