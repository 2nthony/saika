/**
 * https://github.com/egoist/vue-ga/blob/master/src/index.js
 */
function appendScript() {
  const script = document.createElement('script')
  script.async = true
  script.src = 'https://www.google-analytics.com/analytics.js'
  document.body.append(script)
}

function init(id) {
  if (!window.ga) {
    appendScript()
    window.ga =
      window.ga ||
      function() {
        // eslint-disable-next-line prefer-rest-params
        ;(window.ga.q = window.ga.q || []).push(arguments)
      }

    window.ga.l = Number(new Date())
    window.ga('create', id, 'auto')
  }
}

export function collect(url, id) {
  init(id)
  window.ga('set', 'page', url)
  window.ga('send', 'pageview')
}
