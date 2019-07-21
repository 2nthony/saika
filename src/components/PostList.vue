<template functional>
  <div class="post-list">
    <div
      v-for="(post, k) in props.posts"
      :key="k"
      class="post-item"
    >
      <h2 class="post-title">
        <SaikaLink :to="post.link">
          {{ post.title || post.link }}
        </SaikaLink>
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>
