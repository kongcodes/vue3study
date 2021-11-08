<template>
  <button @click="login">点击登录</button>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
function login() {
  localStorage.setItem('isLogin', true);
  router.replace({ name: 'LoginSuccess' });
}
</script>

<style lang="scss" scoped>
button {
  padding: 20px 40px;
  margin-top: 100px;
}
</style>
