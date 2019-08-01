/**
 * TODO rewrite this
 */
import { PluginOptions } from '../../types'
import Blog from './views/Blog.vue'
import Readme from './views/Readme.vue'
import PrevNextLinks from './components/PrevNextLinks.vue'

export default {
  name: 'Theme',
  extend: api => {
    const { config } = api.store.getters
    const { theme } = config

    if (theme === 'blog') {
      api.registerComponent('main', Blog)
      api.registerComponent('content:end', PrevNextLinks)
    }

    if (theme === 'readme') {
      api.store.commit('SET_CONFIG', {
        ...config,
        posts: [
          {
            title: 'README',
            link: '/'
          }
        ]
      })
      api.registerComponent('main', Readme)
    }
  }
} as PluginOptions
