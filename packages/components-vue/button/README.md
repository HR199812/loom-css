# @loom-vue/button

Loom Design System - Button Component for Vue.js

## Installation

```bash
npm install @loom-vue/button
# or
yarn add @loom-vue/button
# or
pnpm add @loom-vue/button
```

## Usage

```vue
<template>
  <Button variant="primary" @click="handleClick">
    Click me
  </Button>
</template>

<script setup>
import { Button } from '@loom-vue/button';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

## Props

See the component documentation for available props.

## License

MIT
