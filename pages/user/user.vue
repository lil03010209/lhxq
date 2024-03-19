<template>
	<view>运势</view>
	 <uni-data-select
	      collection="class_list"
	      field="text as value, text as text"
	      label="选择"
	      v-model="name"
	      :clear="false"
		  @change="hChange"
	    />
	<view v-for="(item,index) in list" :key="index">
		{{item.acc_num}}
		{{item.classify_2}}
	</view>
</template>

<script setup>
	import { onLoad,onShow,onReady,onHide,onUnload } from '@dcloudio/uni-app';
	import {
		ref
	} from 'vue'
	
	
	
	
	// 获取数据列表
	const list = ref()
	const getDataList = async  ()=>{
		const helloco = await uniCloud.callFunction({
			name:"get_numbers",
			data: { aaaa: name.value },
		})
		list.value = helloco.result.data
	}
	
	// 下拉框变化触发事件
	const name = ref("")
	const hChange = ()=>{
		getDataList()
	}
	
	
	
	// 箭头函数
	onLoad(()=>{
		console.log("我的--页面加载")
	})
	onShow(()=>{
		console.log("我的--页面显示")
	})
	onReady(()=>{
		console.log("我的---页面渲染完成")
	})
	onUnload(()=>{
		console.log("我的--页面被卸载")
	})
</script>

<style lang="scss" scoped>
	
</style>
