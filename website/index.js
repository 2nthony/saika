import Saika from '../core/saika/src'
import saikaThemeDocs from '../themes/docs/src'
import googleAnalytics from '../plugins/google-analytics/src'

new Saika({
  target: 'app',
  title: 'Saika',
  highlight: ['bash', 'typescript', 'json', 'markdown'],
  postMixins: [
    {
      data() {
        return {
          deps: __DEPS__
        }
      }
    }
  ],
  plugins: [
    saikaThemeDocs,
    process.env.NODE_ENV === 'production' && googleAnalytics('UA-145247644-2')
  ].filter(Boolean),

  footer: `© {{ new Date().getFullYear() }} Made with <font color="#f04">❤</font> by
  <a href="https://github.com/evillt">EVILLT</a>.`,

  nav: [
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
        },
        {
          title: 'Plugin',
          link: '/guide/plugin'
        },
        {
          title: 'Theme',
          link: '/guide/theme'
        },
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
        },
        {
          title: 'Plugin API',
          link: '/reference/plugin-api'
        },
        {
          title: 'Saika Instance',
          link: '/reference/saika-instance'
        },
      ]
    },
    {
      title: 'Credits',
      link: '/credits'
    }
  ]
})
