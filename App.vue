<script setup>
	import { onLaunch,onShow,onLoad } from '@dcloudio/uni-app';
	
	onLaunch(()=>{
		console.log('App Launch')
	})
	
	onShow(()=>{
		console.log('App Show')
	})
	
	
	onLoad(()=>{
		console.log('App Hide')
	})

</script>

<style>
	/*每个页面公共css */
</style>
