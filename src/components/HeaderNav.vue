<template functional>
  <div class="header-nav">
    <div v-for="(item, k) in props.nav" :key="k" class="header-nav-item">
      <SaikaLink :to="item.link">
        {{ item.title }}
      </SaikaLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nav: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.header-nav {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
}

.header-nav-item {
  &:not(:first-child) {
    margin-left: 25px;
  }
}
</style>
