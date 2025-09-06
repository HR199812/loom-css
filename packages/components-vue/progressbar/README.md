# @loom-vue/progressbar

Loom Design System - ProgressBar Component for Vue.js

## Installation

```bash
npm install @loom-vue/progressbar
# or
yarn add @loom-vue/progressbar
# or
pnpm add @loom-vue/progressbar
```

## Usage

```vue
<template>
  <ProgressBar variant="primary" @click="handleClick">
    Click me
  </ProgressBar>
</template>

<script setup>
import { ProgressBar } from '@loom-vue/progressbar';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

## Props

See the component documentation for available props.

## License

MIT
