<template>
  <div class="sidebar-wrapper">
    <div class="sidebar">
      <div class="sidebar__logo">
        <div class="sidebar__logo-logo">
          <img
            src="../assets/Spotify_Logo.png"
            alt=""
          >
        </div>
      </div>
      <div class="sidebar__list">
        <ul class="menu">
          <li
            v-for="(item, index) in menuItems"
            :key="index"
          >
            <RouterLink
              :to="item?.link"
              class="menu__item"
            >
              <div class="menu__item-icon">
                <i :class="item?.icon" />
              </div>
              <div class="menu__item-name">
                {{ item?.name }}
              </div>
            </RouterLink>
          </li>
        </ul>
      </div>
      <div class="sidebar__exit">
        <div class="sidebar__exit-button">
          <button
            type="button"
            class="exit"
          >
            <div class="exit__icon">
              <i class="fa-solid fa-right-from-bracket" />
            </div>

            <div class="exit__text">
              Logout
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "TheLeftSidebar",
  data() {
    return {
      menuItems: [
        {
          name: "Home",
          icon: "fa-solid fa-house",
          link: "/"
        },
        {
          name: "Explore",
          icon: "fa-solid fa-compass",
          link: "/Explore"
        },
        {
          name: "Radio",
          icon: "fa-solid fa-radio",
          link: "/Radio"
        },
        {
          name: "Podcasts",
          icon: "fa-solid fa-podcast",
          link: "/Podcasts"
        },
        {
          name: "Genres",
          icon: "fa-solid fa-record-vinyl",
          link: "/Genres"
        },
        {
          name: "Events",
          icon: "fa-solid fa-trophy",
          link: "/Events"
        },
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
.sidebar-wrapper {
  min-width: 20%;
  position: relative;
}

.router-link-active {
  background-color: rgb(12, 12, 12);


  i {
    padding-left: 20px;
    color: white;
  }

  div {
    color: white;
  }
}

.sidebar {

  &__logo {
    width: 100%;
    padding-left: 35px;
  }

  &__logo-logo {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    width: 200px;
    object-fit: cover;
  }

  &__logo-logo img {
    width: 100%;
  }

  &__list {}

  &__exit {
    position: absolute;
    width: 100%;
    bottom: 20px;
    display: flex;
    justify-content: center;
  }
}

.menu {
  display: flex;
  flex-direction: column;
  padding-top: 30px;

  &__item {
    transition: all 0.15s ease;
    padding: 20px 0 20px 50px;
    margin: 5px 0;
    display: flex;
    align-items: center;
    list-style: none;
    margin-right: 29%;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;

    i {
      cursor: pointer;
      transition: all 0.2s ease;
    }
  }

  &__item:hover {
    background-color: rgb(12, 12, 12);

    i {
      padding-left: 20px;
      color: white;
    }

    div {
      cursor: pointer;
      color: white;
    }
  }

  &__item-icon {
    margin-right: 20px;
  }

  &__item-icon i {
    color: rgb(110, 110, 110);
    font-weight: 600;
  }

  &__item-name {
    color: rgb(110, 110, 110);
    font-weight: 600;
    cursor: default;
  }
}

.exit {
  transition: all 0.2s ease;
  display: flex;
  align-content: center;
  padding: 17px 25px;
  border-radius: 28px;
  background-color: rgb(12, 12, 12);
  border: 1px solid rgb(12, 12, 12);
  cursor: pointer;

  &__icon {
    margin-right: 15px;

    i {
      font-weight: 600;
      color: white;
    }
  }

  &__text {
    font-weight: 600;
    color: white;
  }
}

.exit:hover {
  background-color: rgb(35, 34, 34);
  border: 1px solid rgb(178, 177, 177);
}
</style>