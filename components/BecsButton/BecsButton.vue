<template>
	<!-- 超出该button需要100rpx -->
	<view class="becs-button" :style="{zIndex: zIndex}">
		<van-button custom-class="becs-button-vant" :loading="loading" loading-text="加载中..." :form-type="formType" :color="background">
			<slot></slot>
		</van-button>
	</view>
</template>

<script>
export default {
	props: {
		background: {
			type: String,
			default: "#949494"
		},
		loading: Boolean,
		zIndex: {
			type: String,
			default: "auto"
		},
		formType: {
			type: String,
			default: ""
		}
	},
	behaviors: ['uni://form-field-button'],
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped>
.becs-button {
	width: 700rpx;
	position: fixed;
	bottom: 20rpx;
	left: 25rpx;
	/deep/ .becs-button-vant {
		padding: 0;
		width: 700rpx;
		background: #949494;
		color: #fff;
		text-align: center;
		height: 80rpx;
		border-radius: 40rpx;
		line-height: 80rpx;
	}
}
</style>
