<template>
  <div class="HeaderNav">
    <div
      v-for="(item, k) in nav"
      :key="k"
      class="HeaderNavItem"
    >
      <SaikaLink :to="item.link">{{ item.title }}</SaikaLink>
    </div>
  </div>
</template>

<script>
import { isExternalLink } from '../utils'

export default {
  name: 'HeaderNav',

  props: {
    nav: {
      type: Array,
      required: true
    }
  },

  methods: {
    isExternalLink
  }
}
</script>

<style scoped>
.HeaderNav {
  display: flex;
  align-items: center;
  font-size: .9rem;
}

.HeaderNavItem {
  &:not(:first-child) {
    margin-left: 25px;
  }
}
</style>
