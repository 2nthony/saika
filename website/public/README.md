# Saika <PkgVersion name="saika" />

To represent markdown content with elegant UI.

## What is Saika

Saika is basically a JavaScript file that fetches Markdown files and renders them as a single-page application.

It's totally runtime-driven so there's no server-side components involved which also means there's no build process. You only need to create an HTML file and a bunch of Markdown and your site is almost ready!

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

Let say you have following files in `./my-site` folder:

```
.
├── README.md
└── index.html
```

The `index.html` looks like:

```html {highlight: ['6-9', '12-24']}
<!DOCTYPE html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Site</title>
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
          link: '/'
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

Next, you may want to use [options](/reference/options) or other theme(like [theme docs](/theme/docs)) to customise the website.

## Browser Compatibility

Saika supports all ever-green browsers, i.e. No IE support!
