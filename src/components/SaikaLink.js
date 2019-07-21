import { isExternalLink } from '../utils'

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
          h('external-link-icon', {
            class: 'ExternalLinkIcon'
          })
        ]
      )
    }

    return h('router-link', data, children)
  }
}
