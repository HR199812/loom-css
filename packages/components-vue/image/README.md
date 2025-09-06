# @loom-vue/image

Loom Design System - Image Component for Vue.js

## Installation

```bash
npm install @loom-vue/image
# or
yarn add @loom-vue/image
# or
pnpm add @loom-vue/image
```

## Usage

```vue
<template>
  <Image variant="primary" @click="handleClick">
    Click me
  </Image>
</template>

<script setup>
import { Image } from '@loom-vue/image';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

## Props

See the component documentation for available props.

## License

MIT
