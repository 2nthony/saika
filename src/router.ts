import Vue from 'vue'
import Router, { RouterOptions } from 'vue-router'
import PageContainer from './components/PageContainer.vue'

Vue.use(Router)

export default (config?: RouterOptions) => {
  return new Router({
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      }

      return { x: 0, y: 0 }
    },
    ...config,
    routes: [
      {
        path: '*',
        component: PageContainer
      }
    ]
  })
}
