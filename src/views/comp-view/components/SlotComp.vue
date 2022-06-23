<script setup>
const s1 = {
  color: "red"
}
const s2 = {
  color: "green"
}
</script>

<template>
  <div :style="s1">
    <slot name="head"></slot>
  </div>
  <div :style="s2">
    <slot name="foot"></slot>
  </div>
</template>