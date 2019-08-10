# Built-in Components

Saika comes with built-in Vue Components.

## ImageZoom

Use medium-style zoom effect to display image.

| Prop         | Type               | Default | Description              |
| ------------ | ------------------ | ------- | ------------------------ |
| `src \| url` | `string`           |         | URL to image             |
| `alt`        | `string`           |         | Placeholder text         |
| `title`      | `string`           |         | Image title              |
| `border`     | `boolean`          | `false` | Show border around image |
| `width`      | `string \| number` |         | Image width              |

Example:

```markdown
<ImageZoom
  url="https://i.loli.net/2019/08/11/jD6umQkgAbTBNEx.jpg"
  width="300"
  border
/>
```

<ImageZoom
  url="https://i.loli.net/2019/08/11/jD6umQkgAbTBNEx.jpg"
  width="300"
  border
/>

## Note

Display text that requires attention or provides additional information.

| Prop  | Type                                           | Default  | Description                           |
| ----- | ---------------------------------------------- | -------- | ------------------------------------- |
| type  | `'note' \| 'success' \| 'warning' \| 'danger'` | `'note'` | Note type                             |
| fill  | `boolean`                                      | `false`  | Filled variant                        |
| label | `string \| boolean`                            | `true`   | Note label, use `false` to hide label |

Examples:

```markdown
<Note>This note details something important.</Note>

<!-- Success note -->
<Note type="success">This note details a success.</Note>

<!-- Warning note -->
<Note type="warning">This note details a warning.</Note>

<!-- Error note -->
<Note type="error">This note details an error.</Note>

<!-- Filled variant -->
<Note fill>This note details something important.</Note>
<Note fill type="success">This note details a success.</Note>
<Note fill type="warning">This note details a warning.</Note>
<Note fill type="error">This note details an error.</Note>
```

<Note>This note details something important.</Note>
<Note type="success">This note details a success.</Note>
<Note type="warning">This note details a warning.</Note>
<Note type="error">This note details an error.</Note>
<Note fill>This note details something important.</Note>
<Note fill type="success">This note details a success.</Note>
<Note fill type="warning">This note details a warning.</Note>
<Note fill type="error">This note details an error.</Note>
