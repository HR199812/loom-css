# @loom-vue/modal

Loom Design System - Modal Component for Vue.js

## Installation

```bash
npm install @loom-vue/modal
# or
yarn add @loom-vue/modal
# or
pnpm add @loom-vue/modal
```

## Usage

```vue
<template>
  <Modal variant="primary" @click="handleClick">
    Click me
  </Modal>
</template>

<script setup>
import { Modal } from '@loom-vue/modal';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

## Props

See the component documentation for available props.

## License

MIT
