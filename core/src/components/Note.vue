<template functional>
  <div :class="['Note', `is-${props.type}`, props.fill && 'is-fill']">
    <span class="note-label" v-if="props.label">
      {{ props.label === true ? props.type : props.label }}:
    </span>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Note',

  props: {
    type: {
      type: String,
      default: 'note'
    },
    fill: {
      type: Boolean,
      default: false
    },
    label: {
      type: [String, Boolean],
      default: true
    }
  }
}
</script>

<style>
.Note {
  line-height: 1.8;
  margin: 20px 0;
  border-radius: var(--radius);
  border: 1px solid var(--border-color);
  padding: 10px 20px;

  & > *:not(.note-label) {
    line-height: 1.7;
  }

  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  &.is-error {
    border-color: var(--error-color);
    color: var(--error-color);
  }

  &.is-warning {
    border-color: var(--warning-color);
    color: var(--warning-color);
  }

  &.is-success {
    border-color: var(--success-color);
    color: var(--success-color);
  }

  &.is-fill {
    &.is-note {
      background-color: #000;
    }

    &.is-error {
      background-color: var(--error-color);
    }

    &.is-warning {
      background-color: var(--warning-color);
    }

    &.is-success {
      background-color: var(--success-color);
    }

    &,
    & .note-label {
      color: white;
    }
  }
}

.note-label {
  text-transform: uppercase;
  display: inline-block;
  font-weight: bold;
}
</style>
