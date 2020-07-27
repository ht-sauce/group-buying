<template>
	<view class="cart-end">
		<view @click="show = !show" class="cart">
			<image src="/static/pages/icon-cart.png"></image>
		</view>
		<view class="money">
			<text v-show="!money">未选购商品</text>
			<text v-show="money" style="color: #fff;">
				<text>￥</text>
				<text>{{ money }}</text>
			</text>
		</view>
		<view class="go-settlement" :class="{'go-settlement-active': money}">
			<text>去结算</text>
		</view>
		<!-- 购物商品列表 -->
		<van-popup overlay-style="top: -100rpx;" custom-style="bottom: 100rpx" :show="show" position="bottom" @close="onclose">
			<view class="cart-list">
				<view class="title">
					<view>已选商品</view>
					<view class="clear">
						<image class="trash" src="/static/pages/icon-trash.png"></image>
						<text>清空</text>
					</view>
				</view>
				<template v-for="(item,index) in [1,2,3,4]">
					<view class="goods-li" :key="index">
						<view class="name">大白萝卜</view>
						<view class="price">￥52.88</view>
						<BecStepp v-model="value" />
					</view>
				</template>
			</view>
		</van-popup>
	</view>
</template>

<script>
export default {
	components: {},
	data() {
		return {
			money: 1312,
			show: false,
			value: 1
		}
	},
	methods: {
		onclose(e) {
			this.show = false
		}
	}
};
</script>

<style lang="scss" scoped>
.cart-end {
	background: #585858;
	display: flex;
	align-items: center;
	height: 100rpx;
	width: 750rpx;
	.cart {
		width: 100rpx;
		height: 100rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		> image {
			width: 54rpx;
			height: 54rpx;
		}
	}
	.money {
		box-sizing: border-box;
		padding-left: 20rpx;
		line-height: 100rpx;
		flex: 1;
		color: #B9B9B9;
	}
	.go-settlement {
		width: 200rpx;
		height: 100rpx;
		background: #777777;
		color: #fff;
		text-align: center;
		line-height: 100rpx;
	}
	.go-settlement-active {
		@extend .go-settlement;
		background: #FF6120;
	}
}
.cart-list {
	box-sizing: border-box;
	color: #1A1A1A;
	.title {
		box-sizing: border-box;
		height: 90rpx;
		padding: 0 30rpx;
		font-size: 24rpx;
		background: #E6E6E6;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.clear {
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.trash {
			padding-right: 5rpx;
			margin-top: 4rpx;
			width: 30rpx;
			height: 30rpx;
			margin-right: 4rpx;
		}
	}
	.goods-li {
		box-sizing: border-box;
		height: 90rpx;
		padding: 0 30rpx;
		display: flex;
		align-items: center;
		.name {
			flex: 1;
		}
		.price {
			text-align: left;
			width: 120rpx;
			color: #FF6120;
			padding-right: 20rpx;
		}
	}
}
</style>
