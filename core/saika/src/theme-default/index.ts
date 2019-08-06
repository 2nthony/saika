import { PluginOptions } from '../types'
import Main from './Main.vue'

export default {
  name: 'default-theme',
  extend: api => {
    api.registerMainComponent(Main)
  }
} as PluginOptions
