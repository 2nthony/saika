<template>
  <div class="Blog">
    <BlogPostList :posts="posts" v-if="isPostsList" />
    <PostContent v-else />
  </div>
</template>

<script>
import BlogPostList from '../components/BlogPostsList.vue'
import PostContent from '../components/PostContent.vue'

export default {
  name: 'Blog',

  components: {
    BlogPostList,
    PostContent
  },

  computed: {
    posts() {
      return this.$store.getters.posts
    },

    isPostsList() {
      return this.$route.path === '/'
    }
  }
}
</script>
