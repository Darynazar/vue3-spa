import {createRouter, createWebHistory} from 'vue-router'
import HomeComponent from './pages/HomeComponent.vue'
import IndexUserComponent from './pages/users/IndexComponent.vue'


const routes = [
    { path: "/", component: HomeComponent },
    { path: "/users", component: IndexUserComponent },
    // { path: "/posts", component: PostComponent },
  ];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;