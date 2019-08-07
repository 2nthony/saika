/**
 * https://github.com/egoist/vue-ga/blob/master/src/index.js
 */
import VueRouter from 'vue-router'

function appendScript(): void {
  const script = document.createElement('script')
  script.async = true
  script.src = 'https://www.google-analytics.com/analytics.js'
  document.body.appendChild(script)
}

function init(id: string): void {
  if (!window.ga) {
    appendScript()
    window.ga =
      window.ga ||
      function() {
        ;(window.ga.q = window.ga.q || []).push(arguments)
      }
    window.ga.l = Number(new Date())
    window.ga('create', id, 'auto')
  }
}

function collect(url: string, id: string) {
  init(id)
  window.ga('set', 'page', url)
  window.ga('send', 'pageview')
}

export default function(router: VueRouter, id: string): void {
  router.afterEach(to => {
    collect(to.fullPath, id)
  })
}
