<template>
  <div>
    <h1>组件化开发</h1>
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
        <div style="display: flex;">
          <Foo a="a" b="b" :num="num" @add="add" />
          <Bar :age=18 sex="boy">
            <p>slot的内容</p>
          </Bar>
          <Ren></Ren>
          <SlotComp>
            <template v-slot:head = "slotProps">
              <p>head插槽 slotProps: {{slotProps.item}}</p>
              <p v-for="i in slotProps.item">{{i}}</p>
            </template>
            <template v-slot:foot>
              <p>foot插槽</p>
              {{msg}}
            </template>
          </SlotComp>
          <ModelComp v-model="msg" v-model:show="showFlag"></ModelComp>
          <!-- <ModelComp 
            :modelValue="msg"
             @update:modelValue="msg = $event"
          >
          </ModelComp> -->
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import Foo from './components/Foo.vue';
import { onMounted, onUpdated, provide, ref } from 'vue';
import Bar from './components/Bar.vue';
import Ren from './components/ren.vue';
import SlotComp from './components/SlotComp.vue';
import ModelComp from './components/ModelComp.vue';

const msg = ref('hello world!');
const count = ref(0);
const showFlag = ref(false);
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

// parent
const parData = ref("父组件数据");
defineExpose({
  parData,
})

// provide
provide("user", "kong");
provide("pass", 123456);

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
