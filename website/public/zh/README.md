# Saika <PkgVersion name="saika" />

以优雅的 UI 来呈现 Markdown 内容.

## 什么是 Saika?

Saika 本质上就是一个 JavaScript 文件, 获取 Markdown 文件并渲染为单页应用.

它完全由运行时驱动的, 因此不设计服务端组件, 这也意味着没有构建过程. 你只需创建一个 HTML 文件和一堆 Markdown 文件, 你的网站就差不多完成了!

## 它如何工作?

简言之: URL 就是 API.

访问 URL 时, 会获取并呈现相应的 Markdown 文件内容:

```
/         => /README.md
/foo      => /foo.md
/foo/     => /foo/README.md
/foo/bar  => /foo/bar.md
```

## 快速开始

假设你的 `./my-site` 文件夹有以下文件:

```
.
├── README.md
└── index.html
```

`index.html` 大概长这样子:

```html {highlight: [6, '9-21']}
<!DOCTYPE html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Site</title>
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
          link: '/'
        }
      ]
    })
  </script>
</body>
```

然后你可以使用下列工具来将此文件夹作为计算机上的静态网站展示:

- Node.js:
  - `npm i -g serve && serve .`
  - `npm i -g http-server && hs`
- Python: `python -m SimpleHTTPServer`
- Golang: `caddy`
- ...或者其他任何静态 Web 服务工具

接下来, 你可能想要通过 [选项](/reference/options) 或者使用主题(如 [文档主题](/theme/docs))来定制你的网站.

## 浏览器兼容性

Saika 支持所有常青浏览器(ever-green browsers), 即不支持 IE !
