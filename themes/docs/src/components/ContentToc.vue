<script>
export default {
  functional: true,

  props: {
    link: {
      type: Object,
      required: true
    }
  },

  render(h, { props, parent }) {
    const { link, toc } = props.link
    const { isFetchingFile } = parent.$store.state
    const headings = (parent.$store.state.env.headings || []).filter(
      heading => heading.level === 2
    )

    if (
      !isFetchingFile &&
      toc !== false &&
      link === parent.$route.path &&
      headings.length > 0
    ) {
      return h(
        'div',
        {
          class: 'content-toc'
        },
        headings.map(heading => {
          return h(
            'SaikaLink',
            {
              class: 'content-toc-heading text-overflow-ellipsis',
              props: {
                to: { hash: heading.slug }
              },
              key: heading.slug
            },
            heading.raw.replace(/<.*>\s*$/g, '')
          )
        })
      )
    }

    return null
  }
}
</script>

<style scoped>
.content-toc {
  border-left: 1px solid var(--border-color);
  margin-left: 4px;
  padding-left: 19px;
}

.content-toc-heading {
  line-height: 1;
  margin: 18px 0;

  &::before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    margin-left: 2px;
    margin-right: 18px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    box-shadow: 0 0 0 1px #333;
    transform: scale(0.75);
  }

  &.router-link-exact-active {
    font-weight: 600;
  }
}
</style>
