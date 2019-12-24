import Vue from 'vue'
import Vuex from 'vuex'
import marked from './utils/marked'
import extendMarkedRenderer from './utils/extendMarkedRenderer'
import highlight from './utils/highlight'
import load from './utils/load'
import {
  getFileUrl,
  getFilenameByPath,
  inBrowser,
  parallelLinks
} from './utils'
import cssVariables from './utils/cssVariables'
import prismLanguages from './utils/prismLanguages'
import hooks from './hooks'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    originConfig: {},
    isFetchingFile: true,
    post: {},
    env: {},
    postLinkMeta: {}
  },

  mutations: {
    SET_CONFIG(state, config = {}) {
      state.originConfig = config
    },

    SET_FETCHING(state, isFetchingFile) {
      state.isFetchingFile = isFetchingFile
    },

    SET_POST(state, post) {
      state.post = post
    },

    SET_ENV(state, env) {
      state.env = env
    },

    SET_POSTLINKMETA(state, data) {
      state.postLinkMeta = data
    }
  },

  actions: {
    async fetchFile({ commit, getters, dispatch }, path) {
      hooks.invoke('beforeFetch')

      commit('SET_FETCHING', true)

      const post = {
        file: '',
        content: ''
      }
      const env = {
        headings: [],
        mixins: []
      }

      const filename = getFilenameByPath(path)
      post.file = getFileUrl(getters.config.sourcePath, filename)
      post.editLink =
        getters.config.editLink.baseUrl &&
        getFileUrl(getters.config.editLink.baseUrl, filename)

      await Promise.all([
        dispatch('fetch', post.file).then(res => {
          post.content = res
        }),
        dispatch('fetchPrismLanguages')
      ])

      post.content = await hooks.processPromise('processMarkdown', post.content)

      if (post.content) {
        post.content = marked(post.content, {
          renderer: extendMarkedRenderer(),
          highlight,
          env
        })
      }

      post.content = await hooks.processPromise('processHTML', post.content)

      commit('SET_POST', post)
      commit('SET_ENV', env)
      commit('SET_FETCHING', false)

      dispatch('currentPostLinkMeta', path)
    },

    fetch({ getters }, url) {
      return fetch(url, getters.config.fetchOptions).then(
        res => (res.ok && res.text()) || ''
      )
    },

    fetchPrismLanguages({ getters }) {
      const { highlight: langs } = getters.config

      if (!langs || langs.length === 0) {
        return Promise.resolve()
      }

      return load(
        langs
          .reduce((res, lang) => {
            if (prismLanguages[lang]) {
              res = res.concat(prismLanguages[lang])
            }

            res.push(lang)
            return res
          }, [])
          .filter((lang, i, arr) => {
            return (
              arr.indexOf(lang) === i &&
              prismLanguages.builtin.indexOf(lang) === -1
            )
          })
          .map(lang => {
            return `https://cdn.jsdelivr.net/npm/prismjs@${__PRISM_VERSION__}/components/prism-${lang}.min.js`
          }),
        'prism-languages'
      )
    },

    currentPostLinkMeta({ commit, getters }, path) {
      const { postsLinks, config } = getters
      const links = postsLinks.concat(config.nav)

      for (let i = 0; i < links.length; i++) {
        if (path === links[i].link) {
          commit(
            'SET_POSTLINKMETA',
            Object.assign(links[i], {
              index: i
            })
          )

          return
        }
      }
    }
  },

  getters: {
    config({ originConfig }) {
      return {
        target: 'saika',
        title: inBrowser && document.title,
        // logo: '',
        // posts: [],
        nav: [],
        sourcePath: '.',
        postMixins: [],
        highlight: [],
        plugins: [],
        // banner: '',
        // footer: '',
        // router: {},
        // cssVariables: {},
        // fetchOptions: {},
        editLink: {
          // baseUrl: '',
          // text: 'Edit this page'
        },
        prefetchMarkdown: true,
        ...originConfig
      }
    },

    target(
      _,
      {
        config: { target }
      }
    ) {
      if (target[0] === '#') return target.slice(1)
      return target
    },

    posts(_, { config }) {
      const posts = config.posts || []
      return typeof posts === 'function' ? posts(store) : posts
    },

    postsLinks(_, { posts }) {
      return parallelLinks(posts)
    },

    cssVariables(_, { config }) {
      return {
        ...cssVariables,
        ...config.cssVariables
      }
    }
  }
})

export default store

if (typeof window !== 'undefined') {
  window.store = store
}
