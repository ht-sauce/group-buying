<template>
	<van-popup z-index="2000" custom-style="border-radius: 7rpx;" :show="show" @close="onClose">
		<view class="active-code">
			<view class="cross">
					<van-icon @click="onClose" name="cross" />
				</view>
				<view class="code-img">
					<image class="code-img-png" src="../../../static/pages/cart.png"></image>
				</view>
				<view class="code-text"><text>输入取货码</text></view>
				<view class="line-input">
					<input class="line" />
					<input class="line" />
					<input class="line" />
					<input class="line" />
					<input class="line" />
					<input class="line" />
					<input class="line" />
					<input class="line" />
				</view>
				<view class="code-check">
					<text>确定</text>
				</view>
		</view>
	</van-popup>
</template>

<script>
export default {
	data() {
		return {};
	},
	props: {
		show: {
			type: Boolean,
			show: false
		}
	},
	methods: {
		onClose() {
			this.$emit('update:show', false)
		}
	}
};
</script>

<style lang="scss" scoped>
.active-code {
	background: #fff;
	width: 600rpx;
	height: 700rpx;
	display: flex;
	flex-flow: column;
	align-items: center;
	padding: 25rpx;
	border-radius: 7rpx;
	.cross {
		width: 100%;
		display: flex;
		justify-content: flex-end;
		color: #BFBFBF;
		font-size: 36rpx;
	}
	.code-img {
		width: 350rpx;
		height: 300rpx;
		.code-img-png {
			width: 100%;
			height: 100%;
		}
	}
	.code-text {
		font-size: 32rpx;
		font-weight: 600;
		margin-top: 50rpx;
	}
	.line-input {
		display: flex;
		margin: 40rpx 0 50rpx 0;
		.line {
			border-bottom: #FF6120 1px solid;
			margin: 0 10rpx;
			text-align: center;
			width: 40rpx;
		}
	}
	.code-check {
		margin-top: 20rpx;
		width: 500rpx;
		height: 80rpx;
		line-height: 80rpx;
		background: #FF6120;
		color: #fff;
		font-size: 36rpx;
		border-radius: 40rpx;
		text-align: center;
	}
}
</style>
