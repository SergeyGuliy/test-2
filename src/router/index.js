import Vue from 'vue';
import VueRouter from 'vue-router';
import { Home, ActionPage, OperatorsTab } from '../assets/js/routerNames';

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const routes = [
  {
    path: '/',
    redirect: '/main',
  },
  {
    path: '/main',
    name: Home,
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: ':slug',
        name: OperatorsTab,
        component: () => import('../views/OperatorsPage.vue'),
      },
    ],
  },
  {
    path: '/action-page/:slug',
    name: ActionPage,
    component: () => import('../views/ActionPage.vue'),
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
