module.exports = {
  entry: 'index.ts',
  output: {
    format: 'umd',
    moduleName: 'saikaThemeDocs'
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
