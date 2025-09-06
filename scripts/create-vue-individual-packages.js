#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List of Vue.js components to create individual packages for
const components = [
  'Button', 'Input', 'Card', 'Text', 'Title', 'Alert', 'Modal', 'Switch', 
  'Checkbox', 'Radio', 'Slider', 'Select', 'Image', 'Avatar', 'Badge',
  'List', 'ListItem', 'Separator', 'ProgressBar', 'Spinner', 'Toast',
  'Navigation', 'TabBar', 'Header', 'Footer', 'Grid', 'Flex', 'Container',
  'Form', 'Field', 'Table', 'Pagination', 'Breadcrumb', 'Accordion',
  'Tabs', 'Tooltip', 'Dropdown', 'DatePicker', 'TimePicker', 'Calendar'
];

const packageTemplate = (componentName) => `{
  "name": "@loom-vue/${componentName.toLowerCase()}",
  "version": "0.0.1",
  "description": "Loom Design System - ${componentName} Component for Vue.js",
  "main": "dist/index.js",
  "module": "dist/index.mjs",
  "types": "dist/index.d.ts",
  "files": [
    "dist",
    "src"
  ],
  "scripts": {
    "build": "tsup",
    "dev": "tsup --watch",
    "clean": "rm -rf dist"
  },
  "dependencies": {
    "vue": "^3.3.0",
    "@loom/core": "*"
  },
  "devDependencies": {
    "tsup": "^8.0.0",
    "typescript": "^5.0.0",
    "@repo/typescript-config": "*"
  },
  "peerDependencies": {
    "vue": ">=3.0.0"
  },
  "keywords": [
    "vue",
    "vue3",
    "component",
    "${componentName.toLowerCase()}",
    "ui",
    "design-system",
    "loom"
  ],
  "author": "Loom Contributors",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/loom-design/loom",
    "directory": "packages/components-vue/${componentName.toLowerCase()}"
  },
  "publishConfig": {
    "access": "public"
  }
}`;

const tsconfigTemplate = `{
  "extends": "@repo/typescript-config/react-library.json",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "noEmit": true,
    "jsx": "preserve"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}`;

const tsupConfigTemplate = `import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: false,
  clean: true,
  sourcemap: true,
  external: ['vue'],
});`;

const indexTemplate = (componentName) => `export { default as ${componentName} } from './${componentName}.vue';
export type { ${componentName}Props } from './${componentName}.vue';`;

const componentTemplate = (componentName) => `<template>
  <button
    :class="buttonClass"
    :disabled="disabled"
    @click="handleClick"
    v-bind="$attrs"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface ${componentName}Props {
  label?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
}

const props = withDefaults(defineProps<${componentName}Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

const buttonClass = computed(() => {
  const baseClass = 'loom-${componentName.toLowerCase()}';
  const variantClass = \`\${baseClass}--\${props.variant}\`;
  const sizeClass = \`\${baseClass}--\${props.size}\`;
  const disabledClass = props.disabled ? \`\${baseClass}--disabled\` : '';
  const loadingClass = props.loading ? \`\${baseClass}--loading\` : '';
  
  return [baseClass, variantClass, sizeClass, disabledClass, loadingClass]
    .filter(Boolean)
    .join(' ');
});

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event);
  }
};
</script>

<style scoped>
.loom-${componentName.toLowerCase()} {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.loom-${componentName.toLowerCase()}--primary {
  background-color: #3b82f6;
  color: white;
}

.loom-${componentName.toLowerCase()}--primary:hover:not(.loom-${componentName.toLowerCase()}--disabled) {
  background-color: #2563eb;
}

.loom-${componentName.toLowerCase()}--secondary {
  background-color: #6b7280;
  color: white;
}

.loom-${componentName.toLowerCase()}--secondary:hover:not(.loom-${componentName.toLowerCase()}--disabled) {
  background-color: #4b5563;
}

.loom-${componentName.toLowerCase()}--outline {
  background-color: transparent;
  color: #3b82f6;
  border: 1px solid #3b82f6;
}

.loom-${componentName.toLowerCase()}--outline:hover:not(.loom-${componentName.toLowerCase()}--disabled) {
  background-color: #3b82f6;
  color: white;
}

.loom-${componentName.toLowerCase()}--danger {
  background-color: #ef4444;
  color: white;
}

.loom-${componentName.toLowerCase()}--danger:hover:not(.loom-${componentName.toLowerCase()}--disabled) {
  background-color: #dc2626;
}

.loom-${componentName.toLowerCase()}--sm {
  padding: 6px 12px;
  font-size: 14px;
}

.loom-${componentName.toLowerCase()}--md {
  padding: 8px 16px;
  font-size: 16px;
}

.loom-${componentName.toLowerCase()}--lg {
  padding: 12px 20px;
  font-size: 18px;
}

.loom-${componentName.toLowerCase()}--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.loom-${componentName.toLowerCase()}--loading {
  cursor: wait;
}
</style>`;

const readmeTemplate = (componentName) => `# @loom-vue/${componentName.toLowerCase()}

Loom Design System - ${componentName} Component for Vue.js

## Installation

\`\`\`bash
npm install @loom-vue/${componentName.toLowerCase()}
# or
yarn add @loom-vue/${componentName.toLowerCase()}
# or
pnpm add @loom-vue/${componentName.toLowerCase()}
\`\`\`

## Usage

\`\`\`vue
<template>
  <${componentName} variant="primary" @click="handleClick">
    Click me
  </${componentName}>
</template>

<script setup>
import { ${componentName} } from '@loom-vue/${componentName.toLowerCase()}';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
\`\`\`

## Props

See the component documentation for available props.

## License

MIT
`;

function createVueComponentPackage(componentName) {
  const componentDir = path.join(__dirname, '..', 'packages', 'components-vue', componentName.toLowerCase());
  const srcDir = path.join(componentDir, 'src');
  
  // Create directories
  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir, { recursive: true });
  }
  if (!fs.existsSync(srcDir)) {
    fs.mkdirSync(srcDir, { recursive: true });
  }
  
  // Create package.json
  fs.writeFileSync(
    path.join(componentDir, 'package.json'),
    packageTemplate(componentName)
  );
  
  // Create tsconfig.json
  fs.writeFileSync(
    path.join(componentDir, 'tsconfig.json'),
    tsconfigTemplate
  );
  
  // Create tsup.config.ts
  fs.writeFileSync(
    path.join(componentDir, 'tsup.config.ts'),
    tsupConfigTemplate
  );
  
  // Create src/index.ts
  fs.writeFileSync(
    path.join(srcDir, 'index.ts'),
    indexTemplate(componentName)
  );
  
  // Create src/ComponentName.vue
  fs.writeFileSync(
    path.join(srcDir, `${componentName}.vue`),
    componentTemplate(componentName)
  );
  
  // Create README.md
  fs.writeFileSync(
    path.join(componentDir, 'README.md'),
    readmeTemplate(componentName)
  );
  
  console.log(`✅ Created Vue.js package for ${componentName}`);
}

// Create packages for all components
console.log('🚀 Creating individual Vue.js component packages...\n');

components.forEach(componentName => {
  createVueComponentPackage(componentName);
});

console.log(`\n🎉 Successfully created ${components.length} individual Vue.js component packages!`);
console.log('\nNext steps:');
console.log('1. Update the main @loom/vue package to be a meta-package');
console.log('2. Update workspace configuration');
console.log('3. Build all packages');
console.log('4. Publish to npm');
