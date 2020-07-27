<template>
	<view class="item-goods">
		<van-image width="130rpx" height="130rpx" src="https://img.yzcdn.cn/vant/cat.jpeg" />
		<view class="right">
			<view class="title">烤蒜头王八</view>
			<view class="nums-price">
				<view class="num">
					<text>*</text>
					<text>123</text>
				</view>
				<view class="price">
					<text>¥</text>
					<text>123</text>
				</view>
			</view>
		</view>
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
.item-goods {
	width: 100%;
	padding: 5rpx 0;
	display: flex;
	align-items: center;
	height: 130rpx;
	font-size: 28rpx;
	.right {
		width: 100%;
		box-sizing: border-box;
		padding-left: 20rpx;
		display: flex;
		flex-flow: column;
		align-content: space-between;
		height: 130rpx;
		box-sizing: border-box;
		padding: 15rpx 0 15rpx 15rpx;
		.title {
			height: 100%;
			color: #111111;
		}
		.nums-price {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.price {
				color: #FC6B37;
			}
		}
	}
}
</style>
