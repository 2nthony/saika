import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import marked from './utils/marked'
import markedRenderer from './utils/markedRenderer'
import highlight from './utils/highlight'
import load from './utils/load'
import { getFileUrl, getFilenameByPath } from './utils'
import cssVariables from './utils/cssVariables'
import prismLanguages from './utils/prismLanguages.json'

Vue.use(Vuex)

type Post = {
  file: string
  content?: string
}

const store: Store<any> = new Vuex.Store({
  state: {
    originConfig: {},
    isFetchingFile: true,
    post: {}
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
    }
  },

  actions: {
    async fetchFile({ commit, getters, dispatch }, path) {
      commit('SET_FETCHING', true)

      const post: Post = {
        file: '',
        content: ''
      }

      const filename = getFilenameByPath(path)
      post.file = getFileUrl(getters.config.sourcePath, filename)

      await Promise.all([
        fetch(post.file)
          .then(res => res.ok && res.text() || '')
          .then(res => {
            post.content = res
          }),
        dispatch('fetchPrismLanguages')
      ])

      if (post.content) {
        post.content = marked(post.content, {
          renderer: markedRenderer(),
          highlight
        })
      }

      commit('SET_POST', post)
      commit('SET_FETCHING', false)
    },

    fetchPrismLanguages({ getters }) {
      const { highlight: langs } = getters.config

      if (!langs || langs.length === 0) {
        return Promise.resolve()
      }

      return load(
        langs
          .reduce((res: string[], lang: string) => {
            if ((<any>prismLanguages)[lang]) {
              res = res.concat((<any>prismLanguages)[lang])
            }

            res.push(lang)
            return res
          }, [])
          .filter((lang: string, i: number, arr: string[]) => {
            return (
              arr.indexOf(lang) === i &&
              prismLanguages.builtin.indexOf(lang) === -1
            )
          })
          .map((lang: string) => {
            return `https://unpkg.com/prismjs@${__PRISM_VERSION__}/components/prism-${lang}.min.js`
          }),
        'prism-languages'
      )
    }
  },

  getters: {
    config({ originConfig }) {
      return {
        target: 'Saika',
        sourcePath: '.',
        postMixins: [],
        highlight: [],
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

    cssVariables(_, { config }) {
      return {
        ...cssVariables,
        ...config.cssVariables
      }
    }
  }
})

export default store
