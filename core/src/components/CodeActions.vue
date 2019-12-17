<script>
import Copy from './code-actions/Copy.vue'

const Component = {
  name: 'CodeActions',

  functional: true,

  render(h, { props }) {
    return h(
      'div',
      {
        class: 'code-actions'
      },
      [
        h(Copy, {
          props: {
            code: props.code
          }
        })
      ]
    )
  },

  props: {
    code: String
  }
}

Component.install = Vue => {
  Vue.component(Component.name, Component)
}

export default Component
</script>

<style scoped>
.code-actions {
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  padding: 5px;
  opacity: 0.3;
  transition: opacity ease 300ms;

  &:hover {
    opacity: 0.9;
  }
}
</style>
