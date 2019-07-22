<script>
export default {
  functional: true,

  render(h) {
    return h('div', null, [
      h('h3', null, ['Not Found :(']),
      h(
        'SaikaLink',
        {
          props: {
            to: '/'
          }
        },
        ['← Back Home']
      )
    ])
  }
}
</script>
