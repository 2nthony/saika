import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Post from './views/Post.vue'

Vue.use(Router)

export default config => {
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
        path: '/',
        component: Home
      },
      {
        path: '*',
        component: Post
      }
    ]
  })
}
