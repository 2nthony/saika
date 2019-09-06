# Saika Theme Portfolio <PkgVersion name="@saika/theme-portfolio" />

## Usage

Load this plugin via `<link>` and `<script>` tag:

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/@saika/theme-portfolio/dist/index.css"
/>

<!-- Load this plugin after saika.js -->
<script src="https://unpkg.com/@saika/theme-portfolio"></script>
```

This plugin is exposed as `window.saikaThemePortfolio`:

```js
new Saika({
  plugins: [saikaThemePortfolio]
})
```

## Options

### github

- Type: `string`
- Required: `true`

The GitHub username, we use this to fetch GitHub's API for populating your website with content.

### repos

- Type: `'pinned-repos' | false`
- Default: `undefined`

List github user repos.

### twitter

- Type: `string`

The twitter username.

### skills

- Type: `Array<SkillItem>`

```ts
interface SkillItem {
  // GitHub topic
  topic: string
  // To override the GitHub topic image
  image?: Image.src
  // Describe your skill
  description: string
}
```

Check out https://cdn.jsdelivr.net/gh/github/explore@latest/topics/ for all supported tpoics.

### nav

- Type: `Array<NavItem>`

An array of navigation items at profile.

```ts
interface NavItem {
  title: string
  link?: PathLike
  // right default
  position?: 'left' | 'right'
}
```

### posts

- Type: [Options.posts](/reference/options#posts)

The post items is your blog post items.

### sponsorLink

- Type: `stirng`

The sponsor button link.

### sponsorTip

- Type: `string`

The sponsor button tip.

### hirable

- Type: `boolean`

Hirable status.

### follow

- Type: `boolean`

Show follow button.
