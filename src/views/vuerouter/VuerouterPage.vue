<template>
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
  </ul>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

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
// 路由守卫
</script>

<style scoped lang="scss">
ul {
  width: 800px;
  margin: 0 auto;
  text-align: left;
}
</style>
