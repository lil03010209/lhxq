<template>
	<view class="waper">
		<view class='header'>
			<image class='image' src="https://mp-b85cac42-db73-45e0-8a58-4b70b36c42c6.cdn.bspapp.com/diybg.png"
				mode='aspectFit'></image>
		</view>
		<view class="container">
			<!-- 前7位默认值显示 -->
			<view v-for="n in 7" :key="n" class="input-box">
				<text class="default-value">X</text>
			</view>
			<!-- 后4位数字输入 -->
			<input v-for="n in 4" :key="`input-${n}`" class="input-box" type="number" maxlength="1" />
			<!-- 查询按钮 -->
			<button class='button' @click="onQuery">查询</button>
		</view>
	</view>
	<view class="number-display-container">
		<view class="table">
			<view class="table-header">
				<view class="header-item acc-num-header">账号</view>
				<view class="header-item">分类</view>
				<view class="header-item">保底</view>
				<view class="header-item">预存款</view>
				<view class="header-item operation">操作</view>
			</view>
			<view class="list-container">
				<view v-for="(item, index) in list" :key="index" class="number-row">
					<view class="detail-item acc-num">{{ item.acc_num }}</view>
					<view class="detail-item">{{ item.classify_2 }}</view>
					<view class="detail-item">{{ item.baodi }}</view>
					<view class="detail-item">{{ item.saving }}</view>
					<view class="select-box">选取</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		onLoad,
		onShow,
		onReady,
		onHide,
		onUnload
	} from '@dcloudio/uni-app';
	import {
		ref
	} from 'vue'
	// 箭头函数
	onLoad(() => {
		console.log("手工--页面加载")
	})
	onShow(() => {
		console.log("手工--页面显示")
	})
	onReady(() => {
		console.log("手工---页面渲染完成")
	})
	onUnload(() => {
		console.log("手工--页面被卸载")
	})

	const list = ref()
	onLoad(async () => {
		const helloco = await uniCloud.callFunction({
			name: "get_commerce",
			data: {
				a: 3
			},
		})
		list.value = helloco.result.data

		// try {
		// 					const res = await helloco.sum(1,2) //导入云对象后就可以直接调用该对象的sum方法了，注意使用异步await
		// 					console.log(res) // 结果是3
		// 				} catch (e) {
		// 					console.log(e)
		// 				}
	})
</script>

<style lang="scss" scoped>
	.header {
		display: flex;
		height: 150rpx; // 调整高度以适应图片的宽高比
		width: 750rpx; // 宽度保持不变
		align-items: center;
		justify-content: center;
	}

	.container {
		display: flex;
		align-items: center;
		/* 垂直居中 */
		justify-content: center;
		/* 水平居中 */
		margin-top: 20px;
		/* 增加与上方元素的间隔 */
	}

	.input-box {
		width: 30px;
		/* 输入框宽度 */
		height: 30px;
		/* 输入框高度 */
		border: 1px solid black;
		/* 黑色边框 */
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 2px;
		/* 与其他元素的间距 */
	}

	.default-value {
		display: block;
		width: 100%;
		height: 100%;
		line-height: 30px;
		/* 使文本垂直居中 */
		text-align: center;
		/* 文本水平居中 */
	}

	@media (max-width: 320px) {

		/* 针对小屏幕尺寸调整 */
		.button {
			font-size: 12px;
			/* 减小字体大小 */
			padding: 3px 5px;
			/* 减小内边距 */
		}
	}

	.button {
		height: 22px;
		width: 66px;
		border: none;
		border-radius: 22px; // 圆角
		background-color: royalblue; // 明亮的蓝色
		color: white;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); // 阴影效果
		cursor: pointer;
		transition: background-color 0.3s;
		display: flex;
		/* 使用Flexbox布局 */
		justify-content: center;
		/* 水平居中 */
		align-items: center;
		/* 垂直居中 */
		padding: 5px 10px;
		/* 根据需要调整内边距 */
	}

	.number-display-container {



		.table {
			border-radius: 10px;
			overflow: hidden;
			box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

			.table-header {
				background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
				color: white;
				display: flex;
				padding: 16px 10px;
			}

			.header-item,
			.detail-item {
				flex-grow: 1;
				text-align: center;
				padding: 12px 0;
			}

			.acc-num-header,
			.acc-num {
				flex-basis: 40%;
			}

			.select-box {
				flex-basis: 10%;
				background-color: #ff4081;
				color: white;
				border-radius: 22px;
				padding: 6px 12px;
				transition: transform 0.2s ease-in-out;

				&:hover {
					transform: translateY(-2px);
					background-color: #f50057;
				}
			}

			.list-container {
				.number-row {
					display: flex;
					align-items: center;
					border-bottom: 1px solid #f0f0f0;
					transition: background-color 0.3s;

					&:hover {
						background-color: #f9f9f9;
					}
				}
			}
		}
	}
</style>