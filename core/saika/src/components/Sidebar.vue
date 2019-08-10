<template>
  <div class="Sidebar" :class="{ isShown: $store.state.showSidebar }">
    <HeaderNav class="mobile-header-nav" v-if="nav" :nav="nav" />

    <div class="SidebarItems">
      <SidebarItem v-for="(item, index) in posts" :key="index" :item="item" />
    </div>
  </div>
</template>

<script>
import SidebarItem from './SidebarItem.vue'
import HeaderNav from './HeaderNav.vue'

export default {
  name: 'Sidebar',

  components: {
    SidebarItem,
    HeaderNav
  },

  computed: {
    nav() {
      return this.$store.getters.config.nav
    },

    posts() {
      return this.$store.getters.posts
    }
  }
}
</script>

<style scoped>
.Sidebar {
  width: var(--sidebar-width);
  position: fixed;
  bottom: 0;
  overflow-y: scroll;
  top: 80px;
  padding: 40px var(--gap) 40px 0;
  background-color: white;
  z-index: 8;

  @media (max-width: 768px) {
    display: none;
    top: var(--header-height);
    right: 0;
    width: 100vw;
    padding-left: var(--gap);

    &.isShown {
      display: block;
    }
  }
}
</style>
