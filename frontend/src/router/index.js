import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Login from '@/views/Login.vue';
import Profile from '@/views/Profile.vue';
import ProgCalc from '@/views/ProgCalc.vue';
import Register from '@/views/Register.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/login', component: Login },
  { path: '/profile', component: Profile, meta: { requiresAuth: true } },
  { path: '/progcalc', component: ProgCalc },
  { path: '/register', component: Register },
  { path: '/:pathMatch(.*)*', redirect: '/' }, 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const user = localStorage.getItem('user'); 

  if (to.meta.requiresAuth && !user) {
    next('/login'); 
  } else {
    next();
  }
});

export default router;
