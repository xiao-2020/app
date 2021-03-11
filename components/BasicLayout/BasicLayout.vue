<template>
	<view class="layout-container">
		<view class="layout-content">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name:"BasicLayout",
		data() {
			return {

			};
		},
	}
</script>

<style lang="less" scoped>
	.layout-container {
		padding: 20rpx;
		height: 100%;
		background-color: #F2F2F7;
		box-sizing: border-box;

		.layout-content {
			height: 100%;
			background-color: #FFFFFF;
		}
	}
</style>
