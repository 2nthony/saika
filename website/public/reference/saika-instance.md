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

Check out [hooks](/reference/hooks).

## hook

- Type: `(name: string, fn: (...args: any[]) => any) => SaikaInstance`

Alias for `api.hooks.add`.

### hook('extendMarkedRenderer', fn)

- fn: `(renderer: marked.Renderer) => void`

You can use this hook to modify the [marked.renderer](https://marked.js.org/#/USING_PRO.md#renderer) we use.

### hook('extendMarkdedComponent', fn)

- fn: `(component: VueComponentOptions) => void`

You can use this hook to modify the compiled Markdown component.

### hook('processMarkdown', fn)

- fn: `(markdown: string) => string | Promise<string>`

Process Markdown string.

### hook('processHTML', fn)

- fn: `(html: string) => string | Promise<string>`

Process HTML string.

### hook('onContentWillUpdate', fn)

- fn: `(vm: Vue) => void`

This hook will be called when the markdown content before update.

### hook('onContentUpdated', fn)

- fn: `(vm: Vue) => void`

This hook will be called when the markdown content is updated.

## hasPlugin

- Type: `(name: string) => boolean`

To check a plugin is exists.

## registerComponent

- Type: `RegisterComponent`

Register components at specific position.

```ts
type RegisterComponent =
  (
    position: Position,
    component: VueComponent,
    props: object
  ) => SaikaInstance

type Position =
  // The start of root component
  | 'root:start'
  // The end of root component
  | 'root:end'
  // The start of post content
  | 'content:start'
  // The end of post content
  | 'content:end'
```

## getComponents

- Type: `(position: Position) => Array<{ [name: string]: VueComponent }>`

Get the components list with specific position.

## @deprecates

These API will remove in next major release.

Please use `api.hook` to instead.

e.g. `api.hook('extendMarkedRenderer', renderer => {})`

### extendMarkedRenderer

- Type: `(renderer: marked.Renderer) => void`

You can use this to modify the [marked.renderer](https://marked.js.org/#/USING_PRO.md#renderer) we use.

### processMarkdown

- Type: `(markdown: string) => string | Promise<string>`

Process markdown string.

### processHTML

- Type: `(html: string) => string | Promise<string>`

Process HTML string.
