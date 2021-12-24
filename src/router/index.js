import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import nprogress from 'nprogress';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((_to, _from, next) => {
  nprogress.start();
  next();
})

router.afterEach((_to, _from, next) => {
  nprogress.done();
})

export default router
