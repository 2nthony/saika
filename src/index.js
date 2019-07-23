import Vue from 'vue'
import App from './App.vue'
import marked from './utils/marked'
import createRouter from './router'
import store from './store'
import { inBrowser } from './utils'
import SaikaLink from './components/SaikaLink'
import ImageZoom from './components/ImageZoom.vue'
import ExternalLinkIcon from './components/icons/ExternalLinkIcon.vue'

Vue.component(SaikaLink.name, SaikaLink)
Vue.component(ImageZoom.name, ImageZoom)
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
Saika.marked = marked

export default Saika

if (typeof window !== 'undefined') {
  window.Vue = Vue
  window.__SAIKA_VERSION__ = __SAIKA_VERSION__
}
