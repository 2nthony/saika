<script>
import PostContent from '../components/PostContent.vue'

export default {
  name: 'Readme',

  functional: true,

  render: h =>
    h(
      'div',
      {
        class: 'Readme'
      },
      [h(PostContent)]
    )
}
</script>
