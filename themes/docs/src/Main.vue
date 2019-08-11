<script>
export default {
  name: 'SaikaThemeDocs',

  functional: true,

  render(h) {
    return h(
      'div',
      {
        class: 'saika-theme-docs'
      },
      [h('PostContent')]
    )
  }
}
</script>

<style scoped>
.Content {
  padding-left: calc(var(--sidebar-width) + 40px);
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 100%;
  margin-top: 40px;

  @media (max-width: 768px) {
    padding-left: 0;
  }
}
</style>
