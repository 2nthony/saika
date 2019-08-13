import Home from './views/Home.vue'
import Page from './views/Page.vue'

export default {
  name: 'theme-docs',
  extend: api => {
    api.addRoutes([
      {
        path: '*',
        component: Home,
        children: [
          {
            path: '',
            component: Page
          }
        ]
      }
    ])
  }
}
