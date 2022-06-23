<template>
  <div class="cbox">
    <p>child.vue组件</p>
    <span>user: {{user}}</span>
    <br>
    <span>pass: {{pass}}</span>
  </div>
</template>

<script setup>
import { inject } from 'vue';

const user = inject("user");
const pass = inject("pass");
</script>

<style lang="scss" scoped>
.cbox {
  width: 100px;
  min-height: 50px;
  margin-left: 15px;
  border: 1px solid rgb(227, 216, 60);
  text-align: center;
}
</style>
