<template>
	<view class="cart-goods">
		<gradients-title>
			<view class="cart-goods-header">
				<image src="/static/pages/icon-shop.png"></image>
				<text>商品信息</text>
			</view>
		</gradients-title>
		<view class="goods-class">
			<view class="left">
				<template v-for="(item, index) in leftList">
					<view class="silder" :class="{'silder-active': item.active }" :key="index">
						<view v-show="item.active" class="line"></view>
						<view class="title">蔬菜类</view>
					</view>
				</template>
			</view>
			<view class="right">
				<template v-for="(item, index) in goodsList">
					<view class="goods-li" :key="index">
						<GoodsCard />
					</view>
				</template>
			</view>
		</view>
		<!-- 单个商品详情 -->
		<GoodsDetails />
	</view>
</template>

<script>
import GradientsTitle from '@/common/components/GradientsTitle.vue'
import GoodsDetails from './GoodsDetails.vue'
import GoodsCard from '@/common/components/GoodsCard.vue'
export default {
	components: {
		GradientsTitle,
		GoodsDetails,
		GoodsCard
	},
	data() {
		return {
			isSelf: false, // 是否本人
			leftList: [{active: false},{active: true},{active: false},{active: false},{active: false},],
			goodsList: [12,3,3,34,5],
		}
	},
	// watch: {
	// 	value(e) {
	// 		console.log(e)
	// 	}
	// },
	created() {
		
	},
	mounted() {
		
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
.cart-goods {
	padding: 30rpx 0 10rpx 0;
	width: 690rpx;
	margin-left: -30rpx;
}
.cart-goods-header {
	display: flex;
	align-items: center;
	> image {
		width: 42rpx;
		height: 42rpx;
		margin-right: 15rpx;
	}
}
.goods-class {
	margin-top: 20rpx;
	width: 100%;
	display: flex;
}
.left {
	width: 200rpx;
	.silder {
		width: 100%;
		height: 90rpx;
		display: flex;
		background: #F8F8F8;
		.line {
			height: 100%;
			width: 5rpx;
			background: backLiner(to bottom);
		}
		.title {
			flex: 1;
			height: 90rpx;
			line-height: 90rpx;
			text-align: center;
		}
	}
	.silder-active {
		width: 200rpx;
		//position: absolute;
		font-weight: bold;
		background: #fff;
		box-shadow: 0rpx 2rpx 4rpx -4rpx rgba(142, 142, 142, 0.3);
	}
}
.right {
	flex: 1;
	.goods-li {
		padding: 10rpx 0;
	}
}
</style>
