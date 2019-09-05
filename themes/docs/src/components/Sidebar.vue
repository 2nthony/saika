<template>
  <div class="Sidebar" :class="{ isShown: $store.state.docsStore.showSidebar }">
    <InjectedComponents position="sidebar:start" />

    <HeaderNav
      class="mobile-header-nav"
      v-if="$store.getters.config.nav"
      :nav="$store.getters.config.nav"
    />

    <div class="SidebarItems">
      <SidebarItem
        v-for="(item, index) in $store.getters.posts"
        :key="index"
        :item="item"
        :is-open="openIndex === index"
      />
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
    openIndex() {
      return this.$store.getters.posts.findIndex(item =>
        getChildren(item).some(child => child.link === this.$route.path)
      )
    }
  }
}

function getChildren(item) {
  return item.children || item.links || []
}
</script>

<style scoped>
.Sidebar {
  width: var(--sidebar-width);
  overflow-y: scroll;
  background-color: white;
  z-index: 8;
  position: fixed;
  padding: 40px var(--gap);
  padding-left: 0;
  bottom: 0;
  top: 80px;

  @media (max-width: 768px) {
    display: none;
    right: 0;
    left: 0;
    width: 100vw;
    top: var(--header-height);
    padding-left: var(--gap);

    &.isShown {
      display: block;
    }
  }
}
</style>
