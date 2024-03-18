<template>
	<view>我的</view>
</template>

<script setup>
	import { onLoad,onShow,onReady,onHide,onUnload } from '@dcloudio/uni-app';
	
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
