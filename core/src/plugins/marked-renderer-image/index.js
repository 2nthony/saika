export default {
  name: 'marked-renderer-image',
  extend: api => {
    api.hook('extendMarkedRenderer', renderer => {
      renderer.image = (href, title, text) => {
        return `<img src="${href}" title="${title ||
          ''}" alt="${text}" loading="lazy">`
      }
    })
  }
}
