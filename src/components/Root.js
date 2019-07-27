import '../css/global.css'

export default {
  name: 'Root',

  render(h) {
    return h(
      'div',
      {
        attrs: {
          id: this.target,
          class: this.target
        }
      },
      [h('router-view')]
    )
  },

  created() {
    this.insertStyle()
  },

  watch: {
    css() {
      this.insertStyle()
    }
  },

  computed: {
    target() {
      return this.$store.getters.target
    },

    css() {
      const { cssVariables } = this.$store.getters
      const content = Object.keys(cssVariables).reduce((res, key) => {
        res += `--${key.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`)}:${
          cssVariables[key]
        };`
        return res
      }, '')
      return `:root{${content}}`
    }
  },

  methods: {
    insertStyle() {
      const ID = '#saika-inserted-style'
      let style = document.querySelector(ID)

      if (style) {
        style.innerHTML = this.css
      } else {
        style = document.createElement('style')
        style.id = ID
        style.innerHTML = this.css
        document.head.insertBefore(style, document.head.firstChild)
      }
    }
  }
}
