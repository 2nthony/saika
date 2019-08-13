import Home from './views/Home.vue'
import Collection from './views/Collection.vue'
import Post from './views/Post.vue'
import Posts from './views/Posts.vue'

export default {
  name: 'theme-portfolio',
  extend: api => {
    const { nav } = api.config

    api.addRoutes([
      {
        path: '/',
        component: Home,
        children: [
          {
            path: '',
            component: Collection
          },
          {
            path: '/posts',
            component: Posts
          },
          ...(nav || []).map(item => {
            return {
              path: item.link,
              component: {
                template: `<PostContent />`
              }
            }
          })
        ]
      },
      {
        path: '*',
        component: Post
      }
    ])
  }
}
