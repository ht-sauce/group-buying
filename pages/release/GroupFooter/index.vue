<template>
	<view class="group-footer">
		<view class="check">
			<view class="icon" @click="onCheck" :style="{ color: checked ? '#FF6120' : '#c0c0c0' }"><van-icon size="45rpx" name="checked" /></view>
			<text>已阅读并同意</text>
			<text class="line" @click="lookAgreement">拜客社团协议</text>
		</view>
		<view class="footer-button">
			<view class="left">预览</view>
			<view class="right">发布</view>
		</view>
	</view>
</template>

<script>
export default {
	components: {},
	data() {
		return {
			checked: false // 是否同意协议
		}
	},
	methods: {
		onCheck() {
			this.checked = !this.checked;
		},
		// 进入查看用户协议
		lookAgreement() {
			uni.navigateTo({
				url: '/pages/AgreementDetails/AgreementDetails'
			})
		}
	}
};
</script>

<style lang="scss" scoped>
.group-footer {
	margin-top: 60rpx;
	.check {
		width: 100%;
		font-size: 28rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 600;
		.icon {
			color: #c0c0c0;
			margin-right: 10rpx;
			margin-top: 10rpx;
		}
		.line {
			text-decoration: underline;
		}
	}
	.footer-button {
		margin-top: 30rpx;
		display: flex;
		align-items: center;
		color: #fff;
		font-weight: bold;
		> view {
			height: 80rpx;
			text-align: center;
			line-height: 80rpx;
		}
		.left {
			width: 250rpx;
			background: #FF9E20;
			border-top-left-radius: 40rpx;
			border-bottom-left-radius: 40rpx;
		}
		.right {
			flex: 1;
			border-top-right-radius: 40rpx;
			border-bottom-right-radius: 40rpx;
			background: #FF6120;
		}
	}
}
</style>
