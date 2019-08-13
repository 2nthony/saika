export function isExternalLink(url) {
  return /^https?:\/\//.test(url)
}

export function slugify(str) {
  const RE = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g
  const REPLACEMENT = '-'
  const WHITESPACE = /\s/g

  return str
    .trim()
    .replace(RE, '')
    .replace(WHITESPACE, REPLACEMENT)
    .toLowerCase()
}

export function getFileUrl(sourcePath, path) {
  sourcePath = sourcePath.replace(/\/$/, '')

  const res = sourcePath + path

  return res.replace(/^\.\//, '')
}

export function getFilenameByPath(path) {
  path = path.replace(/^\/?/, '/')

  if (!/\.md$/.test(path)) {
    path = /\/$/.test(path) ? `${path}README.md` : `${path}.md`
  }

  return path
}

export const inBrowser = typeof window !== 'undefined'

export function parellelLinks(items) {
  return items.reduce((res, next) => {
    const item = next.link ? [next] : []
    const children = next.children || next.links || []
    return [...res, ...item, ...children]
  }, [])
}
