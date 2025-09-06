# @loom-vue/tooltip

Loom Design System - Tooltip Component for Vue.js

## Installation

```bash
npm install @loom-vue/tooltip
# or
yarn add @loom-vue/tooltip
# or
pnpm add @loom-vue/tooltip
```

## Usage

```vue
<template>
  <Tooltip variant="primary" @click="handleClick">
    Click me
  </Tooltip>
</template>

<script setup>
import { Tooltip } from '@loom-vue/tooltip';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

## Props

See the component documentation for available props.

## License

MIT
