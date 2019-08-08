<script>
import PostContent from '../../components/PostContent.vue'

export default {
  name: 'SaikaThemeDefault',

  functional: true,

  render: h => {
    return h(
      'div',
      {
        class: 'saika-theme-default'
      },
      [h(PostContent)]
    )
  }
}
</script>
