import Footer from './Footer.vue'

export default {
  name: 'Footer',
  extend: api => api.registerComponent('content:end', Footer)
}
