<template>
	<view class="item-active">
		<view class="title">
			<text>活动名称:</text>
			<text>活动</text>
		</view>
		<view class="info">
			<view class="left">
				<view>
					<text class="item-title">活动时间：</text>
					<text>活动时间: 2020-02-21~2020-02-25</text>
				</view>
				<view>
					<text class="item-title">活动总收入：</text>
					<text>389.24元</text>
				</view>
			</view>
			<view class="right">
				<van-icon name="arrow" />
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
.item-active {
	width: 100%;
	box-sizing: border-box;
	padding: 30rpx;
	display: flex;
	flex-flow: column;
	height: 200rpx;
	.title {
		font-size: 26rpx;
		font-weight: bold;
		flex: 1;
	}
	.info {
		display: flex;
		align-items: flex-start;
		.left {
			color: #080808;
			font-size: 22rpx;
			flex: 1;
			> view {
				padding: 7rpx 0;
			}
		}
	}
}
</style>
