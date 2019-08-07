import Vue from 'vue'
import Root from '../components/Root.vue'
import marked from './utils/marked'
import createRouter from './router'
import store from './store'
import { inBrowser } from './utils'
import SaikaLink from '../components/SaikaLink.vue'
import Note from '../components/Note.vue'
import ImageZoom from '../components/ImageZoom.vue'
import ExternalLinkIcon from '../components/icons/ExternalLinkIcon.vue'
import VueRouter from 'vue-router'
import { Store } from 'vuex'
import PluginApi from './PluginApi'
import { SaikaConfig } from './types'
import hooks, { Hooks } from './hooks'

// Default theme
import ThemeDefault from './theme-default'

Vue.component(SaikaLink.name, SaikaLink)
Vue.component(Note.name, Note)
Vue.component(ImageZoom.name, ImageZoom)
Vue.component(ExternalLinkIcon.name, ExternalLinkIcon)

Vue.mixin({
  created() {
    // @ts-ignore
    const pluginApi = this.$options.pluginApi || this.$root.$pluginApi
    if (pluginApi) {
      // @ts-ignore
      this.$pluginApi = pluginApi
    }
  }
})

export default class Saika {
  app: Vue
  router: VueRouter
  store: Store<any>
  hooks: Hooks
  config: SaikaConfig
  pluginApi: PluginApi

  static version: string = __SAIKA_VERSION__
  static marked = marked

  constructor(config: SaikaConfig = {}) {
    this.config = config
    const router = createRouter(config.router)

    this.router = router
    this.store = store
    this.hooks = hooks

    store.commit('SET_CONFIG', {
      title: inBrowser && document.title,
      ...config
    })

    const plugins = [ThemeDefault, ...store.getters.config.plugins]
    this.pluginApi = new PluginApi({ plugins, store, router })
    this.applyPlugins()

    this.app = new Vue({
      router,
      store,
      // @ts-ignore
      pluginApi: this.pluginApi,
      render: h => h(Root)
    })

    if (config.mount !== false) {
      this.mount()
    }
  }

  mount(): Saika {
    const { target } = store.getters
    this.app.$mount(`#${target}`)

    return this
  }

  private applyPlugins(): void {
    for (const plugin of this.pluginApi.plugins) {
      if (!plugin.when || plugin.when(this.pluginApi)) {
        plugin.extend(this.pluginApi)
      }
    }
  }
}

if (typeof window !== 'undefined') {
  window.Vue = Vue
}
