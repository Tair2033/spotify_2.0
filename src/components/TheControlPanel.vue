<template>
  <div class="control-wrapper">
    <div class="control">
      <div class="control__panel panel">
        <div class="panel__like">
          <div class="panel__like-button">
            <button type="submit" class="btn">
              <i class="fa-solid fa-heart" />
            </button>
          </div>
        </div>
        <div class="panel__sound">
          <div class="panel__sound-preview">
            <img src="../assets/noir.jpg">
          </div>
          <div class="panel__sound-track track">
            <div class="track__name">
              name
            </div>
            <div class="track__album">
              album
            </div>
          </div>
        </div>
        <div class="panel__controls">
          <div class="panel__controls-backward">
            <button type="button" class="btn">
              <i class="fa-solid fa-backward-step" />
            </button>
          </div>
          <div class="panel__controls-play">
            <button type="button" class="btn">
              <i class="fa-solid fa-play" />
            </button>
          </div>
          <div class="panel__controls-forward">
            <button type="button" class="btn">
              <i class="fa-solid fa-forward-step" />
            </button>
          </div>
          <div class="panel__controls-repeat">
            <button type="button" class="btn">
              <i class="fa-solid fa-repeat" />
            </button>
          </div>
        </div>
        <div class="panel__volume">
          <div class="panel__volume-icons">
            <button type="button" class="btn">
              <i class="fa-solid fa-volume-high" />
            </button>
            <!-- <i class="fa-solid fa-volume-low" />
            <i class="fa-solid fa-volume-off" />
            <i class="fa-solid fa-volume-xmark" /> -->
          </div>
          <div class="panel__volume-trigger">
            <input id="" type="range" name="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss" scoped>
.control-wrapper {
  width: 100%;
  min-height: 10vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
}

.control {
  margin: 0 20px;

  &__panel {
    border-radius: 20px;
    border: 2px solid rgb(1, 77, 1);
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}

.panel {
  padding: 6px 20px;

  &__like {}

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
    display: flex;
    align-items: center;
    margin-right: 200px;
  }

  &__sound-preview {
    display: flex;
    align-items: center;
    height: 50px;
    min-width: 50px;
    margin-left: 25px;
    margin-right: 25px;
  }

  &__sound-preview img {
    border-radius: 6px;
    width: 100%;
    height: 100%;
  }

  &__sound-track {}

  &__controls {
    display: flex;
    align-items: center;
    margin-right: 100px;
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
    border-radius: 50%;
    transition: all 0.2s ease;

  }

  &__controls-play button:hover {
    background-color: rgb(11, 222, 11);
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

  &__controls-repeat {
    margin-left: 50px;
  }

  &__controls-repeat button i {
    transition: all 0.2s ease;
    color: rgb(171, 170, 170);
    font-size: 20px;
  }

  &__controls-repeat button:hover {

    i {
      color: white;
    }
  }

  &__volume {
    display: flex;

  }


  &__volume-icons {}

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

  }

  &__album {
    color: rgb(171, 170, 170);
    cursor: default;

  }
}
</style>
