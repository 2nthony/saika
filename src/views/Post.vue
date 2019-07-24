<template>
  <div class="Wrap">
    <div v-if="isFetchingFile" class="Content">
      <content-loader :height="160" :width="400" :speed="2">
        <rect x="0" y="5" rx="4" ry="4" width="117" height="6.4" />
        <rect x="0" y="25" rx="3" ry="3" width="85" height="6.4" />
        <rect x="0" y="60" rx="3" ry="3" width="350" height="6.4" />
        <rect x="0" y="80" rx="3" ry="3" width="380" height="6.4" />
        <rect x="0" y="100" rx="3" ry="3" width="201" height="6.4" />
      </content-loader>
    </div>
    <div v-else class="Content">
      <component :is="PostContent" />
      <PrevNextLinks />
    </div>
  </div>
</template>

<script>
import { ContentLoader } from 'vue-content-loader'
import PrevNextLinks from '../components/PrevNextLinks.vue'
import NotFound from './NotFound.vue'

export default {
  name: 'PostPage',

  components: {
    ContentLoader,
    PrevNextLinks
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

      return component
    }
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

  methods: {
    async fetchFile(path) {
      await this.$store.dispatch('fetchFile', path)
      await this.$nextTick()
    }
  }
}
</script>

<style src="../css/prism.css"></style>
<style src="../css/post-content.css"></style>
