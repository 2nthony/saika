import Vue, { Component } from 'vue'
import Router from 'vue-router'
import { Store } from 'vuex'
import hooks, { Hooks } from './hooks'
import InjectedComponents from '@saika/components/InjectedComponents.vue'
import { PluginOptions, Position } from './types'

Vue.component(InjectedComponents.name, InjectedComponents)

export class PluginHooks {
  hooks: Hooks

  constructor() {
    this.hooks = hooks
  }

  processMarkdown(fn: (content: string) => void): PluginHooks {
    this.hooks.add('processMarkdown', fn)
    return this
  }

  processHTML(fn: (html: string) => void): PluginHooks {
    this.hooks.add('processHTML', fn)
    return this
  }
}

export default class PluginApi extends PluginHooks {
  store: Store<any>
  router: Router
  plugins: PluginOptions[]
  components: {
    [k: string]: { component: Component; props: { [k: string]: any } }[]
  }

  constructor({
    plugins,
    store,
    router
  }: {
    plugins: PluginOptions[]
    store: Store<any>
    router: Router
  }) {
    super()
    this.plugins = plugins
    this.store = store
    this.router = router
    this.components = {}
  }

  hasPlugin(name: string): boolean {
    return this.plugins.some(plugin => plugin.name === name)
  }

  getComponents(position: Position) {
    return this.components[position] || []
  }

  registerComponent(
    position: Position,
    component: Component = {},
    props: { [k: string]: any } = {}
  ): PluginApi {
    this.components[position] = this.components[position] || []
    this.components[position].push({ component, props })
    return this
  }

  registerMainComponent(
    component: Component = {},
    props: object = {}
  ): PluginApi {
    this.components.main = [{ component, props }]
    return this
  }
}
