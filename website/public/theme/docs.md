# Saika Theme Docs <PkgVersion name="@saika/theme-docs" />

## Usage

Load this plugin via `<link>` and `<script>` tag:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@saika/theme-docs/dist/index.css"
/>

<!-- Load this plugin after saika.js -->
<script src="https://cdn.jsdelivr.net/npm/@saika/theme-docs"></script>
```

This plugin is exposed as `window.saikaThemeDocs`:

```js
new Saika({
  plugins: [saikaThemeDocs]
})
```

## Options

### nav

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

### posts

- Type: `Array<PostItem> | (store: Vuex.Store) => Array<PostItem>`

The post items is your sidebar items.

```ts
type PostItem = SingleItem | MultipleItem

interface SingleItem {
  title: string
  link?: PathLike
  /**
   * Whether to show Table of Content
   * Default to `true`
   */
  toc?: boolean
}

interface MultipleItem {
  title: string
  children: SingleItem[]
}
```

### searchBox <Badge content="Theme Docs 2.2.0+" />

- Type: `SearchBox`
- Default: `Default`

Search box for posts items, set `false` to disable search box.

```ts
type SearchBox = boolean | SearchBox

interface SearchBox {
  /**
   * Max search suggestions
   */
  max: number
}

const Default = {
  max: 5
}
```

## Comparisons

### VuePress / GitBook / Hexo

They all generate static HTML files at build-time, which is good for SEO.

### Docute

Saika + Saika Theme Docs and Docute are pretty much the same, but with different UI.
