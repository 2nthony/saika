# Saika

> Effortlessly blogging, done right.

Please consider starring the project to show your ❤️ and support.

[![NPM version](https://badgen.net/npm/v/saika?icon=npm)](https://npmjs.com/package/saika)
[![NPM download](https://badgen.net/npm/dm/saika)](https://npmjs.com/package/saika)
[![CircleCI](https://badgen.net/circleci/github/evillt/saika?icon=circleci)](https://circleci.com/gh/evillt/saika/tree/master)
[![License](https://badgen.net/npm/license/saika)](./LICENSE)
[![donate](https://badgen.net/badge/support%20me/donate/f2a)](https://donate.evila.me)

## Quick Start

Let say you have following files in `./my-blog` folder:

```
.
├── posts
│   └── my-post.md
└── index.html
```

The `index.html` looks like:

```html
<!DOCTYPE html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Blog</title>
  <link rel="stylesheet" href="https://unpkg.com/saika/dist/saika.css">
</head>
<body>
  <div id="saika"></div>
  <script src="https://unpkg.com/saika"></script>
  <script>
    new Saika({
      target: '#saika',
      posts: [
        {
          title: 'MyPost',
          link: '/posts/my-post'
        }
      ]
    })
  </script>
</body>
```

Then you can serve this folder as a static website on your machine using:

- Node.js:
  - `npm i -g serve && serve .`
  - `npm i -g http-server && hs`
- Python: `python -m SimpleHTTPServer`
- Golang: `caddy`
- ...or whatever static web server

## Who using Saika

- [kms-docs/starter](https://kms-docs.now.sh) 🍄 KMS guide's documentation.
- [evillt/toast](https://toast.evila.me) 💬 A lightweight toast.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Credits

- [**Docute**](https://docute.org)
- [Vue.js](https://vuejs.org)
- [ZEIT Design](https://zeit.co/design)
- [ZEIT Docs](https://zeit.co/docs)

## Author

**Saika** © [evillt](https://github.com/evillt), Released under the [MIT](./LICENSE) License.

Authored and maintained by **EVILLT** with help from contributors ([list](https://github.com/evillt/saika/contributors)).

> [evila.me](https://evila.me) · GitHub [@evillt](https://github.com/evillt) · Twitter [@evillt](https://twitter.com/evillt)
