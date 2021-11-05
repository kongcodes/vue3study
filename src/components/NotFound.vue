<template>
  <div>
    <h1>404 Not Found!</h1>
    <p>找不到指定的页面{{ $route.params.pathMatch }}</p>
    <button @click="go">返回</button>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
function go() {
  router.go(-1)
}
</script>
