import Vue from 'vue'
import Vuex from 'vuex'
import marked from './utils/marked'
import { getFileUrl, getFilenameByPath } from './utils'
import cssVariables from './utils/cssVariables'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    originConfig: {},
    isFetchingFile: true,
    page: {
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

    SET_PAGE(state, page) {
      state.page = page
    }
  },

  actions: {
    async fetchFile({ commit, getters }, path) {
      commit('SET_FETCHING', true)

      const page = {}

      const filename = getFilenameByPath(path)
      page.file = getFileUrl(getters.config.sourcePath, filename)

      const content = await fetch(page.file).then(res => res.text())
      page.content = content

      page.content = marked(page.content)

      commit('SET_PAGE', page)
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
