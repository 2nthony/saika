<template functional>
  <a
    :href="`https://github.com/topics/${props.skill.topic}`"
    target="_blank"
    class="card"
  >
    <div class="skill-cover">
      <img
        :src="
          props.skill.image ||
            `https://cdn.jsdelivr.net/gh/github/explore/topics/${props.skill.topic}/${props.skill.topic}.png`
        "
        :alt="props.skill.topic"
      />
    </div>
    <div class="skill-description">
      {{ props.skill.description }}
    </div>
  </a>
</template>

<script>
export default {
  props: {
    skill: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.skill-cover {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;

  & img {
    height: 60px;
  }
}
</style>
