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
    <InjectedComponents position="content:start" />
    <component :is="PostContent" />
    <InjectedComponents position="content:end" />
  </div>
</template>

<script>
import { ContentLoader } from 'vue-content-loader'
import hooks from '../lib/hooks.ts'
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
  }
}
</script>
