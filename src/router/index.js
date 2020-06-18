/*
 * @Author: yangli
 * @LastEditor: yangli
 * @email: liy@ccccit.com.cn
 * @Date: 2020-04-27 14:34:46
 * @LastEditTime: 2020-06-18 10:16:37
 * @FilePath: /hch5/src/router/index.js
 */ 
import Vue from 'vue';
import VueRouter from 'vue-router';

import { User, Success } from '@/pages';

Vue.use(VueRouter);

const routes = [
  {
    path: '/user',
    component: User,
    meta: { title: '客户信息' }
  },
  {
    name: 'success',
    path: '/success',
    component: Success,
    meta: { title: '成功提交' }
  },
];

const router = new VueRouter({
  mode: 'history',
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
