import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./pages/HomeComponent.vue";
import IndexUserComponent from "./pages/users/IndexComponent.vue";
import ShowUserComponent from "./pages/users/ShowComponent.vue";

import IndexPostComponent from "./pages/posts/IndexComponent.vue";
import ShowPostComponent from "./pages/posts/ShowComponent.vue";

const routes = [
  { path: "/", component: HomeComponent },
  { path: "/users", name: "users", component: IndexUserComponent },
  { path: "/users/:id", name: "userId", component: ShowUserComponent },

  { path: "/posts", name: "posts", component: IndexPostComponent },
  { path: "/posts/:id", name: "postId", component: ShowPostComponent },

  // { path: "/posts", component: PostComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
