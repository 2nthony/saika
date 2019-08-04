import Saika from '../src'

new Saika({
  target: 'app',
  title: 'Saika',
  theme: 'docs',
  highlight: ['bash', 'typescript', 'json'],
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
      title: 'Guide',
      children: [
        {
          title: 'Introduction',
          link: '/'
        }
      ]
    },
    {
      title: 'Advanced',
      children: [
        {
          title: 'Use With Bundlers',
          link: '/advanced/use-with-bundlers'
        }
      ]
    },
    {
      title: 'Reference',
      children: [
        {
          title: 'Options',
          link: '/reference/options'
        },
        {
          title: 'Built-in Components',
          link: '/reference/built-in-components'
        }
      ]
    },
    {
      title: 'Credits',
      link: '/credits'
    }
  ]
})
