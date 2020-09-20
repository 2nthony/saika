import Home from './views/Home.vue'
import Collection from './views/Collection.vue'
import Post from './views/Post.vue'
import Posts from './views/Posts.vue'

export default {
  name: 'saika-theme-portfolio',

  when: api => {
    const { github } = api.config

    if (!github) {
      console.error('[saika portfolio]: Missing required option `github`')
    }

    return Boolean(github)
  },

  extend: api => {
    const { nav } = api.config

    api.router.addRoutes([
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
