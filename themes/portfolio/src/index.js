import Home from './views/Home.vue'

export default {
  name: 'theme-portfolio',
  extend: api => {
    api.store.commit('FETCH_HOME_README', false)
    api.registerMainComponent(Home)
  }
}
