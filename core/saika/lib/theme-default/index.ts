import { PluginOptions } from '../types'
import Main from './Main.vue'

export default {
  name: 'theme-default',
  extend: api => api.registerMainComponent(Main)
} as PluginOptions
