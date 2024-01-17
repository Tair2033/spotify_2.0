<template>
  <div class="control-wrapper">
    <div class="control">
      <div
        class="control__panel panel"
        :class="{ 'play': getCurrentTrack?.is_playing, 'pause': !getCurrentTrack?.is_playing }"
      >
        <div class="panel__like">
          <div class="panel__like-button">
            <button
              type="submit"
              class="btn"
            >
              <i class="fa-solid fa-heart" />
            </button>
          </div>
        </div>
        <div class="panel__sound">
          <div class="panel__sound-preview">
            <img :src="getCurrentTrack?.item?.album.images[1].url">
          </div>
          <div class="panel__sound-track track">
            <div class="track__name">
              {{ getCurrentTrack?.item?.name.substring(0, 27) }}
            </div>
            <div class="track__album">
              {{ getCurrentTrack?.item?.artists[0].name }}
            </div>
          </div>
        </div>
        <div class="panel__controls">
          <div class="panel__controls-backward">
            <button
              type="button"
              class="btn"
            >
              <i class="fa-solid fa-backward-step" />
            </button>
          </div>
          <div class="panel__controls-play">
            <button
              type="button"
              class="btn"
              @click="toggleTrack()"
            >
              <i
                v-if="!getCurrentTrack.is_playing"
                class="fa-solid fa-play"
              />
              <i
                v-if="getCurrentTrack.is_playing"
                class="fa-solid fa-pause"
              />
            </button>
          </div>
          <div class="panel__controls-forward">
            <button
              type="button"
              class="btn"
            >
              <i class="fa-solid fa-forward-step" />
            </button>
          </div>
        </div>
        <div class="panel__volume">
          <div class="panel__volume-icons">
            <button
              type="button"
              class="btn"
            >
              <i class="fa-solid fa-volume-high" />
            </button>
            <!-- <i class="fa-solid fa-volume-low" />
            <i class="fa-solid fa-volume-off" />
            <i class="fa-solid fa-volume-xmark" /> -->
          </div>
          <div class="panel__volume-trigger">
            <input
              id=""
              type="range"
              name=""
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store"

export default defineComponent({
  computed: {
    getCurrentTrack() {
      console.log(store.getters.getActiveTrack);
      
      return store.getters.getActiveTrack;
    },
  },
  methods: {
    toggleTrack() {
      store.dispatch('playPauseTrack')
    },
  }
});
</script>

<style lang="scss" scoped>
.control-wrapper {
  min-height: 10vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  margin-top: 26px;
  width: 90%;
}

.play {
  border: 2px solid rgb(1, 77, 1);

  .panel__controls-play button {
    border: 2px solid rgb(160, 255, 160);
    i {
      color: white;
    }
  }

}

.pause {
  border: 2px solid black;
}

.control {
  margin: 0 20px;
  width: 100%;
  overflow: hidden;
  position: relative;

  &__panel {
    position: relative;
    transition: all 0.6s ease-in;
    width: 100%;
    border-radius: 20px;
    background-color: rgb(12, 12, 12);
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}

.panel {
  padding: 6px 20px;
  position: relative;
  height: 65px;
  width: 100%;

  &__like {
    position: absolute;
    left: 20px;
  }

  &__like-button {}

  &__like-button button i {
    transition: all 0.2s ease;
    font-size: 22px;
    color: rgb(171, 170, 170);
  }

  &__like-button button:hover {

    i {
      color: white;
    }
  }

  &__sound {
    position: absolute;
    left: 60px;
    display: flex;
    align-items: center;
    padding-right: 100px;
  }

  &__sound-preview {
    display: flex;
    align-items: center;
    height: 50px;
    width: 50px;
    margin-left: 25px;
    margin-right: 25px;
  }

  &__sound-preview img {
    border-radius: 6px;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  &__sound-track {
  }

  &__controls {
    z-index: 3;
    position: absolute;
    left: 44%;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
  }

  &__controls-backward {}

  &__controls-backward button i {
    transition: all 0.2s ease;
    color: rgb(171, 170, 170);
    font-size: 23px;
  }

  &__controls-backward button:hover {

    i {
      color: white;
    }
  }

  &__controls-play {
    margin-left: 25px;
    margin-right: 25px;
  }

  &__controls-play button {
    background-color: rgb(4, 203, 4);
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition: all 0.2s ease;
    border: 1px solid rgba(255, 255, 255, 0);
  }

  &__controls-play button:hover {
    background-color: rgb(11, 222, 11);
  }

  &__controls-play button:active {
    background-color: rgb(39, 249, 39);
  }

  &__controls-play button:hover i {
    color: white;
  }

  &__controls-play button i {
    transition: all 0.2s ease;
    font-size: 23px;
  }

  &__controls-forward {}

  &__controls-forward button i {
    transition: all 0.2s ease;
    color: rgb(171, 170, 170);
    font-size: 23px;
  }

  &__controls-forward button:hover {

    i {
      color: white;
    }
  }

  &__volume {
    position: absolute;
    right: 25px;
    display: flex;
    z-index: 1;
  }


  &__volume-icons {
    
  }

  &__volume-icons button i {
    transition: all 0.2s ease;
    color: rgb(171, 170, 170);
    font-size: 20px;
  }

  &__volume-icons button:hover {

    i {
      color: white;
    }
  }

  &__volume-trigger {
    margin-left: 15px;
  }
}

.btn {
  background: none;
  border: none;
  cursor: pointer;
}

.track {

  &__name {
    color: rgb(255, 255, 255);
    cursor: default;
    font-size: 16px;
    margin-bottom: 5px;
  }

  &__album {
    color: rgb(171, 170, 170);
    cursor: default;
    font-size: 11px;
  }
}
</style>
