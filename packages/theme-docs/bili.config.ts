import { Config } from 'bili'

export default {
  input: 'index.ts',
  output: {
    moduleName: 'saikaThemeDocs',
    format: 'umd',
    fileName: '[name][ext]',
    minify: true
  },
  plugins: {
    vue: true,
    typescript2: {
      useTsconfigDeclarationDir: true
    }
  }
} as Config
