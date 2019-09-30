import ThemeDefault from './theme-default'
import bannerAndFooter from './banner-footer'
import prefetchMarkdown from './prefetch-markdown'

// marked renderer
import markedRendererHeading from './marked-renderer-heading'
import markedRendererLink from './marked-renderer-link'
import markedRendererCode from './marked-renderer-code'
import markedRendererHoistTags from './marked-renderer-hoist-tags'

export default [
  ThemeDefault,
  bannerAndFooter,
  prefetchMarkdown,
  markedRendererHeading,
  markedRendererLink,
  markedRendererCode,
  markedRendererHoistTags
]
