# @loom-vue/separator

Loom Design System - Separator Component for Vue.js

## Installation

```bash
npm install @loom-vue/separator
# or
yarn add @loom-vue/separator
# or
pnpm add @loom-vue/separator
```

## Usage

```vue
<template>
  <Separator variant="primary" @click="handleClick">
    Click me
  </Separator>
</template>

<script setup>
import { Separator } from '@loom-vue/separator';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

## Props

See the component documentation for available props.

## License

MIT
