const getComponent = (component, className) => {
  return typeof component === 'string'
    ? { template: `<div class="${className}">${component}</div>` }
    : component
}

export const Banner = {
  name: 'saika-banner',
  extend: api => {
    const { banner } = api.store.getters.config
    if (banner) {
      api.registerComponent(
        'content:start',
        getComponent(banner, 'saika-banner')
      )
    }
  }
}

export const Footer = {
  name: 'saika-footer',
  extend: api => {
    const { footer } = api.store.getters.config
    if (footer) {
      api.registerComponent('content:end', getComponent(footer, 'saika-footer'))
    }
  }
}
