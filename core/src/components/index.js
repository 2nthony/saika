import PostContent from './PostContent.vue'
import SaikaLink from './SaikaLink.vue'
import PrevNextLinks from './PrevNextLinks.vue'
import InjectedComponents from './InjectedComponents'
import Note from './Note.vue'
import ImageZoom from './ImageZoom.vue'
import Badge from './Badge.vue'
import EditLink from './EditLink.vue'

export default ({ Vue }) => {
  ;[
    PostContent,
    SaikaLink,
    PrevNextLinks,
    InjectedComponents,
    Note,
    ImageZoom,
    Badge,
    EditLink
  ].forEach(Component => {
    Vue.component(Component.name, Component)
  })
}
