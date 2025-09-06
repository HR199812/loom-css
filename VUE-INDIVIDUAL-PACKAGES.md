# Vue.js Individual Component Packages

Loom Design System now supports Vue.js with individual component packages for optimal bundle size and better tree shaking.

## 🎯 Overview

The Vue.js implementation provides 40+ individual component packages, each optimized for:
- **Smaller bundle sizes** - Only import what you need
- **Better tree shaking** - Unused components are automatically excluded
- **Faster builds** - Reduced compilation time
- **Selective updates** - Update individual components without affecting others

## 📦 Available Components

### Basic Components
- `@loom-vue/button` - Button component with variants
- `@loom-vue/input` - Input field component
- `@loom-vue/card` - Card container component
- `@loom-vue/text` - Typography text component
- `@loom-vue/title` - Heading component

### Form Components
- `@loom-vue/switch` - Toggle switch component
- `@loom-vue/checkbox` - Checkbox component
- `@loom-vue/radio` - Radio button component
- `@loom-vue/slider` - Range slider component
- `@loom-vue/select` - Select dropdown component

### Data Display
- `@loom-vue/avatar` - User avatar component
- `@loom-vue/badge` - Status badge component
- `@loom-vue/progressbar` - Progress bar component
- `@loom-vue/list` - List container component
- `@loom-vue/listitem` - List item component

### Layout Components
- `@loom-vue/grid` - Grid layout component
- `@loom-vue/flex` - Flexbox layout component
- `@loom-vue/container` - Container component
- `@loom-vue/separator` - Visual separator component

### Interactive Components
- `@loom-vue/modal` - Modal dialog component
- `@loom-vue/alert` - Alert message component
- `@loom-vue/spinner` - Loading spinner component
- `@loom-vue/toast` - Toast notification component

### Navigation Components
- `@loom-vue/navigation` - Navigation component
- `@loom-vue/tabbar` - Tab bar component
- `@loom-vue/header` - Header component
- `@loom-vue/footer` - Footer component

### Advanced Components
- `@loom-vue/table` - Data table component
- `@loom-vue/pagination` - Pagination component
- `@loom-vue/breadcrumb` - Breadcrumb navigation
- `@loom-vue/accordion` - Accordion component
- `@loom-vue/tabs` - Tabs component
- `@loom-vue/tooltip` - Tooltip component
- `@loom-vue/dropdown` - Dropdown component
- `@loom-vue/datepicker` - Date picker component
- `@loom-vue/timepicker` - Time picker component
- `@loom-vue/calendar` - Calendar component

## 🚀 Installation

### Individual Components
```bash
# Install specific components
npm install @loom-vue/button @loom-vue/input @loom-vue/card

# Or with yarn
yarn add @loom-vue/button @loom-vue/input @loom-vue/card

# Or with pnpm
pnpm add @loom-vue/button @loom-vue/input @loom-vue/card
```

### Complete Package (Meta Package)
```bash
# Install all components at once
npm install @loom/vue

# Or with yarn
yarn add @loom/vue

# Or with pnpm
pnpm add @loom/vue
```

## 💻 Usage

### Individual Components
```vue
<template>
  <div>
    <Button variant="primary" @click="handleClick">
      Click me
    </Button>
    
    <Input 
      v-model="inputValue" 
      placeholder="Enter text..."
      @input="handleInput"
    />
    
    <Card title="Example Card">
      <Text>This is card content</Text>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Button } from '@loom-vue/button';
import { Input } from '@loom-vue/input';
import { Card } from '@loom-vue/card';
import { Text } from '@loom-vue/text';

const inputValue = ref('');

const handleClick = () => {
  console.log('Button clicked!');
};

const handleInput = (value) => {
  console.log('Input changed:', value);
};
</script>
```

### Complete Package
```vue
<template>
  <div>
    <Button variant="primary" @click="handleClick">
      Click me
    </Button>
    
    <Input 
      v-model="inputValue" 
      placeholder="Enter text..."
    />
    
    <Card title="Example Card">
      <Text>This is card content</Text>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Button, Input, Card, Text } from '@loom/vue';

const inputValue = ref('');

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

## 🎨 Component Examples

### Button Component
```vue
<template>
  <div>
    <Button variant="primary" size="md" @click="handleClick">
      Primary Button
    </Button>
    
    <Button variant="secondary" size="lg" disabled>
      Disabled Button
    </Button>
    
    <Button variant="outline" size="sm" loading>
      Loading Button
    </Button>
  </div>
</template>

<script setup>
import { Button } from '@loom-vue/button';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

### Form Components
```vue
<template>
  <div>
    <Switch 
      v-model="switchValue" 
      label="Enable notifications"
      @change="handleSwitchChange"
    />
    
    <Checkbox 
      v-model="checkboxValue" 
      label="Accept terms"
      @change="handleCheckboxChange"
    />
    
    <Radio 
      v-model="radioValue" 
      :options="radioOptions"
      @change="handleRadioChange"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Switch, Checkbox, Radio } from '@loom-vue/switch';

const switchValue = ref(false);
const checkboxValue = ref(false);
const radioValue = ref('option1');

const radioOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' }
];

const handleSwitchChange = (value) => {
  console.log('Switch changed:', value);
};

const handleCheckboxChange = (value) => {
  console.log('Checkbox changed:', value);
};

const handleRadioChange = (value) => {
  console.log('Radio changed:', value);
};
</script>
```

### Layout Components
```vue
<template>
  <div>
    <Grid :columns="2" :gap="16">
      <Card title="Card 1">
        <Text>First card content</Text>
      </Card>
      <Card title="Card 2">
        <Text>Second card content</Text>
      </Card>
    </Grid>
    
    <Flex direction="row" justify="space-between" align="center">
      <Text>Left content</Text>
      <Text>Right content</Text>
    </Flex>
  </div>
</template>

<script setup>
import { Grid, Card, Text, Flex } from '@loom-vue/grid';
</script>
```

## 📊 Bundle Size Benefits

| Approach | Bundle Size | Components |
|----------|-------------|------------|
| Complete Package | ~400KB | All 40+ components |
| Individual Packages | ~10KB each | Only used components |
| Example App (20 components) | ~200KB | 20 components used |

### Tree Shaking Benefits
- Only used components are included in the bundle
- Unused components are automatically excluded
- Significant bundle size reduction for production apps

## 🛠️ Development

### Building Individual Packages
```bash
# Build all Vue.js packages
npm run build:vue-components

# Build specific package
cd packages/components-vue/button
npm run build
```

### Creating New Packages
```bash
# Create all individual packages
npm run create:vue-packages
```

### Publishing Packages
```bash
# Publish all Vue.js packages
npm run publish:vue-all

# Publish specific package
cd packages/components-vue/button
npm publish
```

## 🔧 Configuration

### TypeScript Support
All components include full TypeScript support with:
- Type definitions for props
- IntelliSense support
- Compile-time type checking

### Vue 3 Compatibility
- Built for Vue 3 with Composition API
- Supports both `<script setup>` and Options API
- Compatible with Vue 3.0+

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

---

**Vue.js individual component packages provide the perfect balance of flexibility and performance for modern Vue.js applications!** 🎉
