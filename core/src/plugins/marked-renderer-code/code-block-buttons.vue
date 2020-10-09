<template>
  <div class="code-block-buttons" v-if="buttons">
    <div class="code-button" v-for="(button, k) in buttons" :key="k">
      <img
        v-if="button.icon"
        class="icon"
        :src="resolveImgSrc(button.icon)"
        :title="button.tip"
        alt="code-block-button"
        @click="button.action(decodedCode)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CodeBlockButtons',

  props: {
    // marked-renderer-code/index.js
    encodedCode: String
  },

  computed: {
    buttons: vm => vm.$config.codeBlockButtons,
    decodedCode: vm => decodeURIComponent(vm.encodedCode)
  },

  methods: {
    resolveImgSrc(icon) {
      if (icon.trim().indexOf('<svg') === 0) {
        return 'data:image/svg+xml,' + encodeURIComponent(icon)
      }

      return icon
    }
  }
}
</script>

<style scoped>
.code-block-buttons {
  opacity: 0;
  display: flex;
  position: absolute;
  right: 0;
  z-index: 3;
  border: 1px solid #eaeaea;
}
.code-button {
  display: flex;
  cursor: pointer;
  margin-left: 7px;
  padding: 5px 0;

  & .icon {
    width: 1rem;
    height: 1rem;
  }

  &:last-child {
    margin-right: 7px;
  }
}
</style>
