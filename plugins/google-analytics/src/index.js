import { collect } from './ga'

export default id => ({
  name: 'saika-plugin-google-analytics',
  extend: api => {
    api.router.afterEach(to => {
      collect(to.fullPath, id)
    })
  }
})
