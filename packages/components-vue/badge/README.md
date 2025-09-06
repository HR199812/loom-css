# @loom-vue/badge

Loom Design System - Badge Component for Vue.js

## Installation

```bash
npm install @loom-vue/badge
# or
yarn add @loom-vue/badge
# or
pnpm add @loom-vue/badge
```

## Usage

```vue
<template>
  <Badge variant="primary" @click="handleClick">
    Click me
  </Badge>
</template>

<script setup>
import { Badge } from '@loom-vue/badge';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

## Props

See the component documentation for available props.

## License

MIT
