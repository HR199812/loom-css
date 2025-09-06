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

export interface DropdownProps {
  label?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
}

const props = withDefaults(defineProps<DropdownProps>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

const buttonClass = computed(() => {
  const baseClass = 'loom-dropdown';
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
.loom-dropdown {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.loom-dropdown--primary {
  background-color: #3b82f6;
  color: white;
}

.loom-dropdown--primary:hover:not(.loom-dropdown--disabled) {
  background-color: #2563eb;
}

.loom-dropdown--secondary {
  background-color: #6b7280;
  color: white;
}

.loom-dropdown--secondary:hover:not(.loom-dropdown--disabled) {
  background-color: #4b5563;
}

.loom-dropdown--outline {
  background-color: transparent;
  color: #3b82f6;
  border: 1px solid #3b82f6;
}

.loom-dropdown--outline:hover:not(.loom-dropdown--disabled) {
  background-color: #3b82f6;
  color: white;
}

.loom-dropdown--danger {
  background-color: #ef4444;
  color: white;
}

.loom-dropdown--danger:hover:not(.loom-dropdown--disabled) {
  background-color: #dc2626;
}

.loom-dropdown--sm {
  padding: 6px 12px;
  font-size: 14px;
}

.loom-dropdown--md {
  padding: 8px 16px;
  font-size: 16px;
}

.loom-dropdown--lg {
  padding: 12px 20px;
  font-size: 18px;
}

.loom-dropdown--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.loom-dropdown--loading {
  cursor: wait;
}
</style>