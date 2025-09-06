# @loom-vue/pagination

Loom Design System - Pagination Component for Vue.js

## Installation

```bash
npm install @loom-vue/pagination
# or
yarn add @loom-vue/pagination
# or
pnpm add @loom-vue/pagination
```

## Usage

```vue
<template>
  <Pagination variant="primary" @click="handleClick">
    Click me
  </Pagination>
</template>

<script setup>
import { Pagination } from '@loom-vue/pagination';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

## Props

See the component documentation for available props.

## License

MIT
