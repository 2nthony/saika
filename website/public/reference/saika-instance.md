# Saika Instance

## config

- Type: `SaikaOptions`

The saika options.

## router

- Type: `VueRouter`

The [Vue-Router](https://router.vuejs.org/api/#router-instance-properties) instance.

## store

- Type: `Vuex.Store`

The [Vuex](https://vuex.vuejs.org/api/#vuex-store-instance-properties) instance.

## hooks

It pretty useful for developing a Saika plugin.

```js
api.hooks.add('SayHi', name => {
  console.log('Hi', name)
})
api.hooks.invoke('SayHi', 'evillt')
// Hi, evillt
```

### hooks.add

- Type: `(name: string, fn: (...args: any[]) => void) => Hooks`

Add function hook to hooks.

### hooks.invoke

- Type: `(name: string, ...args: any[]) => Hooks`

Invoke hooks with matched name.

## components

- Type: `{ [name: string]: VueComponent }`

Saika features components. E.g.: Header, Sidebar, ...

## hasPlugin

- Type: `(name: string) => boolean`

To check a plugin is exists.

## getRegisteredComponents

- Type: `(position: Position) => Array<{ [name: string]: VueComponent }>`

Get the components list with specific position.

## processMarkdown

- Type: `(markdown: string) => string | Promise<string>`

Process markdown string.

## processHTML

- Type: `(html: string) => string | Promise<string>`

Process HTML string.

## extendMarkedRenderer

- Type: `(renderer: marked.Renderer) => void`

You can use this to modify the [marked.renderer](https://marked.js.org/#/USING_PRO.md#renderer) we use.

## registerComponent(position, component, props)

- `position: Position`
- `component: VueComponent`
- `props: object`

Register components at specific position. You can checkout the [container.vue](https://github.com/evillt/saika/blob/master/core/saika/components/Container.vue) for details.

```ts
type Position =
  | 'page:start'
  | 'page:end'
  | 'wrap:start'
  | 'wrap:end'
  | 'main:start'
  | 'main' // Single recommended
  | 'main:end'
  | 'content:start'
  | 'content:end'
```

## registerMainComponent(component, props)

Alias for `registerComponent('main', component, props)`, but only can set single component for `main` position.
