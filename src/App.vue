<template>
  <main>1</main>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "./store";

const client_id = "65406aaaa2db441b8d4559e0ffd30852";
const redirect_uri = "http://localhost:8080";

const authLink = `https://accounts.spotify.com/authorize?client_id=${client_id}&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=${redirect_uri}`;

export default defineComponent({
  data() {
    return {};
  },
  mounted() {
    const hashParams = {
      access_token: String,
    };

    const r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    let e;

    while ((e = r.exec(q))) {
      // @ts-expect-error: Unreachable code error
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }

    if (!hashParams.access_token) {
      window.location.href = authLink;
    } else {
      console.log(hashParams.access_token);

      //this.props.setToken(hashParams.access_token);
      store.dispatch("fetchUser", hashParams.access_token);
    }
  },
});
</script>

<style lang="scss">
@import url("normalize.css");
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500;700&display=swap");

body {
  background-color: black;
  font-family: "Comfortaa", sans-serif;
  color: white;
}
</style>
