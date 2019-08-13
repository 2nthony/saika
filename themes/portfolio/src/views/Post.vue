<template>
  <div class="wrap">
    <SaikaLink to="/" class="back-home"><CornerUpLeftIcon />Home</SaikaLink>
    <div class="columns">
      <PostContent class="column is-6 is-offset-3" />
    </div>
  </div>
</template>

<script>
import { CornerUpLeftIcon } from 'vue-feather-icons'

export default {
  components: {
    CornerUpLeftIcon
  }
}
</script>

<style scoped>
.back-home {
  border: 1px solid var(--border-color);
  border-radius: 33px;
  padding: 8px 30px;
  position: fixed;
  top: 20px;
  left: 20px;
  display: inline-flex;
  align-items: center;
  font-size: 1rem;

  & svg {
    width: 1rem;
    height: 1rem;
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    position: static;
    margin-bottom: 30px;
  }
}

.wrap {
  padding: 30px;

  @media (max-width: 768px) {
    padding: 0;
  }
}
</style>
