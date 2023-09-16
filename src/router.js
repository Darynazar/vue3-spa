import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./pages/HomeComponent.vue";
import IndexUserComponent from "./pages/users/IndexComponent.vue";
import ShowUserComponent from "./pages/users/ShowComponent.vue";

import IndexPostComponent from "./pages/posts/IndexComponent.vue";
import ShowPostComponent from "./pages/posts/ShowComponent.vue";
import CreatePostComponent from "./pages/posts/CreateComponent.vue";
import EditPostComponent from "./pages/posts/EditComponent.vue";

import IndexBoardComponent from "./pages/boards/IndexComponent.vue";

import CreateBoardComponent from "./pages/boards/CreateComponent.vue";




const routes = [
  { path: "/", component: HomeComponent },
  { path: "/users", name: "users", component: IndexUserComponent },
  { path: "/users/:id", name: "userId", component: ShowUserComponent },

  { path: "/posts", name: "posts", component: IndexPostComponent },
  { path: "/posts/:id", name: "postId", component: ShowPostComponent },
  { path: "/posts/create", name: "createPost", component: CreatePostComponent },
  { path: "/posts/edit/:id", name: "editPost", component: EditPostComponent },

  { path: "/boards", name: "boards", component: IndexBoardComponent },
  { path: "/boards/:id", name: "boardId", component: IndexBoardComponent },
  { path: "/boards/create", name: "createBoard", component: CreateBoardComponent },
  // { path: "/posts/edit/:id", name: "editPost", component: EditPostComponent },

  // { path: "/posts", component: PostComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
