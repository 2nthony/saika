import PostContent from './PostContent.vue'
import SaikaLink from './SaikaLink.vue'
import PrevNextLinks from './PrevNextLinks.vue'
import InjectedComponents from './InjectedComponents'
import Note from './Note.vue'
import ImageZoom from './ImageZoom.vue'
import Badge from './Badge.vue'

export default ({ Vue }) => {
  Vue.component(PostContent.name, PostContent)
  Vue.component(SaikaLink.name, SaikaLink)
  Vue.component(PrevNextLinks.name, PrevNextLinks)
  Vue.component(InjectedComponents.name, InjectedComponents)
  Vue.component(Note.name, Note)
  Vue.component(ImageZoom.name, ImageZoom)
  Vue.component(Badge.name, Badge)
}
