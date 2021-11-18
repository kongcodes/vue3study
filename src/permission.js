import router from './router/index.js';

// 根据要去的path判断
// router.beforeEach((to, from, next) => {
//   if (to.path === '/loginsuccess') {
//     if (localStorage.getItem('isLogin')) {
//       next();
//     } else {
//       next({ path: '/login' });
//     }
//   } else {
//     next();
//   }
// });

// 根据 meta 路由元信息
router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    if (localStorage.getItem('isLogin')) {
      next();
    } else {
      next({ path: '/login' });
    }
  } else {
    next();
  }
});
