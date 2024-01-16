<template>
  <div class="favourites-wrapper">
    <div class="favourites">
      Favourites
    </div>
  </div>
</template>

<script lang="ts">
// import store from '@/store';
import { defineComponent } from 'vue';

export default defineComponent({
  name: "FavouritesView",
  mounted() {
    // store.dispatch('getCurrentUserPlaylists')
  }
})
</script>

<style lang="scss" scoped>

</style>