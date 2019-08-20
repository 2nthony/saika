# @saika/theme-docs

## Usage

Load this plugin via `<link>` and `<script>` tag:

```html
<link rel="stylesheet" href="https://unpkg.com/@saika/theme-docs/dist/index.css">

<!-- Load this plugin after saika.js -->
<script src="https://unpkg.com/@saika/theme-docs"></script>
```

This plugin is exposed as `window.saikaThemeDocs`:

```js
new Saika({
  plugins: [saikaThemeDocs]
})
```

# Options

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

## posts

- Type: `Array<DocsPostItem> | (store: Vuex.Store) => Array<DocsPostItem>`

The post items is your sidebar items.

```ts
interface DocsPostItem extends PostItem {
  /**
   * Whether to show Table of Content
   * Default to `true`
   */
  toc?: boolean
}
```

Check out the [posts](/reference/options#posts) options for type declaration.
