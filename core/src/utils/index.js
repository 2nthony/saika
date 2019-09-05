export function isExternalLink(url) {
  return /^https?:\/\//.test(url)
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

export function parallelLinks(items) {
  return items.reduce((res, next) => {
    const item = next.link ? [next] : []
    const children = next.children || next.links || []
    return [
      ...res,
      ...item,
      ...children.map(child => ({ parent: next.title, ...child }))
    ]
  }, [])
}
