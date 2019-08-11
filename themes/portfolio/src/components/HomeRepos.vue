<template>
  <HomeSection>
    <template slot="title">
      <LayersIcon />Repositories
    </template>

    <div v-if="isFetchingRepos">Fetching github repositories...</div>
    <template v-else>
      <template v-if="repos.length > 1">
        <div class="columns is-multiline">
          <div v-for="repo in repos" :key="repo.name" class="column is-half">
            <RepoCard :repo="repo" />
          </div>
        </div>
      </template>
      <div v-else>Not found.</div>
    </template>
  </HomeSection>
</template>

<script>
import { LayersIcon } from 'vue-feather-icons'
import HomeSection from './HomeSection.vue'
import RepoCard from './RepoCard.vue'

export default {
  components: {
    LayersIcon,
    HomeSection,
    RepoCard
  },

  data() {
    return {
      isFetchingRepos: false,
      repos: []
    }
  },

  mounted() {
    this.fetchRepos().then(repos => {
      this.repos = repos
    })
  },

  methods: {
    fetchRepos() {
      const { github, repos } = this.$config
      const usePinnedRepos = repos === 'pinned-repos'
      const url = usePinnedRepos
        ? `https://gh-pinned-repos.now.sh/?username=${github}`
        : `https://api.github.com/search/repositories?q=user:${github}&sort:stars&per_page=6`

      if (sessionStorage.getItem('github_repos')) {
        return Promise.resolve(
          JSON.parse(sessionStorage.getItem('github_repos'))
        )
      }

      this.isFetchingRepos = true
      return fetch(url)
        .then(res => res.json())
        .then(res => {
          const projectsResult = usePinnedRepos
            ? res.map(item => {
                return {
                  name: item.repo,
                  url: `https://github.com/${item.owner}/${item.repo}`,
                  description: item.description,
                  language: item.language,
                  stars: item.stars
                }
              })
            : res.items.map(item => {
                return {
                  name: item.name,
                  url: item.html_url,
                  description: item.description,
                  language: item.language,
                  stars: item.stargazers_count
                }
              })
          sessionStorage.setItem('github_repos', JSON.stringify(projectsResult))
          return projectsResult
        })
        .catch(error => {
          if (usePinnedRepos) {
            throw error
          }

          if (
            error.response &&
            error.response.status === 422 &&
            error.response.data &&
            error.response.data.message === 'Validation Failed'
          ) {
            return { items: [] }
          }

          throw error
        })
        .finally(() => {
          this.isFetchingRepos = false
        })
    }
  }
}
</script>
