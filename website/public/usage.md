# Usage

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
  <link rel="stylesheet" href="https://unpkg.com/saika/dist/saika.css" />
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

## Credits

- [docute](https://github.com/egoist/docute)
- [zeit/design](https://zeit.co/design)
