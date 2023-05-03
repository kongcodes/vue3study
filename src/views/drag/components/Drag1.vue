<template>
	<div style="display: flex; margin-left: 50px; margin-top: 50px">
		<TransitionGroup name="list" tag="div" class="container">
			<div
				class="item"
				v-for="(item, i) in drag.list"
				:key="item.id"
				draggable="true"
				@dragstart="dragstart($event, i)"
				@dragenter="dragenter($event, i)"
				@dragend="dragend"
				@dragover="dragover"
			>
				{{ item.name }}
			</div>
		</TransitionGroup>
		<div style="margin-left: 20px; margin-top: 10px">
			<h4>拖拽排序后的 drag.list 数据</h4>
			<div
				v-for="(item, index) in drag.list"
				:key="index"
				style="padding: 5px 0"
			>
				{{ item }}
			</div>
		</div>
	</div>
</template>
<script setup>
import { reactive } from 'vue'
const drag = reactive({
	list: [
		{ name: 'a', id: 1 },
		{ name: 'b', id: 2 },
		{ name: 'c', id: 3 },
		{ name: 'd', id: 4 },
		{ name: 'e', id: 5 },
	],
})

let dragIndex = 0

function dragstart(e, index) {
	e.stopPropagation()
	// e.dataTransfer.effectAllowed = "all";
	e.dataTransfer.setData('text/plain', '111111111')
	dragIndex = index
	console.log('--start', e)
	setTimeout(() => {
		e.target.classList.add('moveing')
	}, 0)
}
function dragenter(e, index) {
	e.preventDefault()
	// 拖拽到原位置时不触发
	if (dragIndex !== index) {
		const source = drag.list[dragIndex]
		drag.list.splice(dragIndex, 1)
		drag.list.splice(index, 0, source)

		// 更新节点位置
		dragIndex = index
	}
}
function dragover(e) {
	e.preventDefault()
	e.dataTransfer.dropEffect = 'move'
}
function dragend(e) {
	e.target.classList.remove('moveing')
}
function drop(e) {
	console.log(e.dataTransfer.getData('text/plain'))
}
</script>
<style lang="scss" scoped>
.item {
	width: 200px;
	height: 40px;
	line-height: 40px;
	// background-color: #f5f6f8;
	background-color: skyblue;
	text-align: center;
	margin: 10px;
	color: #fff;
	font-size: 18px;
}

.container {
	position: relative;
	padding: 0;
}

.list-move,
/* 对移动中的元素应用的过渡 */
.list-enter-active,
.list-leave-active {
	transition: all 0.2s ease;
}

.moveing {
	opacity: 0;
}
</style>
