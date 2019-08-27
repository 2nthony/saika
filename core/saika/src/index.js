import Vue from 'vue'
import marked from './utils/marked'
import createRouter from './router'
import store from './store'
import hooks from './hooks'
import builtInPlugins from './plugins'
import builtInComponents from './components'
import Root from './components/Root.vue'

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

  hook(name, fn) {
    this.hooks.add(name, fn)
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
    // Register built-in components
    this.use(builtInComponents)

    // Apply built-in plugins
    for (const plugin of builtInPlugins) {
      this.applyPlugin(plugin)
    }

    // Apply user plugins
    for (const plugin of this.userPlugins) {
      this.applyPlugin(plugin)
    }
  }

  /**
   * These `hooks` will remove in next major release
   *
   * Please use `api.hook` to instead
   * e.g. `api.hook('extendMarkedRenderer', renderer => {})`
   */
  extendMarkedRenderer(fn) {
    return this.hook('extendMarkedRenderer', fn)
  }

  processMarkdown(fn) {
    return this.hook('processMarkdown', fn)
  }

  processHTML(fn) {
    return this.hook('processHTML', fn)
  }
}

Saika.version = __SAIKA_VERSION__
Saika.marked = marked

export default Saika

if (typeof window !== 'undefined') {
  window.Vue = Vue
}
