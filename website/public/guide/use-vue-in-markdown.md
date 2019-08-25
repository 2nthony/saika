# Use Vue in Markdown

## Interpolation

Each markdown file is compiled to HTML first and then rendered as a Vue component. This means Vue-style(Mustache syntax) interpolation works in the text.

__Input__:

```markdown
{{ 1 + 1 }}
```

__Output__:

{{ 1 + 1 }}

## Using Components

Saika exposed the `Vue` as `window.Vue`, so you can use it to register global components in order to use in Markdown content.

```js
Vue.component('ReverseText', {
  template: `
    <div>
      {{ reversedText }}
    </div>
  `,
  props: ['text'],
  computed: {
    reversedText() {
      return this.text.split('').reverse().join('')
    }
  }
})
```

__Input__:

```markdown
<ReverseText text="I love you 3000" />
```

__Output__:

<ReverseText text="I love you 3000" />
