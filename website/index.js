import Saika from '../src'

new Saika({
  target: 'app',
  title: 'Saika',
  nav: [
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
    },
    {
      title: 'Not Found',
      link: '/hello-from-the-outside'
    }
  ]
})
