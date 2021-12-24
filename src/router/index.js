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
    path: '/signin',
    name: 'signIn',
    component: () => import(/* webpackChunkName: "signin" */ '../views/SignIn.vue')
  },
  {
    path: '/signup',
    name: 'signUp',
    component: () => import(/* webpackChunkName: "signup" */ '../views/SignUp.vue')
  },
  {
    path: '/profile',
    name: 'userProfile',
    component: () => import(/* webpackChunkName: "userProfile" */ '../views/UserProfile.vue')
  },
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
