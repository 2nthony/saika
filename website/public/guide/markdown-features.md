# Markdown Features

## Content Format

A content is represented in Markdown format:

```markdown
# title

The content goes here...
```

We use [marked](https://marked.js.org) to parse Markdown, so almost all [GitHub flavored Markdown](https://github.github.com/gfm/) features are supported.

To [mastering markdown](https://guides.github.com/features/mastering-markdown/) if you're not sure what it is.

## Links

### Internal Links

Internal links will converted to `<router-link>` for SPA-style navigation.

__Input__:

```markdown
- [Home](/) <!-- Send the user to homepage -->
- [Plugin](/guide/plugin) <!-- Send the user to the specified page -->
- [Check out the `posts` option](/reference/options#posts) <!-- Send the user to the specified page with anchor -->
```

__Output__:

- [Home](/) <!-- Send the user to homepage -->
- [Plugin](/guide/plugin) <!-- Send the user to the specified page -->
- [Check out the `posts` option](/reference/options#posts) <!-- Send the user to the specified page with anchor -->

### External Links

External links will converted to `<a target="_blank" rel="noopener noreferrer">`.

__Input__:

```markdown
- [Saika](https://saika.dev)
- [Saika repo](https://github.com/evillt/saika)
```

__Output__:

- [Saika](https://saika.dev)
- [Saika repo](https://github.com/evillt/saika)

## Tasks Lists

But I have to admit, tasks lists are my favorite:

__Input__:

```markdown
- [x] This is a complete item
- [ ] This is an incomplete item
- [x] Use Saika
```

__Output__:

- [x] This is a complete item
- [ ] This is an incomplete item
- [x] Use Saika

## Code highlight

__Input__:

````markdown
```js { highlight: [3, '6-8'] }
class Greet {
  constructor(name) {
    this.name = name
  }

  sayHi() {
    alert('Hi there', this.name)
  }
}
```
````

__Output__:

```js {highlight: [3, '6-8']}
class Greet {
  constructor(name) {
    this.name = name
  }

  sayHi() {
    alert('Hi there', this.name)
  }
}
```

## Vue Mixin

Add a Vue mixin to the Markdown content component.

````markdown
~~Iron Man~~: He love Saika <button @click="count++">{{ count }}</button>

```js { mixin: true }
{
  data() {
    return {
      count: 3000
    }
  }
}
```
````

~~Iron Man~~: He love Saika <button @click="count++">{{ count }}</button>

```js { mixin: true }
{
  data() {
    return {
      count: 3000
    }
  }
}
```

## HTML in markdown

Write HTML in markdown.

```html
<button>a button right here</button>
```

<button>a button right here</button>
