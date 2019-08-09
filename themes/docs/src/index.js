import Header from 'saika/components/Header.vue'
import Sidebar from 'saika/components/Sidebar.vue'
import PrevNextLinks from 'saika/components/PrevNextLinks.vue'
import Main from './Main.vue'

export default {
  name: 'theme-docs',
  extend: api => {
    api.registerComponent('page:start', Header)
    api.registerComponent('wrap:start', Sidebar)
    api.registerComponent('content:end', PrevNextLinks)
    api.registerMainComponent(Main)
  }
}
