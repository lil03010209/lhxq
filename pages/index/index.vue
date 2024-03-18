<template>
	<swiper class="swiper" v-bind:indicator-dots="indicatorDots" indicator-color = "black" indicator-active-color	 = "white" v-bind:autoplay = 'false' interval = "3000"
	v-bind:circular = 'indicatorDots' v-on:change="tiaozhuan" v-on:animationfinish="finish" @transition = 'trans'>
		<swiper-item>
			<image class="img" mode='aspectFill' src = '/static/love.png'> </image>
		</swiper-item>	
		<swiper-item>
			<image  class="img" mode='aspectFill' src = '/static/popstar.png'> </image>
		</swiper-item>
		<swiper-item>
			<image  class="img" mode='aspectFill' src = '/static/birthday.png'> </image>
		</swiper-item>
	</swiper>
	
	
	<view class="box">
	
	<input class="input" type="number" placeholder="这是一个数字输入框" />
	<button class = 'button' @click = 'chaxun'>页面主操作 Normal</button>	
			</view>
			
			
			<view class="box2">
				今天幸运值是{{xinyunzhi}}
			</view>
</template>

<script setup>
	import { onLoad } from '@dcloudio/uni-app';
	import {ref} from 'vue'
	
	const indicatorDots = ref(true)
	
	// const tiaozhuan = (val) =>{
	// 	console.log(val)
	// }
	
	// const finish = (val) =>{
	// 	console.log(val)
	// }
	
	const trans = (val) =>{
		console.log(val.detail )
	}
	
	//点击事件
	const dianjishijian = ()=>{
		uni.navigateTo({
			url: '/pages/user/user'
		});
	}
	
	const xinyunzhi = ref(0)
	const chaxun = ()=>{
		xinyunzhi.value = Math.floor(Math.random() * Math.floor(101))
	}
	
	
	
</script>

<style lang="scss" scoped>
	.swiper{
		height: 400rpx;
		width:750rpx;
		.img{
			width: 100%;
			height: 100%;
		}
	}
	.box{
		display: flex;
		
		.input{
			height: 100rpx;
			width:500rpx;
			border: 2px solid blue;
		}
		
		.button{
			height: 100rpx;
			width:250rpx;
		}
	}
	
</style>
