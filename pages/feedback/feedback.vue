<template>
	<basic-layout>
		<view class="container">
			<view class="forms">
				<input class="uni-input" placeholder="请在此输入主题" />
				<textarea class="textarea" placeholder="请在此输入主题"  />
			</view>
			<view class="operate">
				<button type="primary" class="submit" >提交</button>
			</view>
		</view>
	</basic-layout>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="less" scoped>
	.container {
		box-sizing: border-box;
		height: 100%;
		padding: 32rpx;
		.uni-input {
			padding: 0 30rpx;
			box-sizing: border-box;
			height: 88rpx;
			background: #F5F5F5;
			border: 1rpx solid #E9E9E9;
			border-radius: 10rpx;
			margin-top: 20rpx;
			/deep/ .uni-input-placeholder {
				
				font-size: 28rpx;
				font-weight: 600;
				color: #929297;
			}
		}
		.textarea {
			width: 100%;
			padding:20rpx 30rpx;
			box-sizing: border-box;
			height: 300rpx;
			background: #F5F5F5;
			border: 1rpx solid #E9E9E9;
			border-radius: 10rpx;
			margin-top: 20rpx;
			
			/deep/ .uni-textarea-placeholder {
				
				font-size: 28rpx;
				font-weight: 600;
				color: #929297;
			}
		}
		.submit {
			display: flex;
			align-items: center;
			border: none;
			justify-content: center;
			height: 90rpx;
			background: #FEB638;
			border-radius: 10rpx;
			font-size: 28rpx;
			font-family: Lantinghei SC;
			font-weight: 600;
			color: #FFFFFF;
			margin-top: 130rpx;
		}
	}
</style>
