import Home from './views/Home.vue'

export default {
  name: 'theme-default',
  extend: api => {
    api.addRoutes([
      {
        path: '*',
        component: Home
      }
    ])
  }
}
