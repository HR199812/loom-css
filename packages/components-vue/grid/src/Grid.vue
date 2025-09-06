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

export interface GridProps {
  label?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
}

const props = withDefaults(defineProps<GridProps>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

const buttonClass = computed(() => {
  const baseClass = 'loom-grid';
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
.loom-grid {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.loom-grid--primary {
  background-color: #3b82f6;
  color: white;
}

.loom-grid--primary:hover:not(.loom-grid--disabled) {
  background-color: #2563eb;
}

.loom-grid--secondary {
  background-color: #6b7280;
  color: white;
}

.loom-grid--secondary:hover:not(.loom-grid--disabled) {
  background-color: #4b5563;
}

.loom-grid--outline {
  background-color: transparent;
  color: #3b82f6;
  border: 1px solid #3b82f6;
}

.loom-grid--outline:hover:not(.loom-grid--disabled) {
  background-color: #3b82f6;
  color: white;
}

.loom-grid--danger {
  background-color: #ef4444;
  color: white;
}

.loom-grid--danger:hover:not(.loom-grid--disabled) {
  background-color: #dc2626;
}

.loom-grid--sm {
  padding: 6px 12px;
  font-size: 14px;
}

.loom-grid--md {
  padding: 8px 16px;
  font-size: 16px;
}

.loom-grid--lg {
  padding: 12px 20px;
  font-size: 18px;
}

.loom-grid--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.loom-grid--loading {
  cursor: wait;
}
</style>