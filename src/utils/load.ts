import loadjs from 'loadjs'

export default function(deps: string, id: string) {
  return new Promise(resolve => {
    if (loadjs.isDefined(id)) return resolve()
    loadjs(deps, id, {
      success: resolve,
      error(err: Error) {
        console.error('Deps not found:', err)
        resolve()
      }
    })
  })
}
