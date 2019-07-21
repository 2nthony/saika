import Saika from '../src'

/* eslint-disable no-new */
new Saika({
  target: 'app',
  posts: [
    {
      title: 'hello saika',
      link: '/posts/hello-saika',
      tags: ['life', 'hello-saika']
    },
    {
      title: '2nd posted',
      link: '/posts/hello-saika'
    }
  ]
})
