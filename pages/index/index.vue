<template>
	<view class="content">
		<u-grid :col="3">
			<u-grid-item>
				<u-icon name="photo" :size="46"></u-icon>
				<view class="grid-text">图片</view>
			</u-grid-item>
			<u-grid-item>
				<u-icon name="lock" :size="46"></u-icon>
				<view class="grid-text">锁头</view>
			</u-grid-item>
			<u-grid-item>
				<u-icon name="hourglass" :size="46"></u-icon>
				<view class="grid-text">沙漏</view>
			</u-grid-item>
		</u-grid> 
		<!-- <image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{name}}</text>
		</view>-->
		
	</view>
</template>

<script lang="ts" setup>
	/* import { f } from '@/utils/util.js'
	import { ref, onMounted } from 'vue'
	const name = ref('肖国志')

	class Greeter {
		greeting: string;
		constructor(message: string) {
			this.greeting = message
		}
		greet() {
			return "Hello, " + this.greeting;
		}
	}
	f()
	console.log(Greeter);
	
	onMounted(() => {
		console.log("mounted");
	}) */
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
