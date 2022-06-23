<template>
  <div class="box">
    <div>
          <p>我是Bar组件</p>

    <p>$attrs {{$attrs}}</p>
    <p v-bind="$attrs">将$attrs对象绑定到当前标签</p>

    <slot></slot>
    </div>


    <Child></Child>

  </div>
</template>

<script setup>
import { useAttrs, toRaw, useSlots } from 'vue';
import Child from './child/child.vue';

const attrs = useAttrs();
console.log(attrs.sex);
console.log(attrs);
console.log(toRaw(attrs));
const slot = useSlots();
console.log(slot.default());
</script>

<style lang="scss" scoped>
.box {
  min-width: 200px;
  min-height: 150px;
  margin-left: 15px;
  border: 5px dotted #ada;
  text-align: center;
  // line-height: 100px;
  display: flex;
}
</style>
