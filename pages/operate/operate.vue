<template>
	<view class="container">
		<view class="windows">
			<view class="content">
				<!-- 合成图片 -->
				<view class="imgbox">

				</view>
			</view>
		</view>
		<view class="operator">
			<view class="bodyplcacelist">
				<scroll-view scroll-x="true" :show-scrollbar="false" :scroll-left="0" class="scrollbox">
					<view class="cell" v-for="item in bodyPlaceList" :key="item.sort">
						<text :class="[item.sort !== bodyPlace ? 'checkedtext' : '']">{{item.label}}</text>
						<view class="checked" v-if="bodyPlace === item.sort"></view>
					</view>
				</scroll-view>
			</view>
			<view class="placelist-zone">
				<scroll-view scroll-y="true" class="scrollbox">
					<view class="cell">
						
					</view><view class="cell">
						
					</view><view class="cell">
						
					</view><view class="cell">
						
					</view><view class="cell">
						
					</view><view class="cell">
						
					</view><view class="cell">
						
					</view><view class="cell">
						
					</view><view class="cell">
						
					</view><view class="cell">
						
					</view><view class="cell">
						
					</view><view class="cell">
						
					</view><view class="cell">
						
					</view><view class="cell">
						
					</view><view class="cell">
						
					</view><view class="cell">
						
					</view><view class="cell">
						
					</view><view class="cell">
						
					</view><view class="cell">
						
					</view><view class="cell">
						
					</view><view class="cell">
						
					</view><view class="cell">
						
					</view><view class="cell">
						
					</view><view class="cell">
						
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sex: '', // 设置性别参数

				bodyPlace: 1,
				bodyPlaceList: [{
						sort: 1,
						label: '脸型'
					},
					{
						sort: 2,
						label: '发型'
					},
					{
						sort: 3,
						label: '眉毛'
					},
					{
						sort: 4,
						label: '眼睛'
					},
					{
						sort: 5,
						label: '鼻子'
					},
					{
						sort: 6,
						label: '嘴巴'
					},
					{
						sort: 7,
						label: '配置'
					},
					{
						sort: 8,
						label: '衣服'
					}
				]
			};
		},
		onLoad(e) {
			this.sex = e.sex
		}
	}
</script>

<style lang="less" scoped>
	.container {
		height: 100%;
		overflow: hidden;
		.windows {
			width: 100%;
			height: 750rpx;
			background-color: #f2f2f7;
			padding: 20rpx;
			box-sizing: border-box;
			.content {
				width: 710rpx;
				height: 710rpx;
				padding: 40rpx;
				box-sizing: border-box;
				border-radius: 10rpx;
				background-color: #fff;

				.imgbox {
					width: 100%;
					height: 100%;

					image {
						width: 100%;
						height: 100%;
					}
				}
			}
		}
		.operator {
			width: 100%;
			margin-top: 20rpx;
			background-color: #fff;
			height: calc(100% - 750rpx);
			overflow: hidden;
			.bodyplcacelist {
				width: 100%;
				height: 100rpx;
				padding-bottom: 20rpx;
				padding-left: 20rpx;
				display: flex;
				align-items: center;
				.scrollbox {
					height: 100%;
				}
				/deep/ .uni-scroll-view-content {
					display: flex;
					flex-wrap: nowrap;
					width: max-content;
					padding-right: 60rpx;
				}
				.cell {
					display: inline-flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					margin: 0 30rpx;
					flex-shrink: 0;
					width: 64rpx;
					text {
						font-size: 32rpx;
						font-weight: bold;
						color: #323237;
					}
					.checkedtext {
						color: #626267;
					}
					.checked {
						width: 64rpx;
						height: 8rpx;
						background-color: #feb638;
						margin-top: 10rpx;
					}
				}
			}
			.placelist-zone {
				width: 100%;
				height: calc(100% - 160rpx);
				padding: 0 20rpx;
				box-sizing: border-box;
				overflow: hidden;
				.scrollbox {
					height: 100%;
				}
				/deep/ .uni-scroll-view-content {
					display: flex;
					flex-wrap: wrap;
				}
				.cell {
					height: 130rpx;
					width: 130rpx;
					background-color: red;
					margin: 7rpx;
				}
			}
		}
	}
</style>
