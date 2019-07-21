<template>
  <header class="Header">
    <div class="header-inner">
      <div class="header-left">
        <h1 class="site-title">
          <SaikaLink to="/">{{ Title }}</SaikaLink>
        </h1>
      </div>
      <div class="header-right">
        <HeaderNav v-if="nav" :nav="nav" />
      </div>
    </div>
  </header>
</template>

<script>
import HeaderNav from './HeaderNav.vue'

export default {
  name: 'Header',

  components: {
    HeaderNav
  },

  computed: {
    Title() {
      const { title } = this.$store.getters.config
      return title
    },
    nav() {
      const { nav } = this.$store.getters.config
      return nav
    }
  }
}
</script>

<style scoped>
.Header {
  height: var(--header-height);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 33;
  border-bottom: 1px solid var(--border-color);
  background: var(--header-background);
}

.header-inner {
  height: 100%;
  padding: 0 var(--gap);
  position: relative;
  display: flex;
  align-items: center;
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

.header-right {
  display: flex;
  position: absolute;
  right: 20px;
  top: 0;
  height: calc(var(--header-height) - 1px);
}
</style>
