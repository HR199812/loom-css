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

export interface ListItemProps {
  label?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
}

const props = withDefaults(defineProps<ListItemProps>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

const buttonClass = computed(() => {
  const baseClass = 'loom-listitem';
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
.loom-listitem {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.loom-listitem--primary {
  background-color: #3b82f6;
  color: white;
}

.loom-listitem--primary:hover:not(.loom-listitem--disabled) {
  background-color: #2563eb;
}

.loom-listitem--secondary {
  background-color: #6b7280;
  color: white;
}

.loom-listitem--secondary:hover:not(.loom-listitem--disabled) {
  background-color: #4b5563;
}

.loom-listitem--outline {
  background-color: transparent;
  color: #3b82f6;
  border: 1px solid #3b82f6;
}

.loom-listitem--outline:hover:not(.loom-listitem--disabled) {
  background-color: #3b82f6;
  color: white;
}

.loom-listitem--danger {
  background-color: #ef4444;
  color: white;
}

.loom-listitem--danger:hover:not(.loom-listitem--disabled) {
  background-color: #dc2626;
}

.loom-listitem--sm {
  padding: 6px 12px;
  font-size: 14px;
}

.loom-listitem--md {
  padding: 8px 16px;
  font-size: 16px;
}

.loom-listitem--lg {
  padding: 12px 20px;
  font-size: 18px;
}

.loom-listitem--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.loom-listitem--loading {
  cursor: wait;
}
</style>