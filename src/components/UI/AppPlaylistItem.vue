<template>
  <RouterLink
    :to="playlist.name"
    class="playlist"
  >
    <div class="playlist__left">
      <div class="playlist__image">
        <img
          :src="playlist.images[1].url"
          alt=""
        >
      </div>
    </div>
    <div class="playlist__right">
      <div class="playlist__info">
        <div class="playlist__info-title">
          {{ playlist.name }}
        </div>
        <div class="playlist__info-subtitle">
          Playlist &middot; {{ playlist.owner.display_name }}
        </div>
      </div>
      <div class="playlist__play">
        <button
          class="btn"
        >
          <i class="fa-solid fa-play" />
          <!-- <i class="fa-solid fa-pause" />                   -->
        </button>
      </div>
    </div>
  </RouterLink>
</template>

<script lang="ts">
import store from '@/store';
import { defineComponent } from 'vue';

export default defineComponent({
  name: "AppPlaylistItem",
  props: {
    playlist: {
      type: Object,
      default: new Object()
    }
  }
})
</script>

<style lang="scss" scoped>
.playlist {
  cursor: default;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 3px;
  max-width: 700px;

  &__left {
    margin-left: 10px;
  }

  &__image {
    width: 55px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__image img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }

  &__right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 15px;
  }

  &__info {}

  &__info-title {
    font-weight: bold;
    color: white;
    margin-bottom: 5px;
  }

  &__info-subtitle {
    font-size: 13px;
    color: rgb(81, 81, 81);
  }

  &__play {
    margin-left: 90px;
    margin-right: 20px;
  }

  &__play button {
    padding: 5px;
    cursor: pointer;

    i {
      color: rgb(4, 203, 4);
    }
  }

  &__play button:hover {
    i {
      color: rgb(43, 255, 43);
    }
  }
}

.playlist:hover {
  background-color: rgba(79, 78, 78, 0.15);
}

.btn {
  background: none;
  border: none;
}
</style>