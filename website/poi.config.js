const pkg = require('../core/package')

module.exports = {
  entry: 'website/index.js',
  output: {
    dir: 'website/dist',
    html: {
      title: 'Saika'
    }
  },
  publicFolder: 'website/public',
  chainWebpack(config) {
    config.resolve.alias.set('vue$', 'vue/dist/vue.esm.js')
  },
  constants: {
    __DEPS__: JSON.stringify(Object.keys(pkg.dependencies))
  }
}
