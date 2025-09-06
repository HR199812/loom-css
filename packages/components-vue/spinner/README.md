# @loom-vue/spinner

Loom Design System - Spinner Component for Vue.js

## Installation

```bash
npm install @loom-vue/spinner
# or
yarn add @loom-vue/spinner
# or
pnpm add @loom-vue/spinner
```

## Usage

```vue
<template>
  <Spinner variant="primary" @click="handleClick">
    Click me
  </Spinner>
</template>

<script setup>
import { Spinner } from '@loom-vue/spinner';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

## Props

See the component documentation for available props.

## License

MIT
