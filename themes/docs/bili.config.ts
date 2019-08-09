import { Config } from 'bili'

export default {
  output: {
    fileName: 'index[ext]',
    format: 'umd-min',
    moduleName: 'saikaThemeDocs'
  },
  plugins: {
    vue: {
      style: {
        postcssPlugins: [
          require('postcss-preset-env')({
            stage: 0
          })
        ]
      }
    }
  }
} as Config
