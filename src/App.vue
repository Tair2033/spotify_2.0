<template>
  <main class="main">
    <TheLeftSidebar />

    <div class="app">
      <TheNavbar />

      <router-view />

      <TheControlPanel />
    </div>

    <TheRightSidebar />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store";
import TheLeftSidebar from "./components/TheLeftSidebar.vue";
import TheRightSidebar from "./components/TheRightSidebar.vue";
import TheControlPanel from "./components/TheControlPanel.vue";
import TheNavbar from "./components/TheNavbar.vue";

const client_id = "65406aaaa2db441b8d4559e0ffd30852";
const redirect_uri = "http://localhost:8080/";

const authLink = `https://accounts.spotify.com/authorize?client_id=${client_id}&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=${redirect_uri}`;

interface User {
  id: number,
  name: string,
  type: string,
  email: string,
  country: string,
  profile_link: string,
  product: string,
  image?: string
}

export default defineComponent({
  components: { TheLeftSidebar, TheRightSidebar, TheControlPanel, TheNavbar },
  data() {
    return {
      user: {} as User
    };
  },
  mounted() {
    const hashParams = {
      access_token: null
    };
    let e;
    const r = /([^&;=]+)=?([^&;]*)/g, q = window.location.hash.substring(1);

    while ((e = r.exec(q))) {
      // @ts-expect-error: Unreachable code error
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    if (!hashParams.access_token) {
      window.location.href = authLink;
    }
    else {
      this.getAuthedUser(hashParams.access_token);

      store.commit('setToken', hashParams.access_token)

      store.dispatch('getCurrentPlayback')
    }
  },
  methods: {
    getAuthedUser(access_token: string) {
      const URL = "https://api.spotify.com/v1/me";
      const newRequest = new Request(URL, {
        headers: new Headers({
          Authorization: "Bearer " + access_token,
        }),
      });
      fetch(newRequest)
        .then((response) => {
          if (response.statusText === "Unauthorized") {
            window.location.href = "./";
          }
          return response.json();
        })
        .then((data) => {
          this.user = {
            id: data?.id,
            name: data?.display_name.split(" ")[0],
            email: data?.email,
            country: data?.country,
            type: data?.type,
            image: data?.images[1]?.url,
            product: data?.product.toUpperCase(),
            profile_link: data?.external_urls?.spotify
          };

          store.commit('setUser', this.user)

        });
    },
  }
});
</script>

<style lang="scss">
@import url("./normalize.scss");
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500;700&display=swap");

body {
  background-color: black;
  font-family: "Comfortaa", sans-serif;
  color: white;
  overflow: hidden;
}

.main {
  display: flex;
  justify-content: space-between;
}

.app {
  overflow: hidden;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

.heading {
  font-size: 22px;
  font-weight: bolder;
  color: white;
  margin-bottom: 20px;
  margin-top: 20px;
}
</style>
