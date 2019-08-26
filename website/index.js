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
          title: 'Theme',
          link: '/guide/theme'
        },
        {
          title: 'Markdown Features',
          link: '/guide/markdown-features'
        },
        {
          title: 'Use Vue in Markdown',
          link: '/guide/use-vue-in-markdown'
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
      title: 'Theme',
      children: [
        {
          title: 'Default',
          link: '/theme/default'
        },
        {
          title: 'Docs',
          link: '/theme/docs'
        },
        {
          title: 'Portfolio',
          link: '/theme/portfolio'
        }
      ]
    },
    {
      title: 'Plugin',
      children: [
        {
          title: 'Introduction',
          link: '/plugin/introduction'
        },
        {
          title: 'Google Analytics',
          link: '/plugin/google-analytics'
        },
        {
          title: 'Mermaid',
          link: '/plugin/mermaid'
        }
      ]
    },
    {
      title: 'Advanced',
      children: [
        {
          title: 'Use With Bundler',
          link: '/advanced/use-with-bundler'
        }
      ]
    },
    {
      title: 'Credits',
      link: '/credits'
    }
  ]
})

Vue.component('ReverseText', {
  template: `
    <div>
      {{ reversedText }}
    </div>
  `,
  props: ['text'],
  computed: {
    reversedText() {
      return this.text.split('').reverse().join('')
    }
  }
})
