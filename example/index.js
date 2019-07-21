import Saika from '../src'

/* eslint-disable no-new */
new Saika({
  target: 'app',
  nav: [
    {
      title: 'github',
      link: 'https://github.com/evillt'
    },
    {
      title: 'twitter',
      link: 'https://twitter.com/evillt'
    }
  ],
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
