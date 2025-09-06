# Installation

This guide will help you install and set up loom-css in your project. Choose the installation method that best fits your needs.

## Prerequisites

- Node.js 18+ (for React/Vue packages)
- npm, yarn, or pnpm package manager

## Installation Methods

### 1. React Package

Install the React-specific package for the best developer experience:

```bash
npm install @loom-css/react
# or
yarn add @loom-css/react
# or
pnpm add @loom-css/react
```

### 2. Vue Package

Install the Vue-specific package:

```bash
npm install @loom-css/vue
# or
yarn add @loom-css/vue
# or
pnpm add @loom-css/vue
```

### 3. Core CSS Package

For CSS-only usage or custom framework integration:

```bash
npm install @loom-css/core
# or
yarn add @loom-css/core
# or
pnpm add @loom-css/core
```

### 4. CDN (Quick Start)

For quick prototyping or simple HTML projects:

```html
<!-- Latest version -->
<link rel="stylesheet" href="https://unpkg.com/@loom-css/core@latest/dist/loom.css">

<!-- Specific version -->
<link rel="stylesheet" href="https://unpkg.com/@loom-css/core@1.0.0/dist/loom.css">
```

## Framework Setup

### React Setup

1. **Install the package:**
   ```bash
   npm install @loom-css/react
   ```

2. **Import and use components:**
   ```tsx
   import { Button, Card, Input } from '@loom-css/react';

   function App() {
     return (
       <div>
         <Button variant="primary">Click me</Button>
         <Card>
           <Input placeholder="Enter text..." />
         </Card>
       </div>
     );
   }
   ```

3. **Optional: Import CSS for custom styling:**
   ```tsx
   import '@loom-css/core/dist/loom.css';
   ```

### Vue Setup

1. **Install the package:**
   ```bash
   npm install @loom-css/vue
   ```

2. **Register components globally (optional):**
   ```js
   // main.js
   import { createApp } from 'vue';
   import LoomCSS from '@loom-css/vue';
   import App from './App.vue';

   const app = createApp(App);
   app.use(LoomCSS);
   app.mount('#app');
   ```

3. **Use components in templates:**
   ```vue
   <template>
     <div>
       <LoomButton variant="primary">Click me</LoomButton>
       <LoomCard>
         <LoomInput placeholder="Enter text..." />
       </LoomCard>
     </div>
   </template>

   <script setup>
   import { LoomButton, LoomCard, LoomInput } from '@loom-css/vue';
   </script>
   ```

### CSS-Only Setup

1. **Install the core package:**
   ```bash
   npm install @loom-css/core
   ```

2. **Import CSS in your main stylesheet:**
   ```css
   @import '@loom-css/core/dist/loom.css';
   ```

3. **Use CSS classes in your HTML:**
   ```html
   <button class="loom-btn loom-btn--primary">Click me</button>
   <div class="loom-card">
     <input class="loom-input" placeholder="Enter text..." />
   </div>
   ```

## TypeScript Support

All packages include TypeScript definitions:

```tsx
import { Button, ButtonProps } from '@loom-css/react';

const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

## Configuration

### Custom Theme

You can customize the theme by overriding CSS custom properties:

```css
:root {
  --loom-primary: #your-color;
  --loom-secondary: #your-color;
  --loom-font-family: 'Your Font', sans-serif;
}
```

### Build Tools Integration

#### Vite
```js
// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@loom-css/core/dist/loom.css';`
      }
    }
  }
});
```

#### Webpack
```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('@loom-css/core/postcss')
                ]
              }
            }
          }
        ]
      }
    ]
  }
};
```

## Next Steps

- 📖 [React Getting Started](./react/getting-started.md) - Learn React-specific features
- 🟢 [Vue Getting Started](./vue/getting-started.md) - Learn Vue-specific features
- 🎨 [Design System Overview](./design-system/overview.md) - Explore design tokens and theming
- 🧩 [Components](./components/button.md) - Browse available components

## Troubleshooting

### Common Issues

**Q: Components not styling correctly**
A: Make sure you've imported the CSS file or installed the core package.

**Q: TypeScript errors**
A: Ensure you have the latest version installed and TypeScript is properly configured.

**Q: Build errors with CSS**
A: Check your build tool configuration and ensure CSS processing is set up correctly.

### Getting Help

- 💬 [Discord Community](https://discord.gg/loom-css)
- 🐛 [GitHub Issues](https://github.com/HR199812/loom-css/issues)
- 📖 [Documentation](./intro.md)
