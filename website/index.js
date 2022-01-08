import Saika from '../core/src'
import saikaThemeDocs from '../themes/docs/src'
import googleAnalytics from '../plugins/google-analytics/src'
import PkgVersion from './components/PkgVersion.vue'
import { copyCode } from 'saika-code-block-buttons'

new Saika({
  target: 'app',
  title: 'Saika',
  highlight: ['bash', 'typescript', 'json', 'markdown'],
  editLink: {
    baseUrl: 'https://github.com/2nthony/saika/tree/master/website/public',
    text: 'Edit this page on GitHub'
  },
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

  footer: `© {{ new Date().getFullYear() }} Made with <font color="#f04">❤</font> &nbsp; by
  <a href="https://github.com/2nthony">2nthony</a>.`,

  codeBlockButtons: [copyCode],

  nav: [
    {
      title: 'GitHub',
      link: 'https://github.com/2nthony/saika'
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
          title: 'Hooks',
          link: '/reference/hooks'
        },
        {
          title: 'Saika Instance',
          link: '/reference/saika-instance'
        }
      ]
    },
    {
      title: 'Theme',
      children: [
        {
          title: 'Introduction',
          link: '/theme/introduction'
        },
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
          link: '/plugin/ga'
        },
        {
          title: 'Mermaid',
          link: '/plugin/mermaid'
        },
        {
          title: 'PlantUML',
          link: '/plugin/plantuml'
        },
        {
          title: 'GitHub Corner',
          link: '/plugin/github-corner'
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
  ],

  searchBox: {
    placeholder: 'Search... ("/" to focus)'
  }
})

Vue.component('ReverseText', {
  template: `<div>{{ reversedText }}</div>`,
  props: ['text'],
  computed: {
    reversedText() {
      return this.text
        .split('')
        .reverse()
        .join('')
    }
  }
})

Vue.component(PkgVersion.name, PkgVersion)
