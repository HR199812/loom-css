# @loom-vue/header

Loom Design System - Header Component for Vue.js

## Installation

```bash
npm install @loom-vue/header
# or
yarn add @loom-vue/header
# or
pnpm add @loom-vue/header
```

## Usage

```vue
<template>
  <Header variant="primary" @click="handleClick">
    Click me
  </Header>
</template>

<script setup>
import { Header } from '@loom-vue/header';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

## Props

See the component documentation for available props.

## License

MIT
