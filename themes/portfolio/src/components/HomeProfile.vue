<template>
  <div class="profile sticky">
    <div class="profile-content">
      <template v-if="profile">
        <div class="profile-avatar">
          <img :src="profile.avatar_url" alt="github-avatar" />
        </div>
        <h1 class="profile-name">
          {{ profile.name }}
        </h1>
        <div class="profile-description">
          {{ profile.bio }}
        </div>
      </template>
      <div v-else>Fetching github profile...</div>

      <nav v-if="$config.nav" class="nav">
        <ul>
          <li v-for="item in $config.nav" :key="item.link">
            <SaikaLink :to="item.link">
              <CornerDownRightIcon />{{ item.title }}
            </SaikaLink>
          </li>
        </ul>
      </nav>

      <div class="profile-meta-items">
        <div class="profile-meta-item">
          <GithubIcon />
          <a
            :href="`https://github.com/${$config.github}`"
            rel="noopener noreferrer"
            target="_blank"
            >@{{ $config.github }}</a
          >
        </div>
        <div v-if="$config.twitter" class="profile-meta-item">
          <TwitterIcon />
          <a
            :href="`https://twitter.com/${$config.twitter}`"
            rel="noopener noreferrer"
            target="_blank"
            >@{{ $config.twitter }}</a
          >
        </div>
        <div v-if="$config.hireable" class="profile-meta-item">
          <BriefcaseIcon />{{ $config.hireableText || 'Avariable for hire' }}
        </div>
      </div>
      <a
        v-if="$config.follow"
        rel="noopener noreferrer"
        target="_blank"
        class="profile-button"
        :href="`https://github.com/${$config.github}`"
        >Follow</a
      >
      <a
        v-if="$config.sponsorLink"
        rel="noopener noreferrer"
        target="_blank"
        class="profile-button profile-sponsor-button"
        :href="$config.sponsorLink"
        :title="$config.sponsorTip"
      >
        <HeartIcon />Sponsor
      </a>
    </div>
  </div>
</template>

<script>
import {
  GithubIcon,
  BriefcaseIcon,
  TwitterIcon,
  HeartIcon,
  CornerDownRightIcon
} from 'vue-feather-icons'

export default {
  components: {
    GithubIcon,
    BriefcaseIcon,
    TwitterIcon,
    HeartIcon,
    CornerDownRightIcon
  },

  data() {
    return {
      profile: ''
    }
  },

  mounted() {
    this.fetchProfile().then(profile => {
      this.profile = profile
    })
  },

  methods: {
    fetchProfile() {
      if (sessionStorage.getItem('github_profile')) {
        return Promise.resolve(
          JSON.parse(sessionStorage.getItem('github_profile'))
        )
      }

      return fetch(`https://api.github.com/users/${this.$config.github}`)
        .then(res => res.json())
        .then(res => {
          sessionStorage.setItem('github_profile', JSON.stringify(res))
          return res
        })
    }
  }
}
</script>

<style scoped>
.profile {
  width: var(--profile-width);
  top: var(--portfolio-gap);

  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    position: initial;
    padding-bottom: 30px;
    margin-bottom: 30px;
    border-bottom: 1px solid var(--border-color);
  }
}

.profile-content {
  width: 100%;
}

.profile-name {
  font-weight: 4;
  font-size: 2rem;
  line-height: 1;

  @media (max-width: 768px) {
    margin-top: 0;
  }
}

.profile-avatar {
  position: relative;

  & img {
    width: 100%;
    border-radius: var(--radius);

    @media (max-width: 768px) {
      width: 60px;
      height: 60px;
      position: absolute;
      right: 0;
    }
  }
}

.profile-meta-items {
  margin-top: 25px;
  margin-bottom: 20px;

  & .profile-meta-item {
    display: flex;
    align-items: center;
    margin-top: 3px;

    & svg {
      width: 1rem;
      height: 1rem;
      margin-right: 10px;
    }
  }
}

.profile-button {
  display: flex;
  width: 100%;
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  padding: 5px 0;
  font-weight: 600;

  & svg {
    width: 1rem;
    height: 1rem;
    margin-right: 5px;
  }

  &.profile-sponsor-button {
    & svg {
      color: #ea4aaa;
    }

    &:hover {
      & svg {
        transform: scale(1.1);
      }
    }
  }
}

.nav {
  & ul {
    margin-top: 20px;
    list-style: none;
    padding-left: 0;
  }

  & li {
    & a {
      display: flex;
      align-items: center;
      color: #b1aeae;

      &:hover {
        color: #555;
      }

      &.router-link-exact-active {
        color: var(--success-color);
      }
    }

    & svg {
      width: 1rem;
      height: 1rem;
      margin-right: 5px;
    }
  }
}
</style>
