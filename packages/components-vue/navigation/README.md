# @loom-vue/navigation

Loom Design System - Navigation Component for Vue.js

## Installation

```bash
npm install @loom-vue/navigation
# or
yarn add @loom-vue/navigation
# or
pnpm add @loom-vue/navigation
```

## Usage

```vue
<template>
  <Navigation variant="primary" @click="handleClick">
    Click me
  </Navigation>
</template>

<script setup>
import { Navigation } from '@loom-vue/navigation';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

## Props

See the component documentation for available props.

## License

MIT
