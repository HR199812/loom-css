# @loom-vue/datepicker

Loom Design System - DatePicker Component for Vue.js

## Installation

```bash
npm install @loom-vue/datepicker
# or
yarn add @loom-vue/datepicker
# or
pnpm add @loom-vue/datepicker
```

## Usage

```vue
<template>
  <DatePicker variant="primary" @click="handleClick">
    Click me
  </DatePicker>
</template>

<script setup>
import { DatePicker } from '@loom-vue/datepicker';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

## Props

See the component documentation for available props.

## License

MIT
