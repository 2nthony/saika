module.exports = {
  entry: 'src/index.js',
  output: {
    format: 'umd',
    moduleName: 'Saika',
    fileNames: {
      css: 'saika.css',
      js: 'saika.js'
    }
  },
  chainWebpack(config) {
    config.resolve.alias.set('vue$', 'vue/dist/vue.esm.js')
    config.output.libraryExport('default')
    config.output.globalObject('this')
  }
}
