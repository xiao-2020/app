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
		</view>
		<uni-popup ref="popup" type="bottom">
			<view class="wrap">
				<view class="sex" @click="setSex('1')">
					<image src="/static/image/mail.png" mode="aspectFit"></image>
					<text>男生</text>
				</view>
				<view class="sex"  @click="setSex('2')">
					<image src="/static/image/femail.png" mode="aspectFit"></image>
					<text>女生</text>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import {
		createView
	} from 'utils/createView.js'
	export default {
		data() {
			return {
				headerList: [],
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
				uni.navigateTo({
					url: '/pages/recharge/recharge'
				})
			},
			midBtnClick(e) {
				// TODO: 先判断是否进行了登陆
				// const userInfo = uni.getStorageSync('userInfo')
				// if (!userInfo) {
				// 	uni.navigateTo({
				// 		url: '/pages/login/login',
				// 		fail(e) {
				// 			console.log(e)
				// 		}
				// 	})
				// }
				// 点击先选择性别
				this.$refs.popup.open()
			},
			setSex(sex) {
				this.$refs.popup.close()
				uni.navigateTo({
					url:'/pages/operate/operate?sex=' + sex
				})
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
		// onNavigationBarButtonTap() {
		// 	console.log("点击了自定义按钮");
		// 	// this.$refs.popup.open()
		// 	uni.navigateTo({
		// 		url:'/pages/login/login'
		// 	})
		// },
		onLoad() {
			uni.onTabBarMidButtonTap(this.midBtnClick.bind(this))
			// #ifdef APP-PLUS  
			createView('vipIcon', 'open-vip-icon', {
				top: '30px',
				right: '20px',
				height: '19px',
				width: '21px'
			})
			// #endif
		},
		onShow() {
			// #ifdef APP-PLUS
			setTimeout(() => {
				const view = plus.nativeObj.View.getViewById('vipIcon')
				view?.show()
			}, 300)
			// #endif
		},
		onHide() {
			// #ifdef APP-PLUS
			const view = plus.nativeObj.View.getViewById('vipIcon')
			view?.hide()
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
		.wrap {
			width: 100%;
			height: 500rpx;
			display: flex;
			align-items: center;
			justify-content: space-around;
			background-color: #fff;
			border-radius: 20rpx 20rpx 0 0 ;
			/* #ifndef APP-PLUS */
			padding-bottom: 100rpx;
			box-sizing: border-box;
			/* #endif */
			.sex {
				width: 90rpx;
				font-size: 26rpx;
				font-weight: 600;
				color: #929297;
				display: flex;
				align-items: center;
				flex-direction: column;
				image {
					width: 100%;
					height: 90rpx;
					margin-bottom: 30rpx;
				}
			}
		}
	}
</style>
