<template>
  <h1 style="color: #00f">{{ $route.params.title }}语言详情页</h1>
  <p>query传参{{ $route.query.data || '' }}</p>
</template>

<script setup>
console.log('-----created');
</script>

<style lang="scss"></style>
