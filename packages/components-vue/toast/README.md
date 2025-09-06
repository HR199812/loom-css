# @loom-vue/toast

Loom Design System - Toast Component for Vue.js

## Installation

```bash
npm install @loom-vue/toast
# or
yarn add @loom-vue/toast
# or
pnpm add @loom-vue/toast
```

## Usage

```vue
<template>
  <Toast variant="primary" @click="handleClick">
    Click me
  </Toast>
</template>

<script setup>
import { Toast } from '@loom-vue/toast';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

## Props

See the component documentation for available props.

## License

MIT
