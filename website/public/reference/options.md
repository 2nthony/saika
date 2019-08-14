# Options

Options for `Saika` constructor.

```js
new Saika(options)
```

## target

- Type: `string`
- Default: `saika`

The ID of the target element, similar to `Vue.el`, e.g. `app` or `#app`.

## title

- Type: `string`
- Default: `document.title`

Website title.

## logo

- Type: `string | VueComponent`
- Default: `<div>{{ $store.getters.config.title }}</div>`

Customise the logo in header.

## sourcePath

- Type: `string`
- Default: `./`

The source path to fetch markdown files from, by default we load them from path where your `index.html` is populated.

## posts

- Type: `Array<PostItem> | (store: Vuex.Store) => Array<PostItem>`

Alias for routes, but for post items.

```ts
type PostItem = SingleItem | MultipleItem

interface SingleItem {
  title: string
  link?: PathLike
}

interface MultipleItem extends LinkItem {
  title: string
  children: SingleItem[]
}
```

## nav

- Type: `Array<NavItem>`

An array of navigation items at header.

```ts
interface NavItem {
  title: string
  link?: PathLike
  // right default
  position?: 'left' | 'right'
}
```

## postMixins

- Type: `Array<object>`

An array of [Vue Mixin](https://vuejs.org/v2/api/#mixins) that are applied to all markdown components.

## highlight

- Type: `Array<string>`

An array of language names of highlight. Check out [Prism.js](https://unpkg.com/prismjs/components/) for all supported language names(without the `prism-` prefix).

Example: `highlight: ['typescript', 'dart']`

## plugins

- Type: `Array<PluginAPI>`

Check out [Plugin API](/reference/plugin-api).

## banner

- Type: `string | VueComponent`

Display banner. A string will wrapped inside `<div class="saika-banner">` and used as Vue template.

## footer

Reference to [banner](#banner) but with class `saika-footer`.

## cssVariables

- Type: `object`

Override CSS variables. Check out [cssVariables.js](https://github.com/evillt/saika/blob/master/core/saika/src/utils/cssVariables.js) for details.

## router

- Type: `RouterOptions`

All [RouterOptions](https://router.vuejs.org/api/#router-construction-options) are accepted here.

## fetchOptions

- Type: `object`

Options for [window.fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch). We use this to fetch markdown files.
