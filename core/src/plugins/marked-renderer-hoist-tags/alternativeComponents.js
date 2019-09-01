export default ({ Vue }) => {
  Vue.component('v-script', getComponent('script'))
  Vue.component('v-style', getComponent('style'))
}

function getComponent(tag) {
  return {
    functional: true,
    render(h, { data, children }) {
      return h(tag, data, children)
    }
  }
}
