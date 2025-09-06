# @loom-vue/container

Loom Design System - Container Component for Vue.js

## Installation

```bash
npm install @loom-vue/container
# or
yarn add @loom-vue/container
# or
pnpm add @loom-vue/container
```

## Usage

```vue
<template>
  <Container variant="primary" @click="handleClick">
    Click me
  </Container>
</template>

<script setup>
import { Container } from '@loom-vue/container';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

## Props

See the component documentation for available props.

## License

MIT
