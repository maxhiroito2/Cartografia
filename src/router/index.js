import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/signIn',
    name: 'SignIn',
    component: () => import(/* webpackChunkName: "signIn" */ '../views/SignIn.vue'),
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: () => import(/* webpackChunkName: "signUp" */ '../views/SignUp.vue'),
  },
  {
    path: '/recover',
    name: 'Recover',
    component: () => import(/* webpackChunkName: "recover" */ '../views/Recover.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue'),
    // meta: {
    //   requiresAuth: true,
    // },
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: () => import(/* webpackChunkName: "schedule" */ '../views/Schedule.vue'),
    // meta: {
    //   requiresAuth: true,
    // },
  },
  {
    path: '/debates',
    name: 'Debates',
    component: () => import(/* webpackChunkName: "debates" */ '../views/Debates.vue'),
    // meta: {
    //   requiresAuth: true,
    // },
  },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import(/* webpackChunkName: "terms" */ '../views/Terms.vue'),
  },
  {
    path: '/faq',
    name: 'Faq',
    component: () => import(/* webpackChunkName: "faq" */ '../views/Faq.vue'),
  },
  {
    path: '/teste',
    name: 'Teste',
    component: () => import(/* webpackChunkName: "teste" */ '../views/CompTeste.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    const position = {};
    if (to.hash) {
      position.selector = to.hash;
      if (to.hash === '#frm') {
        position.offset = { y: 480 };
        console.log(position);
      }
      if (document.querySelector(to.hash)) {
        return position;
      }
    }
    return false;
  },
});

export default router;
