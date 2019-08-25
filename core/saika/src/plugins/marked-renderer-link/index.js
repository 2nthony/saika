export default {
  name: 'marked-renderer-link',
  extend: api => {
    api.extendMarkedRenderer(renderer => {
      renderer.link = (href, _, text) => {
        return `<SaikaLink to="${href}">${text}</SaikaLink>`
      }
    })
  }
}
