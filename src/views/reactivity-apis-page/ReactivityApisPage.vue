<template>
  <div>
    <h1>响应性API</h1>
    <ul style="text-align: left">
      <li>
        <h4>toRefs</h4>
        <p>{{ stateAsRefs.foo }}</p>
        <p>{{ stateAsRefs.bar }}</p>
        <p>结构title {{ title }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { reactive, toRefs } from 'vue';
const state = reactive({
  foo: 1,
  bar: 2,
});
console.log(state);
const stateAsRefs = toRefs(state);
console.log(stateAsRefs);

// 关于结构
const book = reactive({
  author: 'Vue Team',
  year: '2020',
  title: 'Vue 3 Guide',
  description: 'You are reading this book right now ;)',
  price: 'free',
});

// let { author, title } = book  // 这样解构响应式会丢失

let { author, title } = toRefs(book);

title.value = 'Vue 3 Detailed Guide'; // 我们需要使用 .value 作为标题，现在是 ref
console.log(book.title); // 'Vue 3 Detailed Guide'
</script>

<style lang="scss" scoped></style>
