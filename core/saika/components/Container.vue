<template>
  <div class="Page">
    <InjectedComponents position="page:start" />
    <div class="Wrap">
      <InjectedComponents position="wrap:start" />
      <div class="Main">
        <InjectedComponents position="main:start" />
        <InjectedComponents position="main" />
        <InjectedComponents position="main:end" />
      </div>
      <InjectedComponents position="wrap:end" />
    </div>
    <InjectedComponents position="page:end" />
  </div>
</template>

<script>
import jump from 'jump.js'

export default {
  name: 'Container',

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
          const header = document.querySelector('.Header') || {
            clientHeight: 55
          }
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
