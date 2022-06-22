<template>
  <div class="box">
    <p>我是Bar组件</p>

    <p>$attrs {{$attrs}}</p>
    <p v-bind="$attrs">将$attrs对象绑定到当前标签</p>
  </div>
</template>

<script setup>
import { useAttrs, toRaw } from 'vue';

const attrs = useAttrs();
console.log(attrs.sex);
console.log(attrs);
console.log(toRaw(attrs));
</script>

<style lang="scss" scoped>
.box {
  width: 200px;
  min-height: 150px;
  margin-left: 15px;
  border: 5px dotted #ada;
  text-align: center;
  // line-height: 100px;
}
</style>
