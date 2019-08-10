import Vue from 'vue'
import Root from '../components/Root.vue'
import SaikaLink from '../components/SaikaLink.vue'
import Note from '../components/Note.vue'
import ImageZoom from '../components/ImageZoom.vue'
import ExternalLinkIcon from '../components/icons/ExternalLinkIcon.vue'
import ThemeDefault from '../plugins/theme-default'
import BannerFooter from '../plugins/banner-footer'
import marked from './utils/marked'
import createRouter from './router'
import store from './store'
import { inBrowser } from './utils'
import PluginApi from './PluginApi'

Vue.component(SaikaLink.name, SaikaLink)
Vue.component(Note.name, Note)
Vue.component(ImageZoom.name, ImageZoom)
Vue.component(ExternalLinkIcon.name, ExternalLinkIcon)

Vue.mixin({
  created() {
    const pluginApi = this.$options.pluginApi || this.$root.$pluginApi
    if (pluginApi) {
      this.$pluginApi = pluginApi
    }
  }
})

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

    const plugins = [
      ThemeDefault,
      ...store.getters.config.plugins,
      BannerFooter
    ]
    this.pluginApi = new PluginApi({ plugins, store, router })
    this.applyPlugins()

    this.app = new Vue({
      router,
      store,
      pluginApi: this.pluginApi,
      render: h => h(Root)
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

  /**
   * @private
   */
  applyPlugins() {
    for (const plugin of this.pluginApi.plugins) {
      if (!plugin.when || plugin.when(this.pluginApi)) {
        plugin.extend(this.pluginApi)
      }
    }
  }
}

Saika.version = __SAIKA_VERSION__
Saika.marked = marked

export default Saika

if (typeof window !== 'undefined') {
  window.Vue = Vue
}
