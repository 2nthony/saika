<script>
export default {
  name: 'Badge',

  functional: true,

  props: {
    type: String,
    color: String,
    content: String,
    align: {
      type: String,
      default: 'text-top'
    }
  },

  render(h, { props, children }) {
    return h(
      'span',
      {
        class: ['badge', `is-${props.type}`],
        style: {
          backgroundColor: props.color,
          verticalAlign: props.align
        }
      },
      props.content || children
    )
  }
}
</script>

<style scoped>
.badge {
  display: inline-block;
  line-height: 18px;
  height: 18px;
  border-radius: 10px;
  color: #fff;
  padding: 0px 6px;
  font-size: 12px;
  background-color: var(--foreground);

  &.is-error {
    background-color: var(--error-color);
  }

  &.is-warning {
    background-color: var(--warning-color);
  }

  &.is-success {
    background-color: var(--geist-success);
  }
}
</style>
