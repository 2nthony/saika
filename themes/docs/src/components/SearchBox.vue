<template>
  <div class="search-box">
    <span class="magnifier" :class="{ focused }" @click="handleMagnifier">
      <svg
        width="13"
        height="13"
        viewBox="0 0 13 13"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <path
          d="M8.87 8.16l3.25 3.25-.7.71-3.26-3.25a5 5 0 1 1 .7-.7zM5 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
        ></path>
      </svg>
    </span>

    <input
      v-model="query"
      aria-label="search"
      aria-autocomplete="list"
      :placeholder="searchBox.placeholder"
      :aria-placeholder="searchBox.placeholder"
      :class="{ focused }"
      autocomplete="off"
      spellcheck="false"
      ref="search"
      @focus="onFocus"
      @blur="focused = false"
      @keyup.enter="go(focusIndex)"
      @keyup.up="onUp"
      @keyup.down="onDown"
      @keyup.esc="exit"
    />

    <ul v-if="showSuggestions" class="suggestions" @mouseleave="unfocus">
      <li
        v-for="(s, i) in suggestions"
        :key="s.link"
        class="suggestion"
        :class="{ focused: i === focusIndex }"
        @mouseenter="focus(i)"
        @mousedown="go(i)"
      >
        <a :href="s.link" @click.prevent>
          <span>{{ s.title }}</span>
          <div class="tag-wrapper">
            <span v-if="s.parent" class="tag">{{ s.parent }}</span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SearchBox',

  data() {
    return {
      query: '',
      focused: false,
      focusIndex: 0
    }
  },

  computed: {
    searchBox() {
      const SEARCH_BOX_DEFAULT = {
        max: 5,
        hotKeys: ['s', '/'],
        placeholder: 'Search...'
      }

      return Object.assign(SEARCH_BOX_DEFAULT, this.$config.searchBox)
    },

    showSuggestions() {
      return this.focused && this.suggestions && this.suggestions.length
    },

    suggestions() {
      const query = this.query.trim().toLowerCase()
      if (!query) {
        return
      }

      const { postsLinks } = this.$store.getters

      const matches = item =>
        item.title && item.title.toLowerCase().indexOf(query) > -1

      const res = []
      for (let i = 0; i < postsLinks.length; i++) {
        if (res.length >= this.searchBox.max) break

        if (matches(postsLinks[i])) {
          res.push(postsLinks[i])
        }
      }

      return res
    }
  },

  mounted() {
    document.addEventListener('keydown', this.onHotKey)
  },

  beforeDestroy() {
    document.removeEventListener('keydown', this.onHotKey)
  },

  methods: {
    go(i) {
      if (this.showSuggestions && this.focusIndex > -1) {
        this.$router.push(this.suggestions[i].link)
        this.exit()
      }
    },

    handleMagnifier() {
      this.onFocus()
      this.$nextTick(() => {
        this.$refs.search.focus()
      })
    },

    onFocus() {
      this.focused = true
      this.focusIndex = 0
    },

    onUp() {
      if (this.showSuggestions) {
        if (this.focusIndex > 0) {
          this.focusIndex--
        } else {
          this.focusIndex = this.suggestions.length - 1
        }
      }
    },

    onDown() {
      if (this.showSuggestions) {
        if (this.focusIndex < this.suggestions.length - 1) {
          this.focusIndex++
        } else {
          this.focusIndex = 0
        }
      }
    },

    exit() {
      this.query = ''
      this.$refs.search.blur()
    },

    onHotKey(event) {
      if (
        event.srcElement === document.body &&
        this.searchBox.hotKeys.includes(event.key)
      ) {
        event.preventDefault()
        this.$refs.search.focus()
      }
    },

    focus(i) {
      this.focusIndex = i
    },

    unfocus() {
      this.focusIndex = -1
    }
  }
}
</script>

<style scoped>
.search-box {
  display: inline-block;
  position: relative;

  & .magnifier {
    display: none;
  }

  & input {
    cursor: text;
    max-width: 30vw;
    width: 278px;
    height: 32px;
    display: inline-block;
    border: 1px solid var(--border-color);
    outline: none;
    border-radius: var(--radius);
    padding: 0 12px;

    &:focus {
      border-color: #666;
    }
  }

  & .suggestions {
    background-color: #fff;
    max-width: calc(100vw - 32px);
    width: 480px;
    position: absolute;
    top: 1.5rem;
    left: 50%;
    padding: 12px 0;
    transform: translateX(-50%);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    border-radius: 0 0 8px 8px;
    padding: 0.4rem;
    list-style-type: none;
  }

  & .suggestion {
    & a {
      font-weight: 500;
      white-space: normal;
      display: flex;
      padding: 12px;
    }

    &.focused {
      border-radius: var(--radius);
      background-color: #f3f4f5;
      box-shadow: 0 0 1px #666;
    }

    & .tag-wrapper {
      height: 22px;
      margin-left: 8px;
      display: flex;

      & .tag {
        height: 100%;
        background-color: #fff;
        padding: 4px 8px;
        border: 1px solid var(--border-color);
        font-size: 10px;
        text-transform: uppercase;
        margin: 0;
        line-height: 130%;
        border-radius: var(--radius);
      }
    }
  }

  @media (max-width: 768px) {
    & .magnifier {
      display: block;

      &.focused {
        display: none;
      }
    }

    & input {
      display: none;

      &.focused {
        display: block;
      }
    }
  }
}
</style>
