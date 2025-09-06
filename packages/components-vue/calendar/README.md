# @loom-vue/calendar

Loom Design System - Calendar Component for Vue.js

## Installation

```bash
npm install @loom-vue/calendar
# or
yarn add @loom-vue/calendar
# or
pnpm add @loom-vue/calendar
```

## Usage

```vue
<template>
  <Calendar variant="primary" @click="handleClick">
    Click me
  </Calendar>
</template>

<script setup>
import { Calendar } from '@loom-vue/calendar';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

## Props

See the component documentation for available props.

## License

MIT
