<template>
  <a
    :href="repo.url"
    class="card repo"
    target="_blank"
    rel="noopener noreferer"
  >
    <div class="repo-name">{{ repo.name }}</div>
    <div class="repo-description">{{ repo.description }}</div>
    <div class="repo-meta">
      <span v-if="repo.language" class="repo-language">
        <CodeIcon />
        {{ repo.language }}
      </span>
      <span class="repo-stars">
        <StarIcon />
        {{ repo.stars }}
      </span>
    </div>
  </a>
</template>

<script>
import { CodeIcon, StarIcon } from 'vue-feather-icons'

export default {
  components: {
    CodeIcon,
    StarIcon
  },

  props: {
    repo: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.repo-name {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.repo-description {
  margin-bottom: 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.repo-meta {
  display: flex;

  & > span {
    display: flex;
    align-items: center;

    & svg {
      width: 1rem;
      height: 1rem;
      margin-right: 5px;
    }

    &:not(:last-child) {
      margin-right: 15px;
    }
  }
}
</style>
