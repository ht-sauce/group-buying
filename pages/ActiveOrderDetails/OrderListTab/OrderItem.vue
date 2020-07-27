<template>
	<view class="order-item" @click="onJumpOrderDeatils(order)">
		<view class="title"><view class="group">团购</view></view>
		<view class="nick-type">
			<van-image round width="60rpx" height="60rpx" src="https://img.yzcdn.cn/vant/cat.jpeg" />
			<view class="nick">皮卡丘</view>
			<view class="orders">TEDSD45456452111</view>
			<view class="order-type">{{ orderType[order.type] }}</view>
		</view>
		<view class="goods">
			<template v-if="imgList.length > 1">
				<template v-for="(item, index) in imgList" v-if="index<4">
					<view :key="index" class="goods-li">
						<van-image
						  width="130rpx"
						  height="130rpx"
						  radius="10rpx"
						  src="https://img.yzcdn.cn/vant/cat.jpeg"
						/>
					</view>
				</template>
				<view v-if="imgList.length > 4" class="goods-li">
					<van-icon name="ellipsis" />
				</view>
			</template>
			<template v-else>
				<view class="one-goods">
					<van-image
					  width="130rpx"
					  height="130rpx"
					  radius="10rpx"
					  src="https://img.yzcdn.cn/vant/cat.jpeg"
					/>
					<view class="goods-info">
						<view>精灵宝可梦日月</view>
						<view class="one-goods-money">
							<view class="price">
								<text>¥</text>
								<text>12.78</text>
							</view>
							<view>
								<text style="font-size: 22rpx;">X</text>
								<text>12</text>
							</view>
						</view>
					</view>
				</view>
			</template>
		</view>
		<view class="info">
			<view class="time">2020-03-27 16:59</view>
			<view class="goods-num">
				<text>共</text>
				<text>3</text>
				<text>件商品</text>
			</view>
			<view class="money">
				<text>¥</text>
				<text>12.78</text>
			</view>
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
		return {
			imgList: [1,2,3,4,5],
			orderType: this.$store.state.orderType
		};
	},
	created() {},
	mounted() {},
	methods: {
		onJumpOrderDeatils(e) {
			uni.navigateTo({
				url: `/pages/OrderHandle/OrderHandle?pageType=${e.type}`
			})
		}
	}
};
</script>

<style lang="scss" scoped>
.order-item {
	width: 750rpx;
	background: #fff;
	border-radius: 5rpx;
	margin-bottom: 10rpx;
	box-shadow: $g-shadow;
	padding-bottom: 20rpx;
}
.nick-type,
.goods,
.info {
	width: 100%;
	box-sizing: border-box;
	padding: 0 30rpx;
}
.title {
	.group {
		color: #fff;
		width: 105rpx;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		background: backLiner();
		border-top-left-radius: 5rpx;
		border-bottom-right-radius: 30rpx;
	}
}
.nick-type {
	display: flex;
	align-items: center;
	font-weight: bold;
	padding: 10rpx 30rpx;
	.nick {
		padding: 0 20rpx;
	}
	.orders {
		flex: 1;
		font-size: 24rpx;
	}
	.order-type {
		font-size: 28rpx;
		font-weight: 400;
		color: #FC6E36;
	}
}
.goods {
	display: flex;
	align-items: center;
	padding: 15rpx 30rpx;
	.goods-li {
		width: 130rpx;
		height: 130rpx;
		margin-right: 10rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 70rpx;
		color: #7D7D7D;
	}
	.one-goods {
		display: flex;
		width: 100%;
		height: 130rpx;
		color: #111111;
		font-size: 28rpx;
		.goods-info {
			flex: 1;
			height: 100%;
			box-sizing: border-box;
			padding: 15rpx 15rpx 15rpx 20rpx;
			display: flex;
			flex-flow: column;
			justify-content: space-between;
		}
		.one-goods-money {
			display: flex;
			align-items: center;
			.price {
				flex: 1;
			}
		}
	}
}
.info {
	font-size: 24rpx;
	color: #8C8C8C;
	display: flex;
	align-items: center;
	.time {
		flex: 1;
	}
	.money {
		padding-left: 20rpx;
		color: #FC6E36;
		font-size: 28rpx;
	}
}
</style>
