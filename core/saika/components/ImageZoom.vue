<template>
  <div class="ImageZoom" :class="{ 'with-border': border }">
    <img :src="src || url" :alt="alt" ref="img" :width="width" :title="title" />
  </div>
</template>

<script>
export default {
  name: 'ImageZoom',

  props: {
    src: String,
    url: String,
    alt: String,
    border: {
      type: Boolean,
      default: false
    },
    width: [String, Number],
    title: String
  },

  mounted() {
    const mediumZoom = require('medium-zoom').default
    mediumZoom(this.$refs.img)
  }
}
</script>

<style>
.ImageZoom {
  display: inline-block;
  font-size: 0;

  &.with-border {
    border: 1px solid var(--border-color);
    padding: 10px;
    border-radius: var(--radius);
  }
}

.medium-zoom-overlay,
.medium-zoom-image--opened {
  z-index: 99;
}
</style>
