export default {
  name: 'html-title',
  extend: api => {
    api.hook('onContentUpdated', () => {
      const {
        state: { postLinkMeta },
        getters: { config }
      } = api.store

      let preText = ''

      if (postLinkMeta.link !== '/') {
        preText = `${postLinkMeta.title} - `
      }

      document.title = `${preText}${config.title}`
    })
  }
}
