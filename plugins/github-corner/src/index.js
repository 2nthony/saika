import GithubCorner from './github-corner.vue'

export default (opts = {}) => ({
  name: 'saika-plugin-github-corner',
  extend: api => {
    api.registerComponent('root:start', GithubCorner, opts)
  }
})
