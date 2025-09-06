# @loom-vue/radio

Loom Design System - Radio Component for Vue.js

## Installation

```bash
npm install @loom-vue/radio
# or
yarn add @loom-vue/radio
# or
pnpm add @loom-vue/radio
```

## Usage

```vue
<template>
  <Radio variant="primary" @click="handleClick">
    Click me
  </Radio>
</template>

<script setup>
import { Radio } from '@loom-vue/radio';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

## Props

See the component documentation for available props.

## License

MIT
