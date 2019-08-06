declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module 'prismjs'
declare module 'loadjs'

declare module '*/marked'

declare const __SAIKA_VERSION__: string
declare const __PRISM_VERSION__: string

declare interface Window {
  Vue: any
}
