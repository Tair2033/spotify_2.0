<template>
  <div class="artist-wrapper">
    <div class="artist">
      <div class="artist__top">
        <div class="artist__preview">
          <div class="artist__img">
            <img
              :src="getSelectedArtist"
              alt=""
            >
          </div>

          <div class="artist__info">
            <div class="artist__info-name">
              {{ getSelectedArtist.name }}
            </div>
            <div class="artist__info-listeners">
              {{ getSelectedArtist?.followers?.total }} followers
            </div>
          </div>
        </div>
      </div>

      <div class="artist__content">
        <div class="artist__">
          1
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import store from '@/store';
import { defineComponent } from 'vue';

export default defineComponent({
  computed: {
    getSelectedArtist() {
      return store.getters.getSelectedArtist
    }
  },
  mounted() {
    store.dispatch('getArtist', this.$route.params.id)
  }
})
</script>

<style lang="scss" scoped>
.artist-wrapper {
  width: 100%;
  height: 100%;
}
</style>