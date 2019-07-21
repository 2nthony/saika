<template>
  <div :id="target" :class="target">
    <Header />
    <div class="Main">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',

  components: {
    Header
  },

  computed: {
    target() {
      return this.$store.getters.target
    },
    css() {
      const { cssVariables } = this.$store.getters
      const content = Object.keys(cssVariables).reduce((res, key) => {
        res += `--${key.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`)}:${
          cssVariables[key]
        };`
        return res
      }, '')
      return `:root{${content}}`
    }
  },

  watch: {
    css() {
      this.insertStyle()
    }
  },

  created() {
    this.insertStyle()
  },

  methods: {
    insertStyle() {
      const ID = 'saika-inserted-style'
      let style = document.getElementById(ID)

      if (style) {
        style.innerHTML = this.css
      } else {
        style = document.createElement('style')
        style.id = ID
        style.innerHTML = this.css
        document.head.insertBefore(style, document.head.firstChild)
      }
    }
  }
}
</script>

<style src="./css/global.css"></style>

<style scoped>
.Main {
  padding-top: var(--header-height);
}
</style>
