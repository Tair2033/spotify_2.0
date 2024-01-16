<template>
  <div class="playlists-wrapper">
    <div class="playlists">
      Playlists
    </div>
  </div>
</template>

<script lang="ts">
import store from '@/store';
import { defineComponent } from 'vue';

export default defineComponent({
  name: "PlaylistsView",
  mounted() {
    store.dispatch('getCurrentUserPlaylists')
  }
})
</script>

<style lang="scss" scoped>
.playlists-wrapper {
  color: white;
}
</style>