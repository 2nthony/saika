# Built-in Components

Saika comes with a set of built-in Vue Components.

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
  url="https://i.loli.net/2019/10/23/aTkzcmJHELIUZjq.jpg"
  width="300"
  border
/>
```

<ImageZoom
  url="https://i.loli.net/2019/10/23/aTkzcmJHELIUZjq.jpg"
  width="300"
  border
/>

## Note

Display text that requires attention or provides additional information.

| Prop  | Type                                          | Default  | Description                           |
| ----- | --------------------------------------------- | -------- | ------------------------------------- |
| type  | `'note' \| 'success' \| 'warning' \| 'error'` | `'note'` | Note type                             |
| fill  | `boolean`                                     | `false`  | Filled variant                        |
| label | `string \| boolean`                           | `true`   | Note label, use `false` to hide label |

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

<!-- Without label -->

<Note fill :label="false">This note details something important without label.</Note>
```

<Note>This note details something important.</Note>
<Note type="success">This note details a success.</Note>
<Note type="warning">This note details a warning.</Note>
<Note type="error">This note details an error.</Note>
<Note fill>This note details something important.</Note>
<Note fill type="success">This note details a success.</Note>
<Note fill type="warning">This note details a warning.</Note>
<Note fill type="error">This note details an error.</Note>
<Note fill :label="false">This note details something important without label.</Note>

## SaikaLink

Basically is `router-link`, but external link will open a new tab.

```markdown
<SaikaLink to="/">Home</SaikaLink>

<SaikaLink to="https://github.com">GitHub</SaikaLink>
```

<SaikaLink to="/">Home</SaikaLink>

<SaikaLink to="https://github.com">GitHub</SaikaLink>

## Badge <Badge content="Saika 2.5.0+" />

Display an indicator that requires attention.

| Prop    | Type                                | Default      | Description                   |
| ------- | ----------------------------------- | ------------ | ----------------------------- |
| type    | `'success' \| 'warning' \| 'error'` |              | Badge type                    |
| color   | `string`                            |              | Custom badge background color |
| content | `string`                            |              | Badge text                    |
| align   | `string`                            | `'text-top'` | Alias for `vertical-align`    |

Example:

```markdown
- Feature 1 <Badge>Badge</Badge>
- Feature 2 <Badge type="success">Success</Badge>
- Feature 3 <Badge type="warning">Warning</Badge>
- Feature 4 <Badge type="error">Error</Badge>
- Feature 5 <Badge color="magenta">Custom Color</Badge>
```

- Feature 1 <Badge>Badge</Badge>
- Feature 2 <Badge type="success">Success</Badge>
- Feature 3 <Badge type="warning">Warning</Badge>
- Feature 4 <Badge type="error">Error</Badge>
- Feature 5 <Badge color="magenta">Custom Color</Badge>

---
