import encode from './utils/encode'

export default ({ type = 'png' } = {}) => ({
  name: 'saika-plugin-plantuml',
  extend: api => {
    api.hook('extendMarkedRenderer', renderer => {
      const origCode = renderer.code

      renderer.code = function(code, lang, escaped) {
        if (lang === 'plantuml') {
          return `<img src="http://plantuml.com/plantuml/${type}/${encode(
            code
          )}">`
        }

        return origCode.call(this, code, lang, escaped)
      }
    })
  }
})
