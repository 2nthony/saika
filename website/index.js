import Saika from '../src'

new Saika({
  target: 'app',
  title: 'Saika',
  postMixins: [
    {
      data() {
        return {
          deps: __DEPS__
        }
      }
    }
  ],
  nav: [
    {
      title: 'GitHub',
      link: 'https://github.com/evillt/saika'
    }
  ],
  posts: [
    {
      title: 'Introduction',
      link: '/introduction',
      tags: [
        'introduction'
      ]
    },
    {
      title: 'Credits',
      link: '/credits'
    },
    {
      title: 'Not Found',
      link: '/hello-from-the-outside'
    }
  ]
})
