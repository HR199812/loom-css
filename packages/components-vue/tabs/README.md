# @loom-vue/tabs

Loom Design System - Tabs Component for Vue.js

## Installation

```bash
npm install @loom-vue/tabs
# or
yarn add @loom-vue/tabs
# or
pnpm add @loom-vue/tabs
```

## Usage

```vue
<template>
  <Tabs variant="primary" @click="handleClick">
    Click me
  </Tabs>
</template>

<script setup>
import { Tabs } from '@loom-vue/tabs';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

## Props

See the component documentation for available props.

## License

MIT
