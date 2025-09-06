# Loom Vue.js Example App

This is a comprehensive Vue.js application showcasing all the individual Loom Design System components for Vue.js.

## 🎯 Features

- **Individual Component Packages**: Uses individual `@loom-vue/*` packages for optimal bundle size
- **Complete Component Showcase**: Demonstrates all 40+ Vue.js components
- **Interactive Examples**: Live examples with state management
- **TypeScript Support**: Full TypeScript integration
- **Modern Vue.js**: Built with Vue 3 and Composition API

## 📦 Components Showcased

### Basic Components
- Button (Primary, Secondary, Outline, Danger variants)
- Input (Text input with validation)
- Card (Container component)
- Text (Typography component)
- Title (Heading component)

### Form Components
- Switch (Toggle switch)
- Checkbox (Checkbox with label)
- Radio (Radio button group)
- Slider (Range slider)

### Data Display
- Avatar (User avatar with initials)
- Badge (Status badges)
- ProgressBar (Loading progress)
- Spinner (Loading spinner)

### Layout Components
- Grid (Grid layout system)
- Flex (Flexbox layout)
- Separator (Visual separators)

### Interactive Components
- Modal (Modal dialogs)
- Alert (Alert messages)

## 🚀 Getting Started

### Prerequisites
- Node.js (>= 16)
- npm, yarn, or pnpm

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📱 App Structure

```
src/
├── components/          # Reusable components
│   └── IndividualPackagesDemo.vue
├── App.vue             # Main app component
├── main.ts             # App entry point
└── style.css           # Global styles
```

## 🎨 Component Usage Examples

### Basic Button
```vue
<template>
  <Button variant="primary" @click="handleClick">
    Click me
  </Button>
</template>

<script setup>
import { Button } from '@loom-vue/button';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

### Form Input
```vue
<template>
  <Input 
    v-model="value" 
    placeholder="Enter text..."
    @input="handleInput"
  />
</template>

<script setup>
import { ref } from 'vue';
import { Input } from '@loom-vue/input';

const value = ref('');

const handleInput = (newValue) => {
  console.log('Input changed:', newValue);
};
</script>
```

### Card Container
```vue
<template>
  <Card title="Example Card" variant="elevated">
    <Text>Card content</Text>
  </Card>
</template>

<script setup>
import { Card, Text } from '@loom-vue/card';
</script>
```

## 📊 Bundle Size Benefits

This app demonstrates the benefits of using individual component packages:

| Approach | Bundle Size | Components |
|----------|-------------|------------|
| Complete Package | ~400KB | All 40+ components |
| Individual Packages | ~10KB each | Only used components |
| This App | ~200KB | 20+ components used |

## 🛠️ Development

### Adding New Components
1. Install the component package:
   ```bash
   npm install @loom-vue/component-name
   ```

2. Import and use in your component:
   ```vue
   <script setup>
   import { ComponentName } from '@loom-vue/component-name';
   </script>
   ```

### Customization
All components support customization through props and styles. Check individual component documentation for available props.

## 📚 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Vite Configuration
The app uses Vite for fast development and building with:
- Vue 3 support
- TypeScript integration
- Hot module replacement

### TypeScript
Full TypeScript support with strict type checking enabled.

## 📱 Browser Support

- **Modern Browsers**: Chrome 88+, Firefox 85+, Safari 14+, Edge 88+
- **Mobile Browsers**: iOS Safari 14+, Chrome Mobile 88+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with Vue 3
5. Submit a pull request

## 📄 License

MIT License - see [LICENSE](../../LICENSE) for details.

## 📞 Support

- **Documentation**: [Loom Design System Docs](https://loom-design.dev)
- **Issues**: [GitHub Issues](https://github.com/loom-design/loom/issues)
- **Discussions**: [GitHub Discussions](https://github.com/loom-design/loom/discussions)
