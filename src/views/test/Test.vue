<template>
  <div>
    <h1>test</h1>
    <el-button type="primary" @click="go">测试element3引入</el-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const color = ref('blue')
const router = useRouter()
const go = () => {
  // console.log(router)
  router.push({ path: '/' })
}
</script>

<style lang="scss" scoped>
h1 {
  color: v-bind(color);
}
</style>
