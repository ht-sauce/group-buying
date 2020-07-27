<template>
	<view class="info-goods-order">
		<view class="goods-list">
			<view class="goods-tit">商品清单</view>
			<template v-for="(item, index) in goodsList">
				<ItemGoods :key="index" />
			</template>
		</view>
		<!-- 商品合计信息 -->
		<OrderInfoItem :custom-style="{paddingTop: '20rpx'}" :list="goodsSummary" />
		
		<view class="buyer-info">
			<view class="buy-tit">买家信息</view>
			<view class="buy-info">
				<van-image width="70rpx" height="70rpx" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
				<view class="name">
					<view class="name-nick">皮卡丘</view>
					<view class="wx">微信账号</view>
				</view>
				<van-image width="42rpx" height="42rpx" src="/static/pages/icon-phone.png" />
			</view>
		</view>
		<!-- 底部地址信息 -->
		<view class="address"><OrderInfoItem :list="addressInfo" /></view>
	</view>
</template>

<script>
import OrderInfoItem from './OrderInfoItem.vue';
import ItemGoods from './ItemGoods.vue';
export default {
	components: {
		OrderInfoItem,
		ItemGoods
	},
	data() {
		return {
			goodsSummary: [{ title: '合计', value: '1件商品' }, { title: '实付', value: '￥16.80' }],
			addressInfo: [{ title: '发货时间', value: '2020-5-8 18:00~19:00' }, { title: '发货地点', value: '云密城A座1楼大厅门口' }],
			goodsList: [1,2,3]
		};
	},
	created() {},
	mounted() {},
	methods: {}
};
</script>

<style lang="scss" scoped>
.info-goods-order {
	color: #0c0c0c;
	.goods-list,.buyer-info {
		width: 100%;
		box-sizing: border-box;
		padding: 30rpx;
		background: #fff;
		margin-top: 10rpx;
	}
	.goods-list {
		padding-bottom: 0;
		.goods-tit {
			font-weight: bold;
			padding-bottom: 15rpx;
		}
	}
}
.buyer-info {
	.buy-tit {
		font-weight: bold;
		padding-bottom: 20rpx;
	}
	.buy-info {
		display: flex;
		align-items: center;
		.name {
			padding-left: 20rpx;
			flex: 1;
			.name-nick {
				font-weight: bold;
				font-size: 26rpx;
			}
			.wx {
				font-size: 22rpx;
			}
		}
	}
}
</style>
