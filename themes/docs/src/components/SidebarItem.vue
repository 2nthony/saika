<template>
  <div class="SidebarItem">
    <div class="link-category" v-if="item.title && children">
      <div class="link-title">
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.4 8.56L4.67 5M1.4 1.23L4.66 4.7"
            stroke="#999"
            stroke-linecap="square"
          ></path></svg
        >{{ item.title }}
      </div>
      <div class="link-posts">
        <div class="link" v-for="(link, index) in children" :key="index">
          <SaikaLink class="link-item" :to="link.link">{{
            link.title
          }}</SaikaLink>
          <ContentToc :link="link" />
        </div>
      </div>
    </div>
    <div class="link" v-if="item.title && item.link">
      <SaikaLink class="link-item" :to="item.link">{{ item.title }}</SaikaLink>
      <ContentToc :link="item" />
    </div>
  </div>
</template>

<script>
import ContentToc from './ContentToc.vue'

export default {
  components: {
    ContentToc
  },

  props: {
    item: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },

  computed: {
    children() {
      return this.item.children || this.item.links
    }
  }
}
</script>

<style scoped>
.link {
  margin: 18px 0;
}

.link-title {
  & svg {
    margin-left: 2px;
    margin-right: 16px;
    transform: rotate(90deg);
  }
}

.link-posts {
  padding-left: 19px;
  margin-left: 4px;
  border-left: 1px solid var(--border-color);
}

.link-item {
  display: flex;
  align-items: center;

  &::before {
    content: '';
    margin-left: 2px;
    margin-right: 18px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #333;
  }
}
</style>

<style scoped>
.router-link-exact-active {
  font-weight: 600;
}
</style>
