<template>
  <div class="Collection">
    <HomeRepos v-if="$config.repos !== false" />
    <HomeSkills v-if="$config.skills" :skills="$config.skills" />
    <HomePosts v-if="$config.posts" :posts="$config.posts" />
  </div>
</template>

<script>
import HomeRepos from '../components/HomeRepos.vue'
import HomeSkills from '../components/HomeSkills.vue'
import HomePosts from '../components/HomePosts.vue'

export default {
  components: {
    HomeRepos,
    HomeSkills,
    HomePosts
  }
}
</script>
