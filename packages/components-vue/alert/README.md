# @loom-vue/alert

Loom Design System - Alert Component for Vue.js

## Installation

```bash
npm install @loom-vue/alert
# or
yarn add @loom-vue/alert
# or
pnpm add @loom-vue/alert
```

## Usage

```vue
<template>
  <Alert variant="primary" @click="handleClick">
    Click me
  </Alert>
</template>

<script setup>
import { Alert } from '@loom-vue/alert';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

## Props

See the component documentation for available props.

## License

MIT
