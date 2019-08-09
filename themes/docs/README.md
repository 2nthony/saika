# @saika/theme-docs

We provide this plugin to let saika become a documentation site.

```html
<link rel="stylesheet" href="https://unpkg.com/@saika/theme-docs/dist/index.css">

<!-- Load this plugin after saika.js -->
<script src="https://unpkg.com/@saika/theme-docs"></script>
```

This plugin exposed as `window.saikaThemeDocs`:

```js
new Saika({
  plugins: [
    saikaThemeDocs
  ]
})
```

Then your site will become like me.

## Options

### nav

- Type: `Array<NavItem>`

```ts
interface NavItem {
  title: string
  link: string
  position?: 'left' | 'right'
}
```

The header navigation item.

### posts

The posts item is your sidebar item.

# License

MIT © [evillt](https://github.com/evillt)
