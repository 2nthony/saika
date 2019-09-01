<script>
export default {
  name: 'SaikaThemeDefault',

  functional: true,

  render(h) {
    return h(
      'div',
      {
        class: 'saika-theme-default'
      },
      [h('PostContent')]
    )
  }
}
</script>

<style scoped>
.saika-theme-default {
  max-width: 770px;
  margin: 0 auto;
}

.Content {
  margin: 40px 0 30px;
}
</style>
