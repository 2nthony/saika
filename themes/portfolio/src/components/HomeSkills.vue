<template>
  <HomeSection>
    <template #title>
      <CpuIcon />Skills
    </template>

    <div class="columns is-multiline">
      <div v-for="skill in skills" :key="skill.topic" class="column is-4">
        <SkillCard :skill="skill" />
      </div>
    </div>
  </HomeSection>
</template>

<script>
import { CpuIcon } from 'vue-feather-icons'
import SkillCard from './SkillCard.vue'
import HomeSection from './HomeSection.vue'

export default {
  components: {
    CpuIcon,
    HomeSection,
    SkillCard
  },

  props: {
    skills: {
      type: Array,
      required: true
    }
  }
}
</script>
