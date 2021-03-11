<template>
	<view class="container">
		<!-- <uni-nav-bar title="头像制作" @clickRight="openVip" >
				<image slot="right" style="width: 40rpx;" src="@/static/image/open-vip-icon.png" mode="aspectFit"></image>
		</uni-nav-bar> -->
		<view class="contentbox">
			<scroll-view v-if="headerList.length" class="content" :scroll-y="true">
				<view class="cell" v-for="(item, index) in headerList" :key="index" @click="editHeader(item)">
					<text class="text">
						{{item}}
					</text>
				</view>
			</scroll-view>
			<view v-else class="nodata">
				<text class="text">
					形象空空，点击下方“+”开始创建
				</text>
			</view>
			<cover-view class="modal">123</cover-view>
			<uni-popup ref="popup" type="bottom">
				<view class="pop-container">
					login
				</view>
			</uni-popup>
			
		</view>
	</view>
</template>

<script>
	import {createView} from 'utils/createView.js'
	export default {
		data() {
			return {
				headerList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
					27, 28,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
					27, 28,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
					27, 28,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
					27, 28,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
					27, 28,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
					27, 28,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
					27, 28,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
					27, 28,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
					27, 28,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
					27, 28,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
					27, 28,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
					27, 28,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
					27, 28,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
					27, 28,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
					27, 28,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
					27, 28,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
					27, 28,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
					27, 28,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
					27, 28,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
					27, 28,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
					27, 28,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
					27, 28,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
					27, 28,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
					27, 28,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
					27, 28,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
					27, 28,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
					27, 28,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
					27, 28,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
					27, 28,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
					27, 28,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
					27, 28,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
					27, 28,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
					27, 28,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
					27, 28,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
					27, 28,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
					27, 28,
				],
			}
		},
		methods: {
			// 查询列表
			async queryHeaderList() {

			},
			// 点击头像跳转到详情页面
			editHeader(item) {},
			
			// 打开成为vip界面
			goToBecomeVip() {
				this.$refs.popup.open()
			}
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
		async onPullDownRefresh(e) {
			await this.queryHeaderList()
			uni.stopPullDownRefresh()
		},
		onNavigationBarButtonTap() {
			console.log("点击了自定义按钮");
			// this.$refs.popup.open()
			uni.navigateTo({
				url:'pages/login/login'
			})
		},
		onLoad() {
			// #ifdef APP-PLUS  
			createView('vipIcon', 'open-vip-icon', {
					top: '30px',
					right: '20px',
					height: '19px',
					width: '21px'
				})
			// const view = new plus.nativeObj.View('vipIcon', {
			// 		top: '30px',
			// 		right: '20px',
			// 		height: '19px',
			// 		width: '21px'
			// 	},
			// 	[{
			// 		tag: 'img',
			// 		id: 'img',
			// 		src: 'static/image/open-vip-icon.png',
			// 		position: {
			// 			"right": "0",
			// 			"top": "0",
			// 			"width": "100%",
			// 			"height": "100%"
			// 		}
			// 	}]);
			// view.show()
			// #endif
		}
	}
</script>

<style scoped lang="less">
	.container {
		background-color: #F5F5F5;
		height: 100%;
		padding: 20rpx 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;

		.contentbox {
			background-color: #fff;
			height: 100%;
			padding: 36rpx;
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
			box-sizing: border-box;

			.nodata {
				height: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				font-size: 26rpx;
				font-family: Lantinghei SC;
				font-weight: 600;
				color: #929297;
			}

			.content {
				display: flex;
				height: 100%;

				/deep/ .uni-scroll-view-content {
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;
				}

				.cell {
					flex-shrink: 0;
					width: 206rpx;
					height: 206rpx;
					margin-bottom: 36rpx;
					background-color: red;
				}
			}
				.modal {
					position: fixed;
					width: 100%;
					height: 600rpx;
					background-color: #fff;
					bottom: 0;
					z-index: 999;
				}
		}
	}
</style>
