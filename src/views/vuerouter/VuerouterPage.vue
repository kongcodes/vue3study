<template>
  <div>
    <h1>vue-router使用</h1>
    <ul>
      <li>
        <h4>动态路由匹配</h4>
        <router-link :to="{ path: '/courseinfo/javascript' }"
          >跳转到javascript语言详情页</router-link
        >
        <br />
        <a href="javascript:void(0)" @click="toInfo"
          >通过事件click点击跳转到python语言详情页</a
        >
        <br />
        <router-link :to="{ path: '/aaa' }">跳转到404</router-link>
        <br />
        <a href="javascript:void(0)" @click="toParams"
          >导航时传参params 和 query</a
        >
      </li>
      <li>
        <h4>全局守卫</h4>
        <router-link :to="{ name: 'LoginSuccess' }">
          跳转登录成功页，如果未登录就跳转登录
        </router-link>
      </li>
      <li>
        <h4>动态路由</h4>
        <button @click="aRoute">动态添加测试的路由</button>
        <button @click="cRoute">动态删除已添加的路由</button>
        <!-- <router-link :to="{ name: 'TestRoute' }">
        跳转动态添加的测试路由页
      </router-link> -->
        <a href="javascript:void(0)" @click="toTestRoute">
          跳转动态添加的测试路由页(要先点击添加，否则跳转的是404)
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { onBeforeRouteLeave, onBeforeRouteUpdate, useRouter } from 'vue-router';

const router = useRouter();

function toInfo() {
  router.push({ path: '/courseinfo/python' });
}
function toParams() {
  router.push({
    name: 'CourseInfo',
    params: { title: 'params传参' },
    query: { data: 123 },
  });
}
// 组件内路由守卫
onBeforeRouteUpdate(() => {
  console.log('------组件内路由守卫onBeforeRouteUpdate');
});
onBeforeRouteLeave(() => {
  console.log('------组件内路由守卫onBeforeRouteLeave');
});

// 动态路由
const TestRoute = () => import('@/views/vuerouter/TestRoute.vue');

function aRoute() {
  router.addRoute({
    path: '/testroute',
    component: TestRoute,
    name: 'TestRoute',
  });
}
function cRoute() {
  router.removeRoute('TestRoute');
}
function toTestRoute() {
  router.push({ path: '/testroute' });
}
</script>

<script>
// export default {
//   beforeRouteLeave(to, from, next) {
//   console.log(123)
// }
// }
</script>

<style scoped lang="scss">
ul {
  width: 800px;
  margin: 0 auto;
  text-align: left;
}
</style>
