<template>
  <Badge v-if="version" :content="`v${version}`" />
</template>

<script>
export default {
  name: 'PkgVersion',

  props: {
    name: String
  },

  data() {
    return {
      version: ''
    }
  },

  mounted() {
    fetch(`https://unpkg.com/${this.name}/package.json`)
      .then(res => res.json())
      .then(res => {
        this.version = res.version
      })
  }
}
</script>
