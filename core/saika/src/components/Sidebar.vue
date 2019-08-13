<template>
  <div class="Sidebar" :class="{ isShown: $store.state.showSidebar }">
    <InjectedComponents position="sidebar:start" />

    <HeaderNav class="mobile-header-nav" v-if="nav" :nav="nav" />

    <div class="SidebarItems">
      <SidebarItem v-for="(item, index) in posts" :key="index" :item="item" />
    </div>

    <InjectedComponents position="sidebar:end" />
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
  overflow-y: scroll;
  background-color: white;
  z-index: 8;

  @media (max-width: 768px) {
    display: none;
    right: 0;
    left: 0;
    width: 100vw;

    &.isShown {
      display: block;
    }
  }
}
</style>
