<script>
import PostList from '../components/PostList.vue'

export default {
  name: 'HomePage',

  functional: true,

  components: {
    PostList
  },

  render(h, { parent }) {
    return h(
      'div',
      {
        class: 'Wrap'
      },
      [
        h(
          'div',
          {
            class: 'Home'
          },
          [
            h(PostList, {
              props: {
                posts: parent.$store.getters.posts
              }
            })
          ]
        )
      ]
    )
  }
}
</script>
