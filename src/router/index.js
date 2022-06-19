import { createRouter, createWebHashHistory } from 'vue-router';
import Layout from '@/layout/index.vue';
import Home from '@/views/home/Home.vue';
import Test from '@/views/test/Test.vue';
import CommonApisPage from '@/views/common-apis-page/CommonApisPage.vue';
import ReactivityApisPage from '@/views/reactivity-apis-page/ReactivityApisPage.vue';
import CompositionApisPage from '@/views/composition-apis-page/CompositionApisPage.vue';
import VuerouterPage from '@/views/vuerouter/VuerouterPage.vue';
import VuexPage from '@/views/vuex-page/VuexPage.vue';
import CourseInfo from '@/views/vuerouter/CourseInfo.vue';

import NotFound from '@/components/NotFound.vue';
const Login = () => import('@/views/login/Login.vue');
const LoginSuccess = () => import('@/views/login/LoginSuccess.vue');
const CompView = () => import('@/views/comp-view/index.vue');

const routes = [
  {
    path: '/',
    component: Layout,
    children: [{ path: '', component: Home }],
  },
  {
    path: '/test',
    component: Layout,
    children: [{ path: '', component: Test }],
  },
  {
    path: '/reactivity-apis',
    component: Layout,
    children: [
      { path: '', component: ReactivityApisPage, name: 'ReactivityApisPage' },
    ],
  },
  {
    path: '/composition-apis',
    component: Layout,
    children: [{ path: '', component: CompositionApisPage }],
  },
  {
    path: '/common-apis',
    component: Layout,
    children: [{ path: '', component: CommonApisPage }],
  },
  {
    path: '/vuerouter',
    component: Layout,
    children: [
      { path: '', component: VuerouterPage, meta: { transition: 'slide' } },
      {
        path: '/courseinfo/:title',
        component: CourseInfo,
        name: 'CourseInfo',
      },
    ],
  },
  {
    path: '/vuexpage',
    component: Layout,
    children: [{ path: '', component: VuexPage }],
  },

  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/loginsuccess',
    name: 'LoginSuccess',
    component: LoginSuccess,
    meta: {
      auth: true,
    },
    beforeEnter: (to, from) => {
      console.log('----登录成功页面的路由独享的守卫');
    },
  },
  {
    path: '/compview',
    component: Layout,
    children: [{ path: '', component: CompView }],
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
