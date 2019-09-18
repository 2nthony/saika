import { getFileUrl, getFilenameByPath, canPrefetch } from '../../utils'
import prefetch from './prefetch'

export default {
  name: 'saika-prefetch-markdown',
  extend: api => {
    api.store.getters.postsLinks.forEach(item => {
      const filename = getFileUrl(
        api.config.sourcePath,
        getFilenameByPath(item.link)
      )
      prefetch(filename)
    })
  },
  when: api => canPrefetch && api.config.prefetchMarkdown
}
