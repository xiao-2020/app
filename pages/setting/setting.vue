<template>
	<view class="container">
		<view class="content">
			<uni-list>
				<uni-list-item clickable="true" title="清除缓存" rightText="普通用户" showArrow="true"></uni-list-item>
				<uni-list-item clickable="true" title="隐私政策" showArrow="true"></uni-list-item>
				<uni-list-item clickable="true" title="用户协议" showArrow="true"></uni-list-item>
				<uni-list-item clickable="true" title="关于我们" showArrow="true"></uni-list-item>
				<uni-list-item clickable="true" title="到期时间"></uni-list-item>
			</uni-list>
			<view class="operate">
				<button type="primary" class="logout" @click="loginout()">退出</button>
				<button type="default" class="zhuxiao" plain>注销</button>
			</view>
			<uni-popup ref="popup" type="dialog">
			    <uni-popup-dialog type="warn" title="提示" content="确定要退出登录吗" @close="close" @confirm="confirm"></uni-popup-dialog>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			cloes(done) {
				done()
			},
			confirm(done, value) {
				done()
			},
			loginout() {
				this.$refs.popup.open()
			},
			
		},
		onLoad() {
			// #ifdef APP-PLUS  
			createBackBtn()
			//  #endif
		}
	}
</script>

<style lang="less" scoped>
	.container {
		padding: 20rpx;
		height: 100%;
		background-color: #F2F2F7;
		box-sizing: border-box;

		.content {
			height: 100%;
			padding: 40rpx 0;
			box-sizing: border-box;
			background-color: #FFFFFF;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			/deep/ .uni-list--border-top,
			/deep/ .uni-list--border,
			/deep/ .uni-list--border-bottom {
				transform: scale(0);
				height: 0;
			}
			
			.operate {
				padding: 0 40rpx;
				box-sizing: border-box;
				.logout {
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
				}
				.zhuxiao {
					display: flex;
					align-items: center;
					justify-content: center;
					border: none;
					margin-top: 10rpx;
					height: 90rpx;
					background: #ffffff;
					font-size: 28rpx;
					font-family: Lantinghei SC;
					font-weight: 600;
					color: #929297;
				}
			}
		}
	}
</style>
