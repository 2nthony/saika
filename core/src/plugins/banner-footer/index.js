const getComponent = (component, className) => {
  return typeof component === 'string'
    ? { template: `<div class="${className}">${component}</div>` }
    : component
}

export default {
  name: 'saika-banner-footer',
  extend: api => {
    const { banner, footer } = api.store.getters.config
    if (banner) {
      api.registerComponent('banner', getComponent(banner, 'saika-banner'))
    }

    if (footer) {
      api.registerComponent('footer', getComponent(footer, 'saika-footer'))
    }
  }
}
