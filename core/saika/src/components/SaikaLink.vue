<script>
import { isExternalLink } from '../utils'
import ExternalLinkIcon from './icons/ExternalLinkIcon.vue'

export default {
  name: 'SaikaLink',

  functional: true,

  render(h, { data, children }) {
    const attrs = { ...data.attrs }
    const { to } = attrs
    if (isExternalLink(to)) {
      return h(
        'a',
        {
          ...data,
          class: [data.class],
          attrs: {
            ...attrs,
            href: to,
            target: '_blank'
          }
        },
        [
          ...children,
          h(ExternalLinkIcon, {
            class: 'external-link-icon'
          })
        ]
      )
    }

    return h('router-link', data, children)
  }
}
</script>
