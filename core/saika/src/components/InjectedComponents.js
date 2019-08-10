export default {
  name: 'InjectedComponents',

  functional: true,

  props: {
    position: {
      type: String,
      required: true
    }
  },

  render(h, { props, parent }) {
    const components = parent.$saika.getRegisteredComponents(props.position)

    if (components.length === 0) return

    return h(
      'div',
      {
        attrs: {
          class: 'InjectedComponents',
          'data-position': props.position
        }
      },
      components.map(({ component, props }) => h(component, { props }))
    )
  }
}
