# @loom-vue/text

Loom Design System - Text Component for Vue.js

## Installation

```bash
npm install @loom-vue/text
# or
yarn add @loom-vue/text
# or
pnpm add @loom-vue/text
```

## Usage

```vue
<template>
  <Text variant="primary" @click="handleClick">
    Click me
  </Text>
</template>

<script setup>
import { Text } from '@loom-vue/text';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

## Props

See the component documentation for available props.

## License

MIT
