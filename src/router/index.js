import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
import Home from '@/views/home/Home.vue'
import Test from '@/views/test/Test.vue'
import CommonApisPage from '@/views/common-apis-page/CommonApisPage.vue'
import ReactivityApisPage from '@/views/reactivity-apis-page/ReactivityApisPage.vue'
import CompositionApisPage from '@/views/composition-apis-page/CompositionApisPage.vue'
import VuerouterPage from '@/views/vuerouter/VuerouterPage.vue'
import CourseInfo from '@/views/vuerouter/CourseInfo.vue'

import NotFound from '@/components/NotFound.vue'
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
    children: [{ path: '', component: ReactivityApisPage }],
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
      { path: '', component: VuerouterPage },
      { path: '/courseinfo/:title', component: CourseInfo, name: 'CourseInfo' },
    ],
  },

  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})
