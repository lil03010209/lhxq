<template>
	<view class="number-display-container">
		<view class="header">运势</view>
		<view class="select-container">
		        <view class="select-label">请选择您想要的类别：</view>
		        <uni-data-select collection="class_list" field="text as value, text as text" label="选择" v-model="name" :clear="false" @change="hChange" />
		    </view>
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
	} from 'vue';

	const list = ref([]);
	const name = ref("");

	const getDataList = async () => {
		const helloco = await uniCloud.callFunction({
			name: "get_numbers",
			data: {
				aaaa: name.value
			},
		});
		list.value = helloco.result.data;
	};

	const hChange = () => {
		getDataList();
	};

	onLoad(() => console.log("页面加载"));
	onShow(() => {
		const class1 = uni.getStorageSync('class1');
		if (class1) name.value = class1;
		uni.removeStorageSync('class1');
		console.log("页面显示");
	});
	onReady(() => console.log("页面渲染完成"));
	onUnload(() => console.log("页面被卸载"));
</script>

<style lang="scss" scoped>
	.number-display-container {


		.header {
		    background-image: url('https://mp-b85cac42-db73-45e0-8a58-4b70b36c42c6.cdn.bspapp.com/user.png'); // 设置背景图片
		    background-size: cover; // 背景图片覆盖整个元素
		    background-position: center; // 背景图片居中显示
		    color: white; // 根据背景图片调整文字颜色以提高可读性
		    padding: 40px 20px; // 增加内边距以确保文字不会贴近边缘，增大上下边距以帮助垂直居中
		    border-radius: 8px; // 保持原有的圆角
		    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); // 保持原有的阴影效果
		    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5); // 文字阴影，增强在复杂背景上的可读性
		    font-size: 30px; // 增大字体大小
		    font-weight: 700; // 加强字体的粗细
		    display: flex; // 使用Flexbox布局
		    justify-content: center; // 水平居中
		    align-items: center; // 垂直居中
		    text-align: center; // 文字居中对齐
		    height: 80px; // 设置一个固定高度，根据实际需要调整
		}

		.select-container {
		    display: flex;
		    flex-direction: row; // 默认为行布局
		    align-items: center;
		    justify-content: space-between;
		    width: 100%;
		    padding: 10px;
		    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
		    border-radius: 8px;
		    background-color: #f8f8f8;
		
		    .select-label {
		        flex: 1;
		        margin-right: 20px; // 保持与下拉框的间距
		        font-size: 16px;
		        color: #666;
		    }
		
		    uni-data-select {
		        flex: 3;
		        select {
		            width: 100%;
		            padding: 8px 12px;
		            border: 1px solid #ccc;
		            border-radius: 8px;
		            background-color: white;
		        }
		    }
		
		    // 媒体查询：在小屏幕尺寸下调整布局
		    @media (max-width: 600px) { // 假设600px为小屏幕的断点
		        flex-direction: column; // 改为垂直堆叠布局
		        align-items: stretch; // 子项拉伸以填满容器宽度
		
		        .select-label {
		            margin-right: 0; // 移除右边距
		            margin-bottom: 10px; // 在标签和下拉框之间添加底部边距
		        }
		
		        uni-data-select {
		            flex: none; // 移除flex属性，避免对堆叠布局的影响
		        }
		    }
		}

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