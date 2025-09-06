# @loom-vue/switch

Loom Design System - Switch Component for Vue.js

## Installation

```bash
npm install @loom-vue/switch
# or
yarn add @loom-vue/switch
# or
pnpm add @loom-vue/switch
```

## Usage

```vue
<template>
  <Switch variant="primary" @click="handleClick">
    Click me
  </Switch>
</template>

<script setup>
import { Switch } from '@loom-vue/switch';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

## Props

See the component documentation for available props.

## License

MIT
