import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default (config = {}) => {
  return new Router({
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      }

      return { x: 0, y: 0 }
    },
    ...config
  })
}
