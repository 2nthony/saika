import { HookFn } from './types'
import { PluginHooks } from './PluginApi'

export class Hooks {
  hooks: {
    [k: string]: HookFn[]
  }

  constructor() {
    this.hooks = {}
  }

  add(name: keyof PluginHooks, fn: HookFn): Hooks {
    this.hooks[name] = this.hooks[name] || []
    this.hooks[name].push(fn)
    return this
  }

  invoke(name: keyof PluginHooks, ...args: any[]): Hooks {
    const hooks = this.hooks[name] || []
    for (const fn of hooks) {
      fn(...args)
    }
    return this
  }

  process(name: keyof PluginHooks, arg: any) {
    const hooks = this.hooks[name] || []
    for (const fn of hooks) {
      arg = fn(arg) || arg
    }
    return arg
  }

  async processPromise(name: keyof PluginHooks, arg: any) {
    const hooks = this.hooks[name] || []
    for (const fn of hooks) {
      arg = (await fn(arg)) || arg
    }
    return arg
  }
}

export default new Hooks()
