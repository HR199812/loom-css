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

export interface TimePickerProps {
  label?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
}

const props = withDefaults(defineProps<TimePickerProps>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

const buttonClass = computed(() => {
  const baseClass = 'loom-timepicker';
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
.loom-timepicker {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.loom-timepicker--primary {
  background-color: #3b82f6;
  color: white;
}

.loom-timepicker--primary:hover:not(.loom-timepicker--disabled) {
  background-color: #2563eb;
}

.loom-timepicker--secondary {
  background-color: #6b7280;
  color: white;
}

.loom-timepicker--secondary:hover:not(.loom-timepicker--disabled) {
  background-color: #4b5563;
}

.loom-timepicker--outline {
  background-color: transparent;
  color: #3b82f6;
  border: 1px solid #3b82f6;
}

.loom-timepicker--outline:hover:not(.loom-timepicker--disabled) {
  background-color: #3b82f6;
  color: white;
}

.loom-timepicker--danger {
  background-color: #ef4444;
  color: white;
}

.loom-timepicker--danger:hover:not(.loom-timepicker--disabled) {
  background-color: #dc2626;
}

.loom-timepicker--sm {
  padding: 6px 12px;
  font-size: 14px;
}

.loom-timepicker--md {
  padding: 8px 16px;
  font-size: 16px;
}

.loom-timepicker--lg {
  padding: 12px 20px;
  font-size: 18px;
}

.loom-timepicker--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.loom-timepicker--loading {
  cursor: wait;
}
</style>