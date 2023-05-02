<template>
	<div class="card" ref="dragbox">
		<div
			class="block-content"
			v-for="(item, i) in list"
			:key="i"
			:id="i"
			draggable="true"
			@dragenter="dragenter($event, list, i)"
			@dragover="dragover($event, i)"
			@dragend="dragend($event, list, i)"
			@dragstart="dragstart($event, i)"
		>
			{{ item.name }}
		</div>
	</div>
	<div v-for="(item, index) in list" :key="index">{{ item }}</div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const list = ref([
	{ name: 'a', id: 1 },
	{ name: 'b', id: 2 },
	{ name: 'c', id: 3 },
	{ name: 'd', id: 4 },
	{ name: 'e', id: 5 },
])

const dragIndex = ref(0)
let moveIndex = 0
let dragDom // 拖拽的dom
const dragData = {
	top: 0,
}
let rectList = []

const dragbox = ref()

onMounted(() => {
	console.log(dragbox.value)
	getRectList()
	console.log(rectList[1].top)
})

function getRectList() {
	rectList.length = 0
	for (const item of dragbox.value.children) {
		rectList.push(item.getBoundingClientRect())
	}
}
function dragstart(e, index) {
	// e.preventDefault();
	e.stopPropagation()
	e.target.classList.add('moving')
	e.dataTransfer.effectAllowed = 'move'
	dragIndex.value = index
	moveIndex = index
	console.log('--start', e)
	dragDom = e.target
	dragData.top = dragDom.getBoundingClientRect().top
}
function dragenter(e, item, index) {
	e.preventDefault()
	e.stopPropagation()
	const target = e.target
	if (target !== dragDom) {

		movedDom = target

		console.log(e)
		console.log(target.getBoundingClientRect())
		const { top: _top } = dragDom.getBoundingClientRect()
		const { top, left } = target.getBoundingClientRect()

		const prevTop =
			rectList.length !== 0 ? rectList[rectList.length - 1].top : top
		console.log(prevTop)

		if (dragIndex.value < index) {
      console.log(index, rectList[index-1].top, rectList[index].top);
      console.log('if ------------');
			  
        dragbox.value.children[index].style.transform = `translate3d(0px,${rectList[index-1].top - rectList[index].top}px,0)`
        dragbox.value.children[moveIndex].style.transform = `translate3d(0px,${rectList[index].top - rectList[moveIndex].top}px,0)`
      
      // dragDom.style.transform = `translate3d(0px,${rectList[index].top - rectList[index-1].top}px,0)`
			// target.style.transform = `translate3d(0px,${rectList[index-1].top - rectList[index].top}px,0)`
			// dragDom.style.transform = `translate3d(0px,${top - dragData.top}px,0)`
			// target.style.transform = `translate3d(0px,${_top - top}px,0)`
		} else {
      console.log('else ------------', e);
			// dragDom.style.transform = `translate3d(0px,${dragData.top - top}px,0)`
			// target.style.transform = `translate3d(0px,${top - _top}px,0)`

			dragbox.value.children[index].style.transform = `translate3d(0px,${rectList[index+1].top - rectList[index].top}px,0)`
      dragbox.value.children[moveIndex].style.transform = `translate3d(0px,${rectList[index].top - rectList[moveIndex].top}px,0)`
      
    }
		dragIndex.value = index
    console.log('dragIndex.value--------', dragIndex.value);
	}
}
function dragover(e, index) {
	// e.stopPropagation()
	e.preventDefault()
}
function dragend(e, item, index) {
  console.log('end--------', index);
	e.preventDefault()
	e.stopPropagation()
	if (dragIndex.value !== index) {
		const source = item[index]
		item.splice(index, 1)
		item.splice(dragIndex.value, 0, source)
	}

	setTimeout(() => {


		dragIndex.value = 0
		dragDom = null

		// 全部元素都清除
    for (const item of dragbox.value.children) {
      item.style.transform = `none`
      item.style.transition = `none`
    }

    getRectList()

	}, 0)

	e.target.classList.remove('moving')
}
</script>
<style lang="scss" scoped>
.block-content {
	width: 200px;
	height: 40px;
	line-height: 40px;
	background-color: #f5f6f8;
	text-align: center;
	margin: 10px;
	// transition: transform 0.2s;
}
.moving {
	background-color: blue;
	color: #fff;
	// border: 2px dashed blue;
	opacity: 0.8;
	// position: relative;
	// left: 20px;
}
</style>
