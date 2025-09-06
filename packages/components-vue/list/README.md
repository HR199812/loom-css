# @loom-vue/list

Loom Design System - List Component for Vue.js

## Installation

```bash
npm install @loom-vue/list
# or
yarn add @loom-vue/list
# or
pnpm add @loom-vue/list
```

## Usage

```vue
<template>
  <List variant="primary" @click="handleClick">
    Click me
  </List>
</template>

<script setup>
import { List } from '@loom-vue/list';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

## Props

See the component documentation for available props.

## License

MIT
