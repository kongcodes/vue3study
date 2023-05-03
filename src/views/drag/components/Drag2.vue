<template>
	<div>
		<el-table
			:data="tableData"
			id="dragTable"
			border
			style="width: 600px; margin: 20px"
		>
			<el-table-column prop="date" label="Date" width="150" />
			<el-table-column prop="name" label="Name" width="120" />
			<el-table-column prop="address" label="Address" />
			<el-table-column label="操作" width="100">
				<template #default>
					<div class="handle-drag">
            <el-icon><Sort /></el-icon>
					</div>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script setup>
import Sortable from 'sortablejs'
import { onMounted } from 'vue'

function setSort() {
	const el = document.querySelector('#dragTable table tbody')
	console.log(el)
	new Sortable(el, {
		sort: true,
		ghostClass: 'sortable-ghost',
		handle: '.handle-drag',
		onEnd: (e) => {
			console.log(e)
			const targetRow = tableData.splice(e.oldIndex, 1)[0]
			tableData.splice(e.newIndex, 0, targetRow)

			console.log(tableData)
		},
	})
}
onMounted(() => {
	setSort()
})

const tableData = [
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-02',
		name: 'Cilly',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-04',
		name: 'Linda',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-01',
		name: 'John',
		address: 'No. 189, Grove St, Los Angeles',
	},
]
</script>

<style lang="scss">
.sortable-ghost {
	opacity: 0.8;
	color: #fff !important;
	background: #42b983 !important;
}
</style>
