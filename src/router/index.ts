
import { createRouter, createWebHistory } from 'vue-router';
import OrgChart from '../views/org-chart/OrgChart.vue';

const routes = [
  { path: '/', component: () => import('../views/HomeVue.vue') },
  { path: '/org-chart', component: OrgChart },
  { path: '/prime-vue', component: () => import('../views/org-chart/prime-vue/PrimeVue.vue') },
  { path: '/org-v', component: () => import('../views/org-chart/org-mit/OrgVue.vue') },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router;
