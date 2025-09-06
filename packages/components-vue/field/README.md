# @loom-vue/field

Loom Design System - Field Component for Vue.js

## Installation

```bash
npm install @loom-vue/field
# or
yarn add @loom-vue/field
# or
pnpm add @loom-vue/field
```

## Usage

```vue
<template>
  <Field variant="primary" @click="handleClick">
    Click me
  </Field>
</template>

<script setup>
import { Field } from '@loom-vue/field';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

## Props

See the component documentation for available props.

## License

MIT
