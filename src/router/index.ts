import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../modules/home/views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/code',
    name: 'code',
    component: () => import('../modules/code-info/views/CodeView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
