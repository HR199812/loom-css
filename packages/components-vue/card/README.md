# @loom-vue/card

Loom Design System - Card Component for Vue.js

## Installation

```bash
npm install @loom-vue/card
# or
yarn add @loom-vue/card
# or
pnpm add @loom-vue/card
```

## Usage

```vue
<template>
  <Card variant="primary" @click="handleClick">
    Click me
  </Card>
</template>

<script setup>
import { Card } from '@loom-vue/card';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

## Props

See the component documentation for available props.

## License

MIT
