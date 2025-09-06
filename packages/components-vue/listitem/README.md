# @loom-vue/listitem

Loom Design System - ListItem Component for Vue.js

## Installation

```bash
npm install @loom-vue/listitem
# or
yarn add @loom-vue/listitem
# or
pnpm add @loom-vue/listitem
```

## Usage

```vue
<template>
  <ListItem variant="primary" @click="handleClick">
    Click me
  </ListItem>
</template>

<script setup>
import { ListItem } from '@loom-vue/listitem';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

## Props

See the component documentation for available props.

## License

MIT
