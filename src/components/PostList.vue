<template functional>
  <div class="PostList">
    <div
      v-for="(post, k) in props.posts"
      :key="k"
      class="PostItem"
    >
      <h2 class="PostTitle">
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
