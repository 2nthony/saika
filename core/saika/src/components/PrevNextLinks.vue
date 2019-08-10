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
  computed: {
    postsLinks() {
      return this.$store.getters.postsLinks
    },

    currentLink() {
      return this.$route.path
    },

    currentLinkIndex() {
      const { postsLinks } = this
      for (let i = 0; i < postsLinks.length; i++) {
        if (this.currentLink === postsLinks[i].link) {
          return i
        }
      }

      return false
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
