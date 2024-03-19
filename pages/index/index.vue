<template>

	<div class="header-component">
		<div class="box">
			<input class="input" type="number" v-model="phoneNumber" @input="limitPhoneNumber"
				placeholder="请输入您的手机号码" />
			<button class='button' @click='checkAndSubmit'>今日幸运值</button>
		</div>
		<swiper class="swiper" :indicator-dots="indicatorDots" indicator-color="black" indicator-active-color="white"
			:autoplay="indicatorDots" interval="2000" :circular='indicatorDots' @change="tiaozhuan"
			@animationfinish="finish" @transition='trans'>
			<swiper-item>
				<image class="img" mode='aspectFill' src='https://mp-b85cac42-db73-45e0-8a58-4b70b36c42c6.cdn.bspapp.com/love.png'></image>
			</swiper-item>
			<swiper-item>
				<image class="img" mode='aspectFill' src='https://mp-b85cac42-db73-45e0-8a58-4b70b36c42c6.cdn.bspapp.com/popstar.png'></image>
			</swiper-item>
			<swiper-item>
				<image class="img" mode='aspectFill' src='https://mp-b85cac42-db73-45e0-8a58-4b70b36c42c6.cdn.bspapp.com/birthday.png'></image>
			</swiper-item>
		</swiper>

		


	</div>

	<view class="icons">
	
		<view class="icons-list" @click="postSearchCourse('caiyun')">
			<image src="/static/syicon/caifu.png" mode="aspectFit"></image>
			<text>财运</text>
		</view>
		<view class="icons-list" @click="postSearchCourse('hot')">
			<image src="/static/syicon/jixiangwu.png" mode="aspectFit"></image>
			<text>吉祥号</text>
		</view>
		<view class="icons-list" @click="postSearchCourse('new')">
			<image src="/static/syicon/taohua.png" mode="aspectFit"></image>
			<text>桃花运</text>
		</view>
		<view class="icons-list" @click="postSearchCourse('sign-in')">
			<image src="/static/syicon/tuanyuan.png" mode="aspectFit"></image>
			<text>团圆号</text>
		</view>
	</view>
	
	<div class="fortune-boxes" v-if="showFortunes">
		
		
		<uni-transition mode="fade" :show="showFortunes">
			<div class="fortune" v-for="fortune in fortunes" :key="fortune.name">
				<div class="fortune-title">{{ fortune.name }}</div>
				<uni-rate allow-half :value="fortune.value" color="#bbb" active-color="#FFD700"></uni-rate>
				<div class="fortune-desc">{{ fortune.desc }}</div>
			</div>
		</uni-transition>
	</div>



	<uni-fab ref="fab" :horizontal="'right'" :vertical="'bottom'" :content="content" @trigger="trigger"
		@fabClick="fabClick"></uni-fab>
		
		
	

</template>

<script setup>
	import {
		onLoad
	} from '@dcloudio/uni-app';
	
	
	import {
		ref
	} from 'vue'
	
	
	const postSearchCourse = (val)=>{
		if(val=="caiyun"){
			uni.setStorageSync("class1","财运")
		}
		if(val=="hot"){
			uni.setStorageSync("class1","吉祥号")
		}
		
		uni.switchTab({
			url: '/pages/user/user'
		});
	}
	
	// const list = ref()
	// onLoad(async ()=>{
	// 	const helloco = await uniCloud.callFunction({
	// 		name:"get_numbers",
	// 		data: { a: 3 },
	// 	})
	// 	list.value = helloco.result.data
		
	// 	// try {
	// 	// 					const res = await helloco.sum(1,2) //导入云对象后就可以直接调用该对象的sum方法了，注意使用异步await
	// 	// 					console.log(res) // 结果是3
	// 	// 				} catch (e) {
	// 	// 					console.log(e)
	// 	// 				}
	// })
	const indicatorDots = ref(true)
	// const tiaozhuan = (val) =>{
	// 	console.log(val)
	// }

	// const finish = (val) =>{
	// 	console.log(val)
	// }

	// const trans = (val) =>{
	// 	console.log(val.detail )
	// }

	// //点击事件
	// const dianjishijian = ()=>{
	// 	uni.navigateTo({
	// 		url: '/pages/user/user'
	// 	});
	// }

	const xinyunzhi = ref(0)

	// 运势代码
	const showFortunes = ref(true);

	const fortunes = ref([{
			name: '整体运势',
			value: 0,
			desc: ''
		},
		{
			name: '爱情运势',
			value: 0,
			desc: ''
		},
		{
			name: '事业运势',
			value: 0,
			desc: ''
		},
		{
			name: '财运运势',
			value: 0,
			desc: ''
		},
	]);

	const descriptions = {
		'整体运势': [
			"遇到问题时静下心来思考，求助于身边的人。",
			"小心言行，避免不必要的误会。适时的调整心态。",
			"运势平平，坚持自己的方向，总会有转机。",
			"好运正在向你招手，关键在于把握机会。",
			"今天是个好日子，无论是工作还是人际交往都能得心应手。"
		],
		'爱情运势': [
			"感情路上可能会遇到一些小波折，记得沟通是解决问题的关键。",
			"可能会感到一丝孤单，不妨主动出击，参加一些社交活动。",
			"已有伴侣的你，可能会经历一些小争执，记得耐心是维持关系的要素。",
			"单身的你有机会遇到心仪的对象，大胆表达你的感情。",
			"爱情满满，无论是单身还是恋爱中，都有机会收获幸福。"
		],
		'事业运势': [
			"工作上可能会遇到一些阻碍，保持冷静，一一解决即可。",
			"可能会感到工作压力增大，适时的调整和规划将有助于未来的发展。",
			"职场上的表现平平，但只要坚持不懈，就会有所收获。",
			"工作中可能会有新的机遇出现，把握好，将对你的职业生涯大有帮助。",
			"事业运势极佳，不仅能完成任务，还可能获得额外的赞赏和奖励。"
		],
		'财运运势': [
			"财务状况可能不太乐观，避免不必要的开支。",
			"小心理财，可能会有一些意外支出，合理规划你的财务。",
			"今天的财运一般，有收有支，保持平衡即可。",
			"你的努力将会得到回报，可能会有一笔意外之财。",
			"财运旺盛，投资有望获得良好回报，但仍需谨慎决策。"
		]
	};


	// 修改 generateFixedScore 函数以接受额外的种类标识符（例如运势名称）
	function generateFixedScore(phoneNumber, fortuneIndex) {
		const date = new Date();
		const dateNumber = parseInt(
			`${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(-2)}${('0' + date.getDate()).slice(-2)}`);
		const phoneLastFour = parseInt(phoneNumber.slice(-4));

		// 简单哈希函数，结合日期、手机号后四位和运势种类标识
		let hash = dateNumber * phoneLastFour + fortuneIndex;
		hash = ((hash << 5) - hash) + fortuneIndex; // 稍微调整哈希算法以引入运势种类的差异
		const score = Math.abs(hash % 5) + 1;

		return score;
	}

	// 假设每种运势都有一个唯一的索引，例如：整体運勢: 1, 愛情運勢: 2, 事業運勢: 3, 財運運勢: 4
	const chaxun = () => {
		showFortunes.value = true;
		fortunes.value.forEach((fortune, index) => {
			const score = generateFixedScore(phoneNumber.value, index + 1); // 传递额外的种类标识符
			fortune.value = score;

			// 根据分数确定描述，这里使用了简化的逻辑来映射描述
			const descArray = descriptions[fortune.name];
			const descIndex = Math.floor(score) - 1;
			fortune.desc = descArray[descIndex];
		});
	};




	// 验证输入框手机号码
	const phoneNumber = ref('');

	const checkAndSubmit = () => {
		if (phoneNumber.value.length !== 11 || isNaN(phoneNumber.value)) {
			// 使用uni-app的uni.showToast来显示提示信息
			uni.showToast({
				title: '请输入有效的11位手机号码',
				icon: 'none', // 'none'为纯文本，'success'显示成功图标，'loading'显示加载图标
				duration: 2000 // 提示的延迟时间，单位毫秒，默认为1500
			});
		} else {
			// 符合条件，继续后续操作
			console.log("提交成功，手机号码为: ", phoneNumber.value);
			chaxun(); // 调用查询函数
		}
	};

	// 悬停按钮
	const content = ref([{
			iconPath: '/static/icon/phone.png',
			selectedIconPath: '/static/icon/phone.png',
			text: '我的号码',
			active: false
		},
		{
			iconPath: '/static/icon/order.png',
			selectedIconPath: '/static/icon/order.png',
			text: '我的订单',
			active: false
		}
	]);

	const trigger = (e) => {
		console.log(e);
		content.value[e.index].active = !content.value[e.index].active;
		// 处理菜单项点击事件...
	};

	const fabClick = () => {
		console.log("点击了悬浮按钮");
	};
</script>

<style lang="scss" scoped>
	.icons {
		// height: 395upx;
		padding: 15upx 0;
		box-sizing: border-box;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;

		&-list {
			flex: 20%;
			display: flex;
			flex-direction: column;
			align-items: center;

			image {
				width: 85upx;
				height: 85upx;
			}

			text {
				font-size: 24upx;
				font-weight: 700;
			}
		}
	}

	.icons {
	  display: flex;
	  justify-content: space-around;
	  background-image: linear-gradient(#e6f2ff, white);
	  padding: 20px 0;
	}


	.header-component {
		background-color: skyblue; // 淡灰色背景
		padding: 5px;
		text-align: center;
		background-image: linear-gradient(skyblue, #e6f2ff);
		/* 从skyblue到透明的渐变 */
	}

	.box {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 20px;

		.input {
			height: 40px;
			width: 300px; // 更精致的尺寸
			border: 1px solid #ccc;
			border-radius: 20px;
			padding: 0 15px;
			box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); // 细腻的阴影
			margin-right: 10px;
			background-color: white; // 明亮的蓝色
		}

		@media (max-width: 320px) {

			/* 针对小屏幕尺寸调整 */
			.button {
				font-size: 12px;
				/* 减小字体大小 */
				padding: 5px 10px;
				/* 减小内边距 */
			}
		}

		.button {
			height: 44px;
			width: 150px;
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
	}

	.swiper {
		height: 250px; // 调整轮播图的高度
		width: 95%; // 轮播图宽度，相对于父元素
		margin: 0 auto; // 居中显示

		.img {
			border-radius: 30px; // 轮播图片圆角
		}
	}



	.fortune-boxes {
		padding: 20px;
		background-color: white;
		/* 轻微灰色背景 */
	}

	.fortune {
		background-image: linear-gradient(to right, #ccd5ff, white);
		margin-bottom: 20px;
		padding: 15px;
		border-radius: 15px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
		/* 设置初始阴影较轻 */
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}



	.fortune-title {
		font-size: 20px;
		font-weight: 600;
		margin-bottom: 10px;
		color: #333;
		/* 标题颜色 */
	}

	.fortune-desc {
		font-size: 16px;
		color: #666;
		/* 描述文字颜色 */
	}

	.uni-rate {
		margin: 10px 0;
		/* 星级评分的上下外边距 */
	}
</style>