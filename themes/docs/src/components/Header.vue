<template>
  <header class="Header">
    <div class="header-inner">
      <div class="header-left">
        <h1 class="site-title">
          <SaikaLink to="/"><component :is="Logo"/></SaikaLink>
        </h1>
        <HeaderNav v-if="leftNav" :nav="leftNav" />
      </div>
      <SearchBox v-if="$config.searchBox !== false" />
      <div class="header-right">
        <InjectedComponents position="header-right:start" />
        <HeaderNav v-if="rightNav" :nav="rightNav" />
        <InjectedComponents position="header-right:end" />
        <SidebarToggle />
      </div>
    </div>
  </header>
</template>

<script>
import HeaderNav from './HeaderNav.vue'
import SidebarToggle from './SidebarToggle.vue'
import SearchBox from './SearchBox.vue'

export default {
  name: 'Header',

  components: {
    HeaderNav,
    SidebarToggle,
    SearchBox
  },

  computed: {
    Logo() {
      const { title, logo } = this.$store.getters.config

      if (typeof logo === 'string') {
        return {
          template: logo
        }
      }

      if (typeof logo === 'object') {
        return logo
      }

      return {
        render(h) {
          return h('span', null, [title])
        }
      }
    },

    leftNav() {
      const { nav } = this.$store.getters.config
      return nav && nav.filter(item => item.position === 'left')
    },

    rightNav() {
      const { nav } = this.$store.getters.config
      return (
        nav && nav.filter(item => item.position === 'right' || !item.position)
      )
    }
  }
}
</script>

<style scoped>
.Header {
  height: var(--header-height);
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 33;
  background: var(--header-background);
}

.header-inner {
  max-width: var(--page-max-width);
  margin: 0 auto;
  height: 100%;
  padding: 0 var(--gap);
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    border-bottom: 1px solid var(--border-color);
  }
}

.site-title {
  font-weight: normal;
  margin: 0 25px 0 0;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  white-space: nowrap;

  & a {
    color: var(--text-color);
    text-decoration: none;
  }
}

.header-left {
  display: flex;
  flex: 1 1 100%;
}

.header-right {
  display: flex;
  flex: 1 1 100%;
  justify-content: flex-end;
  height: calc(var(--header-height) - 1px);
}
</style>
