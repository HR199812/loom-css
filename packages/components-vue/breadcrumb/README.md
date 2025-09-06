# @loom-vue/breadcrumb

Loom Design System - Breadcrumb Component for Vue.js

## Installation

```bash
npm install @loom-vue/breadcrumb
# or
yarn add @loom-vue/breadcrumb
# or
pnpm add @loom-vue/breadcrumb
```

## Usage

```vue
<template>
  <Breadcrumb variant="primary" @click="handleClick">
    Click me
  </Breadcrumb>
</template>

<script setup>
import { Breadcrumb } from '@loom-vue/breadcrumb';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

## Props

See the component documentation for available props.

## License

MIT
