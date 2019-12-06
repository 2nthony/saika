<template>
  <div class="CopyCodeButton" @click="handleCopy" title="Copy code">
    <Copy fill="white" stroke="#999" width="18" height="18" />
  </div>
</template>

<script>
import Copy from '../../components/icons/Copy.vue'
import copy from '../../utils/copy'

const CopyCodeButton = {
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

CopyCodeButton.install = Vue => {
  Vue.component(CopyCodeButton.name, CopyCodeButton)
}

export default CopyCodeButton
</script>

<style scoped>
.CopyCodeButton {
  display: flex;
  position: absolute;
  bottom: 5px;
  right: 5px;
  cursor: pointer;
  z-index: 3;
}
</style>
