<template>
	<view>商务</view>
	<view v-for="(item,index) in list" :key="index">
		{{item.acc_num}}
		{{item.classify_1}}
	</view>
</template>

<script setup>
	import { onLoad,onShow,onReady,onHide,onUnload } from '@dcloudio/uni-app';
	import {
		ref
	} from 'vue'
	
	const list = ref()
	onLoad(async ()=>{
		const helloco = await uniCloud.callFunction({
			name:"get_numbers",
			data: { a: 1 },
		})
		list.value = helloco.result.data
		
		// try {
		// 					const res = await helloco.sum(1,2) //导入云对象后就可以直接调用该对象的sum方法了，注意使用异步await
		// 					console.log(res) // 结果是3
		// 				} catch (e) {
		// 					console.log(e)
		// 				}
	})
	// 箭头函数
	onLoad(()=>{
		console.log("商务--页面加载")
	})
	onShow(()=>{
		console.log("商务--页面显示")
	})
	onReady(()=>{
		console.log("商务---页面渲染完成")
	})
	onUnload(()=>{
		console.log("商务--页面被卸载")
	})
</script>

<style lang="scss" scoped>
	
</style>
