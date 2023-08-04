// router.js
import { createRouter, createWebHistory } from 'vue-router';
import LoginComponent from './components/Login.vue';
import MapComponent from './components/Map.vue';

const routes = [
  { path: '/', component: LoginComponent },
  { path: '/map', component: MapComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
