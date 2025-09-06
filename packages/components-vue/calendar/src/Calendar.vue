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

export interface CalendarProps {
  label?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
}

const props = withDefaults(defineProps<CalendarProps>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

const buttonClass = computed(() => {
  const baseClass = 'loom-calendar';
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
.loom-calendar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.loom-calendar--primary {
  background-color: #3b82f6;
  color: white;
}

.loom-calendar--primary:hover:not(.loom-calendar--disabled) {
  background-color: #2563eb;
}

.loom-calendar--secondary {
  background-color: #6b7280;
  color: white;
}

.loom-calendar--secondary:hover:not(.loom-calendar--disabled) {
  background-color: #4b5563;
}

.loom-calendar--outline {
  background-color: transparent;
  color: #3b82f6;
  border: 1px solid #3b82f6;
}

.loom-calendar--outline:hover:not(.loom-calendar--disabled) {
  background-color: #3b82f6;
  color: white;
}

.loom-calendar--danger {
  background-color: #ef4444;
  color: white;
}

.loom-calendar--danger:hover:not(.loom-calendar--disabled) {
  background-color: #dc2626;
}

.loom-calendar--sm {
  padding: 6px 12px;
  font-size: 14px;
}

.loom-calendar--md {
  padding: 8px 16px;
  font-size: 16px;
}

.loom-calendar--lg {
  padding: 12px 20px;
  font-size: 18px;
}

.loom-calendar--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.loom-calendar--loading {
  cursor: wait;
}
</style>