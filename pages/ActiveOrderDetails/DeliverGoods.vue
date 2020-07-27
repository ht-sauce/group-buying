<template>
	<view class="delive-goods">
		<view class="li" @click="onDistributionList">
			<view class="name">配货单</view>
			<van-icon size="30rpx" name="arrow" />
		</view>
		<view class="li" @click="onDeliverGoods">
			<view class="name">扫码发货</view>
			<van-icon size="30rpx" name="arrow" />
		</view>
		<view class="li" @click="onDeliverGoods">
			<view class="name">取货码发货</view>
			<van-icon size="30rpx" name="arrow" />
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
				return {}
			}
		}
	},
	data() {
		return {}
	},
	created() {
		
	},
	mounted() {
		
	},
	methods: {
		// 进入配货单页面
		onDistributionList() {
			uni.navigateTo({
				url: '/pages/DistributionList/DistributionList'
			})
		},
		// 商品发货
		onDeliverGoods() {
			uni.navigateTo({
				url: `/pages/OrderHandle/OrderHandle?pageType=1`
			})
		}
	}
};
</script>

<style lang="scss" scoped>
.delive-goods {
	margin-top: 10rpx;
	background-color: #fff;
	box-sizing: border-box;
	padding: 5rpx 30rpx;
	.li {
		font-size: 26rpx;
		padding: 15rpx 0;
		display: flex;
		align-items: center;
		.name {
			margin-right: auto;
		}
	}
}
</style>
