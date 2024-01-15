<template>
  <div class="sidebar-wrapper">
    <div class="sidebar">
      left
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "TheLeftSidebar"
})
</script>

<style lang="scss" scoped>
.sidebar-wrapper {
  min-width: 20%;
  background-color: blue;
}
</style>