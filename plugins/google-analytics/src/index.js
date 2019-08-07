import ga from './ga'

export default id => ({
  name: 'ga',
  extend: api => ga(api.router, id)
})
