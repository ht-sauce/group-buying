<template>
	<view class="order-header">
		<view class="money-nums">
			<view class="num-li">
				<view class="num">2343</view>
				<view>总订单</view>
			</view>
			<view class="num-li">
				<view class="num">2343</view>
				<view>总金额</view>
			</view>
		</view>
		<view class="info">
			<view class="info-li">
				<view>发货时间</view>
				<view class="info-li-content">2020年5月8日 18:00~19:00</view>
			</view>
			<view class="info-li">
				<view>发货地点</view>
				<view class="info-li-content">云密城A座1楼大厅门口</view>
			</view>
			<view class="info-li">
				<view>活动状态</view>
				<view class="info-li-content">团购结束,代发货</view>
			</view>
			<view class="tips">买家在超过提货时间2小时候仍未取货，订单做已失效处理，订单金额将原路退还80%给买家,可获得20%赔偿金</view>
		</view>
	</view>
</template>

<script>
export default {
	components: {},
	props: {
		order: {
			type: Object,
			default() {
				return {};
			}
		}
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
.order-header {
}
.money-nums {
	background-color: #fff;
	display: flex;
	.num-li {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-flow: column;
		width: 50%;
		height: 160rpx;
		font-size: 26rpx;
		.num {
			font-weight: bold;
			font-size: 36rpx;
			padding-bottom: 10rpx;
		}
	}
}
.info {
	box-sizing: border-box;
	padding: 10rpx 30rpx;
	margin-top: 10rpx;
	background-color: #fff;
	.info-li {
		padding: 15rpx 0;
		font-size: 26rpx;
		width: 100%;
		display: flex;
		align-items: center;
		.info-li-content {
			flex: 1;
			font-weight: bold;
			text-align: right;
		}
	}
	.tips {
		font-size: 20rpx;
		color: #999999;
	}
}
</style>
