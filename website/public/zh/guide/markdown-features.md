# Markdown 功能

## 内容规范

内容以 Markdown 格式来展示:

```markdown
# 标题

内容写在这里...
```

如果你不知道什么是 Markdown, 请查阅[精通 Markdown](https://guides.github.com/features/mastering-markdown/).

## 连接

### 内部连接

内部连接会转换为 `<router-link>` SPA 式导航.

**输入**:

```markdown
- [首页](/) <!-- 将用户导航到首页 -->
- [插件](/guide/plugin) <!-- 将用户导航到指定页 -->
- [请查看 `posts` 选项](/reference/options#posts) <!-- 将用户导航到指定页并且跳转锚点 -->
```

**输出**:

- [首页](/) <!-- 将用户导航到首页 -->
- [插件](/guide/plugin) <!-- 将用户导航到指定页 -->
- [请查看 `posts` 选项](/reference/options#posts) <!-- 将用户导航到指定页并且跳转锚点 -->

### 外部连接

外部连接会转换为 `<a target="_blank" rel="noopener noreferrer">`.

**输入**:

```markdown
- [Saika](https://saika.dev)
- [Saika repo](https://github.com/evillt/saika)
```

**输出**:

- [Saika](https://saika.dev)
- [Saika repo](https://github.com/evillt/saika)

## 列表

### 有序列表

有时候你想要数字编号列表:

**输入**:

```markdown
1. One
2. Two
3. Three
```

**输出**:

1. One
2. Two
3. Three

### 无序列表

有时候你想要一条小横线:

**输入**:

```markdown
- Start a line with a star
- Profit!
```

**输出**:

- Start a line with a star
- Profit!

### 任务列表

我不得不承认, 任务列表是我的最爱:

**输入**:

```markdown
- [x] 这是一个完成的项目
- [ ] 这是一个未完成的项目
- [x] 正在使用 Saika
```

**输出**:

- [x] 这是一个完成的项目
- [ ] 这是一个未完成的项目
- [x] 正在使用 Saika

## 代码高亮

**输入**:

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

**输出**:

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

为 Markdown 内容添加一个 Vue Mixin.

````markdown
~~钢铁侠~~: 我爱 Saika <button @click="count++">{{ count }}</button> 次.

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

~~钢铁侠~~: 我爱 Saika <button @click="count++">{{ count }}</button> 次.

```js { mixin: true }
{
  data() {
    return {
      count: 3000
    }
  }
}
```

## 在 Markdown 中撰写 HTML

```html
<button>按钮</button>
```

<button>按钮</button>
