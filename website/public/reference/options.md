# Options

<Note fill :label="false">WIP</Note>

Options for `Saika` constructor

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

## posts

- Type: `PostItem[] | (store: Vuex.Store) => PostItem[]`

Navigation of posts item.

```ts
type PostItem = SingleItem | MultipleItem

interface SingleItem {
  title: string
  link: PathLike
}

interface MultipleItem extends LinkItem {
  title: string
  children: SingleItem[]
}
```
