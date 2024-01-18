import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ExploreView from "../views/ExploreView.vue";
import PlaylistsView from "../views/UserLibrary/PlaylistsView.vue";
import FavouritesViewVue from "@/views/UserLibrary/FavouritesView.vue";
import AlbumsViewVue from "@/views/UserLibrary/AlbumsView.vue";
import ArtistViewVue from "@/views/ArtistView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/explore",
    name: "explore",
    component: ExploreView,
  },
  {
    path: "/playlists",
    component: PlaylistsView,
  },
  {
    path: "/favourites",
    name: "favourites",
    component: FavouritesViewVue,
  },
  {
    path: "/albums",
    name: "albums",
    component: AlbumsViewVue,
  },
  {
    path: "/artist/:id",
    name: "artist",
    component: ArtistViewVue,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
