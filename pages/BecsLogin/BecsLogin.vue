<template>
	<GlobalPage title="拜客社团">
		<view class="becs-login">
			<view class="bg-img"><van-image width="700rpx" height="680rpx" src="/static/pages/login-bg.png" /></view>
			<view class="info"><text>登录后发现更多精彩~</text></view>
			<button class="get-userinfo" open-type="getUserInfo" @getuserinfo="getuserinfo">微信快捷登录</button>
		</view>
	</GlobalPage>
</template>

<script>
import Login from '@/common/utils/login.js'
export default {
	data() {
		return {}
	},
	methods: {
		async getuserinfo(e) {
			console.log(e.detail)
			const code = await Login.testCode()

			if (!code) return false

			const { encryptedData, userInfo, iv, signature } = e.detail

			if (userInfo) {
				this.$store.commit('set_data', {
					login: {
						show: false, //是否展示登录弹窗
						userInfo: userInfo, // 登录之后的授权信息
						openid: 'daihaitian'
					}
				})
				uni.navigateBack({
					delta: 1
				})
			}
			console.log('弹窗登录流程')

			this.login({ code, encryptedData, userInfo, iv, signature })
		},
		async login(options) {
			console.log(this.$store.state.miniProgram)
			const [err, suc] = this.$api.login({
				data: {
					...options
				}
			})
			console.log(err, suc)
		}
	}
}
</script>

<style lang="scss" scoped>
.becs-login {
	display: flex;
	flex-flow: column;
	align-items: center;
	.bg-img {
		margin-top: 120rpx;
	}
	.info {
		margin-top: 25rpx;
		color: #001092;
		font-size: 34rpx;
	}
	.get-userinfo {
		margin-top: 60rpx;
		border: none;
		background: #ff6120;
		font-size: 30rpx;
		height: 80rpx;
		width: 690rpx;
		color: #fff;
		border-radius: 40rpx;
	}
}
</style>
