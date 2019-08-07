<template>
  <div class="Sidebar">
    <div class="SidebarItems">
      <SidebarItem v-for="(item, index) in posts" :key="index" :item="item" />
    </div>
  </div>
</template>

<script>
import SidebarItem from './SidebarItem.vue'

export default {
  name: 'Sidebar',

  components: {
    SidebarItem
  },

  computed: {
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
  padding: 40px 20px 40px 0;

  @media (max-width: 768px) {
    display: none;
  }
}
</style>
