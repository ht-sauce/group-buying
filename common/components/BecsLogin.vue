<!-- 全局登录组件,废弃 -->
<template>
	<van-popup :z-index="3000" :show="show" position="bottom" custom-style="height: 400rpx;">
		<view class="becs-login">
			<view class="logo">
				<van-image round width="80rpx" height="80rpx" src="/static/global/logo.png" />
				<text class="name">拜客社群</text>
				<text class="apply">申请</text>
			</view>
			<view class="info"><text>获取你的昵称\头像\地区及性别头像</text></view>
			<view class="botton">
				<button size="mini" class="no-auth" @click="onClose">取消</button>
				<button size="mini" class="no-auth auth" open-type="getUserInfo" @getuserinfo="getuserinfo">确定</button>
			</view>
		</view>
	</van-popup>
</template>

<script>
import Login from "@/common/utils/login.js"
export default {
	data() {
		return {
		};
	},
	created() {
		// 组件加载之前先获取code值
		uni.login({
			success: code => {
				this.$store.commit('set_data', {code: code.code});
			}
		});
	},
	computed: {
		show() {
			return this.$store.state.login.show;
		}
	},
	methods: {
		onClose() {
			// const login = this.$store.state.login;
			// login.show = false;
			this.$store.commit('set_data', {
				login: {
					show: false
				}
			});
		},
		async getuserinfo(e) {
			const code = await Login.testCode()

			if (!code) return false
			
			const { encryptedData, userInfo, iv, signature } = e.detail
			
			if (userInfo) {
				this.$store.commit('set_data', {
					login: {
						show: false, //是否展示登录弹窗
						userInfo: userInfo, // 登录之后的授权信息
						openid: "daihaitian"
					}
				});
			}
			console.log("弹窗登录流程");
		}
	}
};
</script>

<style lang="scss" scoped>
.becs-login {
	box-sizing: border-box;
	padding: 25rpx;
	.logo {
		display: flex;
		align-items: center;
		height: 80rpx;
		.name,
		.appply {
			display: inline-block;
			font-weight: 600;
		}
		.name {
			font-size: 34rpx;
			margin: 0 30rpx 0 20rpx;
		}
		.apply {
			font-size: 30rpx;
		}
	}
	.info {
		font-size: 34rpx;
		font-weight: 600;
		padding: 20rpx 0;
	}
	.botton {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 30rpx;
		.no-auth,
		.auth {
			width: 230rpx;
			height: 70rpx;
			font-weight: 600;
			background: #f2f2f2;
			line-height: 70rpx;
			text-align: center;
			border: none;
			margin: 0 15rpx;
			font-size: 30rpx;
		}
		.auth {
			background: #06c060;
			color: #fff;
		}
	}
}
</style>
