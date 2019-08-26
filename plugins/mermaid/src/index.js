/* global mermaid */

export default (initializeOpts = {}) => ({
  name: 'saika-plugin-mermaid',
  extend: api => {
    api.hook('extendMarkedRenderer', renderer => {
      const origCode = renderer.code

      renderer.code = function(code, lang, escaped) {
        if (lang === 'mermaid') {
          return `<div class="mermaid">${code}</div>`
        }

        return origCode.call(this, code, lang, escaped)
      }
    })

    api.hook('onContentUpdated', () => {
      mermaid.initialize(initializeOpts, '.mermaid')
    })
  },
  when: () => {
    if (typeof mermaid === 'undefined' || !mermaid.init) {
      console.error(
        '[saika] Cannot find global variable `mermaid`, you might forget to include it: https://mermaidjs.github.io/#/usage?id=installation'
      )
      return
    }

    return true
  }
})
