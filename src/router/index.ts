import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PlaylistsView from "../views/UserLibrary/PlaylistsView.vue";
import FavouritesViewVue from "@/views/UserLibrary/FavouritesView.vue";
import AlbumsViewVue from "@/views/UserLibrary/AlbumsView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
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
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
