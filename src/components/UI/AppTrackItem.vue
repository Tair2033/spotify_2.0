<template>
  <div class="track-wrapper">
    <div class="track">
      <div class="track__like">
        <button
          type="button"
          class="track__like-button btn"
        >
          <i class="fa-solid fa-heart" />
        </button>
      </div>
      <div class="track__preview">
        <div class="track__preview-img">
          <img
            :src="track?.album.images[1].url"
            alt=""
          >
        </div>
      </div>
      <div class="track__info">
        <div class="track__info-title">
          {{ track?.name.substring(0, 15) }}
        </div>
        <div class="track__info-artist">
          {{ track?.artists[0].name }}
        </div>
      </div>
      <div class="track__album">
        <span>
          {{ track?.album?.name.substring(0, 15) }}
        </span>
      </div>
      <div class="track__timing">
        {{ getTime(track?.duration_ms) }}
      </div>
      <div class="track__play">
        <button
          type="button"
          class="track__play-button btn"
          :class="{'play': isPlaying, 'pause': !isPlaying}"
          @click="toggleTrack()"
        >
          <i
            v-if="!isPlaying"
            class="fa-solid fa-play"
          />
          <i
            v-if="isPlaying"
            class="fa-solid fa-pause"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import store from '@/store';
import { defineComponent } from 'vue';

export default defineComponent({
  name: "AppTrackItem",
  props: {
    track: {
      type: Object,
      default: new Object()
    }
  },
  data() {
    return {
      isPlaying: false
    }
  },
  methods: {
    getTime(ms: number) {
      let sec: any = Math.round(ms / 1000);
      const mins = Math.floor(sec / 60);
      sec %= 60;
      if (sec < 10) sec = '0' + sec;
      return mins + ':' + sec;
    },
    toggleTrack() {
      this.isPlaying = !this.isPlaying

      store.commit('setPlayback', this.track)

      store.commit('changePlayingStatus', "on")
    },
  }
})
</script>

<style lang="scss" scoped>
.track-wrapper {
  padding: 5px;
  border-radius: 5px;
}

.btn {
  background: none;
  border: none;
}

.play {
  border: 2px solid rgb(4, 203, 4);

  i {
    color: rgb(4, 203, 4);
  }
}

.pause {
  border: 2px solid rgba(85, 85, 85, 0.146);
  color: rgb(85, 85, 85);

}

.track {
  display: flex;
  align-items: center;

  &__like {
    padding-left: 15px;
    padding-right: 25px;
  }

  &__like-button {
    cursor: pointer;

    i {
      transition: all 0.2s ease;
      color: rgb(85, 85, 85);
    }
  }

  &__like-button:hover {
    i {
      color: rgb(4, 203, 4);
    }
  }

  &__preview {
    margin-right: 14px;
  }

  &__preview-img {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-content: center;
  }

  &__preview-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  &__info {
    margin-left: 50px;
    flex-grow: 1;
  }

  &__info-title {
    margin-bottom: 5px;
  }

  &__info-artist {
    font-size: 13px;
    color: rgb(85, 85, 85);
  }

  &__album {
    width: 150px;
    text-align: start;
    font-size: 14px;
    font-weight: bold;
    color: rgb(85, 85, 85);
  }

  &__timing {
    color: rgb(99, 99, 99);
    font-weight: bold;
    padding-left: 100px;
    font-size: 14px;
    padding-right: 100px;
  }

  &__play {
    margin-right: 15px;
  }

  &__play-button {
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    transition: all 0.2s ease;

    i {
      transition: all 0.2s ease;
    }
  }

  &__play-button:hover {
    background-color: rgba(85, 85, 85, 0.146);

    i {
      color: rgb(4, 203, 4);
    }
  }
}

.track-wrapper:hover {
  background-color: rgba(79, 78, 78, 0.15);
}
</style>