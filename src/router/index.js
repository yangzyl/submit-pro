import Vue from 'vue';
import VueRouter from 'vue-router';

import { user } from '@/pages';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/submit'
  },
  {
    path: '/submit',
    component: user,
    meta: { title: '客户信息' }
  },
];

const router = new VueRouter({
  mode: 'hash',
  routes
});

// router.beforeEach((to,from,next) =>{
//   if(to.path === "/user") {
//     history.replaceState(null, null, '/user')
//   }
//   window.addEventListener('popstate', function () { 
//     if(to.path === '/user') {
//       next("/products");
//     }
//     if(to.path === '/products' && from.path === '/') {
//       next("/products");
//     }
//   });
//   next()
// });

export default router;
