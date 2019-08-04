<template>
  <div class="Docs">
    <PostContent />
  </div>
</template>

<script>
import PostContent from '../components/PostContent.vue'

export default {
  name: 'Docs',

  components: {
    PostContent
  }
}
</script>

<style scoped>
.Docs {
  display: flex;
}
</style>

<style>
.Content {
  padding-left: calc(var(--sidebar-width) + 40px);
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 100%;

  @media (max-width: 768px) {
    padding-left: 0;
  }
}
</style>
