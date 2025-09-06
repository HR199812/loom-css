# Individual Component Packages

Loom Design System now supports individual component packages, allowing you to install only the components you need and significantly reduce your bundle size.

## 🎯 Benefits

- **Smaller Bundle Size**: Install only what you need
- **Better Tree Shaking**: Unused components are automatically excluded
- **Faster Builds**: Less code to process
- **Selective Updates**: Update individual components without affecting others
- **Better Performance**: Reduced JavaScript payload

## 📦 Available Packages

### Core Package
```bash
npm install @loom/core
```
Contains design tokens, utilities, and CSS classes.

### Individual Components
```bash
# Basic Components
npm install @loom/button
npm install @loom/input
npm install @loom/card
npm install @loom/text
npm install @loom/title

# Layout Components
npm install @loom/grid
npm install @loom/section
npm install @loom/separator

# Form Components
npm install @loom/checkbox
npm install @loom/radio
npm install @loom/switch
npm install @loom/textarea
npm install @loom/dateinput
npm install @loom/searchinput
npm install @loom/dropdown
npm install @loom/range
npm install @loom/otpinput

# Navigation Components
npm install @loom/breadcrumb
npm install @loom/pagination
npm install @loom/tabs
npm install @loom/sidebar

# Feedback Components
npm install @loom/alert
npm install @loom/toast
npm install @loom/progressbar
npm install @loom/modal
npm install @loom/tooltip

# Data Display Components
npm install @loom/table
npm install @loom/lists
npm install @loom/badge
npm install @loom/avatar
npm install @loom/calendar
npm install @loom/accordion

# Advanced Components
npm install @loom/carousel
npm install @loom/chat
npm install @loom/commandpalette
npm install @loom/themeswitch
npm install @loom/togglegroup

# Chart Components
npm install @loom/barchart
npm install @loom/linechart

# Business Components
npm install @loom/paymentplan
```

### Complete Package (Meta Package)
```bash
npm install @loom/react
```
Installs all components at once (larger bundle size).

## 🚀 Quick Start

### 1. Install Core Package
```bash
npm install @loom/core
```

### 2. Install Individual Components
```bash
npm install @loom/button @loom/input @loom/card
```

### 3. Import and Use
```tsx
import { Button } from '@loom/button';
import { Input } from '@loom/input';
import { Card } from '@loom/card';

function App() {
  return (
    <Card>
      <Input placeholder="Enter text..." />
      <Button>Click me</Button>
    </Card>
  );
}
```

## 📊 Bundle Size Comparison

| Installation Method | Bundle Size | Components |
|-------------------|-------------|------------|
| `@loom/react` (all) | ~500KB | 40+ components |
| Individual packages | ~15KB each | 1 component |
| Core only | ~50KB | Utilities + tokens |

## 🛠️ Setup with Next.js

### 1. Install Dependencies
```bash
npm install @loom/core @loom/button @loom/input @loom/card
```

### 2. Add to globals.css
```css
@import "@loom/core/loom-utilities.css";
```

### 3. Configure Provider (Optional)
```tsx
import { LoomConfigProvider } from '@loom/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <LoomConfigProvider>
          {children}
        </LoomConfigProvider>
      </body>
    </html>
  );
}
```

## 🎨 Customization

### Using Design Tokens
```css
:root {
  --loom-color-primary: #your-color;
  --loom-spacing-md: 1rem;
  --loom-radius-lg: 0.5rem;
}
```

### Component Variants
```tsx
<Button variant="primary" size="lg">
  Primary Button
</Button>

<Card variant="elevated" hoverable>
  Elevated Card
</Card>
```

## 📝 Migration Guide

### From Complete Package to Individual Packages

**Before:**
```tsx
import { Button, Input, Card } from '@loom/react';
```

**After:**
```tsx
import { Button } from '@loom/button';
import { Input } from '@loom/input';
import { Card } from '@loom/card';
```

### Package.json Changes
```json
{
  "dependencies": {
    "@loom/core": "^0.0.1",
    "@loom/button": "^0.0.1",
    "@loom/input": "^0.0.1",
    "@loom/card": "^0.0.1"
  }
}
```

## 🔧 Development

### Building Individual Packages
```bash
# Build all packages
npm run build

# Build specific package
cd packages/components/button
npm run build
```

### Adding New Components
1. Create new package in `packages/components/`
2. Add to main `@loom/react` package dependencies
3. Update re-exports in `packages/react/src/index.ts`
4. Build and test

## 📚 Examples

### Minimal Setup
```tsx
// Only install what you need
import { Button } from '@loom/button';
import { Input } from '@loom/input';

function LoginForm() {
  return (
    <form>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button type="submit">Login</Button>
    </form>
  );
}
```

### Dashboard Setup
```tsx
// Install dashboard-specific components
import { Card } from '@loom/card';
import { Grid } from '@loom/grid';
import { BarChart } from '@loom/barchart';
import { Table } from '@loom/table';

function Dashboard() {
  return (
    <Grid columns={2} gap="lg">
      <Card title="Analytics">
        <BarChart data={chartData} />
      </Card>
      <Card title="Recent Activity">
        <Table data={tableData} />
      </Card>
    </Grid>
  );
}
```

## 🚀 Publishing

### Individual Packages
```bash
# Publish all packages
npm run publish:all

# Publish specific package
cd packages/components/button
npm publish
```

### Version Management
All packages follow semantic versioning and are published together to maintain compatibility.

## 📞 Support

- **Documentation**: [Loom Design System Docs](https://loom-design.dev)
- **Issues**: [GitHub Issues](https://github.com/loom-design/loom/issues)
- **Discussions**: [GitHub Discussions](https://github.com/loom-design/loom/discussions)

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.
