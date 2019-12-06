<template>
  <div class="SnippetWrapper" :class="{ prompt }" :style="{ minWidth: width }">
    <div class="ContentWrapper">
      <component
        v-for="(string, i) in content"
        :key="i"
        class="pre"
        :is="highlightContent(string)"
      />
    </div>

    <div class="Copy" @click="handleCopy">
      <Copy fill="white" stroke="currentColor" width="18" height="18" />
    </div>
  </div>
</template>

<script>
import copy from '../utils/copy'
import highlight from '../utils/highlight'
import Copy from './icons/Copy.vue'

export default {
  name: 'Snippet',

  components: {
    Copy
  },

  props: {
    text: {
      type: [String, Array],
      default: ''
    },
    prompt: {
      type: Boolean,
      default: true
    },
    width: {
      type: String,
      default: '100%'
    }
  },

  computed: {
    content() {
      const { text } = this
      return typeof text === 'string' ? [text] : text
    }
  },

  methods: {
    handleCopy() {
      copy(this.content.join('\n'))
    },
    highlightContent(text) {
      return {
        template: `<div>${highlight(text, 'bash')}</div>`
      }
    }
  }
}
</script>

<style scoped>
.SnippetWrapper {
  position: relative;
  font-family: var(--code-font);
  width: fit-content;
  max-width: 100%;
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  margin: 24px 0;

  & .ContentWrapper {
    padding: 8pt;
    padding-right: 32pt;
  }

  & .pre {
    font-size: 13px;
    line-height: 1.5;
  }

  &.prompt {
    & .pre::before {
      content: '$ ';
      user-select: none;
    }
  }

  & .Copy {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
    transition: color 0.2s ease;
    z-index: 30;
    display: inline-flex;
    padding-left: 14px;
    padding: 8pt;

    &:hover {
      color: #666;
    }
  }
}
</style>

<style src="@evillt/toast/dist/toast.css"></style>
