# @loom-vue/select

Loom Design System - Select Component for Vue.js

## Installation

```bash
npm install @loom-vue/select
# or
yarn add @loom-vue/select
# or
pnpm add @loom-vue/select
```

## Usage

```vue
<template>
  <Select variant="primary" @click="handleClick">
    Click me
  </Select>
</template>

<script setup>
import { Select } from '@loom-vue/select';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

## Props

See the component documentation for available props.

## License

MIT
