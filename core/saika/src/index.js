import Vue from 'vue'
import marked from './utils/marked'
import createRouter from './router'
import store from './store'
import hooks from './hooks'
import builtInPlugins from './plugins'

// Core Components
import Root from './components/Root.vue'
import PostContent from './components/PostContent.vue'

// Saika Components
import PrevNextLinks from './components/PrevNextLinks.vue'
import InjectedComponents from './components/InjectedComponents'
import Note from './components/Note.vue'
import ImageZoom from './components/ImageZoom.vue'
import SaikaLink from './components/SaikaLink.vue'

Vue.component(SaikaLink.name, SaikaLink)
Vue.component(Note.name, Note)
Vue.component(ImageZoom.name, ImageZoom)
Vue.component(InjectedComponents.name, InjectedComponents)
Vue.component(PostContent.name, PostContent)
Vue.component(PrevNextLinks.name, PrevNextLinks)

Vue.mixin({
  created() {
    const saika = this.$options.saika || this.$root.$saika
    if (saika) {
      this.$saika = saika
      this.$config = saika.config
    }
  }
})

class Saika {
  constructor(config = {}) {
    const router = createRouter(config.router)
    store.commit('SET_CONFIG', config)

    this.config = store.getters.config
    this.router = router
    this.store = store
    this.hooks = hooks

    this.components = {}

    this.prepare()

    this.app = new Vue({
      router,
      store,
      saika: this,
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

  get userPlugins() {
    return store.getters.config.plugins
  }

  hasPlugin(name) {
    return this.userPlugins.some(plugin => plugin.name === name)
  }

  getComponents(position) {
    return this.components[position] || []
  }

  registerComponent(position, component, props) {
    this.components[position] = this.components[position] || []
    this.components[position].push({ component, props })
    return this
  }

  processMarkdown(fn) {
    this.hooks.add('processMarkdown', fn)
    return this
  }

  processHTML(fn) {
    this.hooks.add('processHTML', fn)
    return this
  }

  extendMarkedRenderer(fn) {
    this.hooks.add('extendMarkedRenderer', fn)
  }

  use(fn) {
    fn({ Vue })
    return this
  }

  /**
   * @private
   * @arg {Object} plugin pluginApi
   */
  applyPlugin(plugin) {
    if (!plugin.when || plugin.when(this)) {
      plugin.extend(this)
    }
  }

  /**
   * @private
   */
  prepare() {
    // Apply user plugins
    for (const plugin of this.userPlugins) {
      this.applyPlugin(plugin)
    }

    // Apply built-in plugins
    for (const plugin of builtInPlugins) {
      this.applyPlugin(plugin)
    }
  }
}

Saika.version = __SAIKA_VERSION__
Saika.marked = marked

export default Saika

if (typeof window !== 'undefined') {
  window.Vue = Vue
}
