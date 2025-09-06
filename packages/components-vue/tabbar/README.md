# @loom-vue/tabbar

Loom Design System - TabBar Component for Vue.js

## Installation

```bash
npm install @loom-vue/tabbar
# or
yarn add @loom-vue/tabbar
# or
pnpm add @loom-vue/tabbar
```

## Usage

```vue
<template>
  <TabBar variant="primary" @click="handleClick">
    Click me
  </TabBar>
</template>

<script setup>
import { TabBar } from '@loom-vue/tabbar';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

## Props

See the component documentation for available props.

## License

MIT
