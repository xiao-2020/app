<template>
	<basic-layout>
		<view class="wrap">
			<view class="text">
				这是隐私政策
			</view>
		</view>
	</basic-layout>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		onLoad() {
			// #ifdef APP-PLUS  
			createBackBtn()
			//  #endif
		}
	}
</script>

<style lang="less" scoped>
	.wrap {
		height: 100%;
		padding: 40rpx;
		background-color: #fff;
		box-sizing: border-box;

		.text {
			font-size: 28rpx;
			font-weight: bold;
			color: #323237;
		}
	}
</style>
