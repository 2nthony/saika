# Hooks

It pretty useful for develop Saika Plugin.

```js
api.hooks.add('SayHi', name => {
  console.log('Hi', name)
})
api.hooks.invoke('SayHi', '2nthony')
// Hi, 2nthony
```

## add

- Type: `(name: string, fn: (...args: any[]) => any) => Hooks`

Add a function to hooks.

## invoke

- Type: `(name: string, ...args: any[]) => Hooks`

Invoke hooks with matched name.

## process

- Type: `<T>(name: string, arg: T) => arg`

Similar to [invoke](#invoke), but return the `arg`.

## processPromise

Async version [process](#process).

## hooks

- Type: `{ [name: string]: Function[] }`

The hooks store.
