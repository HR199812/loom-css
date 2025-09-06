# @loom-vue/table

Loom Design System - Table Component for Vue.js

## Installation

```bash
npm install @loom-vue/table
# or
yarn add @loom-vue/table
# or
pnpm add @loom-vue/table
```

## Usage

```vue
<template>
  <Table variant="primary" @click="handleClick">
    Click me
  </Table>
</template>

<script setup>
import { Table } from '@loom-vue/table';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

## Props

See the component documentation for available props.

## License

MIT
