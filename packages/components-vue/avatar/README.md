# @loom-vue/avatar

Loom Design System - Avatar Component for Vue.js

## Installation

```bash
npm install @loom-vue/avatar
# or
yarn add @loom-vue/avatar
# or
pnpm add @loom-vue/avatar
```

## Usage

```vue
<template>
  <Avatar variant="primary" @click="handleClick">
    Click me
  </Avatar>
</template>

<script setup>
import { Avatar } from '@loom-vue/avatar';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

## Props

See the component documentation for available props.

## License

MIT
