<template>
	<GlobalPage title="配货单">
		<view class="distribution-list">
			<template v-for="(item, index) in list">
				<view class="goods-li" :key="index">
					<van-image width="200rpx" height="200rpx" src="https://img.yzcdn.cn/vant/cat.jpeg" />
					<view class="info">
						<view class="title">家种白萝卜</view>
						<view class="num-price">
							<view class="price">
								<text>¥</text>
								<text>3.06</text>
								<text>/斤</text>
							</view>
							<view class="stock">
								<text>库存</text>
								<text>23432</text>
							</view>
							<view class="nums">
								<text>X</text>
								<text>6</text>
							</view>
						</view>
					</view>
				</view>
			</template>
		</view>
	</GlobalPage>
</template>

<script>
export default {
	components: {},
	data() {
		return {
			list: [1, 2, 3]
		};
	},
	created() {},
	mounted() {},
	methods: {}
};
</script>

<style lang="scss" scoped>
.distribution-list {
	color: #151515;
}
.goods-li {
	padding: 20rpx;
	box-sizing: border-box;
	display: flex;
	background: #fff;
	.info {
		flex: 1;
		height: 200rpx;
		display: flex;
		flex-flow: column;
		padding-left: 20rpx;
		box-sizing: border-box;
		.title {
			flex: 1;
			font-weight: bold;
		}
		.num-price {
			display: flex;
			align-items: center;
		}
	}
}
.num-price {
	font-size: 22rpx;
	> view {
		padding-right: 20rpx;
	}
	.price {
		color: #F94067;
	}
	.stock {
		color: #B9B9B9;
	}
	.nums {
		margin-left: auto;
	}
}
</style>
