import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    meta: {
      title: 'Список дел'
    },
    component: () => import('@/pages/HomePage')
  },
  {
    path: '/info',
    name: 'Info',
    meta: {
      title: 'Информация'
    },
    component: () => import('@/pages/InfoPage')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;