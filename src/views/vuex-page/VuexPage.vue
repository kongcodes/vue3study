<template>
  <div>
    <h1>vuex相关内容</h1>
    <ul>
      <li>
        <h4>创建了一个简单的Store</h4>
        <button @click="increment">
          通过commit mutation更改state的值 -- {{ num }}
        </button>
        <br />
        <button @click="incrementAction">
          通过dispatch action更改state的值 -- {{ num }}
        </button>
      </li>

      <li>
        <h4>购物车</h4>
        <p style="color: #ab409a">全部商品</p>
        <ul class="cartul">
          <li v-for="cartList in cartList">
            {{ cartList.name }} - {{ cartList.price }}元
          </li>
        </ul>
        <p style="color: #ab409a">筛选低于所输入价格的商品</p>
        <input type="number" v-model="lowNum" />
        <button @click="filterCartList">筛选</button>
        <ul class="cartul">
          <li v-for="cartListLow in cartListLow">
            {{ cartListLow.name }} - {{ cartListLow.price }}元
          </li>
        </ul>
      </li>

      <li>
        <h4>minstore</h4>
        <input type="text" v-model="minstr" />
        <button @click="minstore.state.str = minstr">change</button>
        <p>{{ minstore.state.str }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, ref, inject } from 'vue';
import { useStore } from 'vuex';
// import minstore from '../../minstore/minstore.js';

const store = useStore();
console.log(store);

const num = computed(() => store.state.count.num);

function increment() {
  store.commit('count/increment');
}
function incrementAction() {
  // store.dispatch('count/increment');
  // console.log('-----执行完action');
  store.dispatch('count/increment').then(() => {
    console.log('-----执行完action');
    // 这里写一些逻辑
  });
}

// cart
const cartList = computed(() => store.getters['cart/getList']); // $store.getters['cart/getList']
const cartListLow = ref('');
const lowNum = ref(1000);
function filterCartList() {
  cartListLow.value = store.getters['cart/getListLow'](lowNum.value);
}
// minstore
const minstore = inject('minstore');
const minstr = ref('');
// console.log(minstore);
// console.log(minstore.state.str);
</script>

<style scoped lang="scss">
.cartul {
  width: 120px;
  margin: 0 auto;
}
</style>
