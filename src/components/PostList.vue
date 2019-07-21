<template functional>
  <div class="PostList">
    <div
      v-for="(post, k) in props.posts"
      :key="k"
      class="PostListItem"
    >
      <SaikaLink :to="post.link">
        <h2>{{ post.title || post.link }}</h2>
      </SaikaLink>
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
