import { createStore } from "vuex";

interface User {
  id: number;
  name: string;
  type: string;
  email: string;
  country: string;
  profile_link: string;
  product: string;
  image?: string;
}

export default createStore({
  state: {
    access_token: "",
    user: {} as User,
    userPlaylists: {},
    controlPanel: {
      isPlaying: false,
    },
  },
  getters: {
    getUser(state: any) {
      return state.user;
    },
    getToken(state) {
      return state.access_token;
    },
    getPlayingStatus(state) {
      return state.controlPanel.isPlaying;
    },
  },
  mutations: {
    setToken(state, payload) {
      state.access_token = payload;
    },
    setUser(state, payload: User) {
      state.user = { ...payload };
    },
    changePlayingStatus(state) {
      state.controlPanel.isPlaying = !state.controlPanel.isPlaying;
    },
  },
  actions: {
    getCurrentUserPlaylists() {
      const URL = "https://api.spotify.com/v1/me/playlists";
      const newRequest = new Request(URL, {
        headers: new Headers({
          Authorization: "Bearer " + this.state.access_token,
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
          //
          console.log(data);
        });
    },
  },
  modules: {},
});
