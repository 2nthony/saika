<template>
  <div class="saika-theme-portfolio">
    <div class="content">
      <HomeProfile />
      <div class="main">
        <template v-if="$route.path === '/'">
          <HomeRepos v-if="$config.repos !== false" />
          <HomeSkills v-if="$config.skills" :skills="$config.skills" />
          <HomePosts v-if="$config.posts" :posts="$config.posts" />
        </template>
        <PostContent v-else />
      </div>
    </div>
  </div>
</template>

<script>
import HomeRepos from '../components/HomeRepos.vue'
import HomeSkills from '../components/HomeSkills.vue'
import HomeProfile from '../components/HomeProfile.vue'
import HomePosts from '../components/HomePosts.vue'

export default {
  name: 'SaikaThemePortfolio',

  components: {
    HomeRepos,
    HomeSkills,
    HomeProfile,
    HomePosts
  }
}
</script>

<style src="../css/main.css"></style>
<style src="../css/grid.css"></style>
