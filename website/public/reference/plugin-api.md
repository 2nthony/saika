# Plugin API

Plugin properties:

- `name: string` Plugin name.
- `extend: (api: PluginAPI) => void` Extending core features.
- `when?: (api: PluginAPI) => boolean` Condition to enable plugin.

## api.processMarkedown(fn)

- `fn: (markdown: string) => string | Promise<string>`

Process markdown string.

## api.processHTML(fn)

- `fn: (html: string) => string | Promise<string>`

Process HTML string.

## api.registerComponent(position, component, props)

- `position: Position`
- `component: VueComponent`
- `props: object`

Register components at the specific position. You can checkout the [container.vue](https://github.com/evillt/saika/blob/master/core/saika/components/Container.vue) for details.

```ts
type Position =
  | 'page:start'
  | 'page:end'
  | 'wrap:start'
  | 'wrap:end'
  | 'main:start'
  | 'main'
  | 'main:end'
  | 'content:start'
  | 'content:end'
```

## api.registerMainComponent(component, props)

Alias for `api.registerComponent('main', component, props)`, but only can set single component for `main` position.

## api.router

The [Vue-Router](https://router.vuejs.org/api/#router-instance-properties) instance.

## api.store

The [Vuex](https://vuex.vuejs.org/api/#vuex-store-instance-properties) instance.
