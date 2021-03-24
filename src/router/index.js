import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/main',
  },
  {
    path: '/main',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    children: [
      {
        path: ':slug',
        name: 'OperatorsTab',
        component: () => import(/* webpackChunkName: "about" */ '../views/OperatorsPage.vue'),
      },
    ],
  },
  {
    path: '/action-page/:slug',
    name: 'ActionPage',
    component: () => import(/* webpackChunkName: "home" */ '../views/ActionPage.vue'),
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
