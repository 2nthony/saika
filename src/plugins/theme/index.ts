/**
 * TODO rewrite this
 */
import { PluginOptions } from '../../types'
import { Blog } from './blog'
import { Readme } from './readme'
import { Docs } from './docs'
import PrevNextLinks from './components/PrevNextLinks.vue'

export default {
  name: 'Theme',
  extend: api => {
    const { config } = api.store.getters
    const { theme } = config

    if (theme === 'blog') {
      api.registerComponent('main', Blog)
      api.registerComponent('content:end', PrevNextLinks)
      return
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
      return
    }

    api.registerComponent('main', Docs)
    api.registerComponent('content:end', PrevNextLinks)
  }
} as PluginOptions
