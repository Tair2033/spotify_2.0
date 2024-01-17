<template>
  <Transition name="sidebar">
    <div
      v-if="getRightSidebarStatus()"
      class="sidebar-wrapper"
    >
      <div
        class="close"
        @click="changeRightSidebarStatus()"
      >
        <i class="fa-solid fa-xmark" />
      </div>

      <div
        class="sidebar"
      >
        <div class="sidebar__user">
          <div class="sidebar__user-profile user">
            <div class="user__image">
              <img :src="getUser().image">
            </div>
            <div class="user__info">
              <div class="user__info-name">
                Hi, {{ getUser().name }}
              </div>
              <div class="user__info-product">
                {{ getUser().product }}
              </div>
            </div>
          </div>
        </div>
        <div class="sidebar__library">
          <div class="sidebar__library-heading heading">
            Your Library
          </div>
          <div class="sidebar__library-list">
            <ul class="cathegory">
              <li
                v-for="(item, index) in cathegories"
                :key="index"
              >
                <RouterLink
                  :to="item.link"
                  class="cathegory__item"
                >
                  <div class="cathegory__item-icon">
                    <i :class="item.icon" />
                  </div>
                  <div class="cathegory__item-name">
                    {{ item.name }}
                  </div>
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="sidebar__friends">
          <div class="sidebar__friends-heading heading">
            Friends activity
          </div>

          <div class="friends">
            <!-- <ul class="friend">
            <li class="friend__item">

            </li>
          </ul> -->
            <div class="friends__nothing">
              <span>
                No friends yet
              </span>
              <button class="friends__nothing-find">
                Find friends
              </button>
            </div>
          </div>
        </div>
        <div class="sidebar__lyric">
        <!-- Lyric component in production -->
        </div>

        <div class="sidebar__info">
          © {{ new Date().getFullYear() }} Spotify 2.0
        </div>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts">
import store from '@/store';
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      cathegories: [
        {
          name: "Your Playlists",
          icon: "fa-solid fa-list",
          link: "/playlists"
        },
        {
          name: "Favourites",
          icon: "fa-solid fa-heart",
          link: "/favourites"
        },
        {
          name: "Albums",
          icon: "fa-solid fa-compact-disc",
          link: "/albums"
        },
        {
          name: "Songs",
          icon: "fa-solid fa-headphones",
          link: "/songs"
        }
      ]
    }
  },
  methods: {
    getUser() {
      return store.getters.getUser
    },
    getRightSidebarStatus() {
      return store.getters.getRightSidebarStatus
    },
    changeRightSidebarStatus() {
      store.commit('changeRightSidebarStatus')
    }
  }
})

</script>

<style lang="scss" scoped>
.sidebar-enter-active,
.sidebar-leave-active {
  // transition: transform 0.5s ease;
}

.sidebar-enter-from,
.sidebar-leave-to {
  transform: translateX(100%);
}

.router-link-active {
  div {
    text-decoration: underline;
    color: white;

    i {
      color: white;
    }
  }
}

.sidebar-wrapper {
  background: rgb(10,10,10);
  background: linear-gradient(38deg, rgba(10,10,10,1) 0%, rgba(16,16,17,1) 48%); 
  min-width: 20vw;
  min-height: 100vh;
  position: relative;
}

.close {
  position: absolute;
  right: 20px;
  top: 20px;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease;

  i {
    font-size: 20px;
    transition: all 0.2s ease;
    color: rgb(107, 107, 107);
  }
}

.close:hover {
  background-color: rgb(107, 107, 107);

  i {
    color: black;
  }
}

.sidebar {
  width: 100%;
  padding: 25px;

  &__user {
    margin-bottom: 45px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  &__user-profile {}

  &__library {
    padding-left: 25px;
  }

  &__library-list {}

  &__friends {
    padding-left: 25px;
  }

  &__lyric {
    padding-left: 25px;
  }

  &__info {
    cursor: default;
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 20px;
    font-size: 13px;
    color: rgb(107, 107, 107);
  }
}

.user {
  cursor: default;
  display: flex;
  align-items: center;
  margin-top: 20px;

  &__image {
    width: 60px;
    height: 60px;
    border: 2px solid white;
    border-radius: 50%;
    margin-right: 20px;
    display: flex;
    justify-content: center;

  }

  &__image img {
    border-radius: 50%;
    height: 100%;
    width: 100%;
    object-fit: cover;
    overflow: hidden;
  }

  &__info {}

  &__info-name {
    font-size: 22px;
    font-weight: 600;
  }

  &__info-product {
    margin-top: 4px;
    text-align: center;
    letter-spacing: 3px;
    color: rgb(4, 203, 4);
    font-weight: 600;
  }
}

.cathegory {

  li {
    list-style: none;
  }

  &__item {
    display: flex;
    align-items: center;
    padding: 10px 0;
    margin: 5px 0;
    cursor: pointer;
    text-decoration: none;
  }

  &__item:hover {
    i {
      transition: all 0.2s ease;
      color: white;
    }

    div {
      transition: all 0.2s ease;
      color: white;
    }
  }

  &__item:first-child {
    padding-top: 0px;
  }

  &__item-icon {
    margin-right: 25px;

    i {
      color: rgb(107, 107, 107);
    }
  }

  &__item-name {
    color: rgb(107, 107, 107);
    font-size: 14px;
  }
}

.heading {
  font-size: 15px;
  font-weight: 600;
  color: white;
  margin-top: 40px;
  cursor: default;
  margin-bottom: 15px;
}

.friends {
  font-size: 13px;
  color: rgb(107, 107, 107);

  &__nothing {
    padding-top: 10px;
    text-align: center;
  }

  span {
    display: block;
  }

  &__nothing-find {
    cursor: pointer;
    margin-top: 15px;
    color: white;
    background-color: rgb(46, 46, 46);
    border: 1px solid rgb(58, 58, 58);
    border-radius: 22px;
    padding: 15px 30px;
    transition: all 0.2s ease;
  }

  &__nothing-find:hover {
    border: 1px solid rgb(103, 103, 103);
    background-color: rgb(79, 78, 78);
  }
}

</style>