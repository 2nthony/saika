<template>
  <HomeSection>
    <template #title>
      <EditIcon />Posts
    </template>

    <div class="columns is-multiline">
      <template v-if="$config.posts">
        <div v-for="post in $config.posts" :key="post.link" class="column is-8">
          <PostCard :post="post" />
        </div>
      </template>
    </div>
  </HomeSection>
</template>

<script>
import { EditIcon } from 'vue-feather-icons'
import HomeSection from '../components/HomeSection.vue'
import PostCard from '../components/PostCard.vue'

export default {
  components: {
    HomeSection,
    EditIcon,
    PostCard
  }
}
</script>

<style></style>
