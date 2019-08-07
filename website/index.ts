import Saika from '../core/saika/lib'
import saikaThemeDocs from '../packages/theme-docs'
// @ts-ignore
import googleAnalytics from '../plugins/google-analytics/src'

const plugins = [saikaThemeDocs]
if (process.env.NODE_ENV === 'production') {
  plugins.push(googleAnalytics('UA-145247644-2'))
}

new Saika({
  target: 'app',
  title: 'Saika',
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
  plugins,
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
