<template>
  <div class="container">
    <h1>组件化开发</h1>
    <ul style="text-align: left">
      <li>
        <h4>使用组件</h4>
        <div style="display: flex;">
          <Foo a="a" b="b" :num="num" @add="add" />
          <Bar :age=18 sex="boy">
            <p>slot的内容</p>
          </Bar>
          <Ren></Ren>
          <SlotComp>
            <template v-slot:head="slotProps">
              <p>head插槽 slotProps: {{ slotProps.item }}</p>
              <p v-for="i in slotProps.item">{{ i }}</p>
            </template>
            <template v-slot:foot>
              <p>foot插槽</p>
              {{ msg }}
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
      <li>
        <h4>可复用性-自定义指令</h4>

        <svg class="circular" viewBox="25 25 50 50">
          <circle class="path" cx="50" cy="50" r="20" fill="none"></circle>
        </svg>

        <el-button @click="close">开启/关闭loading</el-button>
        <div v-loading="showLoading" class="loading-box"></div>
        <div v-loading:[tipsLoading]="showLoading" class="loading-box2">
          一些内容...
        </div>
      </li>
      <li>
        <h4>可复用性-插件</h4>
        <p>minstore：{{ minstore.state.str }}</p>
      </li>
      <li>
        <h4>可复用性-Teleport 传送</h4>
        <div style="position: relative;">
          <teleport to='body'>
            <div v-show="showModel" class="model" style="position:absolute">模态框</div>
          </teleport>
        </div>
        <el-button @click="openModel">开启/关闭 模态框</el-button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import Foo from './components/Foo.vue';
import { onMounted, onUpdated, provide, ref, inject } from 'vue';
import Bar from './components/Bar.vue';
import Ren from './components/ren.vue';
import SlotComp from './components/SlotComp.vue';
import ModelComp from './components/ModelComp.vue';

// svg 
import IconLoading from "../../components/LoadingIcon.vue";
import Button from "../../../node_modules/element3/src/components/Button/src/Button.vue";

const msg = ref('hello world!');
const showFlag = ref(false);
const showLoading = ref(true);
const tipsLoading = ref("请稍后");
const close = () => {
  showLoading.value = !showLoading.value;
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

// 插件
const minstore = inject('minstore');
console.log(minstore.state);

const showModel = ref(false);
const openModel = () => {
  showModel.value = !showModel.value;
}

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

<style lang="scss">
.container {
  padding-bottom: 100px;
}

.loading-box {
  width: 400px;
  height: 200px;
  background-color: red;
  outline: 1px solid black;
}

.circular {
  display: inline;
  height: 42px;
  width: 42px;
  animation: loading-rotate 2s linear infinite;
}

.path {
  animation: loading-dash 1.5s ease-in-out infinite;
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  stroke-width: 2;
  stroke: #409eff;
  stroke-linecap: round;
}

@keyframes loading-rotate {
  to {
    transform: rotate(360deg)
  }
}

@keyframes loading-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0
  }

  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40px
  }

  to {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120px
  }
}

.loading-box2 {
  width: 300px;
  height: 200px;
  outline: 1px solid black;
}

.model {
  width: 300px;
  height: 200px;
  background-color: #aaa;
  text-align: center;
  line-height: 50px;
  top: 300px;
  left: calc((100% - 300px) / 2);
}
</style>
