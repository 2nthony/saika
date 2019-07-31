<template>
  <div class="Page">
    <Header />
    <div class="Main">
      <div class="Wrap">
        <PostList v-if="isPostList" :posts="postList" />
        <template v-else>
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
            <component :is="PostContent" />
            <PrevNextLinks />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import jump from 'jump.js'
import { ContentLoader } from 'vue-content-loader'
import Header from '../components/Header.vue'
import PrevNextLinks from '../components/PrevNextLinks.vue'
import NotFound from '../components/NotFound.vue'
import PostList from '../components/PostList.vue'

export default {
  name: 'PostPage',

  components: {
    Header,
    PostList,
    ContentLoader,
    PrevNextLinks
  },

  computed: {
    isPostList() {
      return this.$route.path === '/'
    },

    isFetchingFile() {
      return this.$store.state.isFetchingFile
    },

    postList() {
      return this.$store.getters.posts
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

  watch: {
    '$route.hash'() {
      this.$nextTick(() => {
        this.jumpToHash()
      })
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
      if (path === '/') return
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
