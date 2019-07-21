const pkg = require('../package')

module.exports = {
  entry: 'example/index.js',
  publicFolder: 'example/public',
  constants: {
    __SAIKA_VERSION__: JSON.stringify(pkg.version)
  },
  chainWebpack(config) {
    config.resolve.alias.set('vue$', 'vue/dist/vue.esm.js')
    config.output.libraryExport('default')
    config.output.globalObject('this')
  }
}
