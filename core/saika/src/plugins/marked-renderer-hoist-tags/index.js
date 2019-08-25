import alternativeComponents from './alternativeComponents'

export default {
  name: 'marked-renderer-hoist-tags',
  extend: api => {
    api.use(alternativeComponents)

    api.extendMarkedRenderer(renderer => {
      const RE = /^<(script|style)(?=(\s|>|$))>/i
      renderer.html = html => {
        html = html.trim()
        if (RE.test(html)) {
          return html
            .replace(/^<(script|style)/, '<v-$1')
            .replace(/<\/(script|style)>$/, '</v-$1>')
        }

        return html
      }
    })
  }
}
