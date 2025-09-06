# @loom-vue/accordion

Loom Design System - Accordion Component for Vue.js

## Installation

```bash
npm install @loom-vue/accordion
# or
yarn add @loom-vue/accordion
# or
pnpm add @loom-vue/accordion
```

## Usage

```vue
<template>
  <Accordion variant="primary" @click="handleClick">
    Click me
  </Accordion>
</template>

<script setup>
import { Accordion } from '@loom-vue/accordion';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

## Props

See the component documentation for available props.

## License

MIT
