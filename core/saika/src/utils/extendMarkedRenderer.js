import hooks from '../hooks'
import marked from './marked'

export default () => {
  return hooks.process('extendMarkedRenderer', new marked.Renderer())
}
