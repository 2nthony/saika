<template>
  <div v-if="isFetchingFile" class="Content">
    <ContentLoader :height="160" :width="400" :speed="2">
      <rect x="0" y="5" rx="4" ry="4" width="117" height="6.4" />
      <rect x="0" y="25" rx="3" ry="3" width="85" height="6.4" />
      <rect x="0" y="60" rx="3" ry="3" width="350" height="6.4" />
      <rect x="0" y="80" rx="3" ry="3" width="380" height="6.4" />
      <rect x="0" y="100" rx="3" ry="3" width="201" height="6.4" />
    </ContentLoader>
  </div>
  <div v-else class="Content">
    <slot name="start" />
    <InjectedComponents position="content:start" />
    <component :is="PostContent" />
    <slot name="end" />
    <InjectedComponents position="content:end" />
  </div>
</template>

<script>
import jump from 'jump.js'
import { ContentLoader } from 'vue-content-loader'
import hooks from '../hooks'
import NotFound from './NotFound.vue'

export default {
  name: 'PostContent',

  components: {
    ContentLoader
  },

  computed: {
    isFetchingFile() {
      return this.$store.state.isFetchingFile
    },

    PostContent() {
      const { post } = this.$store.state
      const { postMixins } = this.$store.getters.config

      const component = {
        name: 'PostContent',
        mixins: [...postMixins],
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
    $route(to, from) {
      if (to.path !== from.path) {
        this.fetchFile(to.path)
      }
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
