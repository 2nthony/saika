export default lang => {
  let opts = {}

  if (lang.indexOf('{') > -1) {
    const escaped = lang.split(' {')
    lang = escaped[0]

    try {
      /* eslint-disable-next-line no-new-func */
      const fn = new Function(`return {${escaped[1]}`)
      opts = fn()
    } catch (error) {
      console.error(
        `You're using invalid options for code fences, it's must be JSON or JS objecr!\n${error.message}`
      )
    }
  }

  return {
    lang,
    opts
  }
}
