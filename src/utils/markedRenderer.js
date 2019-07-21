import marked from './marked'

export default function() {
  const renderer = new marked.Renderer()

  // Disable template interpolation in code
  renderer.codespan = text => `<code v-pre class="inline">${text}</code>`
  const origCode = renderer.code
  renderer.code = function(code, lang, escaped) {
    let res = origCode.call(this, code, lang, escaped)
    res = res.replace(/^<pre>/, `<pre v-pre>`)
    return `<div data-lang="${lang || ''}" class="pre-wrapper">${res}</div>`
  }

  return renderer
}
