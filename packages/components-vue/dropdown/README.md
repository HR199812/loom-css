# @loom-vue/dropdown

Loom Design System - Dropdown Component for Vue.js

## Installation

```bash
npm install @loom-vue/dropdown
# or
yarn add @loom-vue/dropdown
# or
pnpm add @loom-vue/dropdown
```

## Usage

```vue
<template>
  <Dropdown variant="primary" @click="handleClick">
    Click me
  </Dropdown>
</template>

<script setup>
import { Dropdown } from '@loom-vue/dropdown';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

## Props

See the component documentation for available props.

## License

MIT
