import { Component } from 'vue'
import { RouterOptions } from 'vue-router'
import PluginApi from './PluginApi'

export interface SaikaConfig {
  target?: string
  sourcePath?: string
  title?: string
  mount?: boolean
  router?: RouterOptions
  postMixins?: Component[]
  nav?: NavItem[]
  posts?: PostItem[]
  highlight?: string[]
  plugins?: PluginOptions[]
}

interface LinkItem {
  title: string
  link: string
}

export interface NavItem extends LinkItem {}

export interface PostItem extends LinkItem {}

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

export type PostOptions = {
  file: string
  content?: string
}

export type HookFn = (...args: any[]) => any
