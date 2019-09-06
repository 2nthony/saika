# Saika Mermaid <PkgVersion name="@saika/mermaid" />

Using Mermaid in Saika.

## Usage

Load this plugin via `<script>` tag:

```html
<!-- Load this plugin after saika.js -->
<script src="https://unpkg.com/mermaid/dist/mermaid.min.js"></script>
<script src="https://unpkg.com/@saika/mermaid"></script>
```

This plugin is exposed as `window.saikaMermaid`:

```js
new Saika({
  plugins: [saikaMermaid()]
})
```

## Options

Options for [mermaid.initialize](https://mermaidjs.github.io/#/usage?id=using-the-mermaidapiinitializemermaidinitialize-call).

## Example

````markdown
```mermaid
graph LR

A-->B
A-->C
B-->D
C-->D
```
````

<ImageZoom src="https://i.loli.net/2019/08/27/2oTB5K6pHz3OrIi.png" />
