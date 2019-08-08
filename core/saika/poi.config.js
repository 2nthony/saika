const pkg = require('./package')

module.exports = {
  entry: 'lib/index.js',
  output: {
    format: 'umd',
    moduleName: 'Saika',
    fileNames: {
      css: 'saika.css',
      js: 'saika.js'
    }
  },
  constants: {
    __SAIKA_VERSION__: JSON.stringify(pkg.version),
    __PRISM_VERSION__: JSON.stringify(require('prismjs/package').version)
  },
  chainWebpack(config) {
    config.resolve.alias.set('vue$', 'vue/dist/vue.esm.js')
    config.output.libraryExport('default')
    config.output.globalObject('this')
  }
}
