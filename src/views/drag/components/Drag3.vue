<template>
	<div style="margin-left: 100px;display: flex;margin-top: 300px;">
		<draggable
			group="group"
			:list="state.list1"
			:force-fallback="true"
			chosen-class="chosen"
			animation="300"
			@start="onStart"
			@end="onEnd"
		>
			<template #item="{ element }">
				<div class="item bck1">
					{{ element }}
				</div>
			</template>
		</draggable>

		<draggable
			group="group"
			:list="state.list2"
			:force-fallback="true"
			chosen-class="chosen"
			animation="300"
			@start="onStart"
			@end="onEnd"
		>
			<template #item="{ element }">
				<div class="item bck2">
					{{ element }}
				</div>
			</template>
		</draggable>
	</div>
</template>

<script setup>
import draggable from 'vuedraggable'
import { reactive } from 'vue'

const state = reactive({
	list1: [1, 2, 3, 4],
	list2: ['a', 'b', 'c', 'd'],
})

function onStart() {}

function onEnd() {
	console.log(state)
}

</script>

<style scoped lang="scss">
.item {
	width: 200px;
	line-height: 40px;
	border-radius: 6px;
	color: #fff;
	margin-bottom: 10px;
}
.bck1 {
	background: #ff7dc0 !important;
	margin-left: 30px;
}
.bck2 {
	background: #ccc !important;
	margin-left: 30px;
}
.chosen {
	background: #42b983 !important;
}
</style>
