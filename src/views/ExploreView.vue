<template>
  <div class="explore-wrapper">
    <div class="explore">
      <div
        v-if="!checkLoader"
        class="explore__loader"
      >
        <AppLoader />
      </div>

      <div class="explore__main">
        <div class="explore__categoires">
          <RouterLink
            to="/"
            class="categoires"
          >
            <div class="categoires__heading heading">
              All Categoires
            </div>

            <ul class="categoires__categories">
              <li
                v-for="(category, id) in getCategories?.categories?.items"
                :key="id"
                class="categoires__item"
              >
                <div class="categoires__item-title">
                  {{ category.name }}
                </div>
                <div class="categoires__item-img">
                  <img
                    :src="category.icons[0].url"
                    alt=""
                  >
                </div>
              </li>
            </ul>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import AppLoader from '@/components/UI/AppLoader.vue';
import store from '@/store';
import { defineComponent } from 'vue';

export default defineComponent({
  name: "ExploreView",
  components: { AppLoader },
  computed: {
    getCategories() {
      return store.getters.getCategories;
    },
    checkLoader() {
      return store.getters.getExploreLoaderStatus
    }
  },
  mounted() {
    store.dispatch('getAllCategories');
  }
})
</script>

<style lang="scss" scoped>
.explore-wrapper {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}

.explore {
  padding: 15px 40px;

  &__categoires {}

  &__loader {
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    z-index: 5;
  }

  &__main {
    z-index: 1;
  }
}

.categoires {
  &__categories {
    display: grid;
    grid-row: auto;
    grid-auto-columns: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-top: 30px;
  }


  &__item {
    color: white;
    padding: 10px;
    background-color: rgb(15, 14, 14);
    transition: all 0.2s ease;
    border-radius: 10px;
    border: 1px solid rgb(15, 14, 14);
    margin: 10px;
    position: relative;
    min-height: 200px;
    overflow: hidden;
    cursor: pointer;
  }

  &__item:hover {
    background-color: rgb(24, 23, 23);
    border: 1px solid rgb(59, 55, 55);
    box-shadow: 4px 4px 30px 4px rgba(255, 255, 255, 0.19);
  }

  &__item-title {
    margin-bottom: 40px;
    font-size: 22px;
    font-weight: bolder;
  }

  &__item-img {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 140px;
    height: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__item-img img {
    widows: 100%;
    height: 100%;
    object-fit: cover;
    border-bottom-right-radius: 10px;
  }
}
</style>