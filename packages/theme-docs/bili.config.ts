import { Config } from 'bili'

export default {
  input: 'index.ts',
  output: {
    moduleName: 'saika-theme-docs',
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
