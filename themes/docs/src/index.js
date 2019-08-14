/* global Vue */
import Home from './views/Home.vue'
import Page from './views/Page.vue'
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'

Vue.component(Header.name, Header)
Vue.component(Sidebar.name, Sidebar)

export default {
  name: 'saika-theme-docs',
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

    api.store.registerModule('docsStore', {
      state: {
        showSidebar: false
      },
      mutations: {
        TOGGLE_SIDEBAR(state, show) {
          state.showSidebar =
            typeof show === 'boolean' ? show : !state.showSidebar
        }
      }
    })

    api.hooks.add('beforeFetch', () => {
      api.store.commit('TOGGLE_SIDEBAR', false)
    })
  }
}
