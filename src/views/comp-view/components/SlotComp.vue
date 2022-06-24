<script setup>
const s1 = {
  color: "red"
}
const s2 = {
  color: "green"
}

const items = ["a", "b", "c"];
</script>

<template>
  <div :style="s1">
    <!-- <slot name="head"></slot> -->
    <!-- <slot name="head" v-for="item in items" :item = item></slot> -->
    <slot name="head" :item="items"></slot>
  </div>
  <div :style="s2">
    <slot name="foot"></slot>
  </div>
</template>