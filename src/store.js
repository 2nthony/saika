import Vue from 'vue'
import Vuex from 'vuex'
import marked from './utils/marked'
import markedRenderer from './utils/markedRenderer'
import highlight from './utils/highlight'
import { getFileUrl, getFilenameByPath } from './utils'
import cssVariables from './utils/cssVariables'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    originConfig: {},
    isFetchingFile: true,
    post: {
      content: ''
    }
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
    async fetchFile({ commit, getters }, path) {
      commit('SET_FETCHING', true)

      const post = {}

      const filename = getFilenameByPath(path)
      post.file = getFileUrl(getters.config.sourcePath, filename)

      const content = await fetch(post.file).then(res => {
        if (res.ok) {
          return res.text()
        }
      })

      if (content) {
        post.content = marked(content, {
          renderer: markedRenderer(),
          highlight
        })
      }

      commit('SET_POST', post)
      commit('SET_FETCHING', false)
    }
  },

  getters: {
    config({ originConfig }) {
      return {
        target: 'Saika',
        sourcePath: '.',
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
