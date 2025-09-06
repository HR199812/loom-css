# @loom-vue/input

Loom Design System - Input Component for Vue.js

## Installation

```bash
npm install @loom-vue/input
# or
yarn add @loom-vue/input
# or
pnpm add @loom-vue/input
```

## Usage

```vue
<template>
  <Input variant="primary" @click="handleClick">
    Click me
  </Input>
</template>

<script setup>
import { Input } from '@loom-vue/input';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

## Props

See the component documentation for available props.

## License

MIT
