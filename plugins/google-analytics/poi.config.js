module.exports = {
  entry: 'index.ts',
  output: {
    format: 'umd',
    moduleName: 'saikaGoogleAnalytics'
  },
  plugins: [
    {
      resolve: '@poi/typescript',
      options: {
        configFile: '../../tsconfig.json'
      }
    }
  ]
}
