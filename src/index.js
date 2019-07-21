import Vue from 'vue'
import App from './App.vue'
import createRouter from './router'
import store from './store'
import { inBrowser } from './utils'
import SaikaLink from './components/SaikaLink'
import ExternalLinkIcon from './components/icons/ExternalLinkIcon.vue'

Vue.component(SaikaLink.name, SaikaLink)
Vue.component(ExternalLinkIcon.name, ExternalLinkIcon)

class Saika {
  constructor(config = {}) {
    this.config = config
    const router = createRouter(config.router)

    this.router = router
    this.store = store

    store.commit('SET_CONFIG', {
      title: inBrowser && document.title,
      ...config
    })

    this.app = new Vue({
      router,
      store,
      render: h => h(App)
    })

    if (config.mount !== false) {
      this.mount()
    }
  }

  mount() {
    const { target } = store.getters
    this.app.$mount(`#${target}`)

    return this
  }
}

Saika.version = __SAIKA_VERSION__

export default Saika

if (typeof window !== 'undefined') {
  window.Vue = Vue
  window.__SAIKA_VERSION__ = __SAIKA_VERSION__
}
