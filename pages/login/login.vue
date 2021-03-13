<template>
	<view class="container">
		<view class="title">
			欢迎注册头像生成器
		</view>
		<!-- 输入手机号 -->
		<view class="phone">
			<text>手机号</text>
			<view class="input-zone">
				<text class="prefix">+86</text>
				<text class="divider">|</text>
				<input class="input" type="number" :value="mobile" @input="err = false" @blur="checkValue"
					placeholder="请输入手机号码" />
				<icon class="icon" color="#323237" type="clear" size="14" @click="clear()" />
			</view>
			<view class="tips" v-if="err">
				输入的手机格式不正确
			</view>
		</view>
		<button type="primary" class="submit" @click="submit">登录</button>
		<image class="image" src="/static/image/wxlogo.png" mode="aspectFit"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mobile: '',
				err: false,
			};
		},
		methods: {
			checkValue(e) {
				const value = e.detail.value.trim()
				this.err = this.validatePhone(value)
			},
			validatePhone(val) {
				if (!val) {
					return true
				}
				const reg = /^1[3-9]\d{9}$/
				return !reg.test(val)
			},
			submit() {
				if (this.err) {
					return
				}
				// 跳转到短信验证码页面
			},
			clear() {
				this.err = false
				this.mobile = ''
			}
		},
	}
</script>

<style lang="less" scoped>
	.container {
		height: 100%;
		width: 100%;
		padding: 50rpx;
		overflow: hidden;
		box-sizing: border-box;

		.title {
			font-size: 44rpx;
			font-weight: bold;
			margin-top: 100rpx;
			margin-bottom: 100rpx;
		}

		.phone {
			display: flex;
			flex-direction: column;
			position: relative;
			margin-bottom: 98rpx;

			.label {
				font-size: 24rpx;
				font-weight: 400;
				color: #323237;
			}

			.input-zone {
				display: flex;
				height: 80rpx;
				align-items: center;
				border-bottom: 1rpx solid #e9e9e9;
				color: #323237;

				.prefix {
					font-size: 24rpx;
				}

				.divider {
					margin: 0 45rpx;
					color: #d5d5d5;
				}

				.input {
					flex: auto;
					color: #323237;
					font-weight: bold;
				}

				.icon {
					margin-left: 30rpx;
				}
			}

			.tips {
				position: absolute;
				bottom: -40rpx;
				left: 0;
				color: red;
				font-size: 24rpx;

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
		}

		.image {
			width: 100%;
			height: 80rpx;
			margin: 200rpx auto 0;

		}
	}
</style>
