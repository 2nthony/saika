# Use With Bundlers

<Note :label="false" fill>WIP</Note>

Install `Saika` as a dependency in your project:

```bash
$ yarn add saika --dev
```

## Webpack

In your entry file:

```js
import Saika from 'saika'

new Saika({
  target: 'app',
  // ...options
})
```
