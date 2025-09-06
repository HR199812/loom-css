# @loom-vue/grid

Loom Design System - Grid Component for Vue.js

## Installation

```bash
npm install @loom-vue/grid
# or
yarn add @loom-vue/grid
# or
pnpm add @loom-vue/grid
```

## Usage

```vue
<template>
  <Grid variant="primary" @click="handleClick">
    Click me
  </Grid>
</template>

<script setup>
import { Grid } from '@loom-vue/grid';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

## Props

See the component documentation for available props.

## License

MIT
