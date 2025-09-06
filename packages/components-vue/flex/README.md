# @loom-vue/flex

Loom Design System - Flex Component for Vue.js

## Installation

```bash
npm install @loom-vue/flex
# or
yarn add @loom-vue/flex
# or
pnpm add @loom-vue/flex
```

## Usage

```vue
<template>
  <Flex variant="primary" @click="handleClick">
    Click me
  </Flex>
</template>

<script setup>
import { Flex } from '@loom-vue/flex';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

## Props

See the component documentation for available props.

## License

MIT
