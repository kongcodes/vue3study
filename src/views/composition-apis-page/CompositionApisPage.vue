<template>
  <div>
    <h1>组合式API</h1>
    <ul style="text-align: left">
      <li>
        <h4>{{ msg }}</h4>
      </li>
      <li>
        <h4>响应式</h4>
        <button @click="addcount">{{ count }}</button>
      </li>
      <li>
        <h4>使用组件</h4>
        <Foo :num="num" @add="add" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import Foo from './components/Foo.vue';
import { onMounted, onUpdated, ref } from 'vue';

const msg = 'hello world!';
const count = ref(0);
function addcount() {
  count.value++;
}

// 子组件
const num = ref(100);
const add = () => {
  num.value++;
};

// 生命周期钩子
onMounted(() => {
  console.log('Component is mounted! -------------');
});
onUpdated(() => {
  console.log('updated! ----------------num', num.value);
});

// 使用setup 不使用script setup语法糖
// export default {
//   // components: { Temp },
//   props: {
//     user: {
//       type: String,
//       required: true,
//     },
//   },
//   setup(props) {
//     console.log(props) // { user: '' }
//     // 生命周期钩子
//     onMounted(() => {
//       console.log('Component is mounted!')
//     })
//     return {} // 这里返回的任何内容都可以用于组件的其余部分
//   },
//   // 组件的“其余部分”
// }
</script>

<style lang="scss"></style>
