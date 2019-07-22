# Introduction to Saika

Saika is modified from docute to create a blog site, effortless and done right.

## What is Saika

Saika is basically a JavaScript file that fetches Markdown files and renders them as a single-page application.

It's totally runtime-driven so there's no server-side components involved which also means there's no build process. You only need to create an HTML file and a bunch of Markdown and your blog-site is almost ready!

## How does it work

In short: URL is the API.

We fetch and render corresponding markdown file for the URL you visit:

```
/         => /README.md
/foo      => /foo.md
/foo/     => /foo/README.md
/foo/bar  => /foo/bar.md
```

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

## Browser Compatibility

Saika supports all ever-green browsers, i.e. No IE support!
