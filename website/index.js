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
      title: 'Usage',
      link: '/usage'
    }
  ]
})
