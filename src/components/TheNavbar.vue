<template>
  <div class="navbar-wrapper">
    <div class="navbar">
      <div class="navbar__search">
        <div class="navbar__search-search">
          <i class="fa-solid fa-magnifying-glass" />
          <input
            placeholder="Search"
            type="search"
            name="search"
          >
        </div>
      </div>
      <div class="navbar__buttons">
        <button class="navbar__buttons-button btn">
          <i class="fa-regular fa-bell" />
          <!-- <i class="fa-solid fa-bell"></i> -->
        </button>

        <button class="navbar__buttons-button btn">
          <i class="fa-solid fa-gear" />
        </button>

        <button
          v-if="!getRightSidebarStatus()"
          class="open btn"
          @click="changeRightSidebarStatus()"
        >
          <i class="fa-solid fa-angles-left" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import store from '@/store';
import { defineComponent } from 'vue';

export default defineComponent({
  methods: {
    getRightSidebarStatus() {
      return store.getters.getRightSidebarStatus
    },
    changeRightSidebarStatus() {
      store.commit('changeRightSidebarStatus')
    }
  }
})
</script>

<style lang="scss" scoped>
.navbar-wrapper {
  width: 100%;
  min-height: 5vh;
}

.btn {
  color: rgb(171, 170, 170);
  background: none;
  border: none;
  padding: 0 10px;
}

.open {
  position: absolute;
  right: 0;
}

.open i {
  font-size: 30px;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
}

.open:hover {
  i {
    color: rgb(4, 203, 4);
  }
}

.navbar {
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  &__search {
    flex-grow: 1;
    margin-left: 30px;
  }

  &__search-search {
    border-radius: 30px;
    border: 2px solid rgb(81, 81, 81);
    padding: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    
    i {
      margin-left: 40px;
      color: white;
      font-size: 20px;
    }

    input {
      width: 100%;
      background: none;
      border: none;
      padding: 3px;
      outline: none;
      color: white;
      margin-left: 20px;
    }

    input::placeholder {
      font-size: 14px;
    }
  }

  &__search-search:focus-within {
    border: 2px solid rgb(169, 169, 169);
  }

  &__buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 30px;
  }

  &__buttons-button {
    font-size: 20px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  &__buttons-button:hover {
    color: white;
  }

  &__buttons-button:first-child {
    margin-left: 50px;
  }

  &__buttons-button:last-child {
    margin-left: 30px;
  }
}
</style>