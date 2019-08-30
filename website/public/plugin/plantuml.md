# Saika PlantUML

Using PlantUML in Saika.

## Usage

Load this plugin via `<script>` tag:

```html
<!-- Load this plugin after saika.js -->
<script src="https://unpkg.com/@saika/plantuml"></script>
```

This plugin is exposed as `window.saikaPlantUML`:

```js
new Saika({
  plugins: [
    saikaPlantUML()
  ]
})
```

## Options

### options.type

- Type: `string`
- Default: `'png'`

The image type.

## Example

```plantuml
A -> B: Well Hello Gorgeous
```

<ImageZoom src="https://i.loli.net/2019/08/31/m8wMiAG4hr6Hbel.png" />
