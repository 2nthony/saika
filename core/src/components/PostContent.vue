<template>
  <div v-if="isFetchingFile" class="Content">
    <svg viewBox="0 0 400 160" version="1.1" fill="#ecebeb">
      <rect x="0" y="15" rx="3" ry="3" width="117" height="6.4" />
      <rect x="0" y="45" rx="3" ry="3" width="85" height="6.4" />
      <rect x="0" y="70" rx="3" ry="3" width="350" height="6.4" />
      <rect x="0" y="90" rx="3" ry="3" width="380" height="6.4" />
      <rect x="0" y="110" rx="3" ry="3" width="200" height="6.4" />
    </svg>
  </div>
  <div v-else class="Content">
    <InjectedComponents position="banner" />
    <slot name="start" />
    <InjectedComponents position="content:start" />
    <component :is="PostContent" />
    <EditLink />
    <slot name="end" />
    <InjectedComponents position="content:end" />
    <InjectedComponents position="footer" />
  </div>
</template>

<script>
import jump from 'jump.js'
import hooks from '../hooks'
import NotFound from './NotFound.vue'

export default {
  name: 'PostContent',

  computed: {
    isFetchingFile() {
      return this.$store.state.isFetchingFile
    },

    PostContent() {
      const { post, env } = this.$store.state
      const { postMixins } = this.$store.getters.config

      const component = {
        name: 'PostContent',
        mixins: [
          ...postMixins,
          ...env.mixins.map(mixin => {
            // eslint-disable-next-line no-new-func
            const fn = new Function(`return ${mixin}`)
            return fn()
          })
        ],
        components: {
          NotFound
        },
        template: `<div class="post-content">${post.content ||
          '<NotFound />'}</div>`
      }

      hooks.process('extendMarkdownComponent', component)

      return component
    }
  },

  mounted() {
    this.fetchFile(this.$route.path)
  },

  watch: {
    '$route.hash'() {
      this.$nextTick(() => {
        this.jumpToHash()
      })
    },
    '$route.path'(to, from) {
      if (to !== from) {
        this.fetchFile(to)
      }
    }
  },

  methods: {
    async fetchFile(path) {
      await this.$store.dispatch('fetchFile', path)
      hooks.invoke('onContentWillUpdate', this)
      await this.$nextTick()
      hooks.invoke('onContentUpdated', this)
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
