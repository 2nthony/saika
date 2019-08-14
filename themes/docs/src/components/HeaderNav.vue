<template>
  <div class="header-nav">
    <div v-for="(item, k) in nav" :key="k" class="header-nav-item">
      <SaikaLink :to="item.link">{{ item.title }}</SaikaLink>
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

  @media (max-width: 768px) {
    display: none;
  }
}

.header-nav-item {
  &:not(:first-child) {
    margin-left: 25px;
  }
}

.mobile-header-nav {
  display: block;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 30px;
  padding-bottom: 30px;

  & .header-nav-item {
    margin: 18px 0;
  }

  @media (min-width: 769px) {
    display: none;
  }
}
</style>
