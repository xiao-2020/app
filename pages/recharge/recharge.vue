<template>
	<view class="container">
		<!-- banner -->
		<view class="banner-zone">
			<view class="banner">
				<view class="cell">
					<view class="image">
						<image src="/static/image/free.png" mode="aspectFit"></image>
					</view>
					<view class="label">
						全免费
					</view>
				</view><view class="cell">
					<view class="image">
						<image src="/static/image/noad.png" mode="aspectFit"></image>
					</view>
					<view class="label">
						无广告
					</view>
				</view><view class="cell">
					<view class="image">
						<image src="/static/image/gaoqing.png" mode="aspectFit"></image>
					</view>
					<view class="label">
						高清图
					</view>
				</view><view class="cell">
					<view class="image">
						<image src="/static/image/keep-update.png" mode="aspectFit"></image>
					</view>
					<view class="label">
						持续更新
					</view>
				</view>
			</view>
		</view>
		<!-- 套餐区域 -->
		<view class="combo">
			<view class="title">
				<view class="bgline">
				</view>
				<text>会员套餐</text>
			</view>
			<view class="pricelist">
				<view :class="['price', combo === '1' ? 'checked' : '']" @click="combo = '1'">
					<view class="left">
						<view class="dot">
						</view>
						<view class="label">
							连续包年
						</view>
						<view class="tips">
							80%的选择
						</view>
					</view>
					<view class="right">
						<view class="money">
							￥258
						</view>
						<view class="description">
							平均21元/月
						</view>
					</view>
				</view>
				<view :class="['price', combo === '2' ? 'checked' : '']"  @click="combo = '2'">
					<view class="left">
						<view class="dot">
						</view>
						<view class="label">
							连续包季
						</view>
					</view>
					<view class="right">
						<view class="money">
							￥128
						</view>
						<view class="description">
							平均42元/月
						</view>
					</view>
				</view>
				<view :class="['price', combo === '3' ? 'checked' : '']" @click="combo = '3'">
					<view class="left">
						<view class="dot">
						</view>
						<view class="label">
							连续包月
						</view>
					</view>
					<view class="right">
						<view class="money">
							￥68
						</view>
						<view class="description">
							平均68元/月
						</view>
					</view>
				</view>
			</view>
			<view class="tips">
				<uni-icons color="#bbb" type="info" size="13"></uni-icons>
				<text>到期后自动续费，可随时取消</text>
			</view>
		</view>
		<!-- 声明 -->
		<view class="statement">
			<view class="h3">自动续费服务声明</view>
			<view class="cont">付款：用户确认购买并付款后计入iTunes账户；</view>
			<view  class="cont">取消续订：如需要取消续订，请在当前订阅周期到期24 小时以前，在iTunes-AppleID设置给管理中关闭自动续费功能，到期前24小时以内将会收取续订费用；</view>
			<view  class="cont">续费：苹果iTunes账户会在到期前24小时内扣费，扣费成功后订阅周期顺延一个订阅周期。</view>
			<view  class="cont">自动续费服务期限：本服务由您自主选择是否取消，若您选择不取消，将为您开通下一个计费周期的订阅服务。</view>
		</view>
		<!--  -->
		<view class="policy-zone">
			<text>用户协议</text>
			<text class="divider">|</text>
			<text>隐私政策</text>
			<text  class="divider">|</text>
			<text>使用条款</text>
		</view>
		<!-- 开通按钮 -->
		<view class="becomevip">
			<image class="icon" src="/static/image/vip-black.png" mode="aspectFit"></image>
			<text class="label">立即开通</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				combo: '1',
			};
		}
	}
</script>

<style lang="less" scoped>
.container {
	background-color: #F2F2F7;
	min-height: 100%;
	padding-bottom: 110rpx;
	box-sizing: border-box;
	.banner-zone {
		width: 100%;
		height: 362rpx;
		padding: 20rpx;
		box-sizing: border-box;
		.banner {
			width: 100%;
			height: 100%;
			padding: 0 20rpx 94rpx;
			box-sizing: border-box;
			background: #31374D;
			border-radius: 20rpx;
			display: flex;
			align-items: center;
			justify-content: space-around;
			.cell {
				width: 87rpx;
				height: 130rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				flex-direction: column;
				.image {
					width: 87rpx;
					height: 87rpx;
					border-radius: 50%;
					background: #404762;
					display: flex;
					align-items: center;
					justify-content: center;
					image {
						width: 46rpx;
						height: 46rpx;
					}
				}
				.label {
					line-height: 1;
					font-size: 26rpx;
					font-family: Lantinghei SC;
					font-weight: bold;
					color: #F4C07C;
					width: 120rpx;
					text-align: center;
				}
			}
		}
	}
	.combo {
		width: 100%;
		height: 722rpx;
		background-color: #FFFFFF;
		margin-top: -94rpx;
		padding: 0 54rpx;
		box-sizing: border-box;
		overflow: hidden;
		margin-bottom: 20rpx;
		.title {
			width: 280rpx;
			height: 37rpx;
			margin: 89rpx auto 70rpx;
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			.bgline {
				position: absolute;
				width: 100%;
				height: 4rpx;
				background-color: #F2F2F7;
				top:18rpx ;
				left: 0;
				z-index: 0;
			}
			text {
				position: relative;
				z-index: 1;
				display: block;
				background-color: #fff;
				width: 200rpx;
				text-align: center;
				font-size: 38rpx;
				font-family: Lantinghei SC;
				font-weight: bold;
				color: #000;
			}
		}
		.pricelist {
			margin-bottom: 7rpx;
			.price {
				width: 100%;
				height: 130rpx;
				padding: 0 30rpx;
				box-sizing: border-box;
				background: #F2F2F7;
				opacity: 0.73;
				border-radius: 10rpx;
				box-sizing: border-box;
				margin-bottom: 20rpx;
				border: 2rpx solid #F2F2F7;
				display: flex;
				align-items: center;
				justify-content: space-between;
				.left {
					height: 64rpx;
					display: flex;
					align-items: center;
					.dot {
						width: 14rpx;
						height: 14rpx;
						background: #FEB638;
						border-radius: 50%;
						margin-right: 25rpx;
					}
					.label {
						font-size: 32rpx;
						font-family: Lantinghei SC;
						font-weight: 600;
						color: #774601;
						margin-right: 15rpx;
					}
					.tips {
						width: 160rpx;
						height: 32rpx;
						background: #FF5555;
						font-size: 20rpx;
						font-family: Microsoft YaHei;
						font-weight: 400;
						color: #FFFFFF;
						border-radius: 14rpx;
						display: flex;
						align-items: center;
						justify-content: center;
					}
				}
				.right {
					height: 64rpx;
					display: flex;
					align-items: flex-end;
					flex-direction: column;
					justify-content: space-between;
					.money {
						font-size: 32rpx;
						font-family: Microsoft YaHei;
						font-weight: bold;
						color: #854F00;
					}
					.description {
						font-size: 24rpx;
						font-family: Lantinghei SC;
						font-weight: 600;
						color: #854F00;
					}
				}
			}
			.checked {
				background: rgba(253, 234, 209, 0.98);
				border: 2rpx solid #FEB638;
				border-radius: 10rpx;
			}
		}
		.tips {
			display: flex;
			align-items: center;
			font-size: 24rpx;
			color: #BBBBBB;
			text {
				margin-left: 20rpx;
			}
		}
	}
	.statement {
		width: 100%;
		height: 462rpx;
		background-color: #fff;
		box-sizing: border-box;
		padding: 46rpx 30rpx 0 50rpx;
		font-size: 24rpx;
		font-weight: bold;
		color: #929297;
		.h3 {
			font-size: 28rpx;
			color: #323237;
			text-align: center;
			margin-bottom: 20rpx;
		}
		.cont {
			position: relative;
			margin-bottom: 16rpx;
		}
		.cont::before {
			position: absolute;
			left: -24rpx;
			top: 0;
			display: inline-flex;
			content: "·";
			width: 24rpx;
			height: 24rpx;
			font-size: 24rpx;
		}
	}
	.policy-zone {
		width: 100%;
		height: 122rpx;
		font-size: 28rpx;
		color: #FEB638;
		display: flex;
		align-items: center;
		justify-content: center;
		.divider {
			margin: 0 20rpx;
		}
	}
	.becomevip {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 110rpx;
		background: #FEB638;
		display: flex;
		align-items: center;
		justify-content: center;
		.icon {
			width: 42rpx;
			height: 42rpx;
		}
		.label {
			font-size: 32rpx;
			font-family: Lantinghei SC;
			font-weight: 800;
			color: #323237;
			margin-left: 22rpx;
		}
		
	}
}


</style>
