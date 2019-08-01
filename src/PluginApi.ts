import Vue, { PropOptions, Component } from 'vue'
import { RouterOptions } from 'vue-router'
import { Store } from 'vuex'
import hooks, { Hooks } from './hooks'
import InjectedComponents from './components/InjectedComponents.vue'
import { SaikaConfig } from '.'

Vue.component(InjectedComponents.name, InjectedComponents)

export interface PluginOptions {
  name: string
  extend: (api: PluginApi) => void
  when?: (config: SaikaConfig) => boolean
}

export type Position =
  | 'main:start'
  | 'main:end'
  | 'content:start'
  | 'content:end'

export class PluginHooks {
  private hooks: Hooks

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
  router: RouterOptions
  plugins: PluginOptions[]
  components: { [k: string]: { component: Component; props: PropOptions }[] }

  constructor({
    plugins,
    store,
    router
  }: {
    plugins: PluginOptions[]
    store: Store<any>
    router: RouterOptions
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
    props: PropOptions = {}
  ): PluginApi {
    this.components[position] = this.components[position] || []
    this.components[position].push({ component, props })
    return this
  }
}
