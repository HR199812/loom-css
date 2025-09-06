#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List of components to create individual packages for
const components = [
  'Accordion', 'Alert', 'Avatar', 'Badge', 'BarChart', 'Breadcrumb', 'Button', 'Calendar', 'Card', 'Carousel',
  'Chat', 'Checkbox', 'CommandPalette', 'DateInput', 'Dropdown', 'Grid', 'Input', 'LineChart', 'Lists', 'Modal',
  'OTPInput', 'Pagination', 'PaymentPlan', 'ProgressBar', 'Radio', 'Range', 'SearchInput', 'Section', 'Separator',
  'Sidebar', 'Switch', 'Table', 'Tabs', 'Text', 'TextArea', 'ThemeSwitch', 'Title', 'Toast', 'ToggleGroup', 'Tooltip'
];

const packageTemplate = (componentName) => `{
  "name": "@loom/${componentName.toLowerCase()}",
  "version": "0.0.1",
  "description": "Loom Design System - ${componentName} Component",
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
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "@loom/core": "*"
  },
  "devDependencies": {
    "tsup": "^8.0.0",
    "typescript": "^5.0.0",
    "@repo/typescript-config": "*"
  },
  "peerDependencies": {
    "react": ">=18.0.0",
    "react-dom": ">=18.0.0"
  },
  "keywords": [
    "react",
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
    "directory": "packages/components/${componentName.toLowerCase()}"
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
    "noEmit": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}`;

const tsupConfigTemplate = `import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  jsx: 'react',
  clean: true,
  sourcemap: true,
  external: ['react', 'react-dom'],
  esbuildOptions(options) {
    options.jsx = 'react';
  },
});`;

const indexTemplate = (componentName) => `export { ${componentName} } from './${componentName}';
export type { ${componentName}Props } from './${componentName}';`;

const readmeTemplate = (componentName) => `# @loom/${componentName.toLowerCase()}

Loom Design System - ${componentName} Component

## Installation

\`\`\`bash
npm install @loom/${componentName.toLowerCase()}
# or
yarn add @loom/${componentName.toLowerCase()}
# or
pnpm add @loom/${componentName.toLowerCase()}
\`\`\`

## Usage

\`\`\`tsx
import { ${componentName} } from '@loom/${componentName.toLowerCase()}';

function App() {
  return (
    <${componentName}>
      Hello World
    </${componentName}>
  );
}
\`\`\`

## Props

See the component documentation for available props.

## License

MIT
`;

function createComponentPackage(componentName) {
  const componentDir = path.join(__dirname, '..', 'packages', 'components', componentName.toLowerCase());
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
  
  // Create README.md
  fs.writeFileSync(
    path.join(componentDir, 'README.md'),
    readmeTemplate(componentName)
  );
  
  // Copy component files
  const sourceComponentPath = path.join(__dirname, '..', 'packages', 'react', 'src', 'components', `${componentName}.tsx`);
  const sourceCssPath = path.join(__dirname, '..', 'packages', 'react', 'src', 'components', `${componentName}.module.css`);
  
  if (fs.existsSync(sourceComponentPath)) {
    fs.copyFileSync(sourceComponentPath, path.join(srcDir, `${componentName}.tsx`));
  }
  
  if (fs.existsSync(sourceCssPath)) {
    fs.copyFileSync(sourceCssPath, path.join(srcDir, `${componentName}.module.css`));
  }
  
  console.log(`✅ Created package for ${componentName}`);
}

// Create packages for all components
console.log('🚀 Creating individual component packages...\n');

components.forEach(componentName => {
  createComponentPackage(componentName);
});

console.log(`\n🎉 Successfully created ${components.length} individual component packages!`);
console.log('\nNext steps:');
console.log('1. Update the main @loom/react package to be a meta-package');
console.log('2. Update workspace configuration');
console.log('3. Build all packages');
console.log('4. Publish to npm');
