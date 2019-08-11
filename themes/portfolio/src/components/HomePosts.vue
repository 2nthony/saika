<template>
  <HomeSection>
    <template slot="title">
      <Edit3Icon />Posts
    </template>

    <div class="columns is-multiline">
      <div v-for="post in posts" :key="post.link" class="column is-half">
        <PostCard :post="post" />
      </div>
    </div>
  </HomeSection>
</template>

<script>
import { Edit3Icon } from 'vue-feather-icons'
import PostCard from './PostCard.vue'
import HomeSection from './HomeSection.vue'

export default {
  components: {
    Edit3Icon,
    PostCard,
    HomeSection
  },

  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>
