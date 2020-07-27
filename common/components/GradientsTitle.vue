<template>
	<view class="gradients-title">
		<view class="left-line"></view>
		<view class="title"><slot></slot></view>
		<view class="right-line"></view>
	</view>
</template>

<script>
export default {
	components: {},
	data() {
		return {}
	},
	created() {
		
	},
	mounted() {
		
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
.gradients-title {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 700;
	font-size: 30rpx;
	.title {
		padding: 0 40rpx;
	}
	.left-line {
		width: 100rpx;
		height: 4rpx;
		background: linear-gradient(to left, #ff6120, #eeeeee);
	}
	.right-line {
		@extend .left-line;
		background: linear-gradient(to right, #ff6120, #eeeeee);
	}
}
</style>
