# @loom-vue/checkbox

Loom Design System - Checkbox Component for Vue.js

## Installation

```bash
npm install @loom-vue/checkbox
# or
yarn add @loom-vue/checkbox
# or
pnpm add @loom-vue/checkbox
```

## Usage

```vue
<template>
  <Checkbox variant="primary" @click="handleClick">
    Click me
  </Checkbox>
</template>

<script setup>
import { Checkbox } from '@loom-vue/checkbox';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

## Props

See the component documentation for available props.

## License

MIT
