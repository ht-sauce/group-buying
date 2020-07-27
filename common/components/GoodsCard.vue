<template>
	<view class="goods-card">
		<view class="goods">
			<view class="goods-img"><van-image width="200rpx" height="200rpx" src="/static/pages/vegetables.jpg" /></view>
			<view class="goods-info">
				<view class="title">大白萝卜</view>
				<view class="text">商品描述文字</view>
				<view class="tags">
					<BecsTag>标签</BecsTag>
					<BecsTag>标签</BecsTag>
					<BecsTag>标签</BecsTag>
				</view>
				<view class="price">
					<view class="money">
						<text class="rmb">¥</text>
						<text class="money-nums">123</text>
						<text class="dw">/斤</text>
					</view>
					<view v-show="stockShow" class="stock">
						<text>库存:</text>
						<text>211</text>
					</view>
					<view v-if="showStepp" class="goods-add-splice"><BecStepp v-model="value" /></view>
				</view>
			</view>
		</view>
		<view v-show='tips' class="tips"><text class="tips-text">还差3人下单，可反2元</text></view>
	</view>
</template>

<script>
export default {
	props: {
		stockShow: Boolean, // 是否展示库存 
		// 是否展示步进
		showStepp: {
			type: Boolean,
			default: true
		}, 
	},
	data() {
		return {
			value: 230,
			tips: false,
		};
	},
	created() {},
	mounted() {},
	methods: {}
};
</script>

<style lang="scss" scoped>
.goods-card {
	width: 100%;
}
.goods {
	display: flex;
}
.goods-info {
	flex: 1;
	box-sizing: border-box;
	padding-left: 10rpx;
	display: flex;
	flex-flow: column;
	.title {
		color: #151515;
		font-weight: bold;
	}
	.text {
		padding: 10rpx;
		flex: 1;
		font-size: 16rpx;
		color: #a2a2a2;
	}
	.price {
		display: flex;
		align-items: flex-end;
		.stock {
			height: 22rpx;
			line-height: 22rpx;
			padding-left: 10rpx;
			font-size: 16rpx;
			color: #B9B9B9;
		}
	}
}

// 价格部分样式拎出来
.money {
	color: #f94067;
	.money-nums {
		font-size: 22rpx;
		padding: 0 6rpx;
	}
	.rmb,
	.dw {
		font-size: 16rpx;
	}
}
// 商品增加减
.goods-add-splice {
	box-sizing: border-box;
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding-right: 20rpx;
	padding-top: 10rpx;
}
// 底部提示信息部分
.tips {
	padding: 10rpx 0 0 10rpx;
	.tips-text {
		color: #ff6120;
		background: #ffebe3;
		font-size: 18rpx;
		padding: 4rpx;
	}
}
</style>
