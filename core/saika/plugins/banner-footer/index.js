const getComponent = (component, className) => {
  return typeof component === 'string'
    ? { template: `<div class="${className}">${component}</div>` }
    : component
}

export default {
  name: 'banner-footer',
  extend: api => {
    const { banner, footer } = api.store.getters.config
    if (banner) {
      api.registerComponent(
        'content:start',
        getComponent(banner, 'saika-banner')
      )
    }

    if (footer) {
      api.registerComponent('content:end', getComponent(footer, 'saika-footer'))
    }
  }
}
