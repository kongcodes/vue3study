import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
import Home from '@/views/home/Home.vue'
import Test from '@/views/test/Test.vue'
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
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
