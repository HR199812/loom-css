# @loom-vue/slider

Loom Design System - Slider Component for Vue.js

## Installation

```bash
npm install @loom-vue/slider
# or
yarn add @loom-vue/slider
# or
pnpm add @loom-vue/slider
```

## Usage

```vue
<template>
  <Slider variant="primary" @click="handleClick">
    Click me
  </Slider>
</template>

<script setup>
import { Slider } from '@loom-vue/slider';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

## Props

See the component documentation for available props.

## License

MIT
