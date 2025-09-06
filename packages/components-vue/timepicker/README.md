# @loom-vue/timepicker

Loom Design System - TimePicker Component for Vue.js

## Installation

```bash
npm install @loom-vue/timepicker
# or
yarn add @loom-vue/timepicker
# or
pnpm add @loom-vue/timepicker
```

## Usage

```vue
<template>
  <TimePicker variant="primary" @click="handleClick">
    Click me
  </TimePicker>
</template>

<script setup>
import { TimePicker } from '@loom-vue/timepicker';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

## Props

See the component documentation for available props.

## License

MIT
