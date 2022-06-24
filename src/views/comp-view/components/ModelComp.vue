<script setup>
import { ref, watch } from "vue";
const text = ref("请输入..");

const props = defineProps({
  modelValue: String,
  show: Boolean
})
console.log(props.show);
const emits = defineEmits([
  "update:modelValue",
  "update:show",
])

// emits("update:modelValue","被修改");
// text改变时执行
watch(text,()=>{
  emits("update:modelValue",text.value);
})
</script>

<template>
<div class="box">
<p>model组件</p>

<input v-model="text" />
{{text}}

<p>自定义组件的v-model {{modelValue}}</p>
</div>

</template>

<style lang="scss">
input{
  width: 100px;
  height: 30px;
  line-height: 30px;
}
</style>