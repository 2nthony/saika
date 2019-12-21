<template>
  <div class="prev-next-links" v-if="prevLinkItem || nextLinkItem">
    <SaikaLink class="prev-link" v-if="prevLinkItem" :to="prevLinkItem.link"
      >← {{ prevLinkItem.title }}</SaikaLink
    >
    <SaikaLink class="next-link" v-if="nextLinkItem" :to="nextLinkItem.link"
      >{{ nextLinkItem.title }} →</SaikaLink
    >
  </div>
</template>

<script>
export default {
  name: 'PrevNextLinks',

  computed: {
    postsLinks() {
      return this.$store.getters.postsLinks
    },

    currentPostLinkMeta() {
      return this.$store.state.postLinkMeta
    },

    currentLinkIndex() {
      return this.currentPostLinkMeta.index
    },

    prevLinkItem() {
      return typeof this.currentLinkIndex === 'number'
        ? this.postsLinks[this.currentLinkIndex - 1]
        : null
    },

    nextLinkItem() {
      return typeof this.currentLinkIndex === 'number'
        ? this.postsLinks[this.currentLinkIndex + 1]
        : null
    }
  }
}
</script>

<style scoped>
.prev-next-links {
  overflow: auto;
  border-top: 1px solid var(--border-color);
  margin-top: 40px;
  padding-top: 30px;

  & .prev-link {
    float: left;
  }

  & .next-link {
    float: right;
  }
}
</style>
