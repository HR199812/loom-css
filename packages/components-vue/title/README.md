# @loom-vue/title

Loom Design System - Title Component for Vue.js

## Installation

```bash
npm install @loom-vue/title
# or
yarn add @loom-vue/title
# or
pnpm add @loom-vue/title
```

## Usage

```vue
<template>
  <Title variant="primary" @click="handleClick">
    Click me
  </Title>
</template>

<script setup>
import { Title } from '@loom-vue/title';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

## Props

See the component documentation for available props.

## License

MIT
