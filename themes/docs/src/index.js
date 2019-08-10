import Main from './Main.vue'

export default {
  name: 'theme-docs',
  extend: api => {
    const { Header, Sidebar, PrevNextLinks } = api.components

    api.registerComponent('page:start', Header)
    api.registerComponent('wrap:start', Sidebar)
    api.registerComponent('content:end', PrevNextLinks)
    api.registerMainComponent(Main)
  }
}
