# Plugin

A plugin is essentially a pure object:

```js
const showAuthor = {
  name: 'showAuthor',
  extend: api => {
    api.processMarkdown(text => text.replace(/{author}/g, 'EVILLT'))
  }
}

new Saika({
  plugins: [
    showAuthor
  ]
})
```

Example:

```markdown
# Page Title

{author}
```

Will render as:

```markdown
# Page Title

EVILLT
```

---

To accept options in your plugin, you can use a factory function:

```js
const myPlugin = opts => {
  return {
    name: 'my-plugin',
    extend(api) {
      // do something with `opts` and `api`
    }
  }
}

new Saika({
  plugins: [
    myPlugin({ name: 'oh-my-name' })
  ]
})
```

For more details about how to develop a plugin, please check out [Plugin Api](/reference/plugin-api).

Check out [plugins](https://github.com/evillt/saika/tree/master/plugins) for a list of Saika plugins by the maintainers and users.
