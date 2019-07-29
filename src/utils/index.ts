export function isExternalLink(url: string) {
  return /^https?:\/\//.test(url)
}

export function slugify(str: string) {
  const RE = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g
  const REPLACEMENT = '-'
  const WHITESPACE = /\s/g

  return str
    .trim()
    .replace(RE, '')
    .replace(WHITESPACE, REPLACEMENT)
    .toLowerCase()
}

export function getFileUrl(sourcePath: string, path: string) {
  sourcePath = sourcePath.replace(/\/$/, '')

  const res = sourcePath + path

  return res.replace(/^\.\//, '')
}

export function getFilenameByPath(path: string) {
  path = path.replace(/^\/?/, '/')

  if (!/\.md$/.test(path)) {
    path = /\/$/.test(path) ? `${path}README.md` : `${path}.md`
  }

  return path
}

export const inBrowser = typeof window !== 'undefined'
