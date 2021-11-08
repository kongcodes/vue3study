import router from './router/index.js';

// router.beforeEach((to, from, next) => {
//   console.log(localStorage.getItem('isLogin'));
//   if (localStorage.getItem('isLogin')) {
//     next();
//   } else {
//     next({ path: '/login' });
//   }
// });

router.beforeEach((to, from, next) => {
  console.log(localStorage.getItem('isLogin'));
  if (localStorage.getItem('isLogin')) {
    next();
  } else {
    if (to.path === '/loginsuccess') {
      next({ path: '/login' });
    } else {
      next();
    }
  }
});
