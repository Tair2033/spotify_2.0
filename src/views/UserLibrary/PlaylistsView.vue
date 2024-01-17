<template>
  <div class="playlists-wrapper">
    <div class="playlists">
      <div
        v-if="!checkLoaderStatus()"
        class="playlists__loader"
      >
        <AppLoader />
      </div>

      <div class="playlists__main">
        <div class="playlists__heading">
          Your Playlists
        </div>
        <ul class="playlists__list">
          <li
            v-for="(item, index) in getPlaylists()"
            :key="index"
            class="playlists__list-item"
          >
            <AppPlaylistItem :playlist="item" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import AppLoader from '@/components/UI/AppLoader.vue';
import AppPlaylistItem from '@/components/UI/AppPlaylistItem.vue';
import store from '@/store';
import { defineComponent } from 'vue';

export default defineComponent({
  name: "PlaylistsView",
  components: { AppLoader, AppPlaylistItem },
  mounted() {
    store.dispatch('getCurrentUserPlaylists');
  },
  methods: {
    getPlaylists() {
      return store.getters.getUserPlaylists;
    },
    checkLoaderStatus() {
      return store.getters.getLoaderStatus
    }
  }
})
</script>

<style lang="scss" scoped>
.playlists-wrapper {
  color: white;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.playlists {
  padding: 15px 40px;
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}

.playlists__loader {
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


.playlists {
  &__main {
    z-index: 1;
    height: 100%;
    width: 100%;
  }

  &__heading {
    font-size: 22px;
    font-weight: bolder;
    color: white;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  &__list {}

  &__list-item {
    display: flex;
    justify-content: center;
  }
}


</style>