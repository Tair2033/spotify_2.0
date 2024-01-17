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
    activeTrack: [] as Array<object>,
    userPlaylists: [] as Array<object>,
    topArtists: [] as Array<object>,
    recentlyTracks: [] as Array<object>,
    controlPanel: {
      isPlaying: false,
    },
    rightSidebar: {
      isActive: true,
    },
    loaders: {
      homeLoader: false,
      appLoader: false,
    },
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getToken(state) {
      return state.access_token;
    },
    getUserPlaylists(state) {
      return state.userPlaylists;
    },
    getPlayingStatus(state) {
      return state.controlPanel.isPlaying;
    },
    getRightSidebarStatus(state) {
      return state.rightSidebar.isActive;
    },
    getLoaderStatus(state) {
      return state.loaders.appLoader;
    },
    getHomeLoaderStatus(state) {
      return state.loaders.homeLoader;
    },
    getUserTopArtists(state) {
      return state.topArtists;
    },
    getRecentlyTracks(state) {
      return state.recentlyTracks;
    },
    getActiveTrack(state) {
      return state.activeTrack;
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
    changeRightSidebarStatus(state) {
      state.rightSidebar.isActive = !state.rightSidebar.isActive;
    },
    changeHomeLoaderStatus(state, mode) {
      if (mode === "on") {
        state.loaders.homeLoader = false;
      }

      state.loaders.homeLoader = true;
    },
    changeAppLoaderStatus(state, mode) {
      if (mode === "on") {
        state.loaders.appLoader = false;
      }

      state.loaders.appLoader = true;
    },
    setPlaylists(state, data) {
      state.userPlaylists = [...data.items];
    },
    setTopArtists(state, data) {
      state.topArtists = [...data.items];
    },
    setRecentlyTracks(state, data) {
      console.log(data.items);

      state.recentlyTracks = [...data.items];
    },
    setPlayback(state, data) {
      state.activeTrack = data;
    },
  },
  actions: {
    async getCurrentUserPlaylists(context) {
      const URL = "https://api.spotify.com/v1/me/playlists";
      const newRequest = new Request(URL, {
        headers: new Headers({
          Authorization: "Bearer " + this.state.access_token,
        }),
      });

      await fetch(newRequest)
        .then((response) => {
          if (response.statusText === "Unauthorized") {
            window.location.href = "./";
          }
          return response.json();
        })
        .then((data) => {
          context.commit("setPlaylists", data);

          context.commit("changeAppLoaderStatus");
        });
    },
    async getTopArtists(context) {
      const URL = "https://api.spotify.com/v1/me/top/artists";
      const newRequest = new Request(URL, {
        headers: new Headers({
          Authorization: "Bearer " + this.state.access_token,
        }),
      });

      await fetch(newRequest)
        .then((response) => {
          if (response.statusText === "Unauthorized") {
            window.location.href = "./";
          }
          return response.json();
        })
        .then((data) => {
          context.commit("setTopArtists", data);
        });
    },
    async getRecentlyTracks(context) {
      const URL = "https://api.spotify.com/v1/me/player/recently-played";
      const newRequest = new Request(URL, {
        headers: new Headers({
          Authorization: "Bearer " + this.state.access_token,
        }),
      });

      await fetch(newRequest)
        .then((response) => {
          if (response.statusText === "Unauthorized") {
            window.location.href = "./";
          }
          return response.json();
        })
        .then((data) => {
          context.commit("setRecentlyTracks", data);

          context.commit("changeHomeLoaderStatus");
        });
    },
    async getCurrentPlayback(context) {
      const URL = "https://api.spotify.com/v1/me/player";
      const newRequest = new Request(URL, {
        headers: new Headers({
          Authorization: "Bearer " + this.state.access_token,
        }),
      });

      await fetch(newRequest)
        .then((response) => {
          if (response.statusText === "Unauthorized") {
            window.location.href = "./";
          }
          return response.json();
        })
        .then((data) => {
          context.commit("setPlayback", data);
        });
    },
  },
  modules: {},
});
