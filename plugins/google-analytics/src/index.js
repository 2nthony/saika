import ga from './ga'

export default id => ({
  name: 'saika-plugin-google-analytics',
  extend: api => ga(api.router, id)
})
