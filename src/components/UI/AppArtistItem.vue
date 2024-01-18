<template>
  <div class="artist-wrapper">
    <div class="artist">
      <RouterLink
        :to="'/artist/' + artist.id"
        class="artist__link"
      >
        <div class="artist__top">
          <div class="artist__top-img">
            <img
              :src="artist.images[0].url"
              alt=""
            >
          </div>
        </div>
        <div class="artist__bottom">
          <div class="artist__bottom-name">
            {{ artist.name }}
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "AppArtistItem",
  props: {
    artist: {
      type: Object,
      default: new Object()
    }
  }
}) 
</script>

<style lang="scss" scoped>
.artist-wrapper {
  padding: 10px;
  border-radius: 5px;
}

.artist {
  display: flex;
  flex-direction: column;

  &__link {}

  &__top {
    margin-bottom: 10px;
  }

  &__top-img {
    width: 110px;
    height: 110px;
    display: flex;
    justify-content: center;
    align-content: center;
  }

  &__top-img img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  &__bottom {
    
  }

  &__bottom-name {
    text-align: center;
    color: white;
    font-weight: bold;
  }
}


.artist-wrapper:hover {
  background-color: rgba(79, 78, 78, 0.15);
}
</style>