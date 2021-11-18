<template>
  <div>
    <h1>常见API</h1>
    <ul>
      <li>
        <h4>帧听器watch</h4>
        <p>count {{ count }}</p>
        <button @click="countadd">count+1</button>
      </li>
      <li>
        <h4>class绑定</h4>
        <button @click="changeColor" :class="{ active: isActive }">
          点击切换我的文体颜色样式
        </button>
        <br />
        <br />
        <button @click="changeColor2" :class="classObj">
          点击切换颜色，根据计算属性
        </button>
      </li>
      <li>
        <h4>style绑定</h4>
        <p :style="{ color: colorRed }">style对象绑定</p>
        <p :style="styleObj">style对象绑定(直接绑定到一个对象，代码更清新)</p>
        <p :style="[styleObj, styleObjRed]">style数组绑定</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch, watchEffect } from 'vue';

// watch 侦听器
const count = ref(0);
watch(count, (count, prevCount) => {
  console.log('-------count', count);
  console.log('-------prevCount', prevCount);
});
const countadd = () => {
  count.value += 1;
};
watchEffect(() => {
  console.log('watchEffect-----------', count.value);
});

// class style 绑定
const isActive = ref(false); // 写法需要解套value
const changeColor = () => {
  isActive.value = !isActive.value;
};

const isActive2 = reactive({
  active: false,
});
const classObj = computed(() => {
  return {
    active: isActive2.active,
    'font-30': true,
  };
});
const changeColor2 = () => {
  isActive2.active = !isActive2.active;
};

const colorRed = ref('#f00');
const styleObj = reactive({
  fontSize: '30px',
});
const styleObjRed = reactive({
  color: '#f00',
});
</script>

<style scoped lang="scss">
ul {
  width: 800px;
  margin: 0 auto;
  text-align: left;
}
.active {
  color: #00f;
}
.font-30 {
  font-size: 30px;
}
</style>
