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
  link?: string
}

export interface NavItem extends LinkItem {}

export interface PostItem extends LinkItem {
  links?: LinkItem[]
  children?: LinkItem[]
}

export interface PluginOptions {
  default?: PluginOptions
  name: string
  extend: (api: PluginApi) => void
  when?: (api: PluginApi) => boolean
}

export type Position =
  | 'page:start'
  | 'page:end'
  | 'wrap:start'
  | 'wrap:end'
  | 'main:start'
  | 'main'
  | 'main:end'
  | 'content:start'
  | 'content:end'

export type PostOptions = {
  file: string
  content?: string
}

export type HookFn = (...args: any[]) => any
