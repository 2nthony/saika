import { Config } from 'bili'

export default {
  output: {
    fileName: 'index[ext]',
    format: 'umd-min',
    moduleName: 'saikaGithubCorner'
  },
  plugins: {
    vue: true
  }
} as Config
