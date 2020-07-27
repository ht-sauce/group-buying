<template>
	<view class="becs-title">
		<view class="line" :style="{ height: lineHeight }"></view>
		<view class="title">{{ title }}</view>
		<slot>
			<view v-if="rightTitle" @click="onRight" class="right-but">
				<view class="info">{{ rightTitle }}</view>
				<view class="arrow"><van-icon name="arrow" color="#7A7A86" size="30rpx" /></view>
			</view>
		</slot>
	</view>
</template>

<script>
export default {
	props: {
		title: String,
		rightTitle: String,
		lineHeight: String
	},
	data() {
		return {};
	},
	methods: {
		onRight() {
			this.$emit('right');
		}
	}
};
</script>

<style lang="scss" scoped>
.becs-title {
	width: 100%;
	display: flex;
	align-items: center;
	color: #2b2b2b;
	.line {
		width: 12rpx;
		height: 32rpx;
		background: backLiner(to bottom);
		box-shadow: 0 0 4rpx rgba(255, 97, 32, 0.63);
	}
	.title {
		padding-left: 15rpx;
		flex: 1;
		font-size: 30rpx;
		font-weight: bold;
	}
	.right-but {
		display: flex;
		align-items: center;
		font-size: 24rpx;
		.arrow {
			margin-top: 8rpx;
		}
	}
}
</style>
