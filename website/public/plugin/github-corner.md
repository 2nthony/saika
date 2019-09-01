# Saika GitHub Corner

Using GitHub Corner in Saika.

## Usage

Load this plugin via `<script>` tag:

```html
<!-- Load this plugin after saika.js -->
<script src="https://unpkg.com/@saika/github-corner"></script>
```

This plugin is exposed as `window.saikaGithubCorner`:

```js
new Saika({
  plugins: [
    saikaGithubCorner()
  ]
})
```

## Options

### options.repo

- Type: `string`

GitHub repo. e.g. `evillt/saika`.

### options.backgroundColor

- Type: `string`
- Default: `#151513`

The corner background color.

### options.octocatColor

- Type: `string`
- Default: `#fff`

The octocat color.

### options.width

- Type: `string`
- Default: `80px`

The corner width.

### options.height

- Type: `string`
- Default: `80px`

The corner height.

### options.pinned

- Type: `boolean`
- Default: `false`

Pinned in the window.

## Credit

- [GitHub Corner](https://github.com/tholman/github-corners/)
