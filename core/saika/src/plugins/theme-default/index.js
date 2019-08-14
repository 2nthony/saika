import Home from './views/Home.vue'

export default {
  name: 'saika-theme-default',
  extend: api => {
    api.addRoutes([
      {
        path: '*',
        component: Home
      }
    ])
  },
  when: api => {
    return !api.userPlugins.some(plugin =>
      plugin.name.startsWith('saika-theme-')
    )
  }
}
