import Vue from 'vue'
import InjectedComponents from '../components/InjectedComponents.vue'
import hooks from './hooks'

Vue.component(InjectedComponents.name, InjectedComponents)

export class PluginHooks {
  constructor() {
    this.hooks = hooks
  }

  processMarkdown(fn) {
    this.hooks.add('processMarkdown', fn)
    return this
  }

  processHTML(fn) {
    this.hooks.add('processHTML', fn)
    return this
  }
}

export default class PluginApi extends PluginHooks {
  constructor({ plugins, store, router }) {
    super()
    this.plugins = plugins
    this.store = store
    this.router = router
    this.components = {}
  }

  hasPlugin(name) {
    return this.plugins.some(plugin => plugin.name === name)
  }

  getComponents(position) {
    return this.components[position] || []
  }

  registerComponent(position, component = {}, props = {}) {
    this.components[position] = this.components[position] || []
    this.components[position].push({ component, props })
    return this
  }

  registerMainComponent(component = {}, props = {}) {
    this.components.main = [{ component, props }]
    return this
  }
}
