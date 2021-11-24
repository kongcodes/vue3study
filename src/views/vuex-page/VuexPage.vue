<template>
  <div>
    <h1>vuex相关内容</h1>
    <ul>
      <li>
        <h4>创建了一个简单的Store</h4>
        <button @click="increment">{{ num }}</button>
      </li>
      <li>
        <h4>minstore</h4>
        <input type="text" v-model="str" />
        <button @click="minstore.state.str = str">change</button>
        <p>{{ minstore.state.str }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, ref, inject } from 'vue';
import { mapState, useStore } from 'vuex';
// import minstore from '../../minstore/minstore.js';

const store = useStore();
console.log(store);

const num = computed(() => store.state.count.num);
const mapStateObj = computed(() => {
  mapState(['count']);
});
console.log(mapStateObj);

function increment() {
  store.commit('count/increment');
}

// minstore
const minstore = inject('minstore');
console.log(minstore);
console.log(minstore.state.str);
</script>

<style scoped lang="scss"></style>
