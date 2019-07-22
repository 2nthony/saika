# Saika

> Effortless blogging

Please consider starring the project to show your ❤️ and support.

[![NPM version](https://badgen.net/npm/v/saika?icon=npm)](https://npmjs.com/package/saika)
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
  <meta charset="utf-8" />
  <title>My Blog</title>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/saika/dist/saika.css"
  />
</head>
<body>
  <div id="saika"></div>
  <script src="https://cdn.jsdelivr.net/npm/saika"></script>
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

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Credits

- [docute](https://github.com/egoist/docute)
- [zeit/design](https://zeit.co/design)

## Author

**Saika** © [evillt](https://github.com/evillt), Released under the [MIT](./LICENSE) License.

Authored and maintained by **EVILLT** with help from contributors ([list](https://github.com/evillt/saika/contributors)).

> [evila.me](https://evila.me) · GitHub [@evillt](https://github.com/evillt) · Twitter [@evillt](https://twitter.com/evillt)
