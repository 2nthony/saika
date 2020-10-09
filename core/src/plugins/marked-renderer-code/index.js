import marked from '../../utils/marked'
import parseCodeOptions from '../../utils/parseCodeOptions'
import CodeBlockButtons from './code-block-buttons.vue'

export default {
  name: 'marked-renderer-code',

  extend: api => {
    api.use(({ Vue }) => {
      Vue.component(CodeBlockButtons.name, CodeBlockButtons)
    })

    api.hook('extendMarkedRenderer', renderer => {
      // `v-pre` Disable template interpolation in code
      renderer.codespan = text =>
        `<code v-pre class="inline-code">${text}</code>`

      const origCode = renderer.code
      renderer.code = function(code, _lang, escaped) {
        const { lang, opts } = parseCodeOptions(_lang)
        const { env } = this.options

        let res = origCode.call(this, code, lang, escaped)
        let classnames = 'pre-wrapper'

        res = res.replace(/^<pre>/, `<pre v-pre>`)

        if (opts.mixin) {
          env.mixins.push(code.trim())
          return ''
        }

        if (opts.highlight) {
          const codeMask = code
            .split('\n')
            .map((v, i) => {
              i += 1
              const shouldHighlight = opts.highlight.some(lineNumber => {
                if (typeof lineNumber === 'number') {
                  return lineNumber === i
                }

                if (typeof lineNumber === 'string') {
                  const [start, end] = lineNumber.split('-').map(Number)
                  return i >= start && (!end || end >= i)
                }

                return false
              })
              const escapedLine = v ? marked.escape(v) : '&#8203;'
              return shouldHighlight
                ? `<span class="code-line highlight">${escapedLine}</span>`
                : `<span class="code-line">${escapedLine}</span>`
            })
            .join('')
          res += `<div class="code-mask">${codeMask}</div>`
        }

        if (Array.isArray(api.config.codeBlockButtons)) {
          classnames += ' has-code-block-buttons'
          res = `
            <component :is="{render: h => h('code-block-buttons', { props: {encodedCode: \`${encodeURIComponent(
              code
            )}\`} })}" />
            ${res}
          `
        }

        return `<div data-lang="${lang ||
          ''}" class="${classnames}">${res}</div>`
      }
    })
  }
}
