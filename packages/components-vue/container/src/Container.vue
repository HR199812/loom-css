<template>
  <button
    :class="buttonClass"
    :disabled="disabled"
    @click="handleClick"
    v-bind="$attrs"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface ContainerProps {
  label?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
}

const props = withDefaults(defineProps<ContainerProps>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

const buttonClass = computed(() => {
  const baseClass = 'loom-container';
  const variantClass = `${baseClass}--${props.variant}`;
  const sizeClass = `${baseClass}--${props.size}`;
  const disabledClass = props.disabled ? `${baseClass}--disabled` : '';
  const loadingClass = props.loading ? `${baseClass}--loading` : '';
  
  return [baseClass, variantClass, sizeClass, disabledClass, loadingClass]
    .filter(Boolean)
    .join(' ');
});

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event);
  }
};
</script>

<style scoped>
.loom-container {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.loom-container--primary {
  background-color: #3b82f6;
  color: white;
}

.loom-container--primary:hover:not(.loom-container--disabled) {
  background-color: #2563eb;
}

.loom-container--secondary {
  background-color: #6b7280;
  color: white;
}

.loom-container--secondary:hover:not(.loom-container--disabled) {
  background-color: #4b5563;
}

.loom-container--outline {
  background-color: transparent;
  color: #3b82f6;
  border: 1px solid #3b82f6;
}

.loom-container--outline:hover:not(.loom-container--disabled) {
  background-color: #3b82f6;
  color: white;
}

.loom-container--danger {
  background-color: #ef4444;
  color: white;
}

.loom-container--danger:hover:not(.loom-container--disabled) {
  background-color: #dc2626;
}

.loom-container--sm {
  padding: 6px 12px;
  font-size: 14px;
}

.loom-container--md {
  padding: 8px 16px;
  font-size: 16px;
}

.loom-container--lg {
  padding: 12px 20px;
  font-size: 18px;
}

.loom-container--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.loom-container--loading {
  cursor: wait;
}
</style>