<template functional>
  <SaikaLink class="card" :to="props.post.link">
    <div class="post-title">
      {{ props.post.title }}
    </div>
  </SaikaLink>
</template>

<script>
export default {
  props: {
    post: {
      type: Object
    }
  }
}
</script>

<style scoped>
.post-title {
  font-size: 1.4rem;
  line-height: 1.4;
}
</style>
