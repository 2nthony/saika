<template functional>
  <SaikaLink class="card" :to="props.post.link">{{
    props.post.title
  }}</SaikaLink>
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
