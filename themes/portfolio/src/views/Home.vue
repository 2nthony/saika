<template>
  <div class="saika-theme-portfolio">
    <div class="content">
      <HomeProfile />
      <div class="main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import HomeProfile from '../components/HomeProfile.vue'

export default {
  name: 'SaikaThemePortfolio',

  components: {
    HomeProfile
  }
}
</script>

<style src="../css/main.css"></style>
<style src="../css/grid.css"></style>
