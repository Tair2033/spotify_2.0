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
    activeTrack: null,
    userPlaylists: [] as Array<object>,
    topArtists: [] as Array<object>,
    selectedArtist: {} as object,
    selectedArtistTracks: {} as Array<object>,
    categories: [] as Array<object>,
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
      exploreLoader: false,
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
    getExploreLoaderStatus(state) {
      return state.loaders.exploreLoader;
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
    getSelectedArtist(state) {
      return state.selectedArtist;
    },
    getCategories(state) {
      return state.categories;
    },
  },
  mutations: {
    setToken(state, payload) {
      state.access_token = payload;
    },
    setUser(state, payload: User) {
      state.user = { ...payload };
    },
    changePlayingStatus(state, mode) {
      if (mode == "on") {
        state.controlPanel.isPlaying = true;
        return;
      }

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
    changeExploreLoaderStatus(state, mode) {
      if (mode === "on") {
        state.loaders.exploreLoader = false;
      }

      state.loaders.exploreLoader = true;
    },
    changeAppLoaderStatus(state, mode) {
      if (mode === "on") {
        state.loaders.appLoader = false;
      }

      state.loaders.appLoader = true;
    },
    setPlaylists(state, data) {
      state.userPlaylists = [...data?.items];
    },
    setTopArtists(state, data) {
      state.topArtists = [...data?.items];
    },
    setSelectedArtist(state, data) {
      state.selectedArtist = data;
    },
    setRecentlyTracks(state, data) {
      state.recentlyTracks = [...data?.items];
    },
    setPlayback(state, data) {
      state.activeTrack = data;
    },
    setCategories(state, data) {
      state.categories = data;
    },
  },
  actions: {
    async getAllCategories(context) {
      const URL = "https://api.spotify.com/v1/browse/categories";
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
          context.commit("setCategories", data);

          context.commit("changeExploreLoaderStatus");
        });
    },
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
    async getArtist(context, id) {
      const URL = `https://api.spotify.com/v1/artists/${id}`;
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
          context.commit("setSelectedArtist", data);

          console.log(data);

          // context.commit("changeAppLoaderStatus");
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

          if (response.status == 200) {
            return response.json();
          }
        })
        .then((data) => {
          if (!data) {
            context.commit("setPlayback", null);
          } else {
            context.commit("setPlayback", data.item);
          }
        });
    },
  },
  modules: {},
});
