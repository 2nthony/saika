const pkg = require('../package')

module.exports = {
  entry: 'website/index.ts',
  output: {
    dir: 'website/dist',
    html: {
      title: 'Saika'
    }
  },
  plugins: ['@poi/typescript'],
  publicFolder: 'website/public',
  chainWebpack(config) {
    config.resolve.alias.set('vue$', 'vue/dist/vue.esm.js')
  },
  constants: {
    __SAIKA_VERSION__: JSON.stringify(pkg.version),
    __PRISM_VERSION__: JSON.stringify(require('prismjs/package').version),
    __DEPS__: JSON.stringify(Object.keys(pkg.dependencies))
  }
}
