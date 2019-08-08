# Theming

By default, saika only provide a blank page to show out your README.md.

Thanks to plugin system you can use `api.registerComponent` to theming your lovely site!

## Tutorial

We will add a simple header in this tutorial.

`my-theme-plugin.js`

```js
const myThemePlugin = {
  name: 'my-theme',
  extend(api) {
    api.registerComponent('page:start', MyHeader)
  }
}
```

```js
new Saika({
  // ...
  plugins: [myThemePlugin]
})
```
