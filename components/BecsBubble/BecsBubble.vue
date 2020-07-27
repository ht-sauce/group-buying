<template>
	<!-- 气泡框雏形，没有动态位置 -->
	<view class="becs-bubble">
		<slot></slot>
		<view class="bubble-popup" :style="{ zIndex: zIndex }">
			<slot name="content"></slot>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		zIndex: {
			type: Number,
			default: 2000
		},
		show: Boolean,
	},
	data() {
		return {};
	},
	created() {},
	mounted() {},
	methods: {}
};
</script>

<style lang="scss" scoped>
.becs-bubble {
	color: #2c2c2c;
	&:hover {
		> .bubble-popup {
			display: block;
		}
	}
	.bubble-popup {
		display: none;
		position: absolute;
		background: #fff;
		box-shadow: 0 0 4rpx rgba(0, 0, 0, 0.5);
		border-radius: 10rpx;
		right: 30rpx;
		margin-top: 20rpx;
		&::after {
			position: absolute;
			display: inline-block;
			width: 0;
			height: 0px;
			content: '';
			border-style: solid;
			border-width: 15rpx;
			border-color: #fff #fff transparent transparent;
			transform: rotate(-45deg);
			box-shadow: 2px -2px 2px rgba(0, 0, 0, 0.2);
			right: 20rpx;
			top: -14rpx;
		}
	}
}
</style>
