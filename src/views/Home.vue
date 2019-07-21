<template>
  <div class="Wrap">
    <div class="Home">
      <PostList :posts="posts" />
    </div>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'

export default {
  name: 'HomePage',

  components: {
    PostList
  },

  computed: {
    posts() {
      return this.$store.getters.posts
    }
  }
}
</script>
