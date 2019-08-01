<template>
  <div class="Page" :class="`saika-${$store.getters.config.theme}`">
    <InjectedComponents position="page:start" />
    <Header />
    <div class="Main">
      <div class="Wrap">
        <InjectedComponents position="main:start" />
        <InjectedComponents position="main" />
        <InjectedComponents position="main:end" />
      </div>
    </div>
    <InjectedComponents position="page:end" />
  </div>
</template>

<script>
import jump from 'jump.js'
import Header from '../components/Header.vue'

export default {
  name: 'Home',

  components: {
    Header
  },

  mounted() {
    this.fetchFile(this.$route.path)
  },

  beforeRouteUpdate(to, from, next) {
    next()
    if (to.path !== from.path) {
      this.fetchFile(to.path)
    }
  },

  watch: {
    '$route.hash'() {
      this.$nextTick(() => {
        this.jumpToHash()
      })
    }
  },

  methods: {
    async fetchFile(path) {
      await this.$store.dispatch('fetchFile', path)
      await this.$nextTick()
      this.jumpToHash()
    },

    jumpToHash() {
      const hash = decodeURI(this.$route.hash)

      if (hash) {
        const el = document.querySelector(hash)
        if (el) {
          const header = document.querySelector('.Header')
          jump(el, {
            duration: 0,
            offset: -header.clientHeight - 80
          })
        }
      }
    }
  }
}
</script>

<style src="../css/prism.css"></style>
<style src="../css/post-content.css"></style>
