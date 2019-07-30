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
      title: 'API',
      link: 'https://saika.dev/docs/'
    },
    {
      title: 'GitHub',
      link: 'https://github.com/evillt/saika'
    }
  ],
  posts: [
    {
      title: 'Introduction',
      link: '/introduction'
    },
    {
      title: 'Credits',
      link: '/credits'
    }
  ]
})
