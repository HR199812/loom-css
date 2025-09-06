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

export interface RadioProps {
  label?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
}

const props = withDefaults(defineProps<RadioProps>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

const buttonClass = computed(() => {
  const baseClass = 'loom-radio';
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
.loom-radio {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.loom-radio--primary {
  background-color: #3b82f6;
  color: white;
}

.loom-radio--primary:hover:not(.loom-radio--disabled) {
  background-color: #2563eb;
}

.loom-radio--secondary {
  background-color: #6b7280;
  color: white;
}

.loom-radio--secondary:hover:not(.loom-radio--disabled) {
  background-color: #4b5563;
}

.loom-radio--outline {
  background-color: transparent;
  color: #3b82f6;
  border: 1px solid #3b82f6;
}

.loom-radio--outline:hover:not(.loom-radio--disabled) {
  background-color: #3b82f6;
  color: white;
}

.loom-radio--danger {
  background-color: #ef4444;
  color: white;
}

.loom-radio--danger:hover:not(.loom-radio--disabled) {
  background-color: #dc2626;
}

.loom-radio--sm {
  padding: 6px 12px;
  font-size: 14px;
}

.loom-radio--md {
  padding: 8px 16px;
  font-size: 16px;
}

.loom-radio--lg {
  padding: 12px 20px;
  font-size: 18px;
}

.loom-radio--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.loom-radio--loading {
  cursor: wait;
}
</style>