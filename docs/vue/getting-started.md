# Vue Getting Started

Get up and running with loom-css in your Vue application. This guide will walk you through the basics of using loom-css components in Vue 3.

## Installation

First, install the Vue package:

```bash
npm install @loom-css/vue
```

## Basic Usage

### Import Components

```vue
<template>
  <div>
    <LoomButton variant="primary">Hello World</LoomButton>
    <LoomCard>
      <LoomInput placeholder="Enter your name" />
    </LoomCard>
  </div>
</template>

<script setup>
import { LoomButton, LoomCard, LoomInput } from '@loom-css/vue';
</script>
```

### Global Registration (Optional)

You can register components globally for easier usage:

```js
// main.js
import { createApp } from 'vue';
import LoomCSS from '@loom-css/vue';
import App from './App.vue';

const app = createApp(App);
app.use(LoomCSS);
app.mount('#app');
```

Then use components without importing:

```vue
<template>
  <div>
    <LoomButton variant="primary">Hello World</LoomButton>
    <LoomCard>
      <LoomInput placeholder="Enter your name" />
    </LoomCard>
  </div>
</template>
```

## Live Examples

### Button Component

```vue
<template>
  <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
    <LoomButton variant="primary">Primary</LoomButton>
    <LoomButton variant="secondary">Secondary</LoomButton>
    <LoomButton variant="outline">Outline</LoomButton>
    <LoomButton variant="ghost">Ghost</LoomButton>
    <LoomButton variant="destructive">Destructive</LoomButton>
  </div>
</template>

<script setup>
import { LoomButton } from '@loom-css/vue';
</script>
```

### Card Component

```vue
<template>
  <LoomCard style="max-width: 400px;">
    <LoomCardHeader>
      <h3>Card Title</h3>
      <p>Card description goes here</p>
    </LoomCardHeader>
    <LoomCardContent>
      <p>This is the main content of the card. It can contain any Vue elements.</p>
    </LoomCardContent>
    <LoomCardFooter>
      <LoomButton variant="primary">Action</LoomButton>
      <LoomButton variant="outline">Cancel</LoomButton>
    </LoomCardFooter>
  </LoomCard>
</template>

<script setup>
import { 
  LoomCard, 
  LoomCardHeader, 
  LoomCardContent, 
  LoomCardFooter, 
  LoomButton 
} from '@loom-css/vue';
</script>
```

### Input Component with Form

```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 300px;">
    <div>
      <LoomLabel for="email">Email</LoomLabel>
      <LoomInput
        id="email"
        type="email"
        placeholder="Enter your email"
        v-model="email"
      />
    </div>
    <div>
      <LoomLabel for="password">Password</LoomLabel>
      <LoomInput
        id="password"
        type="password"
        placeholder="Enter your password"
        v-model="password"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { LoomInput, LoomLabel } from '@loom-css/vue';

const email = ref('');
const password = ref('');
</script>
```

## Styling

### CSS Classes

You can use CSS classes for custom styling:

```vue
<template>
  <LoomButton 
    variant="primary" 
    class="custom-button"
  >
    Custom Styled Button
  </LoomButton>
</template>

<script setup>
import { LoomButton } from '@loom-css/vue';
</script>

<style scoped>
.custom-button {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  border: none;
  color: white;
}

.custom-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
</style>
```

### Inline Styles

```vue
<template>
  <LoomCard 
    :style="{ 
      backgroundColor: '#f0f0f0',
      borderRadius: '12px',
      padding: '2rem'
    }"
  >
    Custom styled card content
  </LoomCard>
</template>

<script setup>
import { LoomCard } from '@loom-css/vue';
</script>
```

### CSS Modules

```vue
<template>
  <LoomButton 
    variant="primary" 
    :class="$style.gradientButton"
  >
    Gradient Button
  </LoomButton>
</template>

<script setup>
import { LoomButton } from '@loom-css/vue';
</script>

<style module>
.gradientButton {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  border: none;
  color: white;
}

.gradientButton:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
</style>
```

## Theming

### Theme Provider

```vue
<template>
  <LoomThemeProvider theme="dark">
    <YourApp />
  </LoomThemeProvider>
</template>

<script setup>
import { LoomThemeProvider } from '@loom-css/vue';
</script>
```

### Custom Theme

```vue
<template>
  <LoomThemeProvider :theme="customTheme">
    <YourApp />
  </LoomThemeProvider>
</template>

<script setup>
import { LoomThemeProvider } from '@loom-css/vue';

const customTheme = {
  colors: {
    primary: '#your-primary-color',
    secondary: '#your-secondary-color',
  },
  fonts: {
    primary: 'Your Font, sans-serif',
  },
};
</script>
```

## Advanced Usage

### Custom Components

You can create custom components that extend loom-css components:

```vue
<template>
  <LoomButton 
    v-bind="$attrs" 
    :class="buttonClasses"
  >
    <component 
      v-if="icon && iconPosition === 'left'" 
      :is="icon" 
      class="loom-icon-left"
    />
    <slot />
    <component 
      v-if="icon && iconPosition === 'right'" 
      :is="icon" 
      class="loom-icon-right"
    />
  </LoomButton>
</template>

<script setup>
import { computed } from 'vue';
import { LoomButton } from '@loom-css/vue';

const props = defineProps({
  icon: {
    type: [String, Object],
    default: null,
  },
  iconPosition: {
    type: String,
    default: 'left',
    validator: (value) => ['left', 'right'].includes(value),
  },
});

const buttonClasses = computed(() => ({
  'loom-icon-button': true,
  [`loom-icon-button--${props.iconPosition}`]: true,
}));
</script>

<style scoped>
.loom-icon-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.loom-icon-left {
  margin-right: 0.25rem;
}

.loom-icon-right {
  margin-left: 0.25rem;
}
</style>
```

### Form Integration with VeeValidate

```vue
<template>
  <LoomCard>
    <LoomCardContent>
      <form @submit="onSubmit">
        <div>
          <LoomLabel for="name">Name</LoomLabel>
          <LoomInput
            id="name"
            v-model="name"
            :class="{ 'loom-input--error': errors.name }"
            placeholder="Your name"
          />
          <span v-if="errors.name" class="loom-error">
            {{ errors.name }}
          </span>
        </div>
        
        <div>
          <LoomLabel for="email">Email</LoomLabel>
          <LoomInput
            id="email"
            v-model="email"
            type="email"
            :class="{ 'loom-input--error': errors.email }"
            placeholder="Your email"
          />
          <span v-if="errors.email" class="loom-error">
            {{ errors.email }}
          </span>
        </div>
        
        <LoomButton 
          type="submit" 
          variant="primary"
          :disabled="!isValid"
        >
          Submit
        </LoomButton>
      </form>
    </LoomCardContent>
  </LoomCard>
</template>

<script setup>
import { ref, computed } from 'vue';
import { 
  LoomCard, 
  LoomCardContent, 
  LoomInput, 
  LoomLabel, 
  LoomButton 
} from '@loom-css/vue';

const name = ref('');
const email = ref('');

const errors = computed(() => {
  const errs = {};
  
  if (!name.value) {
    errs.name = 'Name is required';
  }
  
  if (!email.value) {
    errs.email = 'Email is required';
  } else if (!/^\S+@\S+$/i.test(email.value)) {
    errs.email = 'Invalid email address';
  }
  
  return errs;
});

const isValid = computed(() => {
  return Object.keys(errors.value).length === 0;
});

const onSubmit = (event) => {
  event.preventDefault();
  if (isValid.value) {
    console.log({ name: name.value, email: email.value });
  }
};
</script>

<style scoped>
.loom-error {
  color: var(--loom-destructive);
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.loom-input--error {
  border-color: var(--loom-destructive);
}
</style>
```

### Composition API with Composables

```vue
<template>
  <div>
    <LoomButton 
      @click="increment"
      variant="primary"
    >
      Count: {{ count }}
    </LoomButton>
    
    <LoomCard v-if="showCard">
      <LoomCardContent>
        <p>This card is shown when count is greater than 5</p>
        <LoomButton @click="reset" variant="outline">
          Reset
        </LoomButton>
      </LoomCardContent>
    </LoomCard>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { LoomButton, LoomCard, LoomCardContent } from '@loom-css/vue';

// Custom composable
function useCounter(initialValue = 0) {
  const count = ref(initialValue);
  
  const increment = () => {
    count.value++;
  };
  
  const reset = () => {
    count.value = 0;
  };
  
  const isHigh = computed(() => count.value > 5);
  
  return {
    count,
    increment,
    reset,
    isHigh,
  };
}

const { count, increment, reset, isHigh: showCard } = useCounter();
</script>
```

## Best Practices

### 1. Component Composition

```vue
<!-- Good: Compose components -->
<template>
  <LoomCard>
    <LoomCardHeader>
      <h3>{{ user.name }}</h3>
      <p>{{ user.email }}</p>
    </LoomCardHeader>
    <LoomCardContent>
      <p>{{ user.bio }}</p>
    </LoomCardContent>
    <LoomCardFooter>
      <LoomButton variant="outline">Edit</LoomButton>
      <LoomButton variant="primary">View Profile</LoomButton>
    </LoomCardFooter>
  </LoomCard>
</template>

<script setup>
import { 
  LoomCard, 
  LoomCardHeader, 
  LoomCardContent, 
  LoomCardFooter, 
  LoomButton 
} from '@loom-css/vue';

defineProps({
  user: {
    type: Object,
    required: true,
  },
});
</script>
```

### 2. Consistent Spacing

```vue
<template>
  <!-- Use consistent spacing utilities -->
  <div class="loom-space-y-4">
    <LoomCard>Content 1</LoomCard>
    <LoomCard>Content 2</LoomCard>
    <LoomCard>Content 3</LoomCard>
  </div>
</template>
```

### 3. Accessibility

```vue
<template>
  <!-- Always provide proper labels and ARIA attributes -->
  <form>
    <LoomLabel for="username">Username</LoomLabel>
    <LoomInput
      id="username"
      aria-describedby="username-help"
      required
    />
    <p id="username-help">Choose a unique username</p>
    
    <LoomButton 
      type="submit" 
      aria-label="Submit form"
    >
      Submit
    </LoomButton>
  </form>
</template>

<script setup>
import { LoomInput, LoomLabel, LoomButton } from '@loom-css/vue';
</script>
```

## Next Steps

- 🧩 [Components Documentation](../components/button.md) - Explore all available components
- 🎨 [Styling Guide](./styling.md) - Learn advanced styling techniques
- 🌙 [Theming Guide](./theming.md) - Customize themes and design tokens
- 📱 [Examples](./examples.md) - See real-world usage examples
