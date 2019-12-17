<template>
  <div class="copy-code-button" @click="handleCopy" title="Copy code">
    <Copy fill="white" stroke="#999" width="18" height="18" />
  </div>
</template>

<script>
import Copy from '../icons/Copy.vue'
import copy from '../../utils/copy'

export default {
  name: 'CopyCodeButton',

  components: {
    Copy
  },

  props: {
    code: String
  },

  methods: {
    handleCopy() {
      copy(decodeURI(this.code))
    }
  }
}
</script>

<style scoped>
.copy-code-button {
  cursor: pointer;
}
</style>
