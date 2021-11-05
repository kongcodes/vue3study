<template>
  <div class="box">
    <p>我是Foo组件</p>
    <button @click="add">{{ num }}</button>
  </div>
</template>

<script setup>
const props = defineProps({
  num: Number,
})
// console.log(props)
const emits = defineEmits(['add'])
// console.log(emits)

function add() {
  emits('add')
}
</script>

<style lang="scss" scoped>
.box {
  width: 200px;
  height: 100px;
  border: 5px dotted #2f5;
  text-align: center;
  // line-height: 100px;
}
</style>
