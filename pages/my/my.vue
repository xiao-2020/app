<template>
	<view class="container">
		<view class="content">
			<!-- 用户信息 -->
			<view class="userinfo">
				<image class="header" v-if="false" src="/static/image/userheader.png" mode="aspectFit"></image>
				<image class="header" v-else src="/static/image/userheader.png" mode="aspectFit"></image>
				<view class="user">
					<view class="username">
						1992882999922
					</view>
					<view class="userid">
						<text class="label">ID</text>
						<text class="id">999823</text>
					</view>
				</view>
			</view>
			<!-- 详细信息 -->
			<view class="detail-info">
				<uni-list>
					<uni-list-item :show-extra-icon="true" clickable="true" :extra-icon="extraIcon1" title="账号类型" rightText="普通用户" showArrow="true"></uni-list-item>
					<uni-list-item :show-extra-icon="true" clickable="true" :extra-icon="extraIcon4" title="到期时间" rightText="2020-02-09 14:22" ></uni-list-item>
					<uni-list-item :show-extra-icon="true" clickable="true" :extra-icon="extraIcon2" title="意见反馈" rightText="钜惠热销" showArrow="true"></uni-list-item>
					<uni-list-item :show-extra-icon="true" clickable="true" :extra-icon="extraIcon3" title="开通Vip" showArrow="true"></uni-list-item>
				</uni-list>
			</view>
		</view>
	</view>
</template>

<script>
	import {createBackBtn} from 'utils/createView.js'
	export default {
		data() {
			return {
				extraIcon1: {color: '#4cd964',size: '22',type: 'person-filled'},
				extraIcon2: {color: '#4cd964',size: '22',type: 'compose'},
				extraIcon3: {color: '#4cd964',size: '22',type: 'person-filled'},
				extraIcon4: {color: '#4cd964',size: '22',type: 'person-filled'},
			};
		},
		mounted() {
			// #ifdef APP-PLUS
			const view = plus.nativeObj.View.getViewById('vipIcon')
			view.addEventListener('click', this.goToBecomeVip.bind(this), false)
			// #endif
		},
		beforeDestroy() {
			// #ifdef APP-PLUS
			const view = plus.nativeObj.View.getViewById('vipIcon')
			view.removeEventListener('click', this.goToBecomeVip.bind(this), false)
			// #endif
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
		background-color: #fff;
		width: 100%;
		height: 100%;
		.userinfo {
			width: 100%;
			height: 258rpx;
			display: flex;
			align-items: center;
			flex-direction: row;
			border-bottom: 1rpx solid #F2F2F7;
			padding: 0 53rpx;
			box-sizing: border-box;
			.header {
				display: inline-block;
				width: 118rpx;
				height: 118rpx;
				margin-right: 20rpx;
			}
			.user {
				display: flex;
				flex-direction: column;
				justify-content: center;
				.username {
					font-size: 32rpx;
					font-family: Microsoft YaHei;
					font-weight: bold;
					color: #323237;
				}
				.userid {
					display: inline-flex;
					align-items: center;
					width: max-content;
					height: 30rpx;
					background-color: #FFB10A;
					margin-top: 20rpx;
					.label {
						display: flex;
						align-items: center;
						justify-content: center;
						width: 30rpx;
						height: 30rpx;
						text-align: center;
						font-size: 18rpx;
						font-family: Microsoft YaHei;
						font-weight: 400;
						color: #FFFFFF;
						margin-right: 2rpx;
					}
					.id {
						display: flex;
						align-items: center;
						justify-content: center;
						height: 26rpx;
						font-size: 18rpx;
						flex: auto;
						background-color: #fff;
						color: #FFB10A;
						padding: 0 8rpx;
						margin-right: 2rpx;
					}
				}
			}
		}
		.detail-info {
			padding-top: 100rpx;
			/deep/ .uni-list--border-top,
			/deep/ .uni-list--border,
			/deep/ .uni-list--border-bottom {
				transform: scale(0);
				height: 0;
			}
		}
	}
}
</style>
