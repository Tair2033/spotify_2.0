<template>
  <div class="home-wrapper">
    <div class="home">
      <div
        v-if="!checkLoaderStatus"
        class="home__loader"
      >
        <AppLoader />
      </div>

      <div class="home__main">
        <div class="home__main-artists section">
          <div class="section__heading heading">
            Top Artists
          </div>

          <div class="section__artists">
            <ul class="section__list">
              <li
                v-for="(artist, index) in getArtists"
                :key="index"
                class="section__list-item"
              >
                <AppArtistItem :artist="artist" />
              </li>
            </ul>
          </div>
        </div>

        <div class="home__main-recently section">
          <div class="section__heading heading">
            Recently played
          </div>

          <div class="section__tracks tracks">
            <ul class="tracks__list">
              <li
                v-for="(track, index) in getRecentlyTracks"
                :key="index"
                class="tracks__list-item"
              >
                <AppTrackItem
                  :track="track?.track"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import AppArtistItem from "@/components/UI/AppArtistItem.vue";
import AppLoader from "@/components/UI/AppLoader.vue";
import AppTrackItem from "@/components/UI/AppTrackItem.vue";
import store from "@/store";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: { AppLoader, AppArtistItem, AppTrackItem },
  computed: {
    checkLoaderStatus() {
      return store.getters.getHomeLoaderStatus
    },
    getArtists() {
      return store.getters.getUserTopArtists
    },
    getRecentlyTracks() {
      return store.getters.getRecentlyTracks
    }
  },
  mounted() {
    store.dispatch('getTopArtists')
    store.dispatch('getRecentlyTracks')
  }
});
</script>

<style lang="scss">
.home-wrapper {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}


.home {
  padding: 15px 40px;
}

.home__loader {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: black;
  z-index: 5;
}

.home {
  &__main {}

  &__main-artists {}
}

.section {
  &__heading {}

  &__artists {}

  &__list {
    scroll-behavior: smooth;
    overflow-x: auto;
    display: flex;
    padding-bottom: 15px;
  }

  &__list::-webkit-scrollbar {
    display: none;
  }

  &__list-item {}

  &__tracks {}
}


.tracks {
  background-color: rgba(79, 78, 78, 0.15);
  padding: 18px;
  border-radius: 12px;

  cursor: default;

  &__list {}

  &__list-item {}
}
</style>